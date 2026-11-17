const assert = require('assert');
const fs = require('fs');
const { 
    parseConferenceDate, 
    getConferenceTimeStatus, 
    isWithinYearWindow, 
    filterConferencesByTimeline, 
    getTimelineStats,
    sortConferencesByDate,
    getDeadlineDDay,
    getApproachingDeadlineConferences
} = require('./app_logic_helper.js');

function testTimeStatus() {
    console.log("Running Test 1: getConferenceTimeStatus logic with Year & Month...");
    
    const refDate = new Date(2026, 9, 17); // October 17, 2026 (Month is 0-indexed: 9 = October)
    
    assert.strictEqual(getConferenceTimeStatus("2026.05", refDate), 'past', "2026.05 must be 'past' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2026.09", refDate), 'past', "2026.09 must be 'past' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2026.10", refDate), 'current', "2026.10 must be 'current' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2026.11", refDate), 'future', "2026.11 must be 'future' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2027.05", refDate), 'future', "2027.05 must be 'future' relative to 2026.10");
    
    console.log("✓ Test 1 Passed!");
}

function testDayPrecision() {
    console.log("Running Test 2: YYYY.MM.DD day precision time status...");
    const refDate = new Date(2026, 9, 17); // 2026-10-17
    
    const parsed = parseConferenceDate("2026.10.25");
    assert.deepStrictEqual(parsed, { year: 2026, month: 10, day: 25 }, "parseConferenceDate should extract day");

    assert.strictEqual(getConferenceTimeStatus("2026.10.12", refDate), 'past', "2026.10.12 must be 'past' on 2026-10-17");
    assert.strictEqual(getConferenceTimeStatus("2026.10.17", refDate), 'current', "2026.10.17 must be 'current' on 2026-10-17");
    assert.strictEqual(getConferenceTimeStatus("2026.10.25", refDate), 'future', "2026.10.25 must be 'future' on 2026-10-17");
    assert.strictEqual(getConferenceTimeStatus("2026.11.02", refDate), 'future', "2026.11.02 must be 'future' on 2026-10-17");
    assert.strictEqual(getConferenceTimeStatus("2026.09.28", refDate), 'past', "2026.09.28 must be 'past' on 2026-10-17");
    
    console.log("✓ Test 2 Passed!");
}

function testDateSorting() {
    console.log("Running Test 3: Chronological sorting by date...");
    const mockList = [
        { id: 'c3', name: 'Conf C', date: '2026.11.05', cqi: 90 },
        { id: 'c1', name: 'Conf A', date: '2026.10.20', cqi: 92 },
        { id: 'c4', name: 'Conf D', date: '2027.02.14', cqi: 95 },
        { id: 'c2', name: 'Conf B', date: '2026.10.25', cqi: 88 },
        { id: 'c1b', name: 'Conf A2', date: '2026.10.20', cqi: 96 } // same date, higher cqi
    ];

    const sorted = sortConferencesByDate(mockList);
    const expectedOrder = ['c1b', 'c1', 'c2', 'c3', 'c4'];
    assert.deepStrictEqual(sorted.map(c => c.id), expectedOrder, "Conferences must be sorted chronologically by date with CQI tie-breaker");
    
    console.log("✓ Test 3 Passed!");
}

function testFilterWithPastToggle() {
    console.log("Running Test 4: Filtering logic with showPast toggle...");
    
    const refDate = new Date(2026, 9, 17); // 2026.10.17
    const mockConferences = [
        { id: 'conf-past', name: 'Past Conf', date: '2026.04.10', field: 'cs', cqi: 90, gsai: 85 },
        { id: 'conf-past-this-month', name: 'Past This Month', date: '2026.10.10', field: 'cs', cqi: 90, gsai: 85 },
        { id: 'conf-curr', name: 'Current Conf', date: '2026.10.17', field: 'cs', cqi: 90, gsai: 85 },
        { id: 'conf-future', name: 'Future Conf', date: '2026.10.28', field: 'cs', cqi: 90, gsai: 85 },
        { id: 'conf-too-old', name: 'Too Old Conf', date: '2025.08.15', field: 'cs', cqi: 90, gsai: 85 } // > 12 months ago
    ];
    
    // When showPast is false: only conf-curr and conf-future should be returned
    const futureOnly = filterConferencesByTimeline(mockConferences, false, refDate);
    assert.deepStrictEqual(futureOnly.map(c => c.id), ['conf-curr', 'conf-future']);
    
    // When showPast is true: conf-past, conf-past-this-month, conf-curr, conf-future returned
    const withPast = filterConferencesByTimeline(mockConferences, true, refDate);
    assert.deepStrictEqual(withPast.map(c => c.id), ['conf-past', 'conf-past-this-month', 'conf-curr', 'conf-future']);
    
    console.log("✓ Test 4 Passed!");
}

