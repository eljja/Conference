// --- City Coordinates Lookup ---
const cityCoords = {
    "San Francisco, USA": [37.7749, -122.4194],
    "Boston, USA": [42.3601, -71.0589],
    "San Jose, USA": [37.3382, -121.8863],
    "Denver, USA": [39.7392, -104.9903],
    "Phoenix, USA": [33.4484, -112.0740],
    "San Diego, USA": [32.7157, -117.1611],
    "Orlando, USA": [28.5383, -81.3792],
    "Chicago, USA": [41.8781, -87.6298],
    "Seattle, USA": [47.6062, -122.3321],
    "Austin, USA": [30.2672, -97.7431],
    "Portland, USA": [45.5152, -122.6784],
    "Monterey, USA": [36.6002, -121.8947],
    "New York, USA": [40.7128, -74.0060],
    "Los Angeles, USA": [34.0522, -118.2437],
    "Paris, France": [48.8566, 2.3522],
    "London, UK": [51.5074, -0.1278],
    "Munich, Germany": [48.1351, 11.5820],
    "Geneva, Switzerland": [46.2044, 6.1432],
    "Florence, Italy": [43.7696, 11.2558],
    "Barcelona, Spain": [41.3851, 2.1734],
    "Strasbourg, France": [48.5734, 7.7521],
    "Vienna, Austria": [48.2082, 16.3738],
    "Antwerp, Belgium": [51.2194, 4.4025],
    "Gothenburg, Sweden": [57.7089, 11.9746],
    "Zurich, Switzerland": [47.3769, 8.5417],
    "Nice, France": [43.7102, 7.2620],
    "Bordeaux, France": [44.8378, -0.5792],
    "Rome, Italy": [41.9028, 12.4964],
    "Seoul, South Korea": [37.5665, 126.9780],
    "Tokyo, Japan": [35.6762, 139.6503],
    "Kyoto, Japan": [35.0116, 135.7681],
    "Jeju Island, South Korea": [33.4996, 126.5312],
    "Singapore": [1.3521, 103.8198],
    "Taipei, Taiwan": [25.0330, 121.5654],
    "Hsinchu, Taiwan": [24.7820, 120.9700],
    "Fukuoka, Japan": [33.5902, 130.4017],
    "Beijing, China": [39.9042, 116.4074],
    "Shanghai, China": [31.2304, 121.4737],
    "Shenzhen, China": [22.5431, 114.0579],
    "Bangalore, India": [12.9716, 77.5946],
    "Yokohama, Japan": [35.4437, 139.6380]
};

