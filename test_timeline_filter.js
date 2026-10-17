const assert = require('assert');
const fs = require('fs');
const { 
    parseConferenceDate, 
    getConferenceTimeStatus, 
    isWithinYearWindow, 
    filterConferencesByTimeline, 
    getTimelineStats 
} = require('./app_logic_helper.js');

function testTimeStatus() {
    console.log("Running Test 1: getConferenceTimeStatus logic...");
    
    const refDate = new Date(2026, 9, 17); // October 17, 2026 (Month is 0-indexed: 9 = October)
    
    assert.strictEqual(getConferenceTimeStatus("2026.05", refDate), 'past', "2026.05 must be 'past' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2026.09", refDate), 'past', "2026.09 must be 'past' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2026.10", refDate), 'current', "2026.10 must be 'current' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2026.11", refDate), 'future', "2026.11 must be 'future' relative to 2026.10");
    assert.strictEqual(getConferenceTimeStatus("2027.05", refDate), 'future', "2027.05 must be 'future' relative to 2026.10");
    
    console.log("✓ Test 1 Passed!");
}

function testFilterWithPastToggle() {
    console.log("Running Test 2: Filtering logic with showPast toggle...");
    
    const refDate = new Date(2026, 9, 17); // 2026.10
    const mockConferences = [
        { id: 'conf-past', name: 'Past Conf', date: '2026.04', field: 'cs', cqi: 90, gsai: 85 },
        { id: 'conf-curr', name: 'Current Conf', date: '2026.10', field: 'cs', cqi: 90, gsai: 85 },
        { id: 'conf-future', name: 'Future Conf', date: '2027.02', field: 'cs', cqi: 90, gsai: 85 },
        { id: 'conf-too-old', name: 'Too Old Conf', date: '2025.08', field: 'cs', cqi: 90, gsai: 85 } // > 12 months ago
    ];
    
    // When showPast is false: only conf-curr and conf-future should be returned
    const futureOnly = filterConferencesByTimeline(mockConferences, false, refDate);
    assert.strictEqual(futureOnly.length, 2, "Default futureOnly must have 2 conferences");
    assert.deepStrictEqual(futureOnly.map(c => c.id), ['conf-curr', 'conf-future']);
    
    // When showPast is true: conf-past, conf-curr, conf-future returned (conf-too-old excluded by -1yr window)
    const withPast = filterConferencesByTimeline(mockConferences, true, refDate);
    assert.strictEqual(withPast.length, 3, "With showPast=true, must have 3 conferences");
    assert.deepStrictEqual(withPast.map(c => c.id), ['conf-past', 'conf-curr', 'conf-future']);
    
    console.log("✓ Test 2 Passed!");
}

function testTimelineCounts() {
    console.log("Running Test 3: Stats count breakdown (upcoming vs past)...");
    const refDate = new Date(2026, 9, 17); // 2026.10
    const mockConferences = [
        { id: 'p1', date: '2026.05' },
        { id: 'p2', date: '2026.08' },
        { id: 'c1', date: '2026.10' },
        { id: 'f1', date: '2026.12' },
        { id: 'f2', date: '2027.05' }
    ];
    
    const stats = getTimelineStats(mockConferences, refDate);
    assert.strictEqual(stats.upcomingCount, 3, "Upcoming count should be 3 (1 current + 2 future)");
    assert.strictEqual(stats.pastCount, 2, "Past count should be 2");
    assert.strictEqual(stats.totalCount, 5, "Total count should be 5");
    
    console.log("✓ Test 3 Passed!");
}

function testRealDatabaseIntegrity() {
    console.log("Running Test 4: Real database 368 conferences classification...");
    const txt = fs.readFileSync('app.js', 'utf8');
    const start = txt.indexOf('const rawConferencesData = [');
    const end = txt.indexOf('];', start) + 2;
    eval(txt.substring(start, end).replace('const rawConferencesData =', 'global.testData ='));
    
    const realConferences = global.testData.map(c => ({
        id: c[0],
        name: c[1],
        date: c[9],
        field: c[3]
    }));
    
    const refDate = new Date(2026, 9, 17);
    const futureOnly = filterConferencesByTimeline(realConferences, false, refDate);
    const withPast = filterConferencesByTimeline(realConferences, true, refDate);
    
    assert(futureOnly.length > 150, "Future-only list must have over 150 conferences");
    assert(withPast.length > futureOnly.length, "With past enabled must have more conferences than future-only");
    assert(withPast.length <= 368, "Cannot exceed total conferences in database");
    
    // Ensure all future-only conferences are strictly not 'past'
    futureOnly.forEach(conf => {
        const status = getConferenceTimeStatus(conf.date, refDate);
        assert.notStrictEqual(status, 'past', `Conference ${conf.name} with date ${conf.date} should not be in future-only list`);
    });
    
    console.log(`✓ Test 4 Passed! (Future only: ${futureOnly.length}, With past: ${withPast.length}, Total in DB: ${realConferences.length})`);
}

try {
    testTimeStatus();
    testFilterWithPastToggle();
    testTimelineCounts();
    testRealDatabaseIntegrity();
    console.log("\nALL TDD TESTS PASSED SUCCESSFULLY! 🚀");
} catch (e) {
    console.error("\nTEST FAILED:", e.message);
    process.exit(1);
}
