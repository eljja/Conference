const assert = require('assert');
const fs = require('fs');
const { 
    parseConferenceDate, 
    getConferenceTimeStatus, 
    isWithinYearWindow, 
    filterConferencesByTimeline, 
    getTimelineStats,
    sortConferencesByDate
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

function testAllConferencesHaveDay() {
    console.log("Running Test 5: Verify all 368 conferences in database have YYYY.MM.DD format...");
    const txt = fs.readFileSync('app.js', 'utf8');
    const start = txt.indexOf('const rawConferencesData = [');
    const end = txt.indexOf('];', start) + 2;
    eval(txt.substring(start, end).replace('const rawConferencesData =', 'global.testData ='));
    
    assert.strictEqual(global.testData.length, 368, "Must have exactly 368 conferences");
    
    const invalidDates = [];
    global.testData.forEach(c => {
        const dateStr = c[9];
        if (!/^\d{4}\.\d{2}\.\d{2}$/.test(dateStr)) {
            invalidDates.push({ name: c[1], date: dateStr });
        }
    });
    
    assert.strictEqual(invalidDates.length, 0, `All conferences must have YYYY.MM.DD format! Found invalid: ${JSON.stringify(invalidDates.slice(0, 5))}`);
    console.log("✓ Test 5 Passed! (All 368 conferences have valid YYYY.MM.DD dates)");
}

try {
    testTimeStatus();
    testDayPrecision();
    testDateSorting();
    testFilterWithPastToggle();
    testAllConferencesHaveDay();
    console.log("\nALL TDD TESTS PASSED SUCCESSFULLY! 🚀");
} catch (e) {
    console.error("\nTEST FAILED:", e.message);
    process.exit(1);
}