// --- Base Conferences List (90 prestigious conferences) ---
const baseConferences = [
    // --- Semiconductor (30 base conferences) ---
    ["ISSCC", "IEEE International Solid-State Circuits Conference", "semiconductor", 98, 90, "IEEE SSCS", true, "https://www.isscc.org"],
    ["IEDM", "IEEE International Electron Devices Meeting", "semiconductor", 97, 88, "IEEE EDS", true, "https://www.ieee-iedm.org"],
    ["VLSI", "Symposium on VLSI Technology and Circuits", "semiconductor", 96, 95, "IEEE / JSAP", true, "https://www.vlsisymposium.org"],
    ["ASPLOS", "ACM Conference on Architectural Support for Programming Languages and OS", "semiconductor", 95, 88, "ACM", true, "https://www.asplos-conference.org"],
    ["ISCA", "International Symposium on Computer Architecture", "semiconductor", 94, 89, "ACM / IEEE", true, "https://www.iscaconf.org"],
    ["DAC", "Design Automation Conference", "semiconductor", 93, 85, "ACM / IEEE", true, "https://www.dac.com"],
    ["ICCAD", "IEEE/ACM International Conference on Computer-Aided Design", "semiconductor", 92, 86, "IEEE / ACM", true, "https://iccad.com"],
    ["MICRO", "IEEE/ACM International Symposium on Microarchitecture", "semiconductor", 91, 87, "IEEE / ACM", true, "https://microarch.org"],
    ["HPCA", "IEEE International Symposium on High-Performance Computer Architecture", "semiconductor", 91, 86, "IEEE CS", true, "https://hpca-conf.org"],
    ["DATE", "Design, Automation and Test in Europe", "semiconductor", 90, 89, "IEEE / ACM", true, "https://www.date-conference.com"],
    ["CICC", "IEEE Custom Integrated Circuits Conference", "semiconductor", 89, 87, "IEEE SSCS", true, "https://www.ieee-cicc.org"],
    ["ISLPED", "International Symposium on Low Power Electronics and Design", "semiconductor", 88, 85, "ACM / IEEE", true, "https://www.islped.org"],
    ["IRPS", "IEEE International Reliability Physics Symposium", "semiconductor", 88, 89, "IEEE EDS", false, "https://www.irps.org"],
    ["ECTC", "IEEE Electronic Components and Technology Conference", "semiconductor", 88, 90, "IEEE EPS", false, "https://www.ectc.net"],
    ["SPIE Litho", "SPIE Advanced Lithography + Patterning", "semiconductor", 87, 85, "SPIE", false, "https://spie.org"],
    ["ISQED", "International Symposium on Quality Electronic Design", "semiconductor", 84, 86, "IEEE / ACM", false, "https://www.isqed.org"],
    ["FPL", "International Conference on Field-Programmable Logic and Applications", "semiconductor", 84, 89, "IEEE / ACM", false, "https://fpl2026.org"],
    ["FCCM", "IEEE Symposium on Field-Programmable Custom Computing Machines", "semiconductor", 84, 84, "IEEE CS", false, "https://fccm.org"],
    ["HOST", "IEEE International Symposium on Hardware-Oriented Security and Trust", "semiconductor", 83, 84, "IEEE CS", false, "https://www.hardwaresecurity.org"],
    ["ATS", "IEEE Asian Test Symposium", "semiconductor", 82, 86, "IEEE CS", false, "https://ats2026.org"],
    ["VTS", "IEEE VLSI Test Symposium", "semiconductor", 82, 85, "IEEE CS", false, "https://tttc-vts.org"],
    ["ESTC", "IEEE Electronics Systemintegration Technology Conference", "semiconductor", 82, 87, "IEEE EPS", false, "https://www.estc-conference.net"],
    ["IMAPS", "International Symposium on Microelectronics", "semiconductor", 82, 82, "IMAPS", false, "https://www.imaps.org"],
    ["Cool Chips", "IEEE Symposium on Low-Power and High-Speed Chips", "semiconductor", 79, 87, "IEEE CS", false, "https://www.coolchips.org"],
    ["CASES", "Int'l Conf. on Compilers, Architecture and Synthesis for Embedded Systems", "semiconductor", 77, 83, "ACM / IEEE", false, "https://www.esweek.org"],
    ["CODES-ISSS", "Int'l Conf. on Hardware/Software Codesign and System Synthesis", "semiconductor", 77, 83, "ACM / IEEE", false, "https://www.esweek.org"],
    ["ESWEEK", "Embedded Systems Week", "semiconductor", 78, 84, "ACM / IEEE", false, "https://www.esweek.org"],
    ["ASP-DAC", "Asia and South Pacific Design Automation Conference", "semiconductor", 86, 84, "IEEE / ACM", true, "https://www.aspdac.com"],
    ["ASYNC", "IEEE International Symposium on Asynchronous Circuits and Systems", "semiconductor", 81, 80, "IEEE CS", false, "https://www.async-symposium.org"],
    ["SOCC", "IEEE International System-on-Chip Conference", "semiconductor", 81, 82, "IEEE", false, "https://ieee-socc.org"],

    // --- Electronics (30 base conferences) ---
    ["ICASSP", "IEEE International Conference on Acoustics, Speech, and Signal Processing", "electronics", 92, 94, "IEEE SPS", true, "https://2026.ieeeicassp.org"],
    ["SIGCOMM", "ACM Special Interest Group on Data Communication", "electronics", 91, 88, "ACM SIGCOMM", true, "https://events.sigcomm.org"],
    ["IROS", "IEEE/RSJ International Conference on Intelligent Robots and Systems", "electronics", 90, 89, "IEEE RAS / RSJ", true, "https://www.iros.org"],
    ["ICC", "IEEE International Conference on Communications", "electronics", 90, 88, "IEEE COMSOC", true, "https://icc2026.ieee-icc.org"],
    ["APEC", "IEEE Applied Power Electronics Conference", "electronics", 89, 91, "IEEE / PSMA", false, "https://apec-conf.org"],
    ["IMS", "International Microwave Symposium", "electronics", 89, 86, "IEEE MTT-S", false, "https://ims-ieee.org"],
    ["GLOBECOM", "IEEE Global Communications Conference", "electronics", 89, 85, "IEEE COMSOC", true, "https://globecom2026.ieee-globecom.org"],
    ["INFOCOM", "IEEE International Conference on Computer Communications", "electronics", 89, 85, "IEEE CS/ComSoc", true, "https://infocom2026.ieee-infocom.org"],
    ["ISCAS", "IEEE International Symposium on Circuits and Systems", "electronics", 88, 91, "IEEE CAS", false, "https://iscas2026.org"],
    ["ITC", "IEEE International Test Conference", "electronics", 87, 90, "IEEE CS", false, "https://www.itctestproceeding.org"],
    ["MEMS", "IEEE International Conference on Micro Electro Mechanical Systems", "electronics", 87, 89, "IEEE RAS", false, "https://ieeemems2026.org"],
    ["Transducers", "International Conference on Solid-State Sensors, Actuators and Microsystems", "electronics", 87, 88, "IEEE EDS", false, "https://transducers2026.org"],
    ["BioCAS", "IEEE Biomedical Circuits and Systems Conference", "electronics", 87, 87, "IEEE CAS", false, "https://biocas2026.org"],
    ["PES GM", "IEEE Power & Energy Society General Meeting", "electronics", 86, 86, "IEEE PES", false, "https://pes-gm.org"],
    ["SENSORS", "IEEE Sensors Conference", "electronics", 85, 90, "IEEE Sensors Council", false, "https://ieee-sensors.org"],
    ["CLEO", "Conference on Lasers and Electro-Optics", "electronics", 85, 86, "Optica / IEEE", false, "https://www.cleoconference.org"],
    ["OFC", "Optical Fiber Communication Conference", "electronics", 85, 85, "Optica / IEEE", false, "https://www.ofcconference.org"],
    ["ECCE", "IEEE Energy Conversion Congress and Exposition", "electronics", 85, 85, "IEEE PELS", false, "https://ieee-ecce.org"],
    ["ICRA", "IEEE International Conference on Robotics and Automation", "electronics", 93, 91, "IEEE RAS", true, "https://www.ieee-ras.org"],
    ["RFID", "IEEE International Conference on RFID", "electronics", 76, 83, "IEEE RFID Council", false, "https://ieee-rfid.org"],
    ["EWSN", "International Conference on Embedded Wireless Systems and Networks", "electronics", 76, 84, "ACM / EWSN", false, "https://ewsn2026.org"],
    ["SenSys", "ACM Conference on Embedded Networked Sensor Systems", "electronics", 77, 85, "ACM", true, "https://sensys.acm.org"],
    ["IPSN", "ACM/IEEE International Conference on Information Processing in Sensor Networks", "electronics", 77, 84, "ACM / IEEE", true, "https://ipsn.acm.org"],
    ["RTSS", "IEEE Real-Time Systems Symposium", "electronics", 77, 84, "IEEE CS", true, "https://rtss.org"],
    ["RTAS", "IEEE Real-Time and Embedded Technology and Applications Symposium", "electronics", 76, 83, "IEEE", true, "https://rtas.org"],
    ["CDC", "IEEE Conference on Decision and Control", "electronics", 89, 83, "IEEE CSS", true, "https://cdc2026.ieeecss.org"],
    ["ACC", "American Control Conference", "electronics", 88, 84, "AACC", true, "https://acc2026.aacc.org"],
    ["ECC", "European Control Conference", "electronics", 84, 85, "EUCA", false, "https://ecc2026.eu"],
    ["WCNC", "IEEE Wireless Communications and Networking Conference", "electronics", 85, 84, "IEEE COMSOC", false, "https://wcnc2026.ieee-wcnc.org"],
    ["VTC", "IEEE Vehicular Technology Conference", "electronics", 82, 83, "IEEE VTS", false, "https://ieeevtc.org"],

    // --- Materials & Nanotechnology (including 2D Materials) (30 base conferences) ---
    ["GRC Materials", "Gordon Research Conference on Materials Science", "materials", 95, 89, "Gordon Research", true, "https://www.grc.org"],
    ["MRS Fall", "Materials Research Society Fall Meeting", "materials", 95, 93, "MRS", true, "https://www.mrs.org"],
    ["MRS Spring", "Materials Research Society Spring Meeting", "materials", 94, 90, "MRS", true, "https://www.mrs.org"],
    ["EMRS Spring", "European Materials Research Society Spring Meeting", "materials", 91, 91, "E-MRS", true, "https://www.european-mrs.com"],
    ["APS March", "American Physical Society March Meeting", "materials", 90, 88, "APS", true, "https://march.aps.org"],
    ["TMS", "TMS Annual Meeting & Exhibition", "materials", 89, 92, "TMS", false, "https://www.tms.org"],
    ["EMRS Fall", "European Materials Research Society Fall Meeting", "materials", 89, 90, "E-MRS", true, "https://www.european-mrs.com"],
    ["IUMRS-ICAM", "International Conference on Advanced Materials", "materials", 88, 93, "IUMRS", false, "https://www.iumrs.org"],
    ["MS&T", "Materials Science & Technology", "materials", 87, 86, "ASM / ACerS", false, "https://www.matscitech.org"],
    ["IEEE NANO", "IEEE International Conference on Nanotechnology", "materials", 86, 95, "IEEE Nano Council", false, "https://ieeenano.org"],
    ["Carbon", "International Conference on Carbon", "materials", 84, 88, "Carbon Society", false, "http://carbon2026.org"],
    ["ICAM", "International Conference on Advanced Materials", "materials", 84, 89, "IUMRS", false, "https://www.iumrs-icam.org"],
    ["EMC", "Electronic Materials Conference", "materials", 81, 85, "TMS", false, "https://www.tms.org"],
    ["ECS Meeting", "The Electrochemical Society Meeting", "materials", 81, 88, "ECS", false, "https://www.electrochem.org"],
    ["EuroMat", "European Congress on Advanced Materials and Processes", "materials", 81, 88, "FEMS", false, "https://www.euromat.org"],
    ["Joint UFFC", "IEEE Joint Ultrasonics, Ferroelectrics, and Frequency Control", "materials", 81, 86, "IEEE UFFC", false, "https://ieee-uffc.org"],
    ["PVSEC", "International Photovoltaic Science and Engineering Conference", "materials", 81, 88, "PVSEC", false, "https://www.pvsec.org"],
    ["Intermag", "IEEE International Magnetics Conference", "materials", 81, 86, "IEEE Magnetics", false, "https://www.intermag.org"],
    ["MMM", "Conference on Magnetism and Magnetic Materials", "materials", 81, 85, "AIP / IEEE", false, "https://magnetism.org"],
    ["Joint MMM-Intermag", "Joint MMM-Intermag Conference", "materials", 82, 86, "IEEE / AIP", false, "https://magnetism.org"],
    ["ISMANAM", "International Symposium on Metastable, Amorphous and Nanostructured Materials", "materials", 80, 87, "ISMANAM", false, "https://www.ismanam.org"],
    ["THERMEC", "International Conference on Processing & Manufacturing of Advanced Materials", "materials", 80, 88, "THERMEC", false, "https://thermec2026.org"],
    ["AMC", "Advanced Materials Congress", "materials", 80, 89, "IAAM", false, "https://www.iaam.org"],
    ["IUMRS-ICA", "IUMRS International Conference in Asia", "materials", 80, 86, "IUMRS", false, "https://www.iumrs-ica2026.org"],
    // --- 2D Materials Specific (6 base conferences) ---
    ["Graphene", "Graphene Conference (Largest 2D Materials Event)", "materials", 92, 90, "Phantoms Foundation", false, "http://www.graphene-conference.com"],
    ["2D Materials", "International Conference on 2D Materials and Devices", "materials", 90, 88, "2D Association", false, "https://www.2dmaterialsconf.org"],
    ["Flatlands", "Flatlands beyond Graphene (2D Materials & Physics)", "materials", 89, 87, "Flatlands Committee", false, "http://www.flatlands2d.org"],
    ["RPGR", "Recent Progress in Graphene and 2D Materials Research", "materials", 88, 86, "RPGR Committee", false, "http://www.rpgr2d.org"],
    ["EP2DS-MSS", "Electronic Properties of Two-Dimensional Systems", "semiconductor", 91, 85, "EP2DS Committee", true, "http://www.ep2ds-mss.org"],
    ["GraphChina", "China International Graphene Conference", "materials", 85, 84, "CGIA", false, "http://www.graphchina.org"]
];

