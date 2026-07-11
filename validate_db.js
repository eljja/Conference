const fs = require('fs');

try {
    const fileContent = fs.readFileSync('d:/Code/TripConference/app.js', 'utf8');
    
    // Extract the rawConferencesData part from app.js
    const startIdx = fileContent.indexOf('const rawConferencesData = [');
    const endIdx = fileContent.indexOf('];', startIdx) + 2;
    
    if (startIdx === -1 || endIdx === -1) {
        console.error("Could not find rawConferencesData array in app.js");
        process.exit(1);
    }
    
    let arrayCode = fileContent.substring(startIdx, endIdx);
    
    // Replace const rawConferencesData with global.rawConferencesData
    arrayCode = arrayCode.replace('const rawConferencesData =', 'global.rawConferencesData =');
    
    // Evaluate the array code
    eval(arrayCode);
    
    const rawConferencesData = global.rawConferencesData;
    console.log("Total Conferences Count:", rawConferencesData.length);
    
    // Group by fields
    const fields = {};
    rawConferencesData.forEach(c => {
        const field = c[3];
        fields[field] = (fields[field] || 0) + 1;
    });
    console.log("Fields Distribution:", fields);
    
    // Check duplicates and lengths
    const ids = new Set();
    let hasError = false;
    
    rawConferencesData.forEach((c, idx) => {
        const id = c[0];
        const name = c[1];
        const field = c[3];
        
        // 1. Check ID duplicates
        if (ids.has(id)) {
            console.error(`Error: Duplicate ID "${id}" at index ${idx}`);
            hasError = true;
        }
        ids.add(id);
        
        // 2. Check structure length
        if (c.length !== 13) {
            console.error(`Error: Invalid row length (${c.length} instead of 13) for "${name}" at index ${idx}`);
            hasError = true;
        }
        
        // 3. Check values
        const [c_id, c_name, c_fullName, c_field, c_cqi, c_gsai, c_location, c_lat, c_lon, c_date, c_organizer, c_isTopTier, c_url] = c;
        if (typeof c_lat !== 'number' || isNaN(c_lat) || typeof c_lon !== 'number' || isNaN(c_lon)) {
            console.error(`Error: Invalid Lat/Lon coordinates [${c_lat}, ${c_lon}] for "${name}"`);
            hasError = true;
        }
        if (!c_url.startsWith('http://') && !c_url.startsWith('https://')) {
            console.error(`Error: Invalid URL "${c_url}" for "${name}"`);
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
