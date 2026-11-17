// --- TripConference Application Controller ---
// Raw conference dataset & customBenefits are loaded from conferences-data.js.
// Pure date/filter/config helpers are loaded from app_logic_helper.js.
const { FIELD_CONFIG, ALLOWED_SORT_VALUES, getFieldMeta, escapeHtml, parseConferenceDate, getConferenceTimeStatus, isWithinYearWindow, getDeadlineDDay, getApproachingDeadlineConferences, getFallbackApproachingDeadlines } = window.app_logic_helper;
const rawConferencesData = window.rawConferencesData || [];
const customBenefits = window.customBenefits || {};

// --- Map Raw Data to Structured Objects ---
const conferences = rawConferencesData.map((conf, idx) => {
    const [id, name, fullName, field, cqi, gsai, location, lat, lon, date, organizer, isTopTier, url, deadline] = conf;
    
    // Seeded pseudo-random generator
    let seed = idx;
    const pseudoRandom = (offset) => {
        const x = Math.sin(seed + offset) * 10000;
        return x - Math.floor(x);
    };

    const cqiSub = {
        prestige: Math.min(100, Math.max(50, cqi + Math.round(pseudoRandom(1) * 6 - 3))),
        selectivity: Math.min(100, Math.max(50, cqi + Math.round(pseudoRandom(2) * 6 - 3))),
        industry: Math.min(100, Math.max(50, cqi + Math.round(pseudoRandom(3) * 6 - 3))),
        history: Math.min(100, Math.max(50, cqi + Math.round(pseudoRandom(4) * 6 - 3)))
    };
    
    const gsaiSub = {
        location: Math.min(100, Math.max(50, gsai + Math.round(pseudoRandom(5) * 6 - 3))),
        support: Math.min(100, Math.max(50, gsai + Math.round(pseudoRandom(6) * 6 - 3))),
        networking: Math.min(100, Math.max(50, gsai + Math.round(pseudoRandom(7) * 6 - 3)))
    };
    
    // Match base name for custom benefits check
    const baseName = name.split(" ")[0];
    const benefits = customBenefits[baseName.toLowerCase()] || {
        location: `${location} offers a vibrant local scene and great sightseeing opportunities for attendees.`,
        grants: `Travel support and student discounts are available through ${organizer} and local sponsors.`,
        networking: `Enables direct engagement with global researchers and industry leaders in the field.`
    };
    
    return {
        id,
        name,
        fullName,
        field,
        cqi,
        cqiSub,
        gsai,
        gsaiSub,
        location,
        lat,
        lon,
        date,
        organizer,
        benefits,
        url,
        isTopTier,
        deadline
    };
});

const conferenceById = new Map(conferences.map(conf => [conf.id, conf]));

// --- Map Initialization ---
let map;
let markersLayer = L.layerGroup();
let activeMarker = null;
let markersByLocation = new Map();
let highlightedMarkers = [];

// Customized Marker Icons based on fields (60% smaller: 18px vs 30px)
function getMarkerIcon(field, isActive = false) {
    const meta = getFieldMeta(field);
    const color = meta.color;
    const shadowColor = isActive ? color : 'rgba(0,0,0,0.4)';
    const scale = isActive ? 'scale(1.4)' : 'scale(1.0)';

    const html = `
        <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            background-color: rgba(17, 24, 39, 0.9);
            border: 1.5px solid ${color};
            border-radius: 50%;
            box-shadow: 0 0 6px ${shadowColor};
            transform: ${scale};
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            color: ${color};
            font-size: 8px;
            font-weight: 700;
        ">
            <i class="fa-solid ${meta.icon}"></i>
        </div>
    `;

    return L.divIcon({
        html: html,
        className: 'custom-map-marker',
        iconSize: [18, 18],
        iconAnchor: [9, 9]
    });
}

// Grouped Marker Icon showing number of conferences (18px)
function getGroupedMarkerIcon(count, isActive = false) {
    const color = '#6366f1'; // Indigo for multi-field groups
    const shadowColor = isActive ? color : 'rgba(0,0,0,0.4)';
    const scale = isActive ? 'scale(1.4)' : 'scale(1.0)';
    
    const html = `
        <div style="
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 18px;
            height: 18px;
            background-color: rgba(17, 24, 39, 0.95);
            border: 1.5px solid ${color};
            border-radius: 50%;
            box-shadow: 0 0 6px ${shadowColor};
            transform: ${scale};
            transition: all 0.25s ease;
            color: #a5b4fc;
            font-size: 8px;
            font-weight: 700;
        ">
            <i class="fa-solid fa-layer-group"></i>
            <span style="
                position: absolute;
                top: -5px;
                right: -5px;
                background-color: #ef4444;
                color: white;
                font-size: 7px;
                font-weight: 800;
                border-radius: 50%;
                width: 11px;
                height: 11px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 0.5px solid rgba(255,255,255,0.3);
                line-height: 1;
            ">${count}</span>
        </div>
    `;

    return L.divIcon({
        html: html,
        className: 'custom-map-marker',
        iconSize: [18, 18],
        iconAnchor: [9, 9]
    });
}

const INITIAL_MAP_CENTER = [25, 10];
const INITIAL_MAP_ZOOM = 2.5;
const CARTO_API_KEY = 'cb1_4fx7_1_90b4020701de4739f2fa31c5';