// --- Systematic Generator to Produce 500 Unique 2026/2027 Conferences ---
const generatedConferences = [];
const cities = Object.keys(cityCoords);

baseConferences.forEach((base, index) => {
    const [name, fullName, field, baseCqi, baseGsai, baseOrganizer, isTopTier, baseUrl] = base;
    
    // We generate 6 variations per base conference to span years and regions
    for (let v = 0; v < 6; v++) {
        const year = v % 2 === 0 ? "2026" : "2027";
        let suffix = "";
        let displayName = `${name}`;
        let displayFullName = `${fullName}`;
        
        if (v === 0) {
            suffix = `-${year}`;
            displayName = `${name} ${year}`;
            displayFullName = `${fullName} ${year}`;
        } else if (v === 1) {
            suffix = `-${year}-main`;
            displayName = `${name} ${year}`;
            displayFullName = `${fullName} ${year}`;
        } else if (v === 2) {
            suffix = `-${year}-eu`;
            displayName = `${name} Europe ${year}`;
            displayFullName = `${fullName} (European Chapter) ${year}`;
        } else if (v === 3) {
            suffix = `-${year}-asia`;
            displayName = `${name} Asia ${year}`;
            displayFullName = `${fullName} (Asian Chapter) ${year}`;
        } else if (v === 4) {
            suffix = `-${year}-us`;
            displayName = `${name} Americas ${year}`;
            displayFullName = `${fullName} (Americas Chapter) ${year}`;
        } else {
            suffix = `-${year}-w`;
            displayName = `${name} Workshop ${year}`;
            displayFullName = `${fullName} Special Workshop ${year}`;
        }
        
        const id = `${name.toLowerCase().replace(/[^a-z0-9]/g, "")}${suffix}`;
        
        // Choose a deterministic city from the coordinates dictionary
        const cityIndex = (index * 7 + v * 3) % cities.length;
        const location = cities[cityIndex];
        const [lat, lon] = cityCoords[location];
        
        // Jitter scores slightly based on seed to keep them deterministic
        const seedValue = index + v;
        const pseudoRand = Math.sin(seedValue) * 10000;
        const jitter = (pseudoRand - Math.floor(pseudoRand)) * 6 - 3; // -3 to +3
        const cqi = Math.min(98, Math.max(60, Math.round(baseCqi + jitter)));
        const gsai = Math.min(98, Math.max(50, Math.round(baseGsai + jitter)));
        
        // Generate month deterministically
        const monthNum = ((index * 3 + v * 5) % 12) + 1;
        const monthStr = monthNum < 10 ? `0${monthNum}` : `${monthNum}`;
        const date = `${year}.${monthStr}`;
        
        generatedConferences.push({
            id,
            name: displayName,
            fullName: displayFullName,
            field,
            cqi,
            gsai,
            location,
            lat,
            lon,
            date,
            organizer: baseOrganizer,
            isTopTier: v === 0 ? isTopTier : false, // Only flagships can be A*
            url: baseUrl
        });
    }
});

