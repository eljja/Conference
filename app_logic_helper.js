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

if (typeof window !== 'undefined') {
    window.parseConferenceDate = parseConferenceDate;
    window.getConferenceTimeStatus = getConferenceTimeStatus;
    window.isWithinYearWindow = isWithinYearWindow;
    window.filterConferencesByTimeline = filterConferencesByTimeline;
    window.getTimelineStats = getTimelineStats;
    window.sortConferencesByDate = sortConferencesByDate;
    window.getDeadlineDDay = getDeadlineDDay;
    window.getApproachingDeadlineConferences = getApproachingDeadlineConferences;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        parseConferenceDate,
        getConferenceTimeStatus,
        isWithinYearWindow,
        filterConferencesByTimeline,
        getTimelineStats,
        sortConferencesByDate,
        getDeadlineDDay,
        getApproachingDeadlineConferences
    };
}