function initMap() {
    // Tight vertical bounds: cut Antarctica completely (south limit -50), cap north at 75
    // Huge horizontal bounds allow endless left-right panning
    const southWest = L.latLng(-50, -1e9);
    const northEast = L.latLng(75, 1e9);
    const bounds = L.latLngBounds(southWest, northEast);

    // minZoom 1.5 with fractional zoom support enabled (zoomSnap/zoomDelta: 0.5)
    map = L.map('map', {
        zoomControl: false,
        attributionControl: true,
        minZoom: 1.5,
        zoomSnap: 0.5,
        zoomDelta: 0.5,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        worldCopyJump: true
    }).setView(INITIAL_MAP_CENTER, INITIAL_MAP_ZOOM);

    // Dark raster tiles from CARTO with registered API key and attribution
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png?key=${CARTO_API_KEY}`, {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>'
    }).addTo(map);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    markersLayer.addTo(map);
}

// Helper: add a Leaflet marker to markersLayer at 3 longitudes (original, +360, -360)
// so markers always appear on wrapped copies of the world map
function addMarkerWithWrapping(lat, lon, markerFactory) {
    const offsets = [0, 360, -360];
    const markers = [];
    offsets.forEach(offset => {
        const m = markerFactory(lat, lon + offset);
        markersLayer.addLayer(m);
        markers.push(m);
    });
    return markers;
}

const ALL_FIELDS = Object.keys(FIELD_CONFIG);
const DEFAULT_FIELDS = ['semiconductor', 'electronics'];

// Load saved fields from LocalStorage or default to initial 2 fields
const loadSavedFields = () => {
    try {
        const saved = localStorage.getItem('tripconference_selected_fields');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (Array.isArray(parsed)) {
                const valid = parsed.filter(f => ALL_FIELDS.includes(f));
                if (valid.length > 0) return valid;
            }
        }
    } catch (e) {
        console.warn('Failed to load saved fields:', e);
    }
    return [...DEFAULT_FIELDS];
};

// --- App State ---
const state = {
    searchQuery: '',
    selectedFields: loadSavedFields(),
    minCQI: 60,
    minGSAI: 50,
    sortBy: 'date',
    showPast: false
};

// --- URL Parameter Engine for Deep-Linking & SEO ---
let pendingConferenceIdFromUrl = null;

function parseUrlParameters() {
    try {
        const params = new URLSearchParams(window.location.search);
        
        // 1. Search Query (?q=...)
        const qParam = params.get('q');
        if (qParam) {
            state.searchQuery = qParam.toLowerCase().trim();
            if (searchInput) searchInput.value = qParam;
            if (searchClearBtn) searchClearBtn.style.display = 'flex';
        }

        // 2. Discipline Field (?field=...)
        const fieldParam = params.get('field');
        if (fieldParam) {
            const requested = fieldParam.split(',').map(f => f.trim().toLowerCase()).filter(f => ALL_FIELDS.includes(f));
            if (requested.length > 0) {
                state.selectedFields = requested;
            }
        }

        // 3. Timeline / Past Filter (?past=1 or ?timeline=all)
        const pastParam = params.get('past') || params.get('timeline');
        if (pastParam === '1' || pastParam === 'true' || pastParam === 'all') {
            state.showPast = true;
        }

        // 4. Sort Parameter (?sort=...)
        const sortParam = params.get('sort');
        if (sortParam && ALLOWED_SORT_VALUES.includes(sortParam)) {
            state.sortBy = sortParam;
            if (sortSelect) sortSelect.value = sortParam;
        } else if (sortSelect) {
            sortSelect.value = state.sortBy;
        }

        // 5. Conference ID (?id=...)
        const idParam = params.get('id');
        if (idParam) {
            pendingConferenceIdFromUrl = idParam.trim();
        }
    } catch (e) {
        console.warn('URL parsing error:', e);
    }
}

function updateUrlParams(explicitConferenceId = undefined) {
    try {
        const params = new URLSearchParams();
        if (state.searchQuery) {
            params.set('q', state.searchQuery);
        }
        
        // Check if selected fields differ from default 2 fields
        const isDefaultFields = state.selectedFields.length === DEFAULT_FIELDS.length &&
            DEFAULT_FIELDS.every(f => state.selectedFields.includes(f));
        if (!isDefaultFields && state.selectedFields.length > 0 && state.selectedFields.length < ALL_FIELDS.length) {
            params.set('field', state.selectedFields.join(','));
        }

        if (state.showPast) {
            params.set('past', '1');
        }

        if (state.sortBy && state.sortBy !== 'date') {
            params.set('sort', state.sortBy);
        }

        if (explicitConferenceId !== undefined) {
            if (explicitConferenceId) {
                params.set('id', explicitConferenceId);
            }
        } else {
            const activeCard = document.querySelector('.conference-card.active');
            if (activeCard && detailModal && detailModal.classList.contains('show')) {
                params.set('id', activeCard.dataset.id);
            }
        }

        const newQuery = params.toString();
        const newUrl = newQuery ? `${window.location.pathname}?${newQuery}` : window.location.pathname;
        window.history.replaceState({}, '', newUrl);
    } catch (e) {}
}

// --- DOM References ---
const searchInput = document.getElementById('search-input');
const cqiSlider = document.getElementById('cqi-slider');
const cqiValue = document.getElementById('cqi-value');
const gsaiSlider = document.getElementById('gsai-slider');
const gsaiValue = document.getElementById('gsai-value');
const sortSelect = document.getElementById('sort-select');
const conferenceList = document.getElementById('conference-list');

const totalCountEl = document.getElementById('stat-total-count');
const topCountEl = document.getElementById('stat-top-count');

// Modal Elements
const detailModal = document.getElementById('detail-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalHeaderBg = document.getElementById('modal-header-bg');
const modalBadgeField = document.getElementById('modal-badge-field');
const modalConfName = document.getElementById('modal-conf-name');
const modalConfFullname = document.getElementById('modal-conf-fullname');
const modalInfoDate = document.getElementById('modal-info-date');
const modalInfoLocation = document.getElementById('modal-info-location');
const modalInfoOrganizer = document.getElementById('modal-info-organizer');
const modalCqiScore = document.getElementById('modal-cqi-score');
const modalGsaiScore = document.getElementById('modal-gsai-score');
const modalCqiMetrics = document.getElementById('modal-cqi-metrics');
const modalGsaiMetrics = document.getElementById('modal-gsai-metrics');
const modalBenefitLocation = document.getElementById('modal-benefit-location');
const modalBenefitGrants = document.getElementById('modal-benefit-grants');
const modalBenefitNetworking = document.getElementById('modal-benefit-networking');
const modalWebsiteLink = document.getElementById('modal-website-link');

// Pure date/timeline helpers are delegated directly to window.app_logic_helper (Single Source of Truth).

const LAST_DB_UPDATE_YEAR = 2026;
const LAST_DB_UPDATE_QUARTER = 3;

function initUpdateStatusBadge() {
    // Dynamically sync the last updated badge text from constants (Single Source of Truth)
    const lastUpdatedBadgeEl = document.getElementById('last-updated-badge');
    if (lastUpdatedBadgeEl) {
        lastUpdatedBadgeEl.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Updated: ${LAST_DB_UPDATE_YEAR}.${LAST_DB_UPDATE_QUARTER}Q`;
    }

    const badgeEl = document.getElementById('update-status-badge');
    if (!badgeEl) return;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentQuarter = Math.floor((currentMonth - 1) / 3) + 1;

    const currentAbsoluteQ = currentYear * 4 + (currentQuarter - 1);
    const lastUpdateAbsoluteQ = LAST_DB_UPDATE_YEAR * 4 + (LAST_DB_UPDATE_QUARTER - 1);

    if (currentAbsoluteQ <= lastUpdateAbsoluteQ) {
        badgeEl.className = 'update-status-badge status-ok';
        badgeEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Up to Date';
        badgeEl.title = 'Database is up to date for the current quarter.';
    } else {
        badgeEl.className = 'update-status-badge status-warning';
        badgeEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Update Needed';
        badgeEl.title = 'Quarterly update recommended for the current season.';
    }
}