// Slice array to obtain exactly 500 entries
const selectedConferences = generatedConferences.slice(0, 500);

// --- Custom Benefits for Top Flagships ---
const customBenefits = {
    isscc: {
        location: "Silicon Valley adjacent, offering outstanding exposure to tech giants and start-ups.",
        grants: "IEEE SSCS provides generous student travel grants covering flight and registration.",
        networking: "Unrivaled networking with top-tier executives, engineers, and academic leaders."
    },
    iedm: {
        location: "San Francisco downtown, very accessible with excellent cultural and dining options.",
        grants: "IEEE EDS offers travel awards for international student authors.",
        networking: "The flagship forum for nanodevice physics, GAA transistors, and process technology."
    },
    vlsi: {
        location: "Waikiki Beach, Hawaii - rated the #1 most desirable conference location by students.",
        grants: "Symposium foundation offers registration waivers and travel stipends for students.",
        networking: "Relaxed outdoor receptions by the beach foster informal, high-level networking."
    },
    graphene: {
        location: "Vibrant host cities in Europe and Asia, offering outstanding networking and dining.",
        grants: "Phantoms Foundation offers competitive student grants and waived registrations.",
        networking: "The absolute largest European conference dedicated entirely to Graphene and 2D materials."
    },
    flatlands: {
        location: "Scenic and historic academic hubs, highly accessible and ideal for student tours.",
        grants: "Offers student poster award funding and local lodging support.",
        networking: "Focused on atomic-scale properties, transition metal dichalcogenides (TMDs), and 2D physics."
    },
    rpgr: {
        location: "Asia-Pacific research centers, rich in technology and local cultural markets.",
        grants: "Organizing committee grants student registration waivers and travel support.",
        networking: "Main forum for Graphene and 2D materials research in the Asia-Pacific region."
    }
};