function testDeadlineDDayCalculation() {
    console.log("Running Test 6: Abstract deadline D-Day calculation...");
    const refDate = new Date(2026, 9, 17); // 2026-10-17
    
    // Exact day
    const dDayToday = getDeadlineDDay("2026.10.17", refDate);
    assert.strictEqual(dDayToday.diffDays, 0);
    assert.strictEqual(dDayToday.label, "D-Day");
    assert.strictEqual(dDayToday.isUrgent, true);
    assert.strictEqual(dDayToday.isUpcoming, true);
    
    // 5 days remaining
    const dDay5 = getDeadlineDDay("2026.10.22", refDate);
    assert.strictEqual(dDay5.diffDays, 5);
    assert.strictEqual(dDay5.label, "D-5");
    assert.strictEqual(dDay5.isUrgent, true);
    
    // 30 days remaining
    const dDay30 = getDeadlineDDay("2026.11.16", refDate);
    assert.strictEqual(dDay30.diffDays, 30);
    assert.strictEqual(dDay30.label, "D-30");
    assert.strictEqual(dDay30.isUrgent, false);
    
    // Already passed
    const dDayPassed = getDeadlineDDay("2026.10.10", refDate);
    assert.strictEqual(dDayPassed.diffDays, -7);
    assert.strictEqual(dDayPassed.label, "Closed");
    assert.strictEqual(dDayPassed.isUpcoming, false);
    
    console.log("✓ Test 6 Passed!");
}

function testTop5ApproachingDeadlines() {
    console.log("Running Test 7: Top 5 approaching deadline prioritization...");
    const refDate = new Date(2026, 9, 17); // 2026-10-17
    
    const mockList = [
        { id: 'c-passed', name: 'Passed', deadline: '2026.10.05', field: 'cs' },
        { id: 'c-30d', name: 'In 30 Days', deadline: '2026.11.16', field: 'cs' },
        { id: 'c-3d', name: 'In 3 Days', deadline: '2026.10.20', field: 'cs' },
        { id: 'c-10d', name: 'In 10 Days', deadline: '2026.10.27', field: 'cs' },
        { id: 'c-60d', name: 'In 60 Days', deadline: '2026.12.16', field: 'cs' },
        { id: 'c-today', name: 'Today', deadline: '2026.10.17', field: 'cs' },
        { id: 'c-90d', name: 'In 90 Days', deadline: '2027.01.15', field: 'cs' }
    ];
    
    const top5 = getApproachingDeadlineConferences(mockList, 5, refDate);
    assert.strictEqual(top5.length, 5);
    // Closest first: Today (0), In 3 Days (3), In 10 Days (10), In 30 Days (30), In 60 Days (60)
    assert.deepStrictEqual(top5.map(c => c.id), ['c-today', 'c-3d', 'c-10d', 'c-30d', 'c-60d']);
    
    console.log("✓ Test 7 Passed!");
}

function testAllConferencesHaveDayAndDeadline() {
    console.log("Running Test 8: Verify all conferences in database have 14 columns, YYYY.MM.DD date, and valid deadline...");
    const { rawConferencesData } = require('./conferences-data.js');
    
    assert(rawConferencesData.length >= 368, "Must have at least 368 conferences");
    
    const invalidRows = [];
    rawConferencesData.forEach(c => {
        if (c.length !== 14) {
            invalidRows.push({ name: c[1], reason: `Invalid length ${c.length} !== 14` });
            return;
        }
        const dateStr = c[9];
        const deadlineStr = c[13];
        if (!/^\d{4}\.\d{2}\.\d{2}$/.test(dateStr)) {
            invalidRows.push({ name: c[1], reason: `Invalid date ${dateStr}` });
        }
        if (!/^\d{4}\.\d{2}\.\d{2}$/.test(deadlineStr)) {
            invalidRows.push({ name: c[1], reason: `Invalid deadline ${deadlineStr}` });
        }
        if (deadlineStr > dateStr) {
            invalidRows.push({ name: c[1], reason: `Deadline ${deadlineStr} after date ${dateStr}` });
        }
    });
    
    assert.strictEqual(invalidRows.length, 0, `All conferences must pass validation! Found invalid: ${JSON.stringify(invalidRows.slice(0, 5))}`);
    console.log(`✓ Test 8 Passed! (All ${rawConferencesData.length} conferences have valid 14 columns, YYYY.MM.DD dates, and deadlines)`);
}