// Lightweight debounce utility to ensure smooth typing and slider dragging
function debounce(fn, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
    };
}

function getFilteredConferences() {
    const query = state.searchQuery.toLowerCase();
    return conferences.filter(conf => {
        // Search text filter across name, fullName, location, organizer, and field
        const matchSearch = !query ||
            conf.name.toLowerCase().includes(query) ||
            conf.fullName.toLowerCase().includes(query) ||
            conf.location.toLowerCase().includes(query) ||
            conf.organizer.toLowerCase().includes(query) ||
            conf.field.toLowerCase().includes(query);
        
        // Field filter
        const matchField = state.selectedFields.includes(conf.field);
        
        // CQI score filter
        const matchCQI = conf.cqi >= state.minCQI;
        
        // GSAI score filter
        const matchGSAI = conf.gsai >= state.minGSAI;

        // Date window filter (-1 year to +1 year from today)
        const matchDateWindow = isWithinYearWindow(conf.date);
        if (!matchDateWindow) return false;

        // Timeline filter: By default (!state.showPast), only upcoming/future/current conferences are shown
        if (!state.showPast) {
            const timeStatus = getConferenceTimeStatus(conf.date);
            if (timeStatus === 'past') return false;
        }

        return matchSearch && matchField && matchCQI && matchGSAI;
    }).sort((a, b) => {
        if (state.sortBy === 'date') {
            const dateDiff = a.date.localeCompare(b.date);
            if (dateDiff !== 0) return dateDiff;
            return b.cqi - a.cqi; // Higher CQI first if same date
        }
        if (state.sortBy === 'deadline') {
            const deadA = a.deadline || '9999.99.99';
            const deadB = b.deadline || '9999.99.99';
            const diff = deadA.localeCompare(deadB);
            if (diff !== 0) return diff;
            return a.date.localeCompare(b.date);
        }
        if (state.sortBy === 'cqi') return b.cqi - a.cqi;
        if (state.sortBy === 'gsai') return b.gsai - a.gsai;
        if (state.sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
    });
}

function updateStats(filteredData) {
    totalCountEl.textContent = filteredData.length;
    
    // Count how many are TopTier (A* equivalent)
    const topCount = filteredData.filter(conf => conf.isTopTier).length;
    topCountEl.textContent = topCount;

    const statTotalLabel = document.getElementById('stat-total-label');
    if (statTotalLabel) {
        statTotalLabel.textContent = state.showPast ? 'All Events' : 'Upcoming';
    }

    const feedbackEl = document.getElementById('search-results-feedback');
    if (feedbackEl) {
        const pastCount = filteredData.filter(c => getConferenceTimeStatus(c.date) === 'past').length;
        const upcomingCount = filteredData.length - pastCount;
        if (state.showPast) {
            feedbackEl.innerHTML = `<i class="fa-solid fa-filter"></i> Showing <strong>${upcomingCount}</strong> upcoming + <strong>${pastCount}</strong> past conferences (${filteredData.length} total)`;
        } else {
            feedbackEl.innerHTML = `<i class="fa-solid fa-filter"></i> Showing <strong>${upcomingCount}</strong> upcoming conferences`;
        }
    }
}

function makeInteractiveCardAccessible(el, label, onActivate) {
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('aria-label', label);
    el.addEventListener('click', (e) => {
        e.stopPropagation();
        onActivate();
    });
    el.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            e.stopPropagation();
            onActivate();
        }
    });
}