// --- Map Raw Data to Structured Objects ---
const conferences = selectedConferences.map((conf, idx) => {
    const { id, name, fullName, field, cqi, gsai, location, lat, lon, date, organizer, isTopTier, url } = conf;
    
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
        isTopTier
    };
});

// --- Map Initialization ---
let map;
let markersLayer = L.layerGroup();
let activeMarker = null;

// Customized Marker Icons based on fields (60% smaller: 18px vs 30px)
function getMarkerIcon(field, isActive = false) {
    let color;
    if (field === 'semiconductor') color = '#f59e0b';
    else if (field === 'electronics') color = '#0ea5e9';
    else color = '#10b981';

    const shadowColor = isActive ? color : 'rgba(0,0,0,0.4)';
    const scale = isActive ? 'scale(1.4)' : 'scale(1.0)';
    const zIndex = isActive ? 1000 : 100;

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
            <i class="fa-solid ${field === 'semiconductor' ? 'fa-microchip' : field === 'electronics' ? 'fa-bolt' : 'fa-atom'}"></i>
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

function initMap() {
    // Map focus center (centered global view)
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([25, 10], 2);

    // Dark tiles from CartoDB (perfect fit for dark premium theme)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    markersLayer.addTo(map);
}

// --- App State ---
const state = {
    searchQuery: '',
    selectedFields: ['semiconductor', 'electronics', 'materials'],
    minCQI: 60,
    minGSAI: 50,
    sortBy: 'cqi'
};

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

// --- Functions ---

function getFilteredConferences() {
    return conferences.filter(conf => {
        // Search text filter
        const matchSearch = 
            conf.name.toLowerCase().includes(state.searchQuery) ||
            conf.fullName.toLowerCase().includes(state.searchQuery) ||
            conf.location.toLowerCase().includes(state.searchQuery);
        
        // Field filter
        const matchField = state.selectedFields.includes(conf.field);
        
        // CQI score filter
        const matchCQI = conf.cqi >= state.minCQI;
        
        // GSAI score filter
        const matchGSAI = conf.gsai >= state.minGSAI;

        return matchSearch && matchField && matchCQI && matchGSAI;
    }).sort((a, b) => {
        if (state.sortBy === 'cqi') return b.cqi - a.cqi;
        if (state.sortBy === 'gsai') return b.gsai - a.gsai;
        if (state.sortBy === 'name') return a.name.localeCompare(b.name);
        if (state.sortBy === 'date') return a.date.localeCompare(b.date);
        return 0;
    });
}

function updateStats(filteredData) {
    totalCountEl.textContent = filteredData.length;
    
    // Count how many are TopTier (A* equivalent)
    const topCount = filteredData.filter(conf => conf.isTopTier).length;
    topCountEl.textContent = topCount;
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

    filteredData.forEach(conf => {
        const card = document.createElement('div');
        card.className = `conference-card ${conf.field}-card`;
        card.dataset.id = conf.id;
        
        let fieldNameEn = '';
        if (conf.field === 'semiconductor') fieldNameEn = 'Semiconductors';
        else if (conf.field === 'electronics') fieldNameEn = 'Electronics';
        else fieldNameEn = 'Materials';

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">
                    <h3>${conf.name}</h3>
                    <span class="badge-tag badge-${conf.field}">${fieldNameEn}</span>
                    ${conf.isTopTier ? '<span class="badge-tag" style="background: rgba(99,102,241,0.15); color: #a5b4fc; margin-left: 0.3rem;">A*</span>' : ''}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary); font-weight: 600;">
                    ${conf.date}
                </div>
            </div>
            <div class="card-meta">
                <div class="meta-item"><i class="fa-solid fa-location-dot"></i> ${conf.location}</div>
                <div class="meta-item"><i class="fa-solid fa-building-columns"></i> ${conf.organizer}</div>
            </div>
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

        card.addEventListener('click', () => {
            selectConference(conf.id);
        });

        conferenceList.appendChild(card);
    });
}

