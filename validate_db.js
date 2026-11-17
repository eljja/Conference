const fs = require('fs');
const { rawConferencesData } = require('./conferences-data.js');
const { FIELD_CONFIG, isValidCalendarDate } = require('./app_logic_helper.js');

try {
    const validFields = new Set(Object.keys(FIELD_CONFIG));
    console.log("Total Conferences Count:", rawConferencesData.length);

    // Group by fields
    const fields = {};
    rawConferencesData.forEach(c => {
        const field = c[3];
        fields[field] = (fields[field] || 0) + 1;
    });
    console.log("Fields Distribution:", fields);

    // Check duplicates, schema, calendar validity, coordinates, scores, and URLs
    const ids = new Set();
    let hasError = false;

    rawConferencesData.forEach((c, idx) => {
        const id = c[0];
        const name = c[1];

        // 1. Check ID duplicates
        if (!id || typeof id !== 'string') {
            console.error(`Error: Missing or invalid ID at index ${idx}`);
            hasError = true;
        } else if (ids.has(id)) {
            console.error(`Error: Duplicate ID "${id}" at index ${idx}`);
            hasError = true;
        }
        ids.add(id);

        // 2. Check structure length
        if (c.length !== 14) {
            console.error(`Error: Invalid row length (${c.length} instead of 14) for "${name}" at index ${idx}`);
            hasError = true;
            return;
        }

        const [c_id, c_name, c_fullName, c_field, c_cqi, c_gsai, c_location, c_lat, c_lon, c_date, c_organizer, c_isTopTier, c_url, c_deadline] = c;

        // 3. Field ID check
        if (!validFields.has(c_field)) {
            console.error(`Error: Unknown field "${c_field}" for "${c_name}"`);
            hasError = true;
        }

        // 4. Score bounds
        if (typeof c_cqi !== 'number' || c_cqi < 0 || c_cqi > 100 || typeof c_gsai !== 'number' || c_gsai < 0 || c_gsai > 100) {
            console.error(`Error: Invalid CQI/GSAI scores [${c_cqi}, ${c_gsai}] for "${c_name}"`);
            hasError = true;
        }

        // 5. Coordinate bounds
        if (typeof c_lat !== 'number' || isNaN(c_lat) || c_lat < -90 || c_lat > 90 ||
            typeof c_lon !== 'number' || isNaN(c_lon) || c_lon < -180 || c_lon > 180) {
            console.error(`Error: Invalid Lat/Lon coordinates [${c_lat}, ${c_lon}] for "${c_name}"`);
            hasError = true;
        }

        // 6. URL format
        if (!c_url || (!c_url.startsWith('http://') && !c_url.startsWith('https://'))) {
            console.error(`Error: Invalid URL "${c_url}" for "${c_name}"`);
            hasError = true;
        }

        // 7. Real calendar date checks
        if (!isValidCalendarDate(c_date)) {
            console.error(`Error: Invalid calendar date "${c_date}" for "${c_name}" (expected valid YYYY.MM.DD)`);
            hasError = true;
        }
        if (!isValidCalendarDate(c_deadline)) {
            console.error(`Error: Invalid calendar deadline "${c_deadline}" for "${c_name}" (expected valid YYYY.MM.DD)`);
            hasError = true;
        }
        if (c_deadline > c_date) {
            console.error(`Error: Deadline "${c_deadline}" occurs after holding date "${c_date}" for "${c_name}"`);
            hasError = true;
        }
    });

    // 8. Verify every ?id= deep link in index.html exists in rawConferencesData
    const html = fs.readFileSync('d:/Code/TripConference/index.html', 'utf8');
    const htmlIds = [...new Set([...html.matchAll(/[?&]id=([a-z0-9-]+)/g)].map(m => m[1]))];
    htmlIds.forEach(linkId => {
        if (!ids.has(linkId)) {
            console.error(`Error: Broken deep-link id="${linkId}" in index.html (not found in conferences-data.js)`);
            hasError = true;
        }
    });

    if (hasError) {
        console.log("Validation FAILED.");
        process.exit(1);
    } else {
        console.log("Validation PASSED successfully.");
    }
} catch (e) {
    console.error("Error executing validation:", e);
    process.exit(1);
}