function renderApproachingDeadlines(filteredData) {
    const deadlinesContainer = document.getElementById('deadlines-container');
    const badgeCountEl = document.getElementById('deadlines-badge-count');
    if (!deadlinesContainer) return;

    deadlinesContainer.innerHTML = '';

    // Prioritize upcoming deadlines from currently filtered conferences
    let approaching = getApproachingDeadlineConferences(filteredData, 5);

    // If active filteredData has no upcoming deadlines (e.g. searching a past window),
    // relax timeline only while still honoring selectedFields, minCQI, minGSAI, and searchQuery
    if (approaching.length === 0) {
        approaching = getFallbackApproachingDeadlines(conferences, state, 5);
    }

    if (badgeCountEl) {
        badgeCountEl.textContent = approaching.length > 0 ? `${approaching.length} Active` : '0 Active';
    }

    if (approaching.length === 0) {
        deadlinesContainer.innerHTML = `
            <div style="font-size: 0.72rem; color: var(--text-secondary); padding: 0.4rem 0.2rem; text-align: center;">
                No upcoming deadlines in current selection.
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();

    approaching.forEach(conf => {
        const item = document.createElement('div');
        item.className = 'deadline-item-card';
        item.dataset.id = conf.id;

        const dDay = conf.dDayInfo;
        const dDayClass = dDay.isUrgent ? 'urgent' : 'upcoming';
        const fieldMeta = getFieldMeta(conf.field);
        const safeName = escapeHtml(conf.name);
        const safeCity = escapeHtml(conf.location.split(',')[0]);
        const safeDeadline = escapeHtml(conf.deadline);

        item.innerHTML = `
            <div class="deadline-item-left">
                <span class="dday-badge ${dDayClass}">${escapeHtml(dDay.label)}</span>
                <div class="deadline-conf-info">
                    <span class="deadline-conf-name" title="${safeName}">${safeName}</span>
                    <span class="deadline-conf-field"><i class="fa-solid ${fieldMeta.icon}"></i> ${safeCity}</span>
                </div>
            </div>
            <div class="deadline-item-right">
                <span class="deadline-date-text">${safeDeadline}</span>
            </div>
        `;

        makeInteractiveCardAccessible(item, `${conf.name}, deadline ${conf.deadline} (${dDay.label})`, () => {
            selectConference(conf.id);
        });

        fragment.appendChild(item);
    });

    deadlinesContainer.appendChild(fragment);
}

function renderList(filteredData) {
    conferenceList.innerHTML = '';
    
    if (filteredData.length === 0) {
        conferenceList.innerHTML = `
            <div class="loading-placeholder">
                <i class="fa-solid fa-face-frown" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                No conferences match your search criteria.
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();

    filteredData.forEach(conf => {
        const card = document.createElement('div');
        const timeStatus = getConferenceTimeStatus(conf.date);
        const isPast = timeStatus === 'past';
        const isCurrent = timeStatus === 'current';

        card.className = `conference-card ${conf.field}-card ${isPast ? 'card-past' : ''}`;
        card.dataset.id = conf.id;
        
        const fieldNameEn = getFieldMeta(conf.field).name;

        let timeBadgeHtml = '';
        if (isPast) {
            timeBadgeHtml = '<span class="badge-tag badge-status-past"><i class="fa-solid fa-clock-rotate-left"></i> Concluded</span>';
        } else if (isCurrent) {
            timeBadgeHtml = '<span class="badge-tag badge-status-current"><i class="fa-solid fa-bolt"></i> This Month</span>';
        } else {
            timeBadgeHtml = '<span class="badge-tag badge-status-upcoming"><i class="fa-solid fa-calendar-check"></i> Upcoming</span>';
        }

        const dDay = conf.deadline ? getDeadlineDDay(conf.deadline) : null;
        let deadlineHtml = '';
        if (dDay) {
            const dDayClass = dDay.isUrgent ? 'urgent' : (dDay.isUpcoming ? 'upcoming' : 'closed');
            deadlineHtml = `
                <div class="card-deadline-row">
                    <span class="deadline-label"><i class="fa-solid fa-hourglass-half"></i> Deadline: <strong>${escapeHtml(conf.deadline)}</strong></span>
                    <span class="dday-badge ${dDayClass}">${escapeHtml(dDay.label)}</span>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="card-header">
                <div class="card-header-top">
                    <h3>${escapeHtml(conf.name)}</h3>
                    <div class="card-date ${isPast ? 'date-past' : 'date-upcoming'}">${escapeHtml(conf.date)}</div>
                </div>
                <div class="card-badges">
                    <span class="badge-tag badge-${escapeHtml(conf.field)}">${escapeHtml(fieldNameEn)}</span>
                    ${conf.isTopTier ? '<span class="badge-tag badge-toptier">A*</span>' : ''}
                    ${timeBadgeHtml}
                </div>
            </div>
            <div class="card-meta">
                <div class="meta-item"><i class="fa-solid fa-location-dot"></i> ${escapeHtml(conf.location)}</div>
                <div class="meta-item"><i class="fa-solid fa-building-columns"></i> ${escapeHtml(conf.organizer)}</div>
            </div>
            ${deadlineHtml}
            <div class="card-scores">
                <div class="score-badge cqi-badge">
                    <span class="score-label">Academic (CQI)</span>
                    <span class="score-num">${conf.cqi}</span>
                </div>
                <div class="score-badge gsai-badge">
                    <span class="score-label">Student (GSAI)</span>
                    <span class="score-num">${conf.gsai}</span>
                </div>
            </div>
        `;

        makeInteractiveCardAccessible(card, `${conf.name}, ${conf.location}, ${conf.date}`, () => {
            selectConference(conf.id);
        });

        fragment.appendChild(card);
    });

    conferenceList.appendChild(fragment);
}

function createSinglePopupElement(firstConf) {
    const timeStatus = getConferenceTimeStatus(firstConf.date);
    const timeBadgeHtml = timeStatus === 'past'
        ? '<span class="popup-time-badge status-past"><i class="fa-solid fa-clock-rotate-left"></i> Concluded</span>'
        : (timeStatus === 'current'
            ? '<span class="popup-time-badge status-current"><i class="fa-solid fa-bolt"></i> This Month</span>'
            : '<span class="popup-time-badge status-upcoming">Upcoming</span>');

    const wrapper = document.createElement('div');
    wrapper.className = 'map-popup-card';
    wrapper.innerHTML = `
        <h4>${escapeHtml(firstConf.name)} ${timeBadgeHtml}</h4>
        <p><i class="fa-solid fa-location-dot"></i> ${escapeHtml(firstConf.location)} &bull; <i class="fa-solid fa-calendar"></i> ${escapeHtml(firstConf.date)}</p>
        <div class="popup-score-row">
            <span style="background: rgba(244,63,94,0.1); color: #f43f5e; border: 1px solid rgba(244,63,94,0.3)">CQI: ${firstConf.cqi}</span>
            <span style="background: rgba(14,165,233,0.1); color: #0ea5e9; border: 1px solid rgba(14,165,233,0.3)">GSAI: ${firstConf.gsai}</span>
        </div>
        <button type="button" class="popup-detail-btn">
            <i class="fa-solid fa-circle-info"></i> View Details
        </button>
    `;

    const btn = wrapper.querySelector('.popup-detail-btn');
    if (btn) {
        btn.addEventListener('click', () => selectConference(firstConf.id));
    }
    return wrapper;
}

function createGroupPopupElement(city, confList) {
    const wrapper = document.createElement('div');
    wrapper.className = 'map-popup-card';
    wrapper.innerHTML = `
        <h4 style="margin-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-size: 0.85rem; font-weight: 700;">
            ${escapeHtml(city)} (${confList.length} Conferences)
        </h4>
        <div class="popup-group-list" style="max-height: 150px; overflow-y: auto; display: flex; flex-direction: column; gap: 4px; padding-right: 4px;"></div>
    `;

    const listEl = wrapper.querySelector('.popup-group-list');
    confList.forEach(c => {
        const cStatus = getConferenceTimeStatus(c.date);
        const cBadge = cStatus === 'past' ? '<span class="popup-time-badge status-past">Ended</span>' : '';
        const fieldColor = getFieldMeta(c.field).color;

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'popup-list-item';
        btn.style.cssText = `
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 4px 6px;
            background: rgba(255,255,255,0.03);
            border-radius: 4px;
            border-left: 3px solid ${fieldColor};
            font-size: 0.75rem;
        `;
        btn.innerHTML = `
            <span style="font-weight: 600;">${escapeHtml(c.name)} ${cBadge}</span>
            <span style="font-size: 0.65rem; color: #f43f5e; font-weight: 700;">CQI: ${c.cqi}</span>
        `;
        btn.addEventListener('click', () => selectConference(c.id));
        listEl.appendChild(btn);
    });

    return wrapper;
}

function registerLocationMarkers(location, markers) {
    markersByLocation.set(location, markers);
}

function renderMapMarkers(filteredData) {
    markersLayer.clearLayers();
    markersByLocation.clear();
    highlightedMarkers = [];
    activeMarker = null;
    
    // Group filtered conferences by city location
    const groups = {};
    filteredData.forEach(conf => {
        if (!groups[conf.location]) {
            groups[conf.location] = [];
        }
        groups[conf.location].push(conf);
    });

    Object.entries(groups).forEach(([city, confList]) => {
        const firstConf = confList[0];

        if (confList.length === 1) {
            // Single conference — create at 3 longitude offsets for wrapping
            const markers = addMarkerWithWrapping(firstConf.lat, firstConf.lon, (lat, lon) => {
                const marker = L.marker([lat, lon], {
                    icon: getMarkerIcon(firstConf.field, false)
                });
                marker.conferenceId = firstConf.id;
                marker.field = firstConf.field;
                marker.isGroup = false;
                marker.location = firstConf.location;

                marker.bindPopup(createSinglePopupElement(firstConf), {
                    closeButton: false,
                    offset: L.point(0, -5)
                });

                marker.on('click', function () {
                    this.openPopup();
                });
                marker.on('mouseover', function () {
                    this.openPopup();
                });

                return marker;
            });
            registerLocationMarkers(firstConf.location, markers);
        } else {
            // Multiple conferences in this city — grouped marker at 3 offsets
            const markers = addMarkerWithWrapping(firstConf.lat, firstConf.lon, (lat, lon) => {
                const marker = L.marker([lat, lon], {
                    icon: getGroupedMarkerIcon(confList.length, false)
                });
                marker.conferenceIds = confList.map(c => c.id);
                marker.isGroup = true;
                marker.location = city;

                marker.bindPopup(createGroupPopupElement(city, confList), {
                    closeButton: false,
                    offset: L.point(0, -5)
                });

                marker.on('click', function () {
                    this.openPopup();
                });
                marker.on('mouseover', function () {
                    this.openPopup();
                });

                return marker;
            });
            registerLocationMarkers(city, markers);
        }
    });
}

// Expose globally for compatibility
window.selectConference = selectConference;

function setMarkerHighlight(marker, isActive) {
    if (marker.isGroup) {
        marker.setIcon(getGroupedMarkerIcon(marker.conferenceIds.length, isActive));
    } else {
        marker.setIcon(getMarkerIcon(marker.field, isActive));
    }
}

function selectConference(id) {
    if (map) {
        map.closePopup();
    }
    const conf = conferenceById.get(id);
    if (!conf) return;

    // Highlight active card & auto-scroll into view
    document.querySelectorAll('.conference-card').forEach(card => {
        if (card.dataset.id === id) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            card.classList.remove('active');
        }
    });

    // Also highlight matching deadline card in Approaching Deadlines widget
    document.querySelectorAll('.deadline-item-card').forEach(item => {
        if (item.dataset.id === id) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Reset previously highlighted markers only (O(1) instead of redrawing all markers)
    highlightedMarkers.forEach(marker => setMarkerHighlight(marker, false));
    highlightedMarkers = [];

    // Highlight wrapped copies at target location & pan to nearest copy
    let nearestMarker = null;
    let nearestDist = Infinity;
    const mapCenter = map ? map.getCenter() : { lng: 0 };
    const targetMarkers = markersByLocation.get(conf.location) || [];

    targetMarkers.forEach(marker => {
        setMarkerHighlight(marker, true);
        highlightedMarkers.push(marker);
        activeMarker = marker;

        const mLng = marker.getLatLng().lng;
        const dist = Math.abs(mLng - mapCenter.lng);
        if (dist < nearestDist) {
            nearestDist = dist;
            nearestMarker = marker;
        }
    });

    // Pan to the nearest wrapped copy
    if (nearestMarker && map) {
        map.setView([nearestMarker.getLatLng().lat, nearestMarker.getLatLng().lng], 5, {
            animate: true,
            duration: 0.5
        });
    }

    // Populate Modal Content using FIELD_CONFIG
    const fieldMeta = getFieldMeta(conf.field);
    const fieldColor = fieldMeta.cssVar;
    const fieldBgGrad = `linear-gradient(135deg, rgba(${fieldMeta.rgb}, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
    const fieldNameEn = fieldMeta.name;
    modalBadgeField.style.backgroundColor = `rgba(255,255,255,0.08)`;
    modalBadgeField.style.color = fieldColor;
    modalBadgeField.style.border = `1px solid ${fieldColor}`;

    modalConfName.textContent = conf.name;
    modalConfFullname.textContent = conf.fullName;
    modalInfoDate.textContent = conf.date;

    const modalInfoDeadline = document.getElementById('modal-info-deadline');
    if (modalInfoDeadline) {
        const dDay = conf.deadline ? getDeadlineDDay(conf.deadline) : null;
        if (dDay) {
            const dDayClass = dDay.isUrgent ? 'urgent' : (dDay.isUpcoming ? 'upcoming' : 'closed');
            modalInfoDeadline.innerHTML = `${conf.deadline} <span class="dday-pill-inline ${dDayClass}">${dDay.label}</span>`;
        } else {
            modalInfoDeadline.textContent = conf.deadline || 'TBD';
        }
    }

    modalInfoLocation.textContent = conf.location;
    modalInfoOrganizer.textContent = conf.organizer;
    modalCqiScore.textContent = conf.cqi;
    modalGsaiScore.textContent = conf.gsai;

    // Render CQI Sub-Metrics
    modalCqiMetrics.innerHTML = `
        ${renderMetricRow("Academic Prestige", conf.cqiSub.prestige)}
        ${renderMetricRow("Selectivity & Rigor", conf.cqiSub.selectivity)}
        ${renderMetricRow("Industry Impact", conf.cqiSub.industry)}
        ${renderMetricRow("Historical Authority", conf.cqiSub.history)}
    `;

    // Render GSAI Sub-Metrics
    modalGsaiMetrics.innerHTML = `
        ${renderMetricRow("Location Appeal", conf.gsaiSub.location)}
        ${renderMetricRow("Student Financial Support", conf.gsaiSub.support)}
        ${renderMetricRow("Networking Opportunities", conf.gsaiSub.networking)}
    `;

    modalBenefitLocation.textContent = conf.benefits.location;
    modalBenefitGrants.textContent = conf.benefits.grants;
    modalBenefitNetworking.textContent = conf.benefits.networking;
    
    modalWebsiteLink.href = conf.url;

    // Render Modal Time Status Banner
    const timeBannerEl = document.getElementById('modal-time-banner');
    if (timeBannerEl) {
        const timeStatus = getConferenceTimeStatus(conf.date);
        const safeDate = escapeHtml(conf.date);
        const safeLocation = escapeHtml(conf.location);
        if (timeStatus === 'past') {
            timeBannerEl.className = 'modal-time-banner modal-time-past';
            timeBannerEl.innerHTML = `
                <i class="fa-solid fa-clock-rotate-left"></i>
                <div><strong>Concluded Event:</strong> This conference was held in <strong>${safeDate}</strong>. Check the official website for proceedings and the next edition.</div>
            `;
        } else if (timeStatus === 'current') {
            timeBannerEl.className = 'modal-time-banner modal-time-current';
            timeBannerEl.innerHTML = `
                <i class="fa-solid fa-bolt"></i>
                <div><strong>Happening This Month:</strong> Scheduled for <strong>${safeDate}</strong>. Sessions and digital streams are currently active.</div>
            `;
        } else {
            timeBannerEl.className = 'modal-time-banner modal-time-upcoming';
            timeBannerEl.innerHTML = `
                <i class="fa-solid fa-calendar-check"></i>
                <div><strong>Upcoming Conference:</strong> Scheduled for <strong>${safeDate}</strong> in <strong>${safeLocation}</strong>. Paper submissions & travel grants are active.</div>
            `;
        }
    }

    // Open Modal with accessible focus management
    openModal(detailModal, closeModalBtn);
    updateUrlParams(conf.id);
}

function renderMetricRow(label, score) {
    return `
        <div class="metric-row">
            <div class="metric-meta">
                <span>${label}</span>
                <strong>${score}/100</strong>
            </div>
            <div class="metric-bar-bg">
                <div class="metric-bar-fill" style="width: ${score}%"></div>
            </div>
        </div>
    `;
}

function applyFilters() {
    const filteredData = getFilteredConferences();
    updateStats(filteredData);
    renderApproachingDeadlines(filteredData);
    renderList(filteredData);
    renderMapMarkers(filteredData);
    updateUrlParams();
}

// --- Event Listeners ---

const debouncedApplyFilters = debounce(applyFilters, 100);

// Search input & Clear button
const searchClearBtn = document.getElementById('search-clear-btn');

searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery ? 'flex' : 'none';
    }
    debouncedApplyFilters();
});

if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        applyFilters();
    });
}

// Reset Map View Button (Unified with INITIAL_MAP_CENTER and INITIAL_MAP_ZOOM)
const resetMapBtn = document.getElementById('reset-map-btn');
if (resetMapBtn) {
    resetMapBtn.addEventListener('click', () => {
        if (map) {
            map.setView(INITIAL_MAP_CENTER, INITIAL_MAP_ZOOM);
        }
        if (activeMarker) {
            activeMarker = null;
        }
    });
}

// Mobile View Toggle Controls
const mobileToggleList = document.getElementById('mobile-toggle-list');
const mobileToggleMap = document.getElementById('mobile-toggle-map');
const sidebarPanel = document.getElementById('sidebar-panel');
const mapPanel = document.getElementById('map-panel');

if (mobileToggleList && mobileToggleMap && sidebarPanel && mapPanel) {
    mobileToggleList.addEventListener('click', () => {
        mobileToggleList.classList.add('active');
        mobileToggleMap.classList.remove('active');
        sidebarPanel.classList.remove('hidden-mobile');
        mapPanel.classList.add('hidden-mobile');
    });

    mobileToggleMap.addEventListener('click', () => {
        mobileToggleMap.classList.add('active');
        mobileToggleList.classList.remove('active');
        mapPanel.classList.remove('hidden-mobile');
        sidebarPanel.classList.add('hidden-mobile');
        if (map) {
            setTimeout(() => map.invalidateSize(), 100);
        }
    });
}

// Accessible Modal Focus Management & Keyboard Trap
let lastFocusedBeforeModal = null;

function getFocusableElements(container) {
    return Array.from(container.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )).filter(el => el.offsetParent !== null);
}

function openModal(modalEl, initialFocusEl) {
    if (!modalEl) return;
    if (!modalEl.classList.contains('show')) {
        lastFocusedBeforeModal = document.activeElement;
    }
    modalEl.classList.add('show');
    modalEl.setAttribute('aria-hidden', 'false');
    const targetFocus = initialFocusEl || getFocusableElements(modalEl)[0];
    if (targetFocus && typeof targetFocus.focus === 'function') {
        requestAnimationFrame(() => targetFocus.focus());
    }
}

function closeModal(modalEl, onAfterClose) {
    if (!modalEl || !modalEl.classList.contains('show')) return;
    modalEl.classList.remove('show');
    modalEl.setAttribute('aria-hidden', 'true');
    if (typeof onAfterClose === 'function') {
        onAfterClose();
    }
    if (lastFocusedBeforeModal && typeof lastFocusedBeforeModal.focus === 'function') {
        lastFocusedBeforeModal.focus();
        lastFocusedBeforeModal = null;
    }
}

const suggestModal = document.getElementById('suggest-modal');

// ESC Key & Focus Trap listener for active modals
document.addEventListener('keydown', (e) => {
    const activeModal = (detailModal && detailModal.classList.contains('show'))
        ? detailModal
        : ((suggestModal && suggestModal.classList.contains('show')) ? suggestModal : null);

    if (!activeModal) return;

    if (e.key === 'Escape') {
        if (activeModal === detailModal) {
            closeModal(detailModal, () => updateUrlParams(''));
        } else {
            closeModal(suggestModal);
        }
        return;
    }

    if (e.key === 'Tab') {
        const focusables = getFocusableElements(activeModal);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});

// Quick Field Actions: Select All & Reset to Default
const selectAllFieldsBtn = document.getElementById('btn-select-all-fields');
const resetFieldsBtn = document.getElementById('btn-reset-fields');

if (selectAllFieldsBtn) {
    selectAllFieldsBtn.addEventListener('click', () => {
        state.selectedFields = [...ALL_FIELDS];
        syncFieldCheckboxes();
        try {
            localStorage.setItem('tripconference_selected_fields', JSON.stringify(state.selectedFields));
        } catch (err) {}
        applyFilters();
    });
}

if (resetFieldsBtn) {
    resetFieldsBtn.addEventListener('click', () => {
        state.selectedFields = [...DEFAULT_FIELDS];
        syncFieldCheckboxes();
        try {
            localStorage.setItem('tripconference_selected_fields', JSON.stringify(state.selectedFields));
        } catch (err) {}
        applyFilters();
    });
}

// Checkbox Buttons
document.querySelectorAll('.btn-checkbox').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const input = btn.querySelector('input');
        input.checked = !input.checked;
        
        const field = btn.dataset.field;
        if (input.checked) {
            btn.classList.add('active');
            if (!state.selectedFields.includes(field)) state.selectedFields.push(field);
        } else {
            btn.classList.remove('active');
            state.selectedFields = state.selectedFields.filter(f => f !== field);
        }

        // Persist to LocalStorage
        try {
            localStorage.setItem('tripconference_selected_fields', JSON.stringify(state.selectedFields));
        } catch (err) {
            console.warn('Failed to persist selected fields:', err);
        }

        applyFilters();
    });
});

// Sliders with debounced filter recalculation
cqiSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    cqiValue.textContent = val + '+';
    state.minCQI = val;
    debouncedApplyFilters();
});

gsaiSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    gsaiValue.textContent = val + '+';
    state.minGSAI = val;
    debouncedApplyFilters();
});

// Sort select
sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFilters();
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    closeModal(detailModal, () => updateUrlParams(''));
});

detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        closeModal(detailModal, () => updateUrlParams(''));
    }
});

// --- Suggestion Modal Event Handlers ---
const openSuggestBtn = document.getElementById('open-suggest-btn');
const closeSuggestBtn = document.getElementById('close-suggest-btn');
const suggestForm = document.getElementById('suggest-form');
const suggestComment = document.getElementById('suggest-comment');
const suggestContact = document.getElementById('suggest-contact');
const suggestStatus = document.getElementById('suggest-status');
const suggestSubmitBtn = document.getElementById('suggest-submit-btn');

if (openSuggestBtn && suggestModal) {
    openSuggestBtn.addEventListener('click', () => {
        suggestStatus.style.display = 'none';
        suggestStatus.className = 'suggest-form-status';
        openModal(suggestModal, suggestComment);
    });

    closeSuggestBtn.addEventListener('click', () => {
        closeModal(suggestModal);
    });

    suggestModal.addEventListener('click', (e) => {
        if (e.target === suggestModal) {
            closeModal(suggestModal);
        }
    });

    suggestForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const commentText = suggestComment.value.trim();
        const contactText = suggestContact.value.trim();
        
        if (!commentText) return;

        suggestSubmitBtn.disabled = true;
        suggestSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
        suggestStatus.style.display = 'none';

        try {
            const response = await fetch('https://formsubmit.co/ajax/eljja1@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "💡 TripConference - New Suggestion / Comment",
                    Suggestion: commentText,
                    Contact: contactText || "Anonymous Visitor",
                    SubmittedAt: new Date().toLocaleString()
                })
            });

            if (!response.ok) {
                throw new Error(`Submission failed (${response.status})`);
            }

            suggestStatus.className = 'suggest-form-status success';
            suggestStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your suggestion has been sent to the admin.';
            suggestStatus.style.display = 'block';
            
            suggestComment.value = '';
            suggestContact.value = '';

            setTimeout(() => {
                closeModal(suggestModal);
                suggestSubmitBtn.disabled = false;
                suggestSubmitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Suggestion';
            }, 2000);

        } catch (err) {
            console.error("Suggestion submission failed:", err);
            suggestStatus.className = 'suggest-form-status error';
            suggestStatus.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Failed to send right now. Please try again or submit via <a href="https://github.com/eljja/Conference/issues" target="_blank" rel="noopener noreferrer" style="color: #fda4af; text-decoration: underline;">GitHub Issues</a>.';
            suggestStatus.style.display = 'block';

            suggestSubmitBtn.disabled = false;
            suggestSubmitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Suggestion';
        }
    });
}

// --- Timeline Filter Controls (Future vs Past) ---
const btnTimelineUpcoming = document.getElementById('btn-timeline-upcoming');
const btnTimelinePast = document.getElementById('btn-timeline-past');
const timelineHint = document.getElementById('timeline-hint');

function setTimelineMode(showPast) {
    state.showPast = showPast;
    syncTimelineUI();
    applyFilters();
}

function syncTimelineUI() {
    if (btnTimelineUpcoming && btnTimelinePast) {
        btnTimelineUpcoming.classList.toggle('active', !state.showPast);
        btnTimelineUpcoming.setAttribute('aria-checked', (!state.showPast).toString());
        btnTimelinePast.classList.toggle('active', state.showPast);
        btnTimelinePast.setAttribute('aria-checked', state.showPast.toString());
    }
    if (timelineHint) {
        timelineHint.textContent = state.showPast ? 'Including Past' : 'Upcoming Only';
    }
}

if (btnTimelineUpcoming) {
    btnTimelineUpcoming.addEventListener('click', () => setTimelineMode(false));
}
if (btnTimelinePast) {
    btnTimelinePast.addEventListener('click', () => setTimelineMode(true));
}

// Sync DOM checkbox elements to match state.selectedFields
function syncFieldCheckboxes() {
    document.querySelectorAll('.btn-checkbox').forEach(btn => {
        const field = btn.dataset.field;
        const input = btn.querySelector('input');
        const isSelected = state.selectedFields.includes(field);
        if (input) input.checked = isSelected;
        if (isSelected) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
    initUpdateStatusBadge();
    parseUrlParameters();
    syncFieldCheckboxes();
    syncTimelineUI();
    initMap();
    applyFilters();

    // Deep-linking: If an ?id= parameter was provided in the URL, highlight & open that conference
    if (pendingConferenceIdFromUrl) {
        const targetConf = conferences.find(c => c.id === pendingConferenceIdFromUrl);
        if (targetConf) {
            // If target conference has already concluded, automatically include past conferences
            if (!state.showPast && getConferenceTimeStatus(targetConf.date) === 'past') {
                state.showPast = true;
                syncTimelineUI();
            }
            if (!state.selectedFields.includes(targetConf.field)) {
                state.selectedFields.push(targetConf.field);
                syncFieldCheckboxes();
            }
            applyFilters();
        }
        setTimeout(() => {
            if (pendingConferenceIdFromUrl) {
                selectConference(pendingConferenceIdFromUrl);
                pendingConferenceIdFromUrl = null;
            }
        }, 300);
    }
});