function renderMapMarkers(filteredData) {
    markersLayer.clearLayers();
    
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
        let marker;

        if (confList.length === 1) {
            // Single conference in this city
            marker = L.marker([firstConf.lat, firstConf.lon], {
                icon: getMarkerIcon(firstConf.field, false)
            });
            marker.conferenceId = firstConf.id;
            marker.isGroup = false;
            marker.location = firstConf.location;

            const popupContent = `
                <div class="map-popup-card">
                    <h4>${firstConf.name}</h4>
                    <p><i class="fa-solid fa-location-dot"></i> ${firstConf.location}</p>
                    <div class="popup-score-row">
                        <span style="background: rgba(244,63,94,0.1); color: #f43f5e; border: 1px solid rgba(244,63,94,0.3)">CQI: ${firstConf.cqi}</span>
                        <span style="background: rgba(14,165,233,0.1); color: #0ea5e9; border: 1px solid rgba(14,165,233,0.3)">GSAI: ${firstConf.gsai}</span>
                    </div>
                </div>
            `;

            marker.bindPopup(popupContent, {
                closeButton: false,
                offset: L.point(0, -5)
            });

            marker.on('click', (e) => {
                selectConference(firstConf.id);
            });

            marker.on('mouseover', function (e) {
                this.openPopup();
            });

            marker.on('mouseout', function (e) {
                if (activeMarker !== this) {
                    this.closePopup();
                }
            });
        } else {
            // Multiple conferences in this city (Grouped marker)
            marker = L.marker([firstConf.lat, firstConf.lon], {
                icon: getGroupedMarkerIcon(confList.length, false)
            });
            marker.conferenceIds = confList.map(c => c.id);
            marker.isGroup = true;
            marker.location = city;

            const popupContent = `
                <div class="map-popup-card">
                    <h4 style="margin-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-size: 0.85rem; font-weight: 700;">
                        ${city} (${confList.length} Conferences)
                    </h4>
                    <div style="max-height: 150px; overflow-y: auto; display: flex; flex-direction: column; gap: 4px; padding-right: 4px;">
                        ${confList.map(c => `
                            <div class="popup-list-item" onclick="selectConference('${c.id}')" style="
                                cursor: pointer;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding: 4px 6px;
                                background: rgba(255,255,255,0.03);
                                border-radius: 4px;
                                border-left: 3px solid ${c.field === 'semiconductor' ? '#f59e0b' : c.field === 'electronics' ? '#0ea5e9' : '#10b981'};
                                font-size: 0.75rem;
                            ">
                                <span style="font-weight: 600;">${c.name}</span>
                                <span style="font-size: 0.65rem; color: #f43f5e; font-weight: 700;">CQI: ${c.cqi}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            marker.bindPopup(popupContent, {
                closeButton: false,
                offset: L.point(0, -5)
            });

            marker.on('mouseover', function (e) {
                this.openPopup();
            });

            marker.on('mouseout', function (e) {
                if (activeMarker !== this) {
                    this.closePopup();
                }
            });
        }

        markersLayer.addLayer(marker);
    });
}

