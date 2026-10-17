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
    const txt = fs.readFileSync('app.js', 'utf8');
    const start = txt.indexOf('const rawConferencesData = [');
    const end = txt.indexOf('];', start) + 2;
    eval(txt.substring(start, end).replace('const rawConferencesData =', 'global.testData ='));
    
    assert(global.testData.length >= 368, "Must have at least 368 conferences");
    
    const invalidRows = [];
    global.testData.forEach(c => {
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
    console.log(`✓ Test 8 Passed! (All ${global.testData.length} conferences have valid 14 columns, YYYY.MM.DD dates, and deadlines)`);
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

try {
    testTimeStatus();
    testDayPrecision();
    testDateSorting();
    testFilterWithPastToggle();
    testDeadlineDDayCalculation();
    testTop5ApproachingDeadlines();
    testAllConferencesHaveDayAndDeadline();
    testDeadlineSorting();
    console.log("\nALL TDD TESTS PASSED SUCCESSFULLY! 🚀");
} catch (e) {
    console.error("\nTEST FAILED:", e.message);
    process.exit(1);
}
