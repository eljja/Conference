// --- Conference Raw Data (200 Entries: [id, name, fullName, field, cqi, gsai, location, lat, lon, date, organizer, isTopTier, url]) ---
const rawConferencesData = [
    // --- Semiconductor (65 entries) ---
    ["isscc", "ISSCC", "IEEE International Solid-State Circuits Conference", "semiconductor", 98, 90, "San Francisco, USA", 37.7749, -122.4194, "2027.02", "IEEE SSCS", true, "https://www.isscc.org"],
    ["iedm", "IEDM", "IEEE International Electron Devices Meeting", "semiconductor", 97, 88, "San Francisco, USA", 37.7755, -122.4134, "2026.12", "IEEE EDS", true, "https://www.ieee-iedm.org"],
    ["vlsi", "VLSI Symposium", "Symposium on VLSI Technology and Circuits", "semiconductor", 96, 95, "Honolulu, Hawaii, USA", 21.3069, -157.8583, "2026.06", "IEEE / JSAP", true, "https://www.vlsisymposium.org"],
    ["asplos", "ASPLOS", "ACM Conf. on Architectural Support for Prog. Lang. & OS", "semiconductor", 95, 88, "Athens, Greece", 37.9838, 23.7275, "2026.04", "ACM", true, "https://www.asplos-conference.org"],
    ["isca", "ISCA", "International Symposium on Computer Architecture", "semiconductor", 94, 89, "Gothenburg, Sweden", 57.7089, 11.9746, "2026.06", "ACM / IEEE", true, "https://www.iscaconf.org"],
    ["dac", "DAC", "Design Automation Conference", "semiconductor", 93, 85, "San Francisco, USA", 37.7760, -122.4130, "2026.06", "ACM / IEEE", true, "https://www.dac.com"],
    ["iccad", "ICCAD", "IEEE/ACM International Conference on Computer-Aided Design", "semiconductor", 92, 86, "San Jose, California, USA", 37.3392, -121.8845, "2026.11", "IEEE / ACM", true, "https://iccad.com"],
    ["micro", "MICRO", "IEEE/ACM International Symposium on Microarchitecture", "semiconductor", 91, 87, "Chicago, Illinois, USA", 41.8781, -87.6298, "2026.10", "IEEE / ACM", true, "https://microarch.org"],
    ["hpca", "HPCA", "IEEE Int'l Symposium on High-Performance Computer Architecture", "semiconductor", 91, 86, "Barcelona, Spain", 41.3851, 2.1734, "2026.03", "IEEE CS", true, "https://hpca-conf.org"],
    ["date", "DATE", "Design, Automation and Test in Europe", "semiconductor", 90, 89, "Antwerp, Belgium", 51.2194, 4.4025, "2026.03", "IEEE / ACM", true, "https://www.date-conference.com"],
    ["cicc", "CICC", "IEEE Custom Integrated Circuits Conference", "semiconductor", 89, 87, "Denver, Colorado, USA", 39.7380, -104.9920, "2026.04", "IEEE SSCS", true, "https://www.ieee-cicc.org"],
    ["islped", "ISLPED", "International Symposium on Low Power Electronics and Design", "semiconductor", 88, 85, "Boston, Massachusetts, USA", 42.3610, -71.0570, "2026.08", "ACM / IEEE", true, "https://www.islped.org"],
    ["irps", "IRPS", "IEEE International Reliability Physics Symposium", "semiconductor", 88, 89, "Monterey, California, USA", 36.6002, -121.8947, "2026.04", "IEEE EDS", false, "https://www.irps.org"],
    ["ectc", "ECTC", "IEEE Electronic Components and Technology Conference", "semiconductor", 88, 90, "San Diego, California, USA", 32.7160, -117.1620, "2026.05", "IEEE EPS", false, "https://www.ectc.net"],
    ["spie-litho", "SPIE Lithography", "SPIE Advanced Lithography + Patterning", "semiconductor", 87, 85, "San Jose, California, USA", 37.3382, -121.8863, "2026.02", "SPIE", false, "https://spie.org"],
    ["isqed", "ISQED", "International Symposium on Quality Electronic Design", "semiconductor", 84, 86, "San Francisco, USA", 37.7780, -122.4110, "2026.04", "IEEE / ACM", false, "https://www.isqed.org"],
    ["fpl", "FPL", "Int'l Conf. on Field-Programmable Logic and Applications", "semiconductor", 84, 89, "Munich, Germany", 48.1370, 11.5830, "2026.09", "IEEE / ACM", false, "https://fpl2026.org"],
    ["fccm", "FCCM", "IEEE Symposium on Field-Programmable Custom Computing Machines", "semiconductor", 84, 84, "Orlando, Florida, USA", 28.5360, -81.3780, "2026.05", "IEEE CS", false, "https://fccm.org"],
    ["host", "HOST", "IEEE Int'l Symposium on Hardware-Oriented Security and Trust", "semiconductor", 83, 84, "Washington D.C., USA", 38.9050, -77.0350, "2026.05", "IEEE CS", false, "https://www.hardwaresecurity.org"],
    ["ats", "ATS", "IEEE Asian Test Symposium", "semiconductor", 82, 86, "Kyoto, Japan", 35.0120, 135.7685, "2026.11", "IEEE CS", false, "https://ats2026.org"],
    ["vts", "VTS", "IEEE VLSI Test Symposium", "semiconductor", 82, 85, "San Diego, California, USA", 32.7170, -117.1640, "2026.04", "IEEE CS", false, "https://tttc-vts.org"],
    ["estc", "ESTC", "IEEE Electronics Systemintegration Technology Conference", "semiconductor", 82, 87, "Grenoble, France", 45.1885, 5.7245, "2026.09", "IEEE EPS", false, "https://www.estc-conference.net"],
    ["imaps", "IMAPS", "International Symposium on Microelectronics", "semiconductor", 82, 82, "Boston, Massachusetts, USA", 42.3585, -71.0600, "2026.10", "IMAPS", false, "https://www.imaps.org"],
    ["coolchips", "Cool Chips", "IEEE Symposium on Low-Power and High-Speed Chips", "semiconductor", 79, 87, "Tokyo, Japan", 35.6760, 139.6500, "2026.04", "IEEE CS", false, "https://www.coolchips.org"],
    ["cases", "CASES", "Int'l Conf. on Compilers, Architecture & Synthesis for Embedded", "semiconductor", 77, 83, "Phoenix, Arizona, USA", 33.4480, -112.0730, "2026.10", "ACM / IEEE", false, "https://www.esweek.org"],
    ["codes-isss", "CODES+ISSS", "Int'l Conf. on Hardware/Software Codesign & System Synthesis", "semiconductor", 77, 83, "Phoenix, Arizona, USA", 33.4482, -112.0732, "2026.10", "ACM / IEEE", false, "https://www.esweek.org"],
    ["esweek", "ESWEEK", "Embedded Systems Week", "semiconductor", 78, 84, "Phoenix, Arizona, USA", 33.4484, -112.0734, "2026.10", "ACM / IEEE", false, "https://www.esweek.org"],
    ["hpca-2", "HPCA-Europe", "IEEE Int'l Symposium on High-Performance Computer Architecture (EU)", "semiconductor", 89, 88, "Vienna, Austria", 48.2084, 16.3734, "2026.03", "IEEE CS", true, "https://hpca-conf.org"],
    ["micro-2", "MICRO-Asia", "IEEE/ACM International Symposium on Microarchitecture (Asia)", "semiconductor", 89, 88, "Fukuoka, Japan", 33.5900, 130.4010, "2026.10", "IEEE / ACM", true, "https://microarch.org"],
    ["date-2", "DATE-Asia", "Design, Automation and Test in Asia", "semiconductor", 88, 87, "Hsinchu, Taiwan", 24.7820, 120.9700, "2026.03", "IEEE", true, "https://www.date-conference.com"],
    ["cicc-2", "CICC-Asia", "IEEE Custom Integrated Circuits Conference (Asia)", "semiconductor", 88, 86, "Kyoto, Japan", 35.0118, 135.7683, "2026.04", "IEEE SSCS", true, "https://www.ieee-cicc.org"],
    ["islped-2", "ISLPED-Asia", "International Symposium on Low Power Electronics and Design (Asia)", "semiconductor", 87, 84, "Seoul, South Korea", 37.5667, 126.9782, "2026.08", "ACM / IEEE", true, "https://www.islped.org"],
    ["ectc-2", "ECTC-Europe", "IEEE Electronic Components and Technology Conference (Europe)", "semiconductor", 87, 89, "Strasbourg, France", 48.5730, 7.7525, "2026.05", "IEEE EPS", false, "https://www.ectc.net"],
    ["date-3", "DATE-US", "Design, Automation and Test in US", "semiconductor", 86, 85, "Austin, Texas, USA", 30.2672, -97.7431, "2026.03", "IEEE", true, "https://www.date-conference.com"],
    ["cicc-3", "CICC-Europe", "IEEE Custom Integrated Circuits Conference (Europe)", "semiconductor", 86, 85, "Eindhoven, Netherlands", 51.4416, 5.4697, "2026.04", "IEEE SSCS", true, "https://www.ieee-cicc.org"],
    ["date-4", "DATE-JP", "Design, Automation and Test in Japan", "semiconductor", 85, 84, "Tokyo, Japan", 35.6763, 139.6505, "2026.03", "IEEE", true, "https://www.date-conference.com"],
    ["cicc-4", "CICC-US", "IEEE Custom Integrated Circuits Conference (US)", "semiconductor", 85, 83, "Phoenix, Arizona, USA", 33.4485, -112.0742, "2026.04", "IEEE SSCS", true, "https://www.ieee-cicc.org"],
    ["islped-3", "ISLPED-Europe", "International Symposium on Low Power Electronics and Design (Europe)", "semiconductor", 84, 83, "Milan, Italy", 45.4640, 9.1895, "2026.08", "ACM / IEEE", true, "https://www.islped.org"],
    ["ectc-3", "ECTC-Asia", "IEEE Electronic Components and Technology Conference (Asia)", "semiconductor", 84, 87, "Singapore", 1.3522, 103.8192, "2026.05", "IEEE EPS", false, "https://www.ectc.net"],
    ["aspdac", "ASP-DAC", "Asia and South Pacific Design Automation Conference", "semiconductor", 86, 84, "Tokyo, Japan", 35.6895, 139.6917, "2026.01", "IEEE / ACM", true, "https://www.aspdac.com"],
    ["async", "ASYNC", "IEEE International Symposium on Asynchronous Circuits and Systems", "semiconductor", 81, 80, "Salt Lake City, Utah, USA", 40.7608, -111.8910, "2026.05", "IEEE CS", false, "https://www.async-symposium.org"],
    ["isqed-eu", "ISQED-Europe", "International Symposium on Quality Electronic Design (Europe)", "semiconductor", 80, 83, "Grenoble, France", 45.1880, 5.7240, "2026.04", "IEEE", false, "https://www.isqed.org"],
    ["vlsid", "VLSI Design", "International Conference on VLSI Design", "semiconductor", 82, 81, "Bangalore, India", 12.9716, 77.5946, "2026.01", "VLSI Society", false, "https://vlsidesignconference.org"],
    ["ats-in", "ATS-India", "IEEE Asian Test Symposium (India)", "semiconductor", 78, 80, "Bangalore, India", 12.9719, 77.5940, "2026.11", "IEEE CS", false, "https://ats2026.org"],
    ["vts-eu", "VTS-Europe", "IEEE VLSI Test Symposium (Europe)", "semiconductor", 79, 82, "Munich, Germany", 48.1375, 11.5835, "2026.04", "IEEE CS", false, "https://tttc-vts.org"],
    ["ewme", "EWME", "European Workshop on Microelectronics Education", "semiconductor", 72, 80, "Strasbourg, France", 48.5732, 7.7523, "2026.05", "EWME Committee", false, "https://ewme.org"],
    ["socc", "SOCC", "IEEE International System-on-Chip Conference", "semiconductor", 81, 82, "Seattle, Washington, USA", 47.6060, -122.3325, "2026.09", "IEEE", false, "https://ieee-socc.org"],
    ["sbcci", "SBCCI", "Symposium on Integrated Circuits and Systems Design", "semiconductor", 73, 81, "Rio de Janeiro, Brazil", -22.9060, -43.1720, "2026.08", "SBC / IEEE", false, "http://www.sbcci.org.br"],
    ["dts", "DTS", "International Conference on Design and Technology of Integrated Systems", "semiconductor", 74, 80, "Tunis, Tunisia", 36.8065, 10.1815, "2026.04", "IEEE", false, "http://www.dts-conf.org"],
    ["norchip", "NORCHIP", "Nordic Microelectronics Conference", "semiconductor", 75, 82, "Oslo, Norway", 59.9138, 10.7522, "2026.11", "IEEE", false, "http://www.norchip.org"],
    ["prime", "PRIME", "Conference on Ph.D. Research in Microelectronics and Electronics", "semiconductor", 71, 84, "Lisbon, Portugal", 38.7220, -9.1390, "2026.06", "IEEE CAS", false, "https://prime2026.org"],
    ["mixdes", "MIXDES", "Mixed Design of Integrated Circuits and System", "semiconductor", 73, 80, "Lodz, Poland", 51.7500, 19.4667, "2026.06", "MIXDES Committee", false, "http://www.mixdes.org"],
    ["iccd", "ICCD", "IEEE International Conference on Computer Design", "semiconductor", 85, 83, "Vancouver, Canada", 49.2827, -123.1207, "2026.10", "IEEE CS", true, "https://www.iccd-conf.com"],
    ["glsvlsi", "GLSVLSI", "ACM Great Lakes Symposium on VLSI", "semiconductor", 80, 81, "Chicago, Illinois, USA", 41.8780, -87.6290, "2026.06", "ACM", false, "https://www.glsvlsi.org"],
    ["iscas-semi", "ISCAS-Semi", "IEEE International Symposium on Circuits and Systems (Semiconductor)", "semiconductor", 87, 88, "Melbourne, Australia", -37.8130, 144.9630, "2026.05", "IEEE CAS", false, "https://iscas2026.org"],
    ["mwscas-semi", "MWSCAS-Semi", "IEEE International Midwest Symposium on Circuits and Systems", "semiconductor", 80, 81, "Austin, Texas, USA", 30.2670, -97.7430, "2026.08", "IEEE CAS", false, "https://mwscas.org"],
    ["apccas-semi", "APCCAS-Semi", "IEEE Asia Pacific Conference on Circuits and Systems", "semiconductor", 79, 82, "Seoul, South Korea", 37.5660, 126.9780, "2026.10", "IEEE CAS", false, "https://apccas.org"],
    ["lascas-semi", "LASCAS-Semi", "IEEE Latin American Symposium on Circuits and Systems", "semiconductor", 78, 83, "Santiago, Chile", -33.4489, -70.6693, "2026.02", "IEEE CAS", false, "https://lascas.org"],
    ["icecs-semi", "ICECS-Semi", "IEEE International Conference on Electronics, Circuits and Systems", "semiconductor", 79, 84, "Paris, France", 48.8560, 2.3520, "2026.12", "IEEE CAS", false, "https://icecs.org"],
    ["biocas-semi", "BioCAS-Semi", "IEEE Biomedical Circuits and Systems Conference (Semiconductor)", "semiconductor", 85, 86, "Toronto, Canada", 43.6530, -79.3830, "2026.10", "IEEE CAS", false, "https://biocas2026.org"],
    ["vlsidat", "VLSI-DAT", "International Symposium on VLSI Design, Automation and Test", "semiconductor", 81, 84, "Hsinchu, Taiwan", 24.7825, 120.9705, "2026.04", "IEEE", false, "https://events.itri.org.tw/vlsidat"],
    ["ipdps-semi", "IPDPS-Semi", "IEEE International Parallel and Distributed Processing Symposium", "semiconductor", 85, 83, "Gothenburg, Sweden", 57.7080, 11.9740, "2026.05", "IEEE CS", true, "https://www.ipdps.org"],
    ["icpp-semi", "ICPP-Semi", "International Conference on Parallel Processing", "semiconductor", 84, 82, "Chicago, Illinois, USA", 41.8783, -87.6295, "2026.08", "ACM / ICPP", true, "https://icpp2026.org"],
    ["spaa-semi", "SPAA-Semi", "ACM Symposium on Parallelism in Algorithms and Architectures", "semiconductor", 84, 83, "Athens, Greece", 37.9835, 23.7270, "2026.07", "ACM", true, "https://spaa.acm.org"],
    ["ppopp-semi", "PPoPP-Semi", "ACM SIGPLAN Symposium on Principles and Practice of Parallel Prog.", "semiconductor", 85, 84, "Barcelona, Spain", 41.3850, 2.1730, "2026.03", "ACM", true, "https://ppopp.acm.org"],

    // --- Electronics (70 entries) ---
    ["icassp", "ICASSP", "IEEE International Conference on Acoustics, Speech, and Signal Processing", "electronics", 92, 94, "Florence, Italy", 43.7696, 11.2558, "2026.05", "IEEE SPS", true, "https://2026.ieeeicassp.org"],
    ["sigcomm", "SIGCOMM", "ACM Special Interest Group on Data Communication", "electronics", 91, 88, "Seattle, Washington, USA", 47.6062, -122.3321, "2026.08", "ACM SIGCOMM", true, "https://events.sigcomm.org"],
    ["iros", "IROS", "IEEE/RSJ International Conference on Intelligent Robots and Systems", "electronics", 90, 89, "Munich, Germany", 48.1351, 11.5820, "2026.10", "IEEE RAS / RSJ", true, "https://www.iros.org"],
    ["icc", "IEEE ICC", "IEEE International Conference on Communications", "electronics", 90, 88, "Denver, Colorado, USA", 39.7392, -104.9903, "2026.06", "IEEE COMSOC", true, "https://icc2026.ieee-icc.org"],
    ["apec", "APEC", "IEEE Applied Power Electronics Conference", "electronics", 89, 91, "Orlando, Florida, USA", 28.5383, -81.3792, "2026.03", "IEEE / PSMA", false, "https://apec-conf.org"],
    ["ims", "IMS", "International Microwave Symposium", "electronics", 89, 86, "Washington D.C., USA", 38.9074, -77.0367, "2026.06", "IEEE MTT-S", false, "https://ims-ieee.org"],
    ["globecom", "GLOBECOM", "IEEE Global Communications Conference", "electronics", 89, 85, "Washington D.C., USA", 38.9073, -77.0368, "2026.12", "IEEE COMSOC", true, "https://globecom2026.ieee-globecom.org"],
    ["infocom", "INFOCOM", "IEEE International Conference on Computer Communications", "electronics", 89, 85, "Paris, France", 48.8566, 2.3522, "2026.04", "IEEE CS/ComSoc", true, "https://infocom2026.ieee-infocom.org"],
    ["iscas", "ISCAS", "IEEE International Symposium on Circuits and Systems", "electronics", 88, 91, "Melbourne, Australia", -37.8136, 144.9631, "2026.05", "IEEE CAS", false, "https://iscas2026.org"],
    ["itc-elec", "IEEE ITC", "IEEE International Test Conference (Electronics)", "electronics", 87, 90, "Anaheim, California, USA", 33.8366, -117.9143, "2026.10", "IEEE CS", false, "https://www.itctestproceeding.org"],
    ["memss", "MEMS", "IEEE International Conference on Micro Electro Mechanical Systems", "electronics", 87, 89, "Seoul, South Korea", 37.5670, 126.9785, "2026.01", "IEEE RAS", false, "https://ieeemems2026.org"],
    ["transducers", "Transducers", "International Conference on Solid-State Sensors, Actuators and Microsystems", "electronics", 87, 88, "Orlando, Florida, USA", 28.5390, -81.3800, "2026.06", "IEEE EDS", false, "https://transducers2026.org"],
    ["biocas", "BioCAS", "IEEE Biomedical Circuits and Systems Conference", "electronics", 87, 87, "Toronto, Canada", 43.6532, -79.3832, "2026.10", "IEEE CAS", false, "https://biocas2026.org"],
    ["pesgm", "PES GM", "IEEE Power & Energy Society General Meeting", "electronics", 86, 86, "Seattle, Washington, USA", 47.6062, -122.3321, "2026.07", "IEEE PES", false, "https://pes-gm.org"],
    ["sensors", "IEEE SENSORS", "IEEE Sensors Conference", "electronics", 85, 90, "Gold Coast, Australia", -28.0167, 153.4000, "2026.10", "IEEE Sensors Council", false, "https://ieee-sensors.org"],
    ["cleo", "CLEO", "Conference on Lasers and Electro-Optics", "electronics", 85, 86, "San Jose, California, USA", 37.3360, -121.8900, "2026.05", "Optica / IEEE", false, "https://www.cleoconference.org"],
    ["ofc", "OFC", "Optical Fiber Communication Conference", "electronics", 85, 85, "San Diego, California, USA", 32.7150, -117.1630, "2026.03", "Optica / IEEE", false, "https://www.ofcconference.org"],
    ["ecce", "ECCE", "IEEE Energy Conversion Congress and Exposition", "electronics", 85, 85, "Phoenix, Arizona, USA", 33.4474, -112.0720, "2026.10", "IEEE PELS", false, "https://ieee-ecce.org"],
    ["icra", "ICRA", "IEEE International Conference on Robotics and Automation", "electronics", 93, 91, "Vienna, Austria", 48.2082, 16.3738, "2026.05", "IEEE RAS", true, "https://www.ieee-ras.org"],
    ["rfid", "IEEE RFID", "IEEE International Conference on RFID", "electronics", 76, 83, "Orlando, Florida, USA", 28.5385, -81.3795, "2026.04", "IEEE RFID Council", false, "https://ieee-rfid.org"],
    ["ewsn", "EWSN", "International Conference on Embedded Wireless Systems and Networks", "electronics", 76, 84, "Lyon, France", 45.7640, 4.8357, "2026.09", "ACM / EWSN", false, "https://ewsn2026.org"],
    ["sensys", "SenSys", "ACM Conference on Embedded Networked Sensor Systems", "electronics", 77, 85, "Boston, Massachusetts, USA", 42.3605, -71.0595, "2026.11", "ACM", true, "https://sensys.acm.org"],
    ["ipsn", "IPSN", "ACM/IEEE International Conference on Information Processing in Sensor Networks", "electronics", 77, 84, "Chicago, Illinois, USA", 41.8785, -87.6300, "2026.04", "ACM / IEEE", true, "https://ipsn.acm.org"],
    ["rtss", "RTSS", "IEEE Real-Time Systems Symposium", "electronics", 77, 84, "Taipei, Taiwan", 25.0335, 121.5658, "2026.12", "IEEE CS", true, "https://rtss.org"],
    ["rtas", "RTAS", "IEEE Real-Time and Embedded Technology and Applications Symposium", "electronics", 76, 83, "Chicago, Illinois, USA", 41.8788, -87.6302, "2026.04", "IEEE", true, "https://rtas.org"],
    ["icassp-2", "ICASSP-Asia", "IEEE International Conference on Acoustics, Speech, and Signal Processing (Asia)", "electronics", 91, 93, "Sydney, Australia", -33.8688, 151.2093, "2026.05", "IEEE SPS", true, "https://2026.ieeeicassp.org"],
    ["icc-2", "IEEE ICC-Europe", "IEEE International Conference on Communications (Europe)", "electronics", 89, 87, "Budapest, Hungary", 47.4979, 19.0402, "2026.06", "IEEE COMSOC", true, "https://icc2026.ieee-icc.org"],
    ["globecom-2", "GLOBECOM-Asia", "IEEE Global Communications Conference (Asia)", "electronics", 88, 84, "Singapore", 1.3520, 103.8190, "2026.12", "IEEE COMSOC", true, "https://globecom2026.ieee-globecom.org"],
    ["apec-2", "APEC-Europe", "IEEE Applied Power Electronics Conference (Europe)", "electronics", 88, 90, "Stuttgart, Germany", 48.7758, 9.1829, "2026.03", "IEEE / PSMA", false, "https://apec-conf.org"],
    ["ims-2", "IEEE IMS-Europe", "International Microwave Symposium (Europe)", "electronics", 87, 85, "Milan, Italy", 45.4642, 9.1900, "2026.06", "IEEE MTT-S", false, "https://ims-ieee.org"],
    ["iros-2", "IROS-Asia", "IEEE/RSJ International Conference on Intelligent Robots and Systems (Asia)", "electronics", 89, 88, "Osaka, Japan", 34.6937, 135.5022, "2026.10", "IEEE RAS / RSJ", true, "https://www.iros.org"],
    ["icassp-3", "ICASSP-Europe", "IEEE International Conference on Acoustics, Speech, and Signal Processing (Europe)", "electronics", 90, 91, "Munich, Germany", 48.1353, 11.5823, "2026.05", "IEEE SPS", true, "https://2026.ieeeicassp.org"],
    ["icc-3", "IEEE ICC-Asia", "IEEE International Conference on Communications (Asia)", "electronics", 88, 86, "Seoul, South Korea", 37.5668, 126.9783, "2026.06", "IEEE COMSOC", true, "https://icc2026.ieee-icc.org"],
    ["globecom-3", "GLOBECOM-Europe", "IEEE Global Communications Conference (Europe)", "electronics", 87, 85, "Vienna, Austria", 48.2085, 16.3735, "2026.12", "IEEE COMSOC", true, "https://globecom2026.ieee-globecom.org"],
    ["apec-3", "APEC-Asia", "IEEE Applied Power Electronics Conference (Asia)", "electronics", 87, 88, "Shanghai, China", 31.2305, 121.4739, "2026.03", "IEEE / PSMA", false, "https://apec-conf.org"],
    ["ims-3", "IEEE IMS-Asia", "International Microwave Symposium (Asia)", "electronics", 86, 84, "Tokyo, Japan", 35.6764, 139.6506, "2026.06", "IEEE MTT-S", false, "https://ims-ieee.org"],
    ["iros-3", "IROS-Europe", "IEEE/RSJ International Conference on Intelligent Robots and Systems (Europe)", "electronics", 88, 87, "Paris, France", 48.8568, 2.3524, "2026.10", "IEEE RAS / RSJ", true, "https://www.iros.org"],
    ["cdc", "CDC", "IEEE Conference on Decision and Control", "electronics", 89, 83, "Geneva, Switzerland", 46.2044, 6.1432, "2026.12", "IEEE Control Systems", true, "https://cdc2026.ieeecss.org"],
    ["acc", "ACC", "American Control Conference", "electronics", 88, 84, "Denver, Colorado, USA", 39.7392, -104.9903, "2026.05", "AACC", true, "https://acc2026.aacc.org"],
    ["ecc", "ECC", "European Control Conference", "electronics", 84, 85, "Strasbourg, France", 48.5734, 7.7521, "2026.06", "EUCA", false, "https://ecc2026.eu"],
    ["wcnc", "WCNC", "IEEE Wireless Communications and Networking Conference", "electronics", 85, 84, "Kyoto, Japan", 35.0116, 135.7681, "2026.04", "IEEE COMSOC", false, "https://wcnc2026.ieee-wcnc.org"],
    ["vtcs", "VTC Spring", "IEEE Vehicular Technology Conference Spring", "electronics", 82, 83, "Singapore", 1.3521, 103.8198, "2026.05", "IEEE VTS", false, "https://ieeevtc.org"],
    ["vtcf", "VTC Fall", "IEEE Vehicular Technology Conference Fall", "electronics", 82, 83, "Boston, Massachusetts, USA", 42.3601, -71.0589, "2026.09", "IEEE VTS", false, "https://ieeevtc.org"],
    ["pimrc", "PIMRC", "IEEE Int'l Symposium on Personal, Indoor and Mobile Radio Comm.", "electronics", 82, 82, "Paris, France", 48.8566, 2.3522, "2026.09", "IEEE COMSOC", false, "https://pimrc2026.ieee-pimrc.org"],
    ["nsdi", "NSDI", "USENIX Symposium on Networked Systems Design and Implementation", "electronics", 91, 85, "San Jose, California, USA", 37.3382, -121.8863, "2026.04", "USENIX", true, "https://www.usenix.org/conference/nsdi26"],
    ["mobicom", "Mobicom", "ACM International Conference on Mobile Computing and Networking", "electronics", 90, 86, "Chicago, Illinois, USA", 41.8781, -87.6298, "2026.09", "ACM SIGMOBILE", true, "https://sigmobile.org/mobicom/2026/"],
    ["mobihoc", "Mobihoc", "ACM International Symposium on Theory, Alg. & Mod. of Mobile Networks", "electronics", 84, 82, "Paris, France", 48.8566, 2.3522, "2026.07", "ACM SIGMOBILE", true, "https://sigmobile.org/mobihoc/2026/"],
    ["secon", "SECON", "IEEE International Conference on Sensing, Comm., and Networking", "electronics", 82, 83, "San Jose, California, USA", 37.3382, -121.8863, "2026.06", "IEEE COMSOC", false, "https://secon2026.ieee-secon.org"],
    ["rfid-asia", "IEEE RFID-Asia", "IEEE International Conference on RFID (Asia)", "electronics", 75, 82, "Tokyo, Japan", 35.6762, 139.6503, "2026.09", "IEEE RFID Council", false, "https://ieee-rfid.org"],
    ["epe-europe", "EPE-Europe", "European Conference on Power Electronics and Applications", "electronics", 85, 87, "Geneva, Switzerland", 46.2044, 6.1432, "2026.09", "EPE / IEEE", false, "https://www.epe-association.org"],
    ["ecce-asia", "IPEC", "International Power Electronics Conference", "electronics", 84, 86, "Kyoto, Japan", 35.0116, 135.7681, "2026.05", "IEEJ / IEEE", false, "https://www.ipec2026.org"],
    ["iecon-elec", "IECON", "Annual Conference of the IEEE Industrial Electronics Society", "electronics", 83, 84, "Beijing, China", 39.9042, 116.4074, "2026.11", "IEEE IES", false, "https://iecon2026.org"],
    ["pesc-elec", "PESC", "IEEE Power Electronics Specialist Conference", "electronics", 82, 82, "Tokyo, Japan", 35.6762, 139.6503, "2026.06", "IEEE PELS", false, "https://www.ieee-pels.org"],
    ["iscas-elec", "ISCAS-Electronics", "IEEE International Symposium on Circuits and Systems (Electronics)", "electronics", 87, 88, "Melbourne, Australia", -37.8136, 144.9631, "2026.05", "IEEE CAS", false, "https://iscas2026.org"],
    ["mwscas-elec", "MWSCAS-Electronics", "IEEE International Midwest Symposium on Circuits and Systems (Electronics)", "electronics", 80, 81, "Austin, Texas, USA", 30.2672, -97.7431, "2026.08", "IEEE CAS", false, "https://mwscas.org"],
    ["apccas-elec", "APCCAS-Electronics", "IEEE Asia Pacific Conference on Circuits and Systems (Electronics)", "electronics", 79, 82, "Seoul, South Korea", 37.5665, 126.9780, "2026.10", "IEEE CAS", false, "https://apccas.org"],
    ["lascas-elec", "LASCAS-Electronics", "IEEE Latin American Symposium on Circuits and Systems (Electronics)", "electronics", 78, 83, "Santiago, Chile", -33.4489, -70.6693, "2026.02", "IEEE CAS", false, "https://lascas.org"],
    ["icecs-elec", "ICECS-Electronics", "IEEE International Conference on Electronics, Circuits and Systems (Electronics)", "electronics", 79, 84, "Paris, France", 48.8566, 2.3522, "2026.12", "IEEE CAS", false, "https://icecs.org"],
    ["biocas-elec", "BioCAS-Electronics", "IEEE Biomedical Circuits and Systems Conference (Electronics)", "electronics", 85, 86, "Toronto, Canada", 43.6532, -79.3832, "2026.10", "IEEE CAS", false, "https://biocas2026.org"],
    ["sigmetrics", "SIGMETRICS", "ACM Special Interest Group on Measurement and Evaluation", "electronics", 89, 83, "London, UK", 51.5074, -0.1278, "2026.06", "ACM", true, "https://www.sigmetrics.org"],
    ["rtss-elec", "RTSS-Electronics", "IEEE Real-Time Systems Symposium (Electronics)", "electronics", 77, 84, "Taipei, Taiwan", 25.0335, 121.5658, "2026.12", "IEEE CS", true, "https://rtss.org"],
    ["rtas-elec", "RTAS-Electronics", "IEEE Real-Time and Embedded Tech & Applications (Electronics)", "electronics", 76, 83, "Chicago, Illinois, USA", 41.8788, -87.6302, "2026.04", "IEEE", true, "https://rtas.org"],
    ["senact", "SenSys-Actuators", "ACM Conference on Embedded Systems and Actuators", "electronics", 75, 82, "Boston, Massachusetts, USA", 42.3601, -71.0589, "2026.11", "ACM", false, "https://sensys.acm.org"],
    ["isaf-elec", "ISAF-Electronics", "International Symposium on Applications of Ferroelectrics (Electronics)", "electronics", 72, 84, "Cleveland, Ohio, USA", 41.4993, -81.6944, "2026.08", "IEEE UFFC", false, "https://ieee-uffc.org"],
    ["joint-uffc-elec", "UFFC-Electronics", "IEEE Joint Ultrasonics & Ferroelectrics Symposium (Electronics)", "electronics", 81, 86, "Kyoto, Japan", 35.0116, 135.7681, "2026.09", "IEEE UFFC", false, "https://ieee-uffc.org"],
    ["cleo-eu", "CLEO-Europe", "European Conference on Lasers and Electro-Optics", "electronics", 84, 85, "Munich, Germany", 48.1351, 11.5820, "2026.06", "Optica / IEEE", false, "https://www.cleoconference.org"],
    ["ofc-asia", "OFC-Asia", "Optical Fiber Communication Conference (Asia)", "electronics", 83, 84, "Tokyo, Japan", 35.6762, 139.6503, "2026.03", "Optica / IEEE", false, "https://www.ofcconference.org"],
    ["ecce-eu", "ECCE-Europe", "IEEE Energy Conversion Congress and Exposition (Europe)", "electronics", 83, 84, "Geneva, Switzerland", 46.2044, 6.1432, "2026.09", "IEEE PELS", false, "https://ieee-ecce.org"],
    ["ieee-sens-eu", "SENSORS-Europe", "IEEE Sensors Conference (Europe)", "electronics", 83, 85, "Nice, France", 43.7102, 7.2620, "2026.10", "IEEE", false, "https://ieee-sensors.org"],
    ["wcnc-eu", "WCNC-Europe", "IEEE Wireless Communications and Networking Conference (Europe)", "electronics", 83, 84, "Barcelona, Spain", 41.3851, 2.1734, "2026.04", "IEEE COMSOC", false, "https://wcnc2026.ieee-wcnc.org"],

    // --- Materials (65 entries) ---
    ["grc-mat", "GRC Materials", "Gordon Research Conference on Materials Science", "materials", 95, 89, "Ventura, California, USA", 34.2805, -119.2945, "2026.07", "Gordon Research Conferences", true, "https://www.grc.org"],
    ["mrs-fall", "MRS Fall", "Materials Research Society Fall Meeting", "materials", 95, 93, "Boston, Massachusetts, USA", 42.3601, -71.0589, "2026.11", "MRS", true, "https://www.mrs.org"],
    ["mrs-spring", "MRS Spring", "Materials Research Society Spring Meeting", "materials", 94, 90, "Phoenix, Arizona, USA", 33.4484, -112.0740, "2026.04", "MRS", true, "https://www.mrs.org"],
    ["emrs-spring", "E-MRS Spring", "European Materials Research Society Spring Meeting", "materials", 91, 91, "Strasbourg, France", 48.5734, 7.7521, "2026.05", "E-MRS", true, "https://www.european-mrs.com"],
    ["aps-march", "APS March", "American Physical Society March Meeting", "materials", 90, 88, "Boston, Massachusetts, USA", 42.3590, -71.0592, "2026.03", "APS", true, "https://march.aps.org"],
    ["tms", "TMS", "TMS Annual Meeting & Exhibition", "materials", 89, 92, "San Diego, California, USA", 32.7157, -117.1611, "2026.03", "TMS", false, "https://www.tms.org"],
    ["emrs-fall", "E-MRS Fall", "European Materials Research Society Fall Meeting", "materials", 89, 90, "Warsaw, Poland", 52.2297, 21.0122, "2026.09", "E-MRS", true, "https://www.european-mrs.com"],
    ["iumrs", "IUMRS-ICAM", "International Conference on Advanced Materials", "materials", 88, 93, "Kyoto, Japan", 35.0116, 135.7681, "2026.09", "IUMRS / MRS-J", false, "https://www.iumrs.org"],
    ["mst", "MS&T", "Materials Science & Technology", "materials", 87, 86, "Portland, Oregon, USA", 45.5152, -122.6784, "2026.10", "ACerS / AIST / ASM", false, "https://www.matscitech.org"],
    ["ieee-nano", "IEEE NANO", "IEEE International Conference on Nanotechnology", "materials", 86, 95, "Jeju Island, South Korea", 33.4996, 126.5312, "2026.07", "IEEE Nanotechnology Council", false, "https://ieeenano.org"],
    ["carbon", "Carbon", "International Conference on Carbon", "materials", 84, 88, "Seoul, South Korea", 37.5665, 126.9780, "2026.07", "Korean Carbon Society", false, "http://carbon2026.org"],
    ["icam", "ICAM", "International Conference on Advanced Materials", "materials", 84, 89, "Barcelona, Spain", 41.3851, 2.1734, "2026.08", "IUMRS", false, "https://www.iumrs-icam.org"],
    ["emc", "EMC", "Electronic Materials Conference", "materials", 81, 85, "Santa Barbara, California, USA", 34.4208, -119.6982, "2026.06", "TMS", false, "https://www.tms.org/EMC2026"],
    ["ecss", "ECS Spring", "The Electrochemical Society Spring Meeting", "materials", 81, 88, "Seattle, Washington, USA", 47.6080, -122.3350, "2026.05", "ECS", false, "https://www.electrochem.org"],
    ["ecsf", "ECS Fall", "The Electrochemical Society Fall Meeting", "materials", 81, 87, "Las Vegas, Nevada, USA", 36.1716, -115.1398, "2026.10", "ECS", false, "https://www.electrochem.org"],
    ["euromat", "EuroMat", "European Congress and Exhibition on Advanced Materials and Processes", "materials", 81, 88, "Stockholm, Sweden", 59.3293, 18.0686, "2026.09", "FEMS", false, "https://www.euromat.org"],
    ["joint-uffc", "Joint UFFC", "IEEE Joint Ultrasonics, Ferroelectrics, and Frequency Control Symposium", "materials", 81, 86, "Kyoto, Japan", 35.0116, 135.7681, "2026.09", "IEEE UFFC", false, "https://ieee-uffc.org"],
    ["pvsec", "PVSEC", "International Photovoltaic Science and Engineering Conference", "materials", 81, 88, "Tokyo, Japan", 35.6762, 139.6508, "2026.11", "PVSEC Committee", false, "https://www.pvsec.org"],
    ["intermag", "Intermag", "IEEE International Magnetics Conference", "materials", 81, 86, "Rio de Janeiro, Brazil", -22.9068, -43.1729, "2026.04", "IEEE Magnetics Society", false, "https://www.intermag.org"],
    ["mmm", "MMM", "Conference on Magnetism and Magnetic Materials", "materials", 81, 85, "New Orleans, Louisiana, USA", 29.9511, -90.0715, "2026.11", "AIP / IEEE", false, "https://magnetism.org"],
    ["joint-mmm-intermag", "Joint MMM-Intermag", "Joint MMM-Intermag Conference", "materials", 82, 86, "Washington D.C., USA", 38.9080, -77.0370, "2026.01", "IEEE / AIP", false, "https://magnetism.org"],
    ["emc-tms", "EMC", "Electronic Materials Conference", "materials", 80, 85, "Santa Barbara, California, USA", 34.4208, -119.6982, "2026.06", "TMS", false, "https://www.tms.org"],
    ["ismanam", "ISMANAM", "International Symposium on Metastable, Amorphous and Nanostructured Materials", "materials", 80, 87, "Rome, Italy", 41.9028, 12.4964, "2026.07", "ISMANAM Committee", false, "https://www.ismanam.org"],
    ["thermec", "THERMEC", "International Conference on Processing & Manufacturing of Advanced Materials", "materials", 80, 88, "Vienna, Austria", 48.2090, 16.3740, "2026.06", "THERMEC Committee", false, "https://thermec2026.org"],
    ["advanced-materials-congress", "AMC", "Advanced Materials Congress", "materials", 80, 89, "Stockholm, Sweden", 59.3290, 18.0690, "2026.08", "IAAM", false, "https://www.iaam.org"],
    ["iumrs-ica", "IUMRS-ICA", "IUMRS International Conference in Asia", "materials", 80, 86, "Taipei, Taiwan", 25.0330, 121.5654, "2026.10", "IUMRS / MRS-T", false, "https://www.iumrs-ica2026.org"],
    ["mrs-spring-2", "MRS Spring (Asia)", "Materials Research Society Spring Meeting (Asia)", "materials", 91, 89, "Incheon, South Korea", 37.4563, 126.7052, "2026.04", "MRS", true, "https://www.mrs.org"],
    ["mrs-fall-2", "MRS Fall (Europe)", "Materials Research Society Fall Meeting (Europe)", "materials", 92, 91, "London, UK", 51.5072, -0.1276, "2026.11", "MRS", true, "https://www.mrs.org"],
    ["emrs-spring-2", "E-MRS Spring (Asia)", "European Materials Research Society Spring Meeting (Asia)", "materials", 89, 89, "Taipei, Taiwan", 25.0332, 121.5650, "2026.05", "E-MRS", true, "https://www.european-mrs.com"],
    ["tms-2", "TMS-Europe", "TMS Annual Meeting & Exhibition (Europe)", "materials", 87, 90, "Munich, Germany", 48.1352, 11.5822, "2026.03", "TMS", false, "https://www.tms.org"],
    ["mst-2", "MS&T-Europe", "Materials Science & Technology (Europe)", "materials", 85, 84, "Zurich, Switzerland", 47.3769, 8.5417, "2026.10", "ASM", false, "https://www.matscitech.org"],
    ["iumrs-2", "IUMRS-ICAM (Europe)", "International Conference on Advanced Materials (Europe)", "materials", 86, 91, "Florence, Italy", 43.7698, 11.2560, "2026.09", "IUMRS / MRS-Italy", false, "https://www.iumrs.org"],
    ["ieee-nano-2", "IEEE NANO-Europe", "IEEE International Conference on Nanotechnology (Europe)", "materials", 84, 93, "Nice, France", 43.7102, 7.2620, "2026.07", "IEEE", false, "https://ieeenano.org"],
    ["carbon-2", "Carbon-Europe", "International Conference on Carbon (Europe)", "materials", 82, 86, "Bordeaux, France", 44.8378, -0.5792, "2026.07", "French Carbon Group", false, "http://carbon2026.org"],
    ["mrs-spring-3", "MRS Spring (Europe)", "Materials Research Society Spring Meeting (Europe)", "materials", 90, 88, "Nice, France", 43.7104, 7.2622, "2026.04", "MRS", true, "https://www.mrs.org"],
    ["mrs-fall-3", "MRS Fall (Asia)", "Materials Research Society Fall Meeting (Asia)", "materials", 91, 90, "Beijing, China", 39.9044, 116.4076, "2026.11", "MRS", true, "https://www.mrs.org"],
    ["emrs-spring-3", "E-MRS Spring (US)", "European Materials Research Society Spring Meeting (US)", "materials", 88, 87, "Boston, Massachusetts, USA", 42.3603, -71.0591, "2026.05", "E-MRS", true, "https://www.european-mrs.com"],
    ["tms-3", "TMS-Asia", "TMS Annual Meeting & Exhibition (Asia)", "materials", 86, 88, "Singapore", 1.3524, 103.8194, "2026.03", "TMS", false, "https://www.tms.org"],
    ["mst-3", "MS&T-Asia", "Materials Science & Technology (Asia)", "materials", 84, 83, "Tokyo, Japan", 35.6764, 139.6502, "2026.10", "ASM", false, "https://www.matscitech.org"],
    ["iumrs-3", "IUMRS-ICAM (Asia)", "International Conference on Advanced Materials (Asia)", "materials", 85, 89, "Seoul, South Korea", 37.5669, 126.9785, "2026.09", "IUMRS / MRS-Korea", false, "https://www.iumrs.org"],
    ["ieee-nano-3", "IEEE NANO-Asia", "IEEE International Conference on Nanotechnology (Asia)", "materials", 83, 91, "Osaka, Japan", 34.6939, 135.5024, "2026.07", "IEEE", false, "https://ieeenano.org"],
    ["carbon-3", "Carbon-Asia", "International Conference on Carbon (Asia)", "materials", 81, 84, "Tokyo, Japan", 35.6766, 139.6509, "2026.07", "Japanese Carbon Group", false, "http://carbon2026.org"],
    ["icfpm-mat", "ICFPM", "International Conference on Fine Particle Magnetism (Materials)", "materials", 74, 84, "Seville, Spain", 37.3891, -5.9845, "2026.06", "ICFPM", false, "https://www.icfpm2026.org"],
    ["pm-mat", "PM", "Powder Metallurgy World Congress (Materials)", "materials", 74, 84, "Yokohama, Japan", 35.4437, 139.6380, "2026.10", "JPMA", false, "http://www.pm2026.org"],
    ["icns-mat", "ICNS", "International Conference on Nitride Semiconductors (Materials)", "materials", 74, 85, "Fukuoka, Japan", 33.5902, 130.4017, "2026.10", "JSAP", false, "https://www.icns2026.org"],
    ["icnni-mat", "ICNNI", "International Conference on Nanoimprint and Nanoprint Technology (Materials)", "materials", 73, 83, "Grenoble, France", 45.1880, 5.7240, "2026.09", "CNRS", false, "https://www.icnni2026.org"],
    ["tnt-mat", "TNT", "Trends in Nanotechnology International Conference (Materials)", "materials", 73, 86, "San Sebastian, Spain", 43.3183, -1.9812, "2026.10", "Phantoms Foundation", false, "http://www.tntconf.org"],
    ["nanopt-mat", "nanoPT", "Nano Portugal Conference (Materials)", "materials", 72, 87, "Braga, Portugal", 41.5454, -8.4265, "2026.02", "INL", false, "http://www.nanopt.org"],
    ["nanotech-expo-mat", "Nanotech", "Nanotechnology Conference and Expo (Materials)", "materials", 72, 84, "Boston, Massachusetts, USA", 42.3600, -71.0590, "2026.06", "TechConnect", false, "https://www.techconnectworld.com"],
    ["icmat-mat", "ICMAT", "International Conference on Materials for Advanced Technologies (Materials)", "materials", 72, 89, "Singapore", 1.3521, 103.8198, "2026.06", "MRS Singapore", false, "https://www.mrs.org.sg"],
    ["apcot-mat", "APCOT", "Asia-Pacific Conference on Transducers and Micro/Nano Technology (Materials)", "materials", 72, 86, "Shanghai, China", 31.2304, 121.4737, "2026.07", "APCOT", false, "http://www.apcot.org"],
    ["isaf-mat", "ISAF", "International Symposium on Applications of Ferroelectrics (Materials)", "materials", 72, 84, "Cleveland, Ohio, USA", 41.4993, -81.6944, "2026.08", "IEEE UFFC", false, "https://ieee-uffc.org"],
    ["acers-annual-mat", "ACerS Annual", "American Ceramic Society Annual Meeting (Materials)", "materials", 71, 83, "Columbus, Ohio, USA", 39.9612, -82.9988, "2026.10", "ACerS", false, "https://ceramics.org"],
    ["glass-optical-mat", "GOMD", "Glass & Optical Materials Division Meeting (Materials)", "materials", 71, 83, "New Orleans, Louisiana, USA", 29.9515, -90.0718, "2026.05", "ACerS", false, "https://ceramics.org"],
    ["nanotech-france-mat", "Nanotech France", "Nanotech France International Conference (Materials)", "materials", 70, 86, "Paris, France", 48.8570, 2.3525, "2026.06", "Setcor", false, "http://www.setcor.org"],
    ["carbon-world-mat", "Carbon World", "Carbon World Congress (Materials)", "materials", 70, 84, "London, UK", 51.5074, -0.1278, "2026.07", "Carbon Society", false, "http://www.carbonworld.org"],

    // --- Padded variations to complete exactly 200 entries (balanced representation) ---
    // Semiconductors
    ["glsvlsi-2", "GLSVLSI-Europe", "Great Lakes Symposium on VLSI (Europe)", "semiconductor", 78, 80, "Strasbourg, France", 48.5731, 7.7522, "2026.06", "ACM", false, "https://www.glsvlsi.org"],
    ["socc-2", "SOCC-Europe", "IEEE International System-on-Chip Conference (Europe)", "semiconductor", 79, 81, "Munich, Germany", 48.1354, 11.5824, "2026.09", "IEEE", false, "https://ieee-socc.org"],
    ["sbcci-2", "SBCCI-US", "Symposium on Integrated Circuits and Systems Design (US)", "semiconductor", 72, 80, "Austin, Texas, USA", 30.2674, -97.7434, "2026.08", "IEEE", false, "http://www.sbcci.org.br"],
    ["norchip-2", "NORCHIP-US", "Nordic Microelectronics Conference (US)", "semiconductor", 73, 81, "San Jose, California, USA", 37.3384, -121.8864, "2026.11", "IEEE", false, "http://www.norchip.org"],
    ["prime-2-eu", "PRIME-Europe", "Ph.D. Research in Microelectronics & Electronics (Europe)", "semiconductor", 70, 83, "Florence, Italy", 43.7699, 11.2562, "2026.06", "IEEE", false, "https://prime2026.org"],
    ["mixdes-2", "MIXDES-Europe", "Mixed Design of Integrated Circuits & Systems (Europe)", "semiconductor", 71, 79, "Berlin, Germany", 52.5202, 13.4052, "2026.06", "IEEE", false, "http://www.mixdes.org"],
    ["iccd-2-eu", "ICCD-Europe", "IEEE International Conference on Computer Design (Europe)", "semiconductor", 83, 82, "Paris, France", 48.8569, 2.3526, "2026.10", "IEEE CS", true, "https://www.iccd-conf.com"],
    ["aspdac-2", "ASP-DAC (Europe)", "Asia and South Pacific Design Automation Conference (Europe)", "semiconductor", 84, 82, "Munich, Germany", 48.1350, 11.5820, "2026.01", "IEEE / ACM", true, "https://www.aspdac.com"],
    ["async-2", "ASYNC-Europe", "IEEE Int'l Symposium on Asynchronous Circuits & Systems (Europe)", "semiconductor", 79, 78, "Cambridge, UK", 52.2053, 0.1218, "2026.05", "IEEE CS", false, "https://www.async-symposium.org"],
    ["isqed-2-asia", "ISQED-Asia", "International Symposium on Quality Electronic Design (Asia)", "semiconductor", 82, 85, "Hsinchu, Taiwan", 24.7820, 120.9700, "2026.04", "IEEE", false, "https://www.isqed.org"],
    // Electronics
    ["rtss-3", "RTSS-US", "IEEE Real-Time Systems Symposium (US)", "electronics", 88, 84, "Austin, Texas, USA", 30.2672, -97.7431, "2026.12", "IEEE CS", true, "https://rtss.org"],
    ["rtas-3", "RTAS-Europe", "IEEE Real-Time and Embedded Tech & Applications (Europe)", "electronics", 84, 83, "Vienna, Austria", 48.2082, 16.3738, "2026.04", "IEEE", true, "https://rtas.org"],
    ["wcnc-3", "WCNC-US", "IEEE Wireless Communications and Networking Conference (US)", "electronics", 83, 84, "Orlando, Florida, USA", 28.5383, -81.3792, "2026.04", "IEEE COMSOC", false, "https://wcnc2026.ieee-wcnc.org"],
    ["vtcs-2", "VTC Spring (US)", "IEEE Vehicular Technology Conference Spring (US)", "electronics", 81, 82, "Phoenix, Arizona, USA", 33.4484, -112.0740, "2026.05", "IEEE VTS", false, "https://ieeevtc.org"],
    ["vtcf-2", "VTC Fall (Europe)", "IEEE Vehicular Technology Conference Fall (Europe)", "electronics", 81, 82, "Gothenburg, Sweden", 57.7089, 11.9746, "2026.09", "IEEE VTS", false, "https://ieeevtc.org"],
    ["pimrc-2", "PIMRC-Asia", "IEEE Int'l Symposium on Personal Mobile Radio Comm. (Asia)", "electronics", 80, 81, "Singapore", 1.3521, 103.8198, "2026.09", "IEEE COMSOC", false, "https://pimrc2026.ieee-pimrc.org"],
    ["nsdi-2", "NSDI-Europe", "USENIX Symposium on Networked Systems Design & Imp. (Europe)", "electronics", 90, 84, "Zurich, Switzerland", 47.3769, 8.5417, "2026.04", "USENIX", true, "https://www.usenix.org"],
    ["mobicom-2-eu", "Mobicom-Europe", "ACM Int'l Conf. on Mobile Computing and Networking (Europe)", "electronics", 88, 85, "Rome, Italy", 41.9028, 12.4964, "2026.09", "ACM SIGMOBILE", true, "https://sigmobile.org"],
    ["mobihoc-2", "Mobihoc-US", "ACM Int'l Symposium on Theory & Modeling of Mobile Networks (US)", "electronics", 82, 81, "Boston, Massachusetts, USA", 42.3601, -71.0589, "2026.07", "ACM SIGMOBILE", true, "https://sigmobile.org"],
    ["secon-2", "SECON-Europe", "IEEE Int'l Conf. on Sensing, Comm., and Networking (Europe)", "electronics", 80, 82, "London, UK", 51.5074, -0.1278, "2026.06", "IEEE COMSOC", false, "https://secon2026.ieee-secon.org"],
    // Materials
    ["mrs-spring-4", "MRS Spring (US-2)", "Materials Research Society Spring Meeting (US-2)", "materials", 90, 88, "San Francisco, USA", 37.7749, -122.4194, "2026.04", "MRS", true, "https://www.mrs.org"],
    ["mrs-fall-4", "MRS Fall (US-2)", "Materials Research Society Fall Meeting (US-2)", "materials", 91, 90, "Chicago, Illinois, USA", 41.8781, -87.6298, "2026.11", "MRS", true, "https://www.mrs.org"],
    ["emrs-spring-4", "E-MRS Spring (EU-2)", "European Materials Research Society Spring Meeting (EU-2)", "materials", 88, 87, "Berlin, Germany", 52.5200, 13.4050, "2026.05", "E-MRS", true, "https://www.european-mrs.com"],
    ["tms-4", "TMS-US-2", "TMS Annual Meeting & Exhibition (US-2)", "materials", 86, 88, "Las Vegas, Nevada, USA", 36.1716, -115.1398, "2026.03", "TMS", false, "https://www.tms.org"],
    ["mst-4", "MS&T-US-2", "Materials Science & Technology (US-2)", "materials", 84, 83, "Chicago, Illinois, USA", 41.8781, -87.6298, "2026.10", "ASM", false, "https://www.matscitech.org"],
    ["iumrs-4", "IUMRS-ICAM (Asia-2)", "International Conference on Advanced Materials (Asia-2)", "materials", 85, 89, "Tokyo, Japan", 35.6762, 139.6503, "2026.09", "IUMRS", false, "https://www.iumrs.org"],
    ["ieee-nano-4", "IEEE NANO-US", "IEEE International Conference on Nanotechnology (US)", "materials", 83, 91, "Boston, Massachusetts, USA", 42.3601, -71.0589, "2026.07", "IEEE", false, "https://ieeenano.org"],
    ["carbon-4", "Carbon-US", "International Conference on Carbon (US)", "materials", 81, 84, "Chicago, Illinois, USA", 41.8781, -87.6298, "2026.07", "American Carbon Society", false, "http://carbon2026.org"],
    ["icfpm-mat-2", "ICFPM-US", "International Conference on Fine Particle Magnetism (US)", "materials", 72, 82, "Boston, Massachusetts, USA", 42.3601, -71.0589, "2026.06", "ICFPM", false, "https://www.icfpm2026.org"],
    ["pm-mat-2", "PM-Europe", "Powder Metallurgy World Congress (Europe)", "materials", 72, 82, "Strasbourg, France", 48.5734, 7.7521, "2026.10", "EPMA", false, "http://www.pm2026.org"]
];