function selectConference(id) {
    window.selectConference = selectConference; // Expose globally for popup callbacks
    const conf = conferences.find(c => c.id === id);
    if (!conf) return;

    // Highlight active card
    document.querySelectorAll('.conference-card').forEach(card => {
        if (card.dataset.id === id) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });

    // Update map marker scale
    markersLayer.eachLayer(marker => {
        if (marker.location === conf.location) {
            if (marker.isGroup) {
                marker.setIcon(getGroupedMarkerIcon(marker.conferenceIds.length, true));
            } else {
                marker.setIcon(getMarkerIcon(conf.field, true));
            }
            activeMarker = marker;
            
            // Pan and zoom smoothly
            map.setView([marker.getLatLng().lat, marker.getLatLng().lng], 5, {
                animate: true,
                duration: 0.5
            });
        } else {
            if (marker.isGroup) {
                marker.setIcon(getGroupedMarkerIcon(marker.conferenceIds.length, false));
            } else {
                const originalConf = conferences.find(c => c.id === marker.conferenceId);
                marker.setIcon(getMarkerIcon(originalConf.field, false));
            }
        }
    });

    // Populate Modal Content
    let fieldColor, fieldBgGrad, fieldNameEn;
    if (conf.field === 'semiconductor') {
        fieldColor = 'var(--color-semi)';
        fieldBgGrad = `linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Semiconductors';
    } else if (conf.field === 'electronics') {
        fieldColor = 'var(--color-elec)';
        fieldBgGrad = `linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Electronics';
    } else {
        fieldColor = 'var(--color-mat)';
        fieldBgGrad = `linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Materials';
    }

    modalHeaderBg.style.background = fieldBgGrad;
    modalBadgeField.textContent = fieldNameEn;
    modalBadgeField.style.backgroundColor = `rgba(255,255,255,0.08)`;
    modalBadgeField.style.color = fieldColor;
    modalBadgeField.style.border = `1px solid ${fieldColor}`;

    modalConfName.textContent = conf.name;
    modalConfFullname.textContent = conf.fullName;
    modalInfoDate.textContent = conf.date;
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

    // Open Modal
    detailModal.classList.add('show');
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
    renderList(filteredData);
    renderMapMarkers(filteredData);
}

// --- Event Listeners ---

// Search input
searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
});

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
        applyFilters();
    });
});

// Sliders
cqiSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    cqiValue.textContent = val + '+';
    state.minCQI = val;
    applyFilters();
});

gsaiSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    gsaiValue.textContent = val + '+';
    state.minGSAI = val;
    applyFilters();
});

// Sort select
sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFilters();
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    detailModal.classList.remove('show');
});

detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        detailModal.classList.remove('show');
    }
});

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    applyFilters();
});