function testDeadlineSorting() {
    console.log("Running Test 9: Sorting conferences by abstract deadline...");
    const mockList = [
        { name: "Late 2027", deadline: "2027.05.15", date: "2027.10.20" },
        { name: "Urgent 1", deadline: "2026.10.19", date: "2027.03.15" },
        { name: "Urgent 2", deadline: "2026.10.22", date: "2027.04.20" },
        { name: "Concluded", deadline: "2026.05.15", date: "2026.11.01" }
    ];

    const sortedByDeadline = [...mockList].sort((a, b) => {
        const deadA = a.deadline || '9999.99.99';
        const deadB = b.deadline || '9999.99.99';
        const diff = deadA.localeCompare(deadB);
        if (diff !== 0) return diff;
        return a.date.localeCompare(b.date);
    });

    assert.strictEqual(sortedByDeadline[0].name, "Concluded");
    assert.strictEqual(sortedByDeadline[1].name, "Urgent 1");
    assert.strictEqual(sortedByDeadline[2].name, "Urgent 2");
    assert.strictEqual(sortedByDeadline[3].name, "Late 2027");
    console.log("✓ Test 9 Passed!");
}

function testAppJsDirectDateParsingAndStatus() {
    console.log("Running Test 10: Verify app.js uses Single Source of Truth helper without duplicating date parsing and marks 2026.10.04 as past on 2026.10.18...");
    const appJsTxt = fs.readFileSync('app.js', 'utf8');

    assert(!/function\s+parseConferenceDate\s*\(/.test(appJsTxt), "app.js must not duplicate parseConferenceDate");
    assert(!/function\s+getConferenceTimeStatus\s*\(/.test(appJsTxt), "app.js must not duplicate getConferenceTimeStatus");
    assert(appJsTxt.includes('window.app_logic_helper'), "app.js must consume window.app_logic_helper");

    const parsed = parseConferenceDate("2026.10.04");
    assert.strictEqual(parsed.day, 4, "parseConferenceDate MUST capture day=4 from 2026.10.04");

    const refDate = new Date(2026, 9, 18); // 2026.10.18
    const status = getConferenceTimeStatus("2026.10.04", refDate);
    assert.strictEqual(status, 'past', "2026.10.04 MUST be marked as 'past' when today is 2026.10.18");

    console.log("✓ Test 10 Passed!");
}

function testHtmlStructureAndDeepLinks() {
    console.log("Running Test 11: Verify index.html modal nesting, SRI, and deep-link IDs...");
    const html = fs.readFileSync('index.html', 'utf8');

    // 1. #suggest-modal must close before <footer class="seo-crawler-directory">
    const suggestStart = html.search(/<div[^>]*id="suggest-modal"[^>]*>/);
    const footerStart = html.indexOf('<footer class="seo-crawler-directory"');
    assert(suggestStart !== -1 && footerStart !== -1 && suggestStart < footerStart, "Both suggest-modal and footer must exist in order");
    const between = html.slice(suggestStart, footerStart);
    const openDivs = (between.match(/<div\b/g) || []).length;
    const closeDivs = (between.match(/<\/div>/g) || []).length;
    assert.strictEqual(openDivs, closeDivs, `#suggest-modal div tags must be balanced before <footer> (open=${openDivs}, close=${closeDivs})`);

    // 2. FontAwesome CDN must include SRI integrity attribute
    const faLink = html.match(/<link[^>]*font-awesome[^>]*>/i);
    assert(faLink && /integrity="sha(256|384|512)-/.test(faLink[0]), "FontAwesome CDN link must include SRI integrity attribute");

    // 3. Every ?id= deep link in index.html must exist in DB
    const dataSource = fs.existsSync('conferences-data.js') ? fs.readFileSync('conferences-data.js', 'utf8') : fs.readFileSync('app.js', 'utf8');
    const start = dataSource.indexOf('const rawConferencesData = [');
    const end = dataSource.indexOf('];', start) + 2;
    const tmp = {};
    eval(dataSource.substring(start, end).replace('const rawConferencesData =', 'tmp.raw ='));
    const dbIds = new Set(tmp.raw.map(r => r[0]));
    const htmlIds = [...html.matchAll(/[?&]id=([a-z0-9-]+)/g)].map(m => m[1]);
    const missingIds = [...new Set(htmlIds)].filter(id => !dbIds.has(id));
    assert.deepStrictEqual(missingIds, [], `All HTML deep-link IDs must exist in DB, missing: ${missingIds.join(', ')}`);

    console.log("✓ Test 11 Passed!");
}

function testHelperConfigEscapeCalendarAndSort() {
    console.log("Running Test 12: Verify FIELD_CONFIG, escapeHtml, isValidCalendarDate, fallback filter, and sort=deadline...");
    const helper = require('./app_logic_helper.js');

    // 1. FIELD_CONFIG covers all 10 fields
    const expectedFields = ['semiconductor', 'electronics', 'materials', 'architecture', 'civil', 'cs', 'mech', 'chem', 'bio', 'ind'];
    assert(helper.FIELD_CONFIG && typeof helper.FIELD_CONFIG === 'object', "FIELD_CONFIG must be exported");
    expectedFields.forEach(f => {
        assert(helper.FIELD_CONFIG[f], `FIELD_CONFIG must include ${f}`);
        assert(helper.FIELD_CONFIG[f].name && helper.FIELD_CONFIG[f].color && helper.FIELD_CONFIG[f].icon, `FIELD_CONFIG.${f} must define name, color, icon`);
    });

    // 2. escapeHtml neutralizes XSS characters
    assert.strictEqual(typeof helper.escapeHtml, 'function', "escapeHtml must be exported");
    assert.strictEqual(helper.escapeHtml('<script>"a" & \'b\'</script>'), '&lt;script&gt;&quot;a&quot; &amp; &#39;b&#39;&lt;/script&gt;');

    // 3. isValidCalendarDate rejects impossible calendar dates
    assert.strictEqual(typeof helper.isValidCalendarDate, 'function', "isValidCalendarDate must be exported");
    assert.strictEqual(helper.isValidCalendarDate('2026.02.28'), true);
    assert.strictEqual(helper.isValidCalendarDate('2026.02.30'), false, "Feb 30 must be rejected");
    assert.strictEqual(helper.isValidCalendarDate('2026.04.31'), false, "Apr 31 must be rejected");
    assert.strictEqual(helper.isValidCalendarDate('2024.02.29'), true, "Leap year Feb 29 must be valid");
    assert.strictEqual(helper.isValidCalendarDate('2026.02.29'), false, "Non-leap year Feb 29 must be invalid");

    // 4. ALLOWED_SORT_VALUES includes deadline and app.js delegates sort validation to it
    assert(Array.isArray(helper.ALLOWED_SORT_VALUES) && helper.ALLOWED_SORT_VALUES.includes('deadline'), "ALLOWED_SORT_VALUES must include 'deadline'");
    const appJsTxt = fs.readFileSync('app.js', 'utf8');
    const parseUrlSlice = appJsTxt.slice(appJsTxt.indexOf('function parseUrlParameters'), appJsTxt.indexOf('function updateUrlParams'));
    assert(parseUrlSlice.includes('ALLOWED_SORT_VALUES.includes(sortParam)'), "parseUrlParameters must validate sort against ALLOWED_SORT_VALUES");

    // 5. Fallback deadline filter respects CQI/GSAI/searchQuery while relaxing timeline
    assert.strictEqual(typeof helper.getFallbackApproachingDeadlines, 'function', "getFallbackApproachingDeadlines must be exported");
    const refDate = new Date(2026, 9, 18); // 2026-10-18
    const mockConfs = [
        { id: 'low-cqi', name: 'Low CQI', fullName: 'Low CQI Conf', location: 'Seoul', organizer: 'Org', field: 'cs', cqi: 55, gsai: 80, deadline: '2026.10.20' },
        { id: 'high-cqi', name: 'High CQI', fullName: 'High CQI Conf', location: 'Seoul', organizer: 'Org', field: 'cs', cqi: 90, gsai: 80, deadline: '2026.10.25' }
    ];
    const fb = helper.getFallbackApproachingDeadlines(mockConfs, { selectedFields: ['cs'], minCQI: 70, minGSAI: 50, searchQuery: '' }, 5, refDate);
    assert.deepStrictEqual(fb.map(c => c.id), ['high-cqi'], "Fallback approaching deadlines must still enforce minCQI/minGSAI/search filters");

    console.log("✓ Test 12 Passed!");
}

function testBrowserScriptBootAndInteractions() {
    console.log("Running Test 13: Verify sequential classic <script> execution (no global scope collision) and URL/modal runtime flow...");
    const vm = require('vm');
    const makeEl = () => ({
        style: {},
        classList: { add(){}, remove(){}, toggle(){}, contains(){ return false; } },
        dataset: {},
        querySelector: () => makeEl(),
        querySelectorAll: () => [],
        addEventListener: () => {},
        setAttribute: () => {},
        appendChild: () => {},
        scrollIntoView: () => {},
        focus: () => {},
        value: '',
        textContent: '',
        innerHTML: ''
    });
    const listeners = {};
    const sandbox = {
        console,
        Math,
        Date,
        Array,
        Object,
        String,
        Number,
        Set,
        Map,
        JSON,
        URLSearchParams,
        requestAnimationFrame: fn => fn(),
        setTimeout: fn => fn(),
        localStorage: { getItem: () => null, setItem: () => {} },
        document: {
            activeElement: null,
            getElementById: () => makeEl(),
            querySelector: () => null,
            querySelectorAll: () => [],
            createElement: () => makeEl(),
            createDocumentFragment: () => ({ appendChild(){} }),
            addEventListener: (ev, fn) => { listeners[ev] = listeners[ev] || []; listeners[ev].push(fn); }
        },
        L: {
            latLng: (a, b) => [a, b],
            latLngBounds: (a, b) => [a, b],
            point: (x, y) => [x, y],
            map: () => ({ setView(){ return this; }, closePopup(){}, getCenter(){ return { lng: 0 }; }, invalidateSize(){} }),
            tileLayer: () => ({ addTo(){ return this; } }),
            control: { zoom: () => ({ addTo(){} }) },
            layerGroup: () => ({ addTo(){}, clearLayers(){}, addLayer(){} }),
            marker: () => ({ bindPopup(){ return this; }, on(){ return this; }, setIcon(){}, getLatLng(){ return { lat: 0, lng: 0 }; } }),
            divIcon: () => ({})
        }
    };
    sandbox.window = sandbox;
    sandbox.window.location = { search: '?field=cs&sort=deadline', pathname: '/Conference/' };
    sandbox.window.history = { replaceState: () => {} };

    vm.createContext(sandbox);
    vm.runInContext(fs.readFileSync('conferences-data.js', 'utf8'), sandbox);
    vm.runInContext(fs.readFileSync('app_logic_helper.js', 'utf8'), sandbox);
    vm.runInContext(fs.readFileSync('app.js', 'utf8'), sandbox);

    (listeners['DOMContentLoaded'] || []).forEach(fn => fn());

    const activeState = vm.runInContext('({ sortBy: state.sortBy, selectedFields: state.selectedFields, count: getFilteredConferences().length })', sandbox);
    assert.strictEqual(activeState.sortBy, 'deadline', "URL ?sort=deadline must initialize state.sortBy to 'deadline'");
    assert.deepStrictEqual(Array.from(activeState.selectedFields), ['cs'], "URL ?field=cs must initialize state.selectedFields to ['cs']");
    assert(activeState.count > 0, "Filtered CS conferences must be non-empty");

    // Verify selectConference runs cleanly without errors
    sandbox.window.selectConference('neurips-2026');

    console.log("✓ Test 13 Passed!");
}

try {
    testTimeStatus();
    testDayPrecision();
    testDateSorting();
    testFilterWithPastToggle();
    testDeadlineDDayCalculation();
    testTop5ApproachingDeadlines();
    testAllConferencesHaveDayAndDeadline();
    testDeadlineSorting();
    testAppJsDirectDateParsingAndStatus();
    testHtmlStructureAndDeepLinks();
    testHelperConfigEscapeCalendarAndSort();
    testBrowserScriptBootAndInteractions();
    console.log("\nALL TDD TESTS PASSED SUCCESSFULLY! 🚀");
} catch (e) {
    console.error("\nTEST FAILED:", e.message);
    process.exit(1);
}