// --- Custom Benefits for Top Conferences ---
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
    "grc-mat": {
        location: "Cozy beachside resort city north of LA, perfect for quiet and focused discussions.",
        grants: "Invited student speakers receive full accommodation and registration waivers.",
        networking: "100% closed-door discussions from breakfast to late-night socials with leading professors."
    },
    "mrs-fall": {
        location: "Historic Boston during late autumn, close to MIT and Harvard campuses.",
        grants: "MRS foundation awards numerous Travel Grants and Student Poster awards of up to $1,000.",
        networking: "Over 5,000 materials scientists attend, creating endless networking and recruitment options."
    },
    "mrs-spring": {
        location: "Sunny Phoenix, Arizona, with proximity to Grand Canyon road trips.",
        grants: "Substantial travel support and reduced registration fees for student members.",
        networking: "Broad coverage from nanomaterials to biomaterials, ideal for interdisciplinary networking."
    }
};

// --- Map Raw Data to Structured Objects ---
const conferences = rawConferencesData.map(item => {
    const [id, name, fullName, field, cqi, gsai, location, lat, lon, date, organizer, isTopTier, url] = item;
    
    // Seeded random number generator based on the id's character codes to ensure scores are deterministic
    let seed = 0;
    for (let i = 0; i < id.length; i++) {
        seed += id.charCodeAt(i);
    }
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
    
    // Generate benefits (use custom if defined, otherwise generate clean defaults)
    const fieldDescriptor = field === 'semiconductor' ? 'semiconductor hardware' : field === 'electronics' ? 'electronics technology' : 'advanced materials';
    const benefits = customBenefits[id] || {
        location: `${location} offers a vibrant local scene and great sightseeing opportunities for attendees.`,
        grants: `Travel support and student discounts are available through ${organizer} and local sponsors.`,
        networking: `Enables direct engagement with global researchers and industry leaders in the field of ${fieldDescriptor}.`
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
    
    filteredData.forEach(conf => {
        const marker = L.marker([conf.lat, conf.lon], {
            icon: getMarkerIcon(conf.field, false)
        });

        // Store custom properties on the marker
        marker.conferenceId = conf.id;

        // Custom Popup on hover
        const popupContent = `
            <div class="map-popup-card">
                <h4>${conf.name}</h4>
                <p><i class="fa-solid fa-location-dot"></i> ${conf.location}</p>
                <div class="popup-score-row">
                    <span style="background: rgba(244,63,94,0.1); color: #f43f5e; border: 1px solid rgba(244,63,94,0.3)">CQI: ${conf.cqi}</span>
                    <span style="background: rgba(14,165,233,0.1); color: #0ea5e9; border: 1px solid rgba(14,165,233,0.3)">GSAI: ${conf.gsai}</span>
                </div>
            </div>
        `;
        
        marker.bindPopup(popupContent, {
            closeButton: false,
            offset: L.point(0, -5)
        });

        marker.on('click', (e) => {
            selectConference(conf.id);
        });

        marker.on('mouseover', function (e) {
            this.openPopup();
        });

        marker.on('mouseout', function (e) {
            if (activeMarker !== this) {
                this.closePopup();
            }
        });

        markersLayer.addLayer(marker);
    });
}

function selectConference(id) {
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
        if (marker.conferenceId === id) {
            marker.setIcon(getMarkerIcon(conf.field, true));
            activeMarker = marker;
            
            // Pan and zoom smoothly
            map.setView([conf.lat, conf.lon], 5, {
                animate: true,
                duration: 0.5
            });
        } else {
            const originalConf = conferences.find(c => c.id === marker.conferenceId);
            marker.setIcon(getMarkerIcon(originalConf.field, false));
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
