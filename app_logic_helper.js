(function () {
'use strict';
const FIELD_CONFIG = {
    semiconductor: {
        name: 'Semiconductors',
        color: '#f59e0b',
        cssVar: 'var(--color-semi)',
        rgb: '245, 158, 11',
        icon: 'fa-microchip'
    },
    electronics: {
        name: 'Electronics',
        color: '#0ea5e9',
        cssVar: 'var(--color-elec)',
        rgb: '14, 165, 233',
        icon: 'fa-bolt'
    },
    materials: {
        name: 'Materials',
        color: '#10b981',
        cssVar: 'var(--color-mat)',
        rgb: '16, 185, 129',
        icon: 'fa-atom'
    },
    architecture: {
        name: 'Architecture',
        color: '#a855f7',
        cssVar: 'var(--color-arch)',
        rgb: '168, 85, 247',
        icon: 'fa-building-columns'
    },
    civil: {
        name: 'Civil Engineering',
        color: '#14b8a6',
        cssVar: 'var(--color-civil)',
        rgb: '20, 184, 166',
        icon: 'fa-bridge'
    },
    cs: {
        name: 'Computer Science & AI',
        color: '#3b82f6',
        cssVar: 'var(--color-cs)',
        rgb: '59, 130, 246',
        icon: 'fa-brain'
    },
    mech: {
        name: 'Mechanical & Aerospace',
        color: '#f97316',
        cssVar: 'var(--color-mech)',
        rgb: '249, 115, 22',
        icon: 'fa-gear'
    },
    chem: {
        name: 'Chemical & Energy',
        color: '#84cc16',
        cssVar: 'var(--color-chem)',
        rgb: '132, 204, 22',
        icon: 'fa-flask'
    },
    bio: {
        name: 'Biomedical & Biotech',
        color: '#ec4899',
        cssVar: 'var(--color-bio)',
        rgb: '236, 72, 153',
        icon: 'fa-dna'
    },
    ind: {
        name: 'Industrial Engineering',
        color: '#6366f1',
        cssVar: 'var(--color-ind)',
        rgb: '99, 102, 241',
        icon: 'fa-diagram-project'
    }
};

const ALLOWED_SORT_VALUES = ['date', 'deadline', 'cqi', 'gsai', 'name'];

function getFieldMeta(field) {
    return FIELD_CONFIG[field] || FIELD_CONFIG.ind;
}

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function isValidCalendarDate(dateStr) {
    if (!/^\d{4}\.\d{2}\.\d{2}$/.test(dateStr)) return false;
    const [year, month, day] = dateStr.split('.').map(Number);
    if (month < 1 || month > 12 || day < 1 || day > 31) return false;
    const dt = new Date(year, month - 1, day);
    return dt.getFullYear() === year && dt.getMonth() === month - 1 && dt.getDate() === day;
}

function parseConferenceDate(dateStr) {
    if (!dateStr) return null;
    const match = dateStr.match(/^(\d{4})\.(\d{2})(?:\.(\d{2}))?/);
    if (!match) return null;
    return {
        year: parseInt(match[1], 10),
        month: parseInt(match[2], 10),
        day: match[3] ? parseInt(match[3], 10) : null
    };
}

function getConferenceTimeStatus(dateStr, referenceDate = new Date()) {
    const parsed = parseConferenceDate(dateStr);
    if (!parsed) return 'upcoming';
    
    const currentYear = referenceDate.getFullYear();
    const currentMonth = referenceDate.getMonth() + 1; // 1-indexed
    const currentDay = referenceDate.getDate();
    
    const confAbsoluteMonths = parsed.year * 12 + parsed.month;
    const currentAbsoluteMonths = currentYear * 12 + currentMonth;
    
    if (confAbsoluteMonths < currentAbsoluteMonths) {
        return 'past';
    } else if (confAbsoluteMonths > currentAbsoluteMonths) {
        return 'future';
    } else {
        // Same month
        if (parsed.day !== null) {
            if (parsed.day < currentDay) return 'past';
            if (parsed.day === currentDay) return 'current';
            return 'future';
        }
        return 'current';
    }
}

function isWithinYearWindow(dateStr, referenceDate = new Date()) {
    const parsed = parseConferenceDate(dateStr);
    if (!parsed) return true;
    
    const currentYear = referenceDate.getFullYear();
    const currentMonth = referenceDate.getMonth() + 1;
    
    const confAbsoluteMonths = parsed.year * 12 + parsed.month;
    const currentAbsoluteMonths = currentYear * 12 + currentMonth;
    const diffMonths = confAbsoluteMonths - currentAbsoluteMonths;
    
    return (diffMonths >= -12 && diffMonths <= 12);
}

function filterConferencesByTimeline(conferences, showPast = false, referenceDate = new Date()) {
    return conferences.filter(conf => {
        // Must be within [-1 year, +1 year] sliding window
        if (!isWithinYearWindow(conf.date, referenceDate)) {
            return false;
        }
        
        const status = getConferenceTimeStatus(conf.date, referenceDate);
        if (!showPast && status === 'past') {
            return false;
        }
        return true;
    });
}

function getTimelineStats(conferences, referenceDate = new Date()) {
    let upcomingCount = 0;
    let pastCount = 0;
    
    conferences.forEach(conf => {
        if (!isWithinYearWindow(conf.date, referenceDate)) return;
        const status = getConferenceTimeStatus(conf.date, referenceDate);
        if (status === 'past') {
            pastCount++;
        } else {
            upcomingCount++;
        }
    });
    
    return {
        upcomingCount,
        pastCount,
        totalCount: upcomingCount + pastCount
    };
}

function sortConferencesByDate(conferences) {
    return [...conferences].sort((a, b) => {
        const dateDiff = a.date.localeCompare(b.date);
        if (dateDiff !== 0) return dateDiff;
        return (b.cqi || 0) - (a.cqi || 0); // Tie-breaker: higher CQI first
    });
}

function getDeadlineDDay(deadlineStr, referenceDate = new Date()) {
    const parsed = parseConferenceDate(deadlineStr);
    if (!parsed || parsed.day === null) {
        return { diffDays: -999, label: "TBD", isUrgent: false, isUpcoming: false };
    }
    
    const currentYear = referenceDate.getFullYear();
    const currentMonth = referenceDate.getMonth(); // 0-indexed
    const currentDay = referenceDate.getDate();
    
    const todayMidnight = new Date(currentYear, currentMonth, currentDay);
    const deadlineMidnight = new Date(parsed.year, parsed.month - 1, parsed.day);
    
    const diffMs = deadlineMidnight.getTime() - todayMidnight.getTime();
    const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) {
        return {
            diffDays,
            label: "Closed",
            isUrgent: false,
            isUpcoming: false
        };
    } else if (diffDays === 0) {
        return {
            diffDays: 0,
            label: "D-Day",
            isUrgent: true,
            isUpcoming: true
        };
    } else {
        return {
            diffDays,
            label: `D-${diffDays}`,
            isUrgent: diffDays <= 14,
            isUpcoming: true
        };
    }
}

function getApproachingDeadlineConferences(conferences, count = 5, referenceDate = new Date()) {
    const upcomingDeadlines = [];
    
    conferences.forEach(conf => {
        if (!conf.deadline) return;
        const dDayInfo = getDeadlineDDay(conf.deadline, referenceDate);
        if (dDayInfo.isUpcoming) {
            upcomingDeadlines.push({
                ...conf,
                dDayInfo
            });
        }
    });
    
    // Sort nearest deadline first (smallest diffDays)
    upcomingDeadlines.sort((a, b) => {
        if (a.dDayInfo.diffDays !== b.dDayInfo.diffDays) {
            return a.dDayInfo.diffDays - b.dDayInfo.diffDays;
        }
        return (b.cqi || 0) - (a.cqi || 0); // Tie-breaker: higher CQI first
    });
    
    return upcomingDeadlines.slice(0, count);
}

/**
 * Fallback approaching deadlines that respects the user's active field,
 * quality score, and search filters while relaxing only the timeline window.
 */
function getFallbackApproachingDeadlines(conferences, filterCriteria = {}, count = 5, referenceDate = new Date()) {
    const query = (filterCriteria.searchQuery || '').toLowerCase().trim();
    const selectedFields = Array.isArray(filterCriteria.selectedFields) ? filterCriteria.selectedFields : [];
    const minCQI = typeof filterCriteria.minCQI === 'number' ? filterCriteria.minCQI : 0;
    const minGSAI = typeof filterCriteria.minGSAI === 'number' ? filterCriteria.minGSAI : 0;

    const eligible = conferences.filter(conf => {
        if (selectedFields.length > 0 && !selectedFields.includes(conf.field)) return false;
        if ((conf.cqi || 0) < minCQI) return false;
        if ((conf.gsai || 0) < minGSAI) return false;
        if (query) {
            const matchSearch =
                (conf.name || '').toLowerCase().includes(query) ||
                (conf.fullName || '').toLowerCase().includes(query) ||
                (conf.location || '').toLowerCase().includes(query) ||
                (conf.organizer || '').toLowerCase().includes(query) ||
                (conf.field || '').toLowerCase().includes(query);
            if (!matchSearch) return false;
        }
        return true;
    });

    return getApproachingDeadlineConferences(eligible, count, referenceDate);
}

const exportedHelpers = {
    FIELD_CONFIG,
    ALLOWED_SORT_VALUES,
    getFieldMeta,
    escapeHtml,
    isValidCalendarDate,
    parseConferenceDate,
    getConferenceTimeStatus,
    isWithinYearWindow,
    filterConferencesByTimeline,
    getTimelineStats,
    sortConferencesByDate,
    getDeadlineDDay,
    getApproachingDeadlineConferences,
    getFallbackApproachingDeadlines
};

if (typeof window !== 'undefined') {
    window.app_logic_helper = exportedHelpers;
    Object.entries(exportedHelpers).forEach(([key, val]) => {
        window[key] = val;
    });
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportedHelpers;
}
})();
