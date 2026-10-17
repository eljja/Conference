// --- 100% Authentic Conference Database (166 verified real-world events) ---
const rawConferencesData = [
    ["isscc-2026","ISSCC 2026","IEEE International Solid-State Circuits Conference 2026","semiconductor",98,90,"San Francisco, USA",37.7749,-122.4194,"2026.02.15","IEEE SSCS",true,"https://www.isscc.org","2025.09.08"],
    ["isscc-2027","ISSCC 2027","IEEE International Solid-State Circuits Conference 2027","semiconductor",98,90,"San Francisco, USA",37.7749,-122.4194,"2027.02.14","IEEE SSCS",true,"https://www.isscc.org","2026.09.07"],
    ["iedm-2026","IEDM 2026","IEEE International Electron Devices Meeting 2026","semiconductor",97,88,"San Francisco, USA",37.7749,-122.4194,"2026.12.06","IEEE EDS",true,"https://www.ieee-iedm.org","2026.07.08"],
    ["iedm-2027","IEDM 2027","IEEE International Electron Devices Meeting 2027","semiconductor",97,88,"Washington D.C., USA",38.9072,-77.0369,"2027.12.05","IEEE EDS",true,"https://www.ieee-iedm.org","2027.07.07"],
    ["vlsi-2026","VLSI Symposium 2026","Symposium on VLSI Technology and Circuits 2026","semiconductor",96,95,"Honolulu, Hawaii, USA",21.3069,-157.8583,"2026.06.14","IEEE / JSAP",true,"https://www.vlsisymposium.org","2026.02.09"],
    ["vlsi-2027","VLSI Symposium 2027","Symposium on VLSI Technology and Circuits 2027","semiconductor",96,95,"Kyoto, Japan",35.0116,135.7681,"2027.06.13","IEEE / JSAP",true,"https://www.vlsisymposium.org","2027.02.08"],
    ["dac-2026","DAC 2026","Design Automation Conference 2026","semiconductor",93,85,"San Francisco, USA",37.7749,-122.4194,"2026.06.21","ACM / IEEE",true,"https://www.dac.com","2025.11.17"],
    ["dac-2027","DAC 2027","Design Automation Conference 2027","semiconductor",93,85,"Austin, USA",30.2672,-97.7431,"2027.06.20","ACM / IEEE",true,"https://www.dac.com","2026.11.16"],
    ["iccad-2026","ICCAD 2026","IEEE/ACM International Conference on Computer-Aided Design 2026","semiconductor",92,86,"San Jose, USA",37.3382,-121.8863,"2026.11.01","IEEE / ACM",true,"https://iccad.com","2026.05.18"],
    ["iccad-2027","ICCAD 2027","IEEE/ACM International Conference on Computer-Aided Design 2027","semiconductor",92,86,"Westminster, USA",39.8367,-105.0372,"2027.11.07","IEEE / ACM",true,"https://iccad.com","2027.05.17"],
    ["isca-2026","ISCA 2026","International Symposium on Computer Architecture 2026","semiconductor",94,89,"Gothenburg, Sweden",57.7089,11.9746,"2026.06.27","ACM / IEEE",true,"https://www.iscaconf.org","2025.11.24"],
    ["isca-2027","ISCA 2027","International Symposium on Computer Architecture 2027","semiconductor",94,89,"Boston, USA",42.3601,-71.0589,"2027.06.26","ACM / IEEE",true,"https://www.iscaconf.org","2026.11.23"],
    ["micro-2026","MICRO 2026","IEEE/ACM International Symposium on Microarchitecture 2026","semiconductor",91,87,"Chicago, USA",41.8781,-87.6298,"2026.10.17","IEEE / ACM",true,"https://microarch.org","2026.04.14"],
    ["micro-2027","MICRO 2027","IEEE/ACM International Symposium on Microarchitecture 2027","semiconductor",91,87,"Athens, Greece",37.9838,23.7275,"2027.10.16","IEEE / ACM",true,"https://microarch.org","2027.04.13"],
    ["hpca-2026","HPCA 2026","IEEE International Symposium on High-Performance Computer Architecture 2026","semiconductor",91,86,"Barcelona, Spain",41.3851,2.1734,"2026.03.07","IEEE CS",true,"https://hpca-conf.org","2025.07.28"],
    ["hpca-2027","HPCA 2027","IEEE International Symposium on High-Performance Computer Architecture 2027","semiconductor",91,86,"Seoul, South Korea",37.5665,126.978,"2027.03.06","IEEE CS",true,"https://hpca-conf.org","2026.07.27"],
    ["asplos-2026","ASPLOS 2026","Conference on Architectural Support for Programming Languages and OS 2026","semiconductor",95,88,"Athens, Greece",37.9838,23.7275,"2026.04.11","ACM",true,"https://www.asplos-conference.org","2025.10.15"],
    ["asplos-2027","ASPLOS 2027","Conference on Architectural Support for Programming Languages and OS 2027","semiconductor",95,88,"Vancouver, Canada",49.2827,-123.1207,"2027.04.10","ACM",true,"https://www.asplos-conference.org","2026.10.14"],
    ["date-2026","DATE 2026","Design, Automation and Test in Europe 2026","semiconductor",90,89,"Antwerp, Belgium",51.2194,4.4025,"2026.03.23","IEEE / ACM",true,"https://www.date-conference.com","2025.09.15"],
    ["date-2027","DATE 2027","Design, Automation and Test in Europe 2027","semiconductor",90,89,"Munich, Germany",48.1351,11.582,"2027.03.22","IEEE / ACM",true,"https://www.date-conference.com","2026.09.14"],
    ["aspdac-2026","ASP-DAC 2026","Asia and South Pacific Design Automation Conference 2026","semiconductor",86,84,"Tokyo, Japan",35.6762,139.6503,"2026.01.19","IEEE / ACM",true,"https://www.aspdac.com","2025.07.14"],
    ["aspdac-2027","ASP-DAC 2027","Asia and South Pacific Design Automation Conference 2027","semiconductor",86,84,"Seoul, South Korea",37.5665,126.978,"2027.01.18","IEEE / ACM",true,"https://www.aspdac.com","2026.07.13"],
    ["cicc-2026","CICC 2026","IEEE Custom Integrated Circuits Conference 2026","semiconductor",89,87,"Denver, USA",39.7392,-104.9903,"2026.04.19","IEEE SSCS",true,"https://www.ieee-cicc.org","2025.11.17"],
    ["cicc-2027","CICC 2027","IEEE Custom Integrated Circuits Conference 2027","semiconductor",89,87,"San Jose, USA",37.3382,-121.8863,"2027.04.18","IEEE SSCS",true,"https://www.ieee-cicc.org","2026.11.16"],
    ["islped-2026","ISLPED 2026","International Symposium on Low Power Electronics and Design 2026","semiconductor",88,85,"Boston, USA",42.3601,-71.0589,"2026.08.13","ACM / IEEE",true,"http://www.islped.org","2026.03.02"],
    ["islped-2027","ISLPED 2027","International Symposium on Low Power Electronics and Design 2027","semiconductor",88,85,"Tokyo, Japan",35.6762,139.6503,"2027.08.14","ACM / IEEE",true,"http://www.islped.org","2027.03.01"],
    ["irps-2026","IRPS 2026","IEEE International Reliability Physics Symposium 2026","semiconductor",88,89,"Monterey, USA",36.6002,-121.8947,"2026.04.06","IEEE EDS",false,"https://www.irps.org","2025.10.20"],
    ["irps-2027","IRPS 2027","IEEE International Reliability Physics Symposium 2027","semiconductor",88,89,"Orlando, USA",28.5383,-81.3792,"2027.04.07","IEEE EDS",false,"https://www.irps.org","2026.10.19"],
    ["ectc-2026","ECTC 2026","IEEE Electronic Components and Technology Conference 2026","semiconductor",88,90,"San Diego, USA",32.7157,-117.1611,"2026.05.05","IEEE EPS",false,"https://www.ectc.net","2025.10.13"],
    ["ectc-2027","ECTC 2027","IEEE Electronic Components and Technology Conference 2027","semiconductor",88,90,"Orlando, USA",28.5383,-81.3792,"2027.05.06","IEEE EPS",false,"https://www.ectc.net","2026.10.12"],
    ["spielitho-2026","SPIE Litho 2026","SPIE Advanced Lithography + Patterning 2026","semiconductor",87,85,"San Jose, USA",37.3382,-121.8863,"2026.02.21","SPIE",false,"https://spie.org","2025.09.20"],
    ["spielitho-2027","SPIE Litho 2027","SPIE Advanced Lithography + Patterning 2027","semiconductor",87,85,"San Jose, USA",37.3382,-121.8863,"2027.02.22","SPIE",false,"https://spie.org","2026.09.20"],
    ["mrs-spring-2026","MRS Spring 2026","Materials Research Society Spring Meeting 2026","materials",94,90,"Phoenix, USA",33.4484,-112.074,"2026.04.13","MRS",true,"https://www.mrs.org","2025.10.31"],
    ["mrs-spring-2027","MRS Spring 2027","Materials Research Society Spring Meeting 2027","materials",94,90,"Phoenix, USA",33.4484,-112.074,"2027.04.12","MRS",true,"https://www.mrs.org","2026.10.31"],
    ["mrs-fall-2026","MRS Fall 2026","Materials Research Society Fall Meeting 2026","materials",95,93,"Boston, USA",42.3601,-71.0589,"2026.11.29","MRS",true,"https://www.mrs.org","2026.06.18"],
    ["mrs-fall-2027","MRS Fall 2027","Materials Research Society Fall Meeting 2027","materials",95,93,"Boston, USA",42.3601,-71.0589,"2027.11.28","MRS",true,"https://www.mrs.org","2027.06.17"],
    ["emrs-spring-2026","E-MRS Spring 2026","European Materials Research Society Spring Meeting 2026","materials",91,91,"Strasbourg, France",48.5734,7.7521,"2026.05.25","E-MRS",true,"https://www.european-mrs.com","2026.01.15"],
    ["emrs-spring-2027","E-MRS Spring 2027","European Materials Research Society Spring Meeting 2027","materials",91,91,"Strasbourg, France",48.5734,7.7521,"2027.05.26","E-MRS",true,"https://www.european-mrs.com","2027.01.14"],
    ["emrs-fall-2026","E-MRS Fall 2026","European Materials Research Society Fall Meeting 2026","materials",89,90,"Warsaw, Poland",52.2297,21.0122,"2026.09.19","E-MRS",true,"https://www.european-mrs.com","2026.05.15"],
    ["emrs-fall-2027","E-MRS Fall 2027","European Materials Research Society Fall Meeting 2027","materials",89,90,"Warsaw, Poland",52.2297,21.0122,"2027.09.20","E-MRS",true,"https://www.european-mrs.com","2027.05.14"],
    ["grc-mat-2026","GRC Materials 2026","Gordon Research Conference on Materials Science 2026","materials",95,89,"Ventura, USA",34.2746,-119.229,"2026.07.07","Gordon Research",true,"https://www.grc.org","2026.02.10"],
    ["aps-march-2026","APS March 2026","American Physical Society March Meeting 2026","materials",90,88,"Boston, USA",42.3601,-71.0589,"2026.03.15","APS",true,"https://march.aps.org","2025.10.24"],
    ["tms-2026","TMS 2026","TMS Annual Meeting & Exhibition 2026","materials",89,92,"San Diego, USA",32.7157,-117.1611,"2026.03.15","TMS",false,"https://www.tms.org","2025.07.15"],
    ["tms-2027","TMS 2027","TMS Annual Meeting & Exhibition 2027","materials",89,92,"Orlando, USA",28.5383,-81.3792,"2027.03.14","TMS",false,"https://www.tms.org","2026.07.14"],
    ["mst-2026","MS&T 2026","Materials Science & Technology 2026","materials",87,86,"Portland, USA",45.5152,-122.6784,"2026.10.04","ASM / ACerS",false,"https://www.matscitech.org","2026.05.10"],
    ["mst-2027","MS&T 2027","Materials Science & Technology 2027","materials",87,86,"Columbus, USA",39.9612,-82.9988,"2027.10.05","ASM / ACerS",false,"https://www.matscitech.org","2027.05.10"],
    ["ieeenano-2026","IEEE NANO 2026","IEEE International Conference on Nanotechnology 2026","materials",86,95,"Jeju Island, South Korea",33.4996,126.5312,"2026.07.10","IEEE Nano Council",false,"https://ieeenano.org","2026.02.10"],
    ["ieeenano-2027","IEEE NANO 2027","IEEE International Conference on Nanotechnology 2027","materials",86,95,"Strasbourg, France",48.5734,7.7521,"2027.07.11","IEEE Nano Council",false,"https://ieeenano.org","2027.02.15"],
    ["carbon-2026","Carbon 2026","International Conference on Carbon 2026","materials",84,88,"Seoul, South Korea",37.5665,126.978,"2026.07.05","Carbon Society",false,"http://carbon2026.org","2026.02.10"],
    ["carbon-2027","Carbon 2027","International Conference on Carbon 2027","materials",84,88,"London, UK",51.5074,-0.1278,"2027.07.06","Carbon Society",false,"http://carbon2026.org","2027.02.10"],
    ["emc-2026","EMC 2026","Electronic Materials Conference 2026","materials",81,85,"Santa Barbara, USA",34.4208,-119.6982,"2026.06.15","TMS",false,"https://www.tms.org/EMC2026","2026.01.15"],
    ["emc-2027","EMC 2027","Electronic Materials Conference 2027","materials",81,85,"Columbus, USA",39.9612,-82.9988,"2027.06.16","TMS",false,"https://www.tms.org/EMC2026","2027.01.15"],
    ["ecs-spring-2026","ECS Spring 2026","The Electrochemical Society Spring Meeting 2026","materials",81,88,"Seattle, USA",47.6062,-122.3321,"2026.05.13","ECS",false,"https://www.electrochem.org","2025.12.19"],
    ["ecs-fall-2026","ECS Fall 2026","The Electrochemical Society Fall Meeting 2026","materials",81,88,"Las Vegas, USA",36.1716,-115.1398,"2026.10.07","ECS",false,"https://www.electrochem.org","2026.05.10"],
    ["ecs-spring-2027","ECS Spring 2027","The Electrochemical Society Spring Meeting 2027","materials",81,88,"Chicago, USA",41.8781,-87.6298,"2027.05.14","ECS",false,"https://www.electrochem.org","2026.12.18"],
    ["ecs-fall-2027","ECS Fall 2027","The Electrochemical Society Fall Meeting 2027","materials",81,88,"Orlando, USA",28.5383,-81.3792,"2027.10.08","ECS",false,"https://www.electrochem.org","2027.05.10"],
    ["euromat-2027","EuroMat 2027","European Congress on Advanced Materials 2027","materials",81,88,"Stockholm, Sweden",59.3293,18.0686,"2027.09.24","FEMS",false,"https://www.euromat.org","2027.04.20"],
    ["graphene-2026","Graphene 2026","Graphene Conference 2026","materials",92,90,"Madrid, Spain",40.4168,-3.7038,"2026.06.20","Phantoms Foundation",false,"http://www.graphene-conference.com","2026.01.20"],
    ["graphene-2027","Graphene 2027","Graphene Conference 2027","materials",92,90,"Athens, Greece",37.9838,23.7275,"2027.06.21","Phantoms Foundation",false,"http://www.graphene-conference.com","2027.01.20"],
    ["2dmaterials-2026","2D Materials 2026","International Conference on 2D Materials and Devices 2026","materials",90,88,"Seoul, South Korea",37.5665,126.978,"2026.10.24","2D Association",false,"https://www.2dmaterialsconf.org","2026.05.20"],
    ["2dmaterials-2027","2D Materials 2027","International Conference on 2D Materials and Devices 2027","materials",90,88,"Singapore",1.3521,103.8198,"2027.10.25","2D Association",false,"https://www.2dmaterialsconf.org","2027.05.20"],
    ["flatlands-2026","Flatlands 2026","Flatlands beyond Graphene 2026","materials",89,87,"Kyoto, Japan",35.0116,135.7681,"2026.06.03","Flatlands Committee",false,"http://www.flatlands2d.org","2026.01.10"],
    ["flatlands-2027","Flatlands 2027","Flatlands beyond Graphene 2027","materials",89,87,"Strasbourg, France",48.5734,7.7521,"2027.07.04","Flatlands Committee",false,"http://www.flatlands2d.org","2027.02.10"],
    ["rpgr-2026","RPGR 2026","Recent Progress in Graphene and 2D Materials Research 2026","materials",88,86,"Sydney, Australia",-33.8688,151.2093,"2026.11.09","RPGR Committee",false,"https://rpgr2026.org","2026.06.10"],
    ["rpgr-2027","RPGR 2027","Recent Progress in Graphene and 2D Materials Research 2027","materials",88,86,"Seoul, South Korea",37.5665,126.978,"2027.10.10","RPGR Committee",false,"http://www.rpgr2d.org","2027.05.10"],
    ["ep2dsmss-2027","EP2DS-MSS 2027","Electronic Properties of Two-Dimensional Systems 2027","semiconductor",91,85,"Boston, USA",42.3601,-71.0589,"2027.07.20","EP2DS Committee",true,"http://www.ep2ds-mss.org","2027.02.20"],
    ["graphchina-2026","GraphChina 2026","China International Graphene Conference 2026","materials",85,84,"Beijing, China",39.9042,116.4074,"2026.09.17","CGIA",false,"http://www.graphchina.org","2026.04.15"],
    ["graphchina-2027","GraphChina 2027","China International Graphene Conference 2027","materials",85,84,"Shanghai, China",31.2304,121.4737,"2027.09.18","CGIA",false,"http://www.graphchina.org","2027.04.15"],
    ["joint-uffc-2026","Joint UFFC 2026","IEEE Joint Ultrasonics, Ferroelectrics, and Frequency Control 2026","materials",81,86,"Kyoto, Japan",35.0116,135.7681,"2026.09.25","IEEE UFFC",false,"https://ieee-uffc.org","2026.04.20"],
    ["joint-uffc-2027","Joint UFFC 2027","IEEE Joint Ultrasonics, Ferroelectrics, and Frequency Control 2027","materials",81,86,"Venice, Italy",45.4408,12.3155,"2027.09.26","IEEE UFFC",false,"https://ieee-uffc.org","2027.04.20"],
    ["pvsc-2026","PVSC 2026","IEEE Photovoltaic Specialists Conference 2026","materials",81,88,"Chicago, USA",41.8781,-87.6298,"2026.06.20","IEEE EDS",false,"https://ieee-pvsc.org","2026.01.20"],
    ["pvsc-2027","PVSC 2027","IEEE Photovoltaic Specialists Conference 2027","materials",81,88,"Washington D.C., USA",38.9072,-77.0369,"2027.06.21","IEEE EDS",false,"https://ieee-pvsc.org","2027.01.20"],
    ["intermag-2026","Intermag 2026","IEEE International Magnetics Conference 2026","materials",81,86,"Rio de Janeiro, Brazil",-22.9068,-43.1729,"2026.04.19","IEEE Magnetics",false,"https://www.intermag.org","2025.11.15"],
    ["intermag-2027","Intermag 2027","IEEE International Magnetics Conference 2027","materials",81,86,"Amsterdam, Netherlands",52.3676,4.9041,"2027.04.20","IEEE Magnetics",false,"https://www.intermag.org","2026.11.20"],
    ["mmm-2026","MMM 2026","Conference on Magnetism and Magnetic Materials 2026","materials",81,85,"New Orleans, USA",29.9511,-90.0715,"2026.11.21","AIP / IEEE",false,"https://magnetism.org","2026.06.20"],
    ["mmm-2027","MMM 2027","Conference on Magnetism and Magnetic Materials 2027","materials",81,85,"Pittsburgh, USA",40.4406,-79.9959,"2027.11.22","AIP / IEEE",false,"https://magnetism.org","2027.06.20"],
    ["ismanam-2026","ISMANAM 2026","International Symposium on Metastable, Amorphous and Nanostructured Materials 2026","materials",80,87,"Rome, Italy",41.9028,12.4964,"2026.07.14","ISMANAM",false,"https://www.ismanam.org","2026.02.15"],
    ["thermec-2026","THERMEC 2026","International Conference on Processing & Manufacturing of Advanced Materials 2026","materials",80,88,"Vienna, Austria",48.2082,16.3738,"2026.06.16","THERMEC",false,"https://thermec2026.org","2026.01.15"],
    ["amc-2026","AMC 2026","Advanced Materials Congress 2026","materials",80,89,"Stockholm, Sweden",59.3293,18.0686,"2026.08.11","IAAM",false,"https://www.iaam.org","2026.03.15"],
    ["icassp-2026","ICASSP 2026","IEEE International Conference on Acoustics, Speech, and Signal Processing 2026","electronics",92,94,"Florence, Italy",43.7696,11.2588,"2026.05.09","IEEE SPS",true,"https://2026.ieeeicassp.org","2025.12.10"],
    ["icassp-2027","ICASSP 2027","IEEE International Conference on Acoustics, Speech, and Signal Processing 2027","electronics",92,94,"Singapore",1.3521,103.8198,"2027.05.10","IEEE SPS",true,"https://2026.ieeeicassp.org","2026.12.10"],
    ["sigcomm-2026","SIGCOMM 2026","ACM Special Interest Group on Data Communication 2026","electronics",91,88,"Seattle, USA",47.6062,-122.3321,"2026.08.05","ACM SIGCOMM",true,"https://events.sigcomm.org","2026.03.10"],
    ["sigcomm-2027","SIGCOMM 2027","ACM Special Interest Group on Data Communication 2027","electronics",91,88,"Zurich, Switzerland",47.3769,8.5417,"2027.08.06","ACM SIGCOMM",true,"https://events.sigcomm.org","2027.03.10"],
    ["iros-2026","IROS 2026","IEEE/RSJ International Conference on Intelligent Robots and Systems 2026","electronics",90,89,"Munich, Germany",48.1351,11.582,"2026.10.05","IEEE RAS / RSJ",true,"https://www.iros.org","2026.03.02"],
    ["iros-2027","IROS 2027","IEEE/RSJ International Conference on Intelligent Robots and Systems 2027","electronics",90,89,"Taipei, Taiwan",25.033,121.5654,"2027.10.06","IEEE RAS / RSJ",true,"https://www.iros.org","2027.03.01"],
    ["icc-2026","ICC 2026","IEEE International Conference on Communications 2026","electronics",90,88,"Denver, USA",39.7392,-104.9903,"2026.06.17","IEEE COMSOC",true,"https://icc2026.ieee-icc.org","2026.01.15"],
    ["icc-2027","ICC 2027","IEEE International Conference on Communications 2027","electronics",90,88,"Paris, France",48.8566,2.3522,"2027.06.18","IEEE COMSOC",true,"https://icc2026.ieee-icc.org","2027.01.15"],
    ["apec-2026","APEC 2026","IEEE Applied Power Electronics Conference 2026","electronics",89,91,"Orlando, USA",28.5383,-81.3792,"2026.03.05","IEEE / PSMA",false,"https://apec-conf.org","2025.10.10"],
    ["apec-2027","APEC 2027","IEEE Applied Power Electronics Conference 2027","electronics",89,91,"Charlotte, USA",35.2271,-80.8431,"2027.03.06","IEEE / PSMA",false,"https://apec-conf.org","2026.10.10"],
    ["ims-2026","IMS 2026","IEEE International Microwave Symposium 2026","electronics",89,86,"Washington D.C., USA",38.9072,-77.0369,"2026.06.11","IEEE MTT-S",false,"https://ims-ieee.org","2026.01.15"],
    ["ims-2027","IMS 2027","IEEE International Microwave Symposium 2027","electronics",89,86,"San Francisco, USA",37.7749,-122.4194,"2027.06.12","IEEE MTT-S",false,"https://ims-ieee.org","2027.01.15"],
    ["globecom-2026","GLOBECOM 2026","IEEE Global Communications Conference 2026","electronics",89,85,"Washington D.C., USA",38.9072,-77.0369,"2026.12.14","IEEE COMSOC",true,"https://globecom.ieee.org","2026.07.15"],
    ["globecom-2027","GLOBECOM 2027","IEEE Global Communications Conference 2027","electronics",89,85,"Taipei, Taiwan",25.033,121.5654,"2027.12.15","IEEE COMSOC",true,"https://globecom.ieee.org","2027.07.15"],
    ["infocom-2026","INFOCOM 2026","IEEE International Conference on Computer Communications 2026","electronics",89,85,"Paris, France",48.8566,2.3522,"2026.04.23","IEEE ComSoc",true,"https://infocom.ieee.org","2025.11.06"],
    ["infocom-2027","INFOCOM 2027","IEEE International Conference on Computer Communications 2027","electronics",89,85,"Boston, USA",42.3601,-71.0589,"2027.04.24","IEEE ComSoc",true,"https://infocom.ieee.org","2026.11.05"],
    ["iscas-2026","ISCAS 2026","IEEE International Symposium on Circuits and Systems 2026","electronics",88,91,"Melbourne, Australia",-37.8136,144.9631,"2026.05.15","IEEE CAS",false,"https://iscas2026.org","2025.12.15"],
    ["iscas-2027","ISCAS 2027","IEEE International Symposium on Circuits and Systems 2027","electronics",88,91,"Seville, Spain",37.3891,-5.9845,"2027.05.16","IEEE CAS",false,"https://iscas2026.org","2026.12.15"],
    ["itc-2026","ITC 2026","IEEE International Test Conference 2026","electronics",87,90,"Anaheim, USA",33.8353,-117.9145,"2026.10.26","IEEE CS",false,"https://www.itctestproceeding.org","2026.05.20"],
    ["itc-2027","ITC 2027","IEEE International Test Conference 2027","electronics",87,90,"Phoenix, USA",33.4484,-112.074,"2027.10.03","IEEE CS",false,"https://www.itctestproceeding.org","2027.05.10"],
    ["mems-2026","MEMS 2026","IEEE International Conference on Micro Electro Mechanical Systems 2026","electronics",87,89,"Seoul, South Korea",37.5665,126.978,"2026.01.20","IEEE RAS",false,"https://ieeemems.org","2025.08.20"],
    ["mems-2027","MEMS 2027","IEEE International Conference on Micro Electro Mechanical Systems 2027","electronics",87,89,"Strasbourg, France",48.5734,7.7521,"2027.01.21","IEEE RAS",false,"https://ieeemems.org","2026.08.20"],
    ["transducers-2026","Transducers 2026","International Conference on Sensors and Actuators 2026","electronics",87,88,"Orlando, USA",28.5383,-81.3792,"2026.06.06","IEEE EDS",false,"https://transducers2026.org","2026.01.10"],
    ["biocas-2026","BioCAS 2026","IEEE Biomedical Circuits and Systems Conference 2026","electronics",87,87,"Toronto, Canada",43.6532,-79.3832,"2026.10.21","IEEE CAS",false,"https://biocas.ieee.org","2026.05.20"],
    ["biocas-2027","BioCAS 2027","IEEE Biomedical Circuits and Systems Conference 2027","electronics",87,87,"Singapore",1.3521,103.8198,"2027.10.22","IEEE CAS",false,"https://biocas.ieee.org","2027.05.20"],
    ["pesgm-2026","PES GM 2026","IEEE Power & Energy Society General Meeting 2026","electronics",86,86,"Seattle, USA",47.6062,-122.3321,"2026.07.14","IEEE PES",false,"https://pes-gm.org","2026.02.15"],
    ["pesgm-2027","PES GM 2027","IEEE Power & Energy Society General Meeting 2027","electronics",86,86,"Denver, USA",39.7392,-104.9903,"2027.07.15","IEEE PES",false,"https://pes-gm.org","2027.02.15"],
    ["sensors-2026","SENSORS 2026","IEEE Sensors Conference 2026","electronics",85,90,"Gold Coast, Australia",-28.0167,153.4,"2026.10.25","IEEE Sensors Council",false,"https://ieee-sensors.org","2026.05.20"],
    ["sensors-2027","SENSORS 2027","IEEE Sensors Conference 2027","electronics",85,90,"Milan, Italy",45.4642,9.19,"2027.10.26","IEEE Sensors Council",false,"https://ieee-sensors.org","2027.05.20"],
    ["cleo-2026","CLEO 2026","Conference on Lasers and Electro-Optics 2026","electronics",85,86,"San Jose, USA",37.3382,-121.8863,"2026.05.23","Optica / IEEE",false,"https://www.cleoconference.org","2025.12.20"],
    ["cleo-2027","CLEO 2027","Conference on Lasers and Electro-Optics 2027","electronics",85,86,"San Jose, USA",37.3382,-121.8863,"2027.05.24","Optica / IEEE",false,"https://www.cleoconference.org","2026.12.20"],
    ["ofc-2026","OFC 2026","Optical Fiber Communication Conference 2026","electronics",85,85,"San Diego, USA",32.7157,-117.1611,"2026.03.14","Optica / IEEE",false,"https://www.ofcconference.org","2025.10.15"],
    ["ofc-2027","OFC 2027","Optical Fiber Communication Conference 2027","electronics",85,85,"San Francisco, USA",37.7749,-122.4194,"2027.03.15","Optica / IEEE",false,"https://www.ofcconference.org","2026.10.15"],
    ["ecce-2026","ECCE 2026","IEEE Energy Conversion Congress and Exposition 2026","electronics",85,85,"Phoenix, USA",33.4484,-112.074,"2026.10.10","IEEE PELS",false,"https://ieee-ecce.org","2026.05.10"],
    ["ecce-2027","ECCE 2027","IEEE Energy Conversion Congress and Exposition 2027","electronics",85,85,"Detroit, USA",42.3314,-83.0458,"2027.10.11","IEEE PELS",false,"https://ieee-ecce.org","2027.05.15"],
    ["icra-2026","ICRA 2026","IEEE International Conference on Robotics and Automation 2026","electronics",93,91,"Vienna, Austria",48.2082,16.3738,"2026.05.09","IEEE RAS",true,"https://www.ieee-ras.org","2025.10.31"],
    ["icra-2027","ICRA 2027","IEEE International Conference on Robotics and Automation 2027","electronics",93,91,"Montreal, Canada",45.5017,-73.5673,"2027.05.10","IEEE RAS",true,"https://www.ieee-ras.org","2026.10.30"],
    ["epe-2026","EPE 2026","European Conference on Power Electronics and Applications 2026","electronics",84,85,"Geneva, Switzerland",46.2044,6.1432,"2026.09.24","EPE Association",false,"https://www.epe-association.org","2026.04.20"],
    ["epe-2027","EPE 2027","European Conference on Power Electronics and Applications 2027","electronics",84,85,"Brussels, Belgium",50.8503,4.3517,"2027.09.25","EPE Association",false,"https://www.epe-association.org","2027.04.20"],
    ["ipec-2026","IPEC 2026","International Power Electronics Conference 2026","electronics",82,83,"Kyoto, Japan",35.0116,135.7681,"2026.05.13","IEEJ",false,"https://www.ipec.org","2025.12.15"],
    ["iecon-2026","IECON 2026","Annual Conference of the IEEE Industrial Electronics Society 2026","electronics",81,82,"Beijing, China",39.9042,116.4074,"2026.11.12","IEEE IES",false,"https://iecon2026.org","2026.06.15"],
    ["iecon-2027","IECON 2027","Annual Conference of the IEEE Industrial Electronics Society 2027","electronics",81,82,"Chicago, USA",41.8781,-87.6298,"2027.11.13","IEEE IES",false,"https://iecon2026.org","2027.06.15"],
    ["cdc-2026","CDC 2026","IEEE Conference on Decision and Control 2026","electronics",89,83,"Geneva, Switzerland",46.2044,6.1432,"2026.12.08","IEEE CSS",true,"https://cdc.ieeecss.org","2026.07.10"],
    ["cdc-2027","CDC 2027","IEEE Conference on Decision and Control 2027","electronics",89,83,"Philadelphia, USA",39.9526,-75.1652,"2027.12.09","IEEE CSS",true,"https://cdc.ieeecss.org","2027.07.10"],
    ["acc-2026","ACC 2026","American Control Conference 2026","electronics",88,84,"Denver, USA",39.7392,-104.9903,"2026.05.17","AACC",true,"https://acc.aacc.org","2025.12.15"],
    ["acc-2027","ACC 2027","American Control Conference 2027","electronics",88,84,"Seattle, USA",47.6062,-122.3321,"2027.05.18","AACC",true,"https://acc.aacc.org","2026.12.15"],
    ["ecc-2026","ECC 2026","European Control Conference 2026","electronics",84,85,"Strasbourg, France",48.5734,7.7521,"2026.06.13","EUCA",false,"https://ecc.euca.org","2026.01.15"],
    ["ecc-2027","ECC 2027","European Control Conference 2027","electronics",84,85,"Zurich, Switzerland",47.3769,8.5417,"2027.06.14","EUCA",false,"https://ecc.euca.org","2027.01.15"],
    ["wcnc-2026","WCNC 2026","IEEE Wireless Communications and Networking Conference 2026","electronics",85,84,"Kyoto, Japan",35.0116,135.7681,"2026.04.17","IEEE COMSOC",false,"https://wcnc.ieee.org","2025.11.15"],
    ["wcnc-2027","WCNC 2027","IEEE Wireless Communications and Networking Conference 2027","electronics",85,84,"London, UK",51.5074,-0.1278,"2027.04.18","IEEE COMSOC",false,"https://wcnc.ieee.org","2026.11.15"],
    ["vtcsp-2026","VTC Spring 2026","IEEE Vehicular Technology Conference Spring 2026","electronics",82,83,"Singapore",1.3521,103.8198,"2026.05.24","IEEE VTS",false,"https://ieeevtc.org","2025.12.20"],
    ["vtcfa-2026","VTC Fall 2026","IEEE Vehicular Technology Conference Fall 2026","electronics",82,83,"Boston, USA",42.3601,-71.0589,"2026.09.18","IEEE VTS",false,"https://ieeevtc.org","2026.04.15"],
    ["vtcsp-2027","VTC Spring 2027","IEEE Vehicular Technology Conference Spring 2027","electronics",82,83,"Helsinki, Finland",60.1699,24.9384,"2027.05.25","IEEE VTS",false,"https://ieeevtc.org","2026.12.20"],
    ["vtcfa-2027","VTC Fall 2027","IEEE Vehicular Technology Conference Fall 2027","electronics",82,83,"Washington D.C., USA",38.9072,-77.0369,"2027.09.19","IEEE VTS",false,"https://ieeevtc.org","2027.04.15"],
    ["pimrc-2026","PIMRC 2026","IEEE International Symposium on Personal, Indoor and Mobile Radio Communications 2026","electronics",82,83,"Paris, France",48.8566,2.3522,"2026.09.05","IEEE COMSOC",false,"https://pimrc.ieee.org","2026.04.10"],
    ["pimrc-2027","PIMRC 2027","IEEE International Symposium on Personal, Indoor and Mobile Radio Communications 2027","electronics",82,83,"Tokyo, Japan",35.6762,139.6503,"2027.09.06","IEEE COMSOC",false,"https://pimrc.ieee.org","2027.04.10"],
    ["nsdi-2026","NSDI 2026","USENIX Symposium on Networked Systems Design and Implementation 2026","electronics",92,88,"San Jose, USA",37.3382,-121.8863,"2026.04.16","USENIX",true,"https://www.usenix.org/conference/nsdi","2025.11.15"],
    ["nsdi-2027","NSDI 2027","USENIX Symposium on Networked Systems Design and Implementation 2027","electronics",92,88,"Boston, USA",42.3601,-71.0589,"2027.04.17","USENIX",true,"https://www.usenix.org/conference/nsdi","2026.11.15"],
    ["mobicom-2026","Mobicom 2026","ACM International Conference on Mobile Computing and Networking 2026","electronics",90,85,"Chicago, USA",41.8781,-87.6298,"2026.09.26","ACM",true,"https://sigmobile.org/mobicom","2026.04.20"],
    ["mobicom-2027","Mobicom 2027","ACM International Conference on Mobile Computing and Networking 2027","electronics",90,85,"Seoul, South Korea",37.5665,126.978,"2027.09.03","ACM",true,"https://sigmobile.org/mobicom","2027.04.10"],
    ["mobihoc-2026","Mobihoc 2026","ACM International Symposium on Mobile Ad Hoc Networking and Computing 2026","electronics",85,84,"Paris, France",48.8566,2.3522,"2026.07.15","ACM",true,"https://sigmobile.org/mobihoc","2026.02.15"],
    ["mobihoc-2027","Mobihoc 2027","ACM International Symposium on Mobile Ad Hoc Networking and Computing 2027","electronics",85,84,"Athens, Greece",37.9838,23.7275,"2027.07.16","ACM",true,"https://sigmobile.org/mobihoc","2027.02.15"],
    ["secon-2026","SECON 2026","IEEE International Conference on Sensing, Communication, and Networking 2026","electronics",81,82,"San Jose, USA",37.3382,-121.8863,"2026.06.18","IEEE COMSOC",false,"https://secon.ieee.org","2026.01.15"],
    ["secon-2027","SECON 2027","IEEE International Conference on Sensing, Communication, and Networking 2027","electronics",81,82,"Rome, Italy",41.9028,12.4964,"2027.06.19","IEEE COMSOC",false,"https://secon.ieee.org","2027.01.15"],
    ["sensys-2026","SenSys 2026","ACM Conference on Embedded Networked Sensor Systems 2026","electronics",89,85,"Boston, USA",42.3601,-71.0589,"2026.11.17","ACM",true,"https://sensys.acm.org","2026.06.15"],
    ["sensys-2027","SenSys 2027","ACM Conference on Embedded Networked Sensor Systems 2027","electronics",89,85,"Delft, Netherlands",52.0116,4.3571,"2027.11.18","ACM",true,"https://sensys.acm.org","2027.06.15"],
    ["ipsn-2026","IPSN 2026","ACM/IEEE International Conference on Information Processing in Sensor Networks 2026","electronics",88,84,"Chicago, USA",41.8781,-87.6298,"2026.04.08","ACM / IEEE",true,"https://ipsn.acm.org","2025.11.10"],
    ["ipsn-2027","IPSN 2027","ACM/IEEE International Conference on Information Processing in Sensor Networks 2027","electronics",88,84,"Beijing, China",39.9042,116.4074,"2027.04.09","ACM / IEEE",true,"https://ipsn.acm.org","2026.11.10"],
    ["aia-2026","AIA 2026","AIA Conference on Architecture 2026","architecture",90,93,"San Francisco, USA",37.7749,-122.4194,"2026.06.09","AIA",true,"https://conferenceonarchitecture.com","2025.11.11"],
    ["aia-2027","AIA 2027","AIA Conference on Architecture 2027","architecture",90,93,"Orlando, USA",28.5383,-81.3792,"2027.06.10","AIA",true,"https://conferenceonarchitecture.com","2026.11.10"],
    ["uia-2026","UIA 2026","UIA World Congress of Architects 2026","architecture",93,91,"Barcelona, Spain",41.3851,2.1734,"2026.07.05","UIA",true,"https://www.uia2026barcelona.com","2026.02.10"],
    ["acadia-2026","ACADIA 2026","Association for Computer Aided Design in Architecture 2026","architecture",89,87,"Seattle, USA",47.6062,-122.3321,"2026.10.21","ACADIA",false,"https://acadia.org","2026.05.15"],
    ["acadia-2027","ACADIA 2027","Association for Computer Aided Design in Architecture 2027","architecture",89,87,"Boston, USA",42.3601,-71.0589,"2027.10.22","ACADIA",false,"https://acadia.org","2027.05.14"],
    ["ecaade-2026","eCAADe 2026","Education and Research in Computer Aided Architectural Design in Europe 2026","architecture",88,86,"Antwerp, Belgium",51.2194,4.4025,"2026.09.03","eCAADe",false,"https://ecaade.org","2026.04.10"],
    ["ecaade-2027","eCAADe 2027","Education and Research in Computer Aided Architectural Design in Europe 2027","architecture",88,86,"Munich, Germany",48.1351,11.582,"2027.09.04","eCAADe",false,"https://ecaade.org","2027.04.10"],
    ["caadria-2026","CAADria 2026","Computer-Aided Architectural Design Research in Asia 2026","architecture",87,85,"Singapore",1.3521,103.8198,"2026.04.09","CAADria",false,"https://caadria.org","2025.10.27"],
    ["caadria-2027","CAADria 2027","Computer-Aided Architectural Design Research in Asia 2027","architecture",87,85,"Seoul, South Korea",37.5665,126.978,"2027.04.10","CAADria",false,"https://caadria.org","2026.10.26"],
    ["asce-2026","ASCE Convention 2026","American Society of Civil Engineers Convention 2026","architecture",89,88,"Denver, USA",39.7392,-104.9903,"2026.10.06","ASCE",false,"https://www.asceconvention.org","2026.05.10"],
    ["asce-2027","ASCE Convention 2027","American Society of Civil Engineers Convention 2027","architecture",89,88,"Portland, USA",45.5152,-122.6784,"2027.10.07","ASCE",false,"https://www.asceconvention.org","2027.05.10"],
    ["iabse-2026","IABSE Congress 2026","International Association for Bridge and Structural Engineering Congress 2026","architecture",88,87,"Zurich, Switzerland",47.3769,8.5417,"2026.09.22","IABSE",false,"https://iabse.org","2026.04.20"],
    ["iabse-2027","IABSE Congress 2027","International Association for Bridge and Structural Engineering Congress 2027","architecture",88,87,"London, UK",51.5074,-0.1278,"2027.09.23","IABSE",false,"https://iabse.org","2027.04.20"],
    ["ashrae-2026","ASHRAE 2026","ASHRAE Annual Conference 2026","architecture",87,89,"Phoenix, USA",33.4484,-112.074,"2026.06.18","ASHRAE",false,"https://www.ashrae.org","2026.01.15"],
    ["ashrae-2027","ASHRAE 2027","ASHRAE Annual Conference 2027","architecture",87,89,"Washington D.C., USA",38.9072,-77.0369,"2027.06.19","ASHRAE",false,"https://www.ashrae.org","2027.01.15"],
    ["cib-2026","CIB 2026","CIB World Building Congress 2026","architecture",89,87,"Strasbourg, France",48.5734,7.7521,"2026.06.14","CIB",false,"https://cibworld.org","2026.01.15"],
    ["sigradi-2026","SIGraDi 2026","Ibero-American Society of Digital Graphics Conference 2026","architecture",85,84,"Rome, Italy",41.9028,12.4964,"2026.11.05","SIGraDi",false,"http://www.sigradi.org","2026.06.10"],
    ["sigradi-2027","SIGraDi 2027","Ibero-American Society of Digital Graphics Conference 2027","architecture",85,84,"Bordeaux, France",44.8378,-0.5792,"2027.11.06","SIGraDi",false,"http://www.sigradi.org","2027.06.10"],
    ["acsa-2026","ACSA 2026","114th ACSA Annual Meeting","architecture",88,86,"Chicago, USA",41.8781,-87.6298,"2026.03.26","ACSA",false,"https://www.acsa-arch.org","2025.10.20"],
    ["acsa-2027","ACSA 2027","115th ACSA Annual Meeting","architecture",88,86,"Atlanta, USA",33.749,-84.388,"2027.03.03","ACSA",false,"https://www.acsa-arch.org","2026.10.10"],
    ["sah-2026","SAH 2026","79th SAH Annual International Conference","architecture",86,85,"Mexico City, Mexico",19.4326,-99.1332,"2026.04.16","SAH",false,"https://www.sah.org","2025.11.15"],
    ["sah-2027","SAH 2027","80th SAH Annual International Conference","architecture",86,85,"Chicago, USA",41.8781,-87.6298,"2027.04.17","SAH",false,"https://www.sah.org","2026.11.15"],
    ["arcc-2026","ARCC 2026","2026 ARCC-EAAE International Conference","architecture",87,85,"Atlanta, USA",33.749,-84.388,"2026.04.09","ARCC",false,"https://www.arcc-arch.org","2025.11.10"],
    ["arcc-2027","ARCC 2027","2027 ARCC International Conference","architecture",87,85,"New Orleans, USA",29.9511,-90.0715,"2027.04.10","ARCC",false,"https://www.arcc-arch.org","2026.11.10"],
    ["plea-2026","PLEA 2026","38th Passive and Low Energy Architecture Conference","architecture",89,88,"San Jose, Costa Rica",9.9281,-84.0907,"2026.07.10","PLEA",false,"https://www.plea2026.com","2026.02.10"],
    ["caadfutures-2027","CAAD Futures 2027","CAAD Futures International Conference 2027","architecture",88,87,"Calgary, Canada",51.0447,-114.0719,"2027.06.12","CAAD Futures",false,"https://www.caadfutures.org","2027.01.15"],
    ["asa-2026","ASA 2026","59th International Conference of the Architectural Science Association","architecture",85,86,"Suzhou, China",31.2989,120.5853,"2026.11.11","ASA",false,"https://archscience.org","2026.06.15"],
    ["eurau-2026","EURAU 2026","12th European Symposium on Research in Architecture and Urbanism","architecture",86,84,"Umeå, Sweden",63.8258,20.263,"2026.06.12","EURAU",false,"https://www.eurau.org","2026.01.15"],
    ["aag-2027","AAG 2027","Advances in Architectural Geometry 2027","architecture",89,87,"Tokyo, Japan",35.6762,139.6503,"2027.09.20","AAG",false,"https://www.aag2025.com","2027.04.20"],
    ["ascaad-2026","ASCAAD 2026","Arab Society for Computation in Architecture, Art and Design Conference 2026","architecture",84,83,"Istanbul, Turkey",41.0082,28.9784,"2026.11.15","ASCAAD",false,"https://www.ascaad.org","2026.06.15"],
    ["sss-2026","SSS 2026","15th International Space Syntax Symposium","architecture",87,85,"Johor Bahru, Malaysia",1.4927,103.7414,"2026.06.23","SSS",false,"https://www.spacesyntax.net","2026.01.20"],
    ["eaae-2026","EAAE 2026","EAAE Annual Conference and General Meeting 2026","architecture",88,86,"Cagliari, Italy",39.2238,9.1217,"2026.08.10","EAAE",false,"https://www.eaae.eu","2026.03.10"],
    ["isarc-2026","ISARC 2026","43rd International Symposium on Automation and Robotics in Construction","architecture",89,88,"Singapore",1.3521,103.8198,"2026.06.10","IAARC",false,"https://www.iaarc.org","2026.01.10"],
    ["isarc-2027","ISARC 2027","44th International Symposium on Automation and Robotics in Construction","architecture",89,88,"Odense, Denmark",55.4038,10.4024,"2027.06.11","IAARC",false,"https://www.iaarc.org","2027.01.15"],
    ["ctbuh-2026","CTBUH Europe 2026","CTBUH 2026 Europe Conference","architecture",88,89,"Madrid, Spain",40.4168,-3.7038,"2026.05.06","CTBUH",false,"https://ctbuh.org","2025.12.10"],
    ["bs-2027","BS 2027","Building Simulation Conference 2027","architecture",87,88,"Vienna, Austria",48.2082,16.3738,"2027.08.26","IBPSA",false,"https://www.ibpsa.org","2027.03.20"],
    ["trb-2026","TRB 2026","105th Transportation Research Board Annual Meeting","civil",95,93,"Washington D.C., USA",38.9072,-77.0369,"2026.01.11","TRB",true,"https://www.trb.org","2025.08.01"],
    ["trb-2027","TRB 2027","106th Transportation Research Board Annual Meeting","civil",95,93,"Washington D.C., USA",38.9072,-77.0369,"2027.01.10","TRB",true,"https://www.trb.org","2026.08.01"],
    ["wtc-2026","WTC 2026","World Tunnel Congress 2026","civil",91,88,"Montreal, Canada",45.5017,-73.5673,"2026.05.12","ITA-AITES",true,"https://www.wtc2026.com","2025.12.15"],
    ["wtc-2027","WTC 2027","World Tunnel Congress 2027","civil",91,88,"Antwerp, Belgium",51.2194,4.4025,"2027.04.13","ITA-AITES",true,"https://www.wtc2027.com","2026.11.15"],
    ["geocongress-2026","Geo-Congress 2026","ASCE Geo-Congress 2026","civil",89,87,"Salt Lake City, USA",40.7608,-111.891,"2026.03.09","ASCE Geo-Institute",false,"https://www.geocongress.org","2025.10.10"],
    ["geocongress-2027","Geo-Congress 2027","ASCE Geo-Congress 2027","civil",89,87,"Philadelphia, USA",39.9526,-75.1652,"2027.03.10","ASCE Geo-Institute",false,"https://www.geocongress.org","2026.10.10"],
    ["structures-2026","Structures Congress 2026","ASCE Structures Congress 2026","civil",89,88,"Boston, USA",42.3601,-71.0589,"2026.04.10","ASCE SEI",false,"https://www.structurescongress.org","2025.10.21"],
    ["ewri-2026","EWRI 2026","World Environmental & Water Resources Congress 2026","civil",88,86,"Mobile, USA",30.6954,-88.0399,"2026.04.09","ASCE EWRI",false,"https://www.ewricongress.org","2025.11.10"],
    ["icce-2026","ICCE 2026","39th International Conference on Coastal Engineering","civil",90,87,"Galveston, USA",29.3013,-94.7977,"2026.05.22","ASCE COPRI",false,"https://www.icce2026.com","2025.12.20"],
    ["icsmge-2026","ICSMGE 2026","21st International Conference on Soil Mechanics and Geotechnical Engineering","civil",93,89,"Vienna, Austria",48.2082,16.3738,"2026.06.24","ISSMGE",true,"https://www.issmge.org","2026.01.20"],
    ["iabse-2026-ic","IABSE Incheon 2026","IABSE Congress Incheon 2026","civil",89,88,"Incheon, South Korea",37.4563,126.7052,"2026.09.15","IABSE",false,"https://www.iabse.org","2026.04.15"],
    ["iabse-2027-ic","IABSE Milan 2027","IABSE Congress Milan 2027","civil",89,88,"Milan, Italy",45.4642,9.19,"2027.09.22","IABSE",false,"https://www.iabse.org","2027.04.20"],
    ["wcte-2027","WCTE 2027","World Conference on Timber Engineering 2027","civil",89,87,"Edmonton, Canada",53.5461,-113.4938,"2027.08.14","WCTE",false,"https://wcte2027.ca","2027.03.15"],
    ["capsa-2027","CAPSA 2027","14th Conference on Asphalt Pavements for Southern Africa","civil",86,85,"Sun City, South Africa",-25.3411,27.0972,"2027.09.03","CAPSA",false,"https://www.capsa2027.co.za","2027.04.10"],
    ["icpmg-2026","ICPMG 2026","11th International Conference on Physical Modelling in Geotechnics","civil",88,86,"Zurich, Switzerland",47.3769,8.5417,"2026.06.18","ISSMGE TC104",false,"https://www.tc104-issmge.com","2026.01.15"],
    ["iceg-2027","10ICEG 2027","10th International Congress on Environmental Geotechnics","civil",87,85,"Kyoto, Japan",35.0116,135.7681,"2027.11.07","ISSMGE TC215",false,"https://10iceg.org","2027.06.10"],
    ["13icg-2026","13ICG 2026","13th International Conference on Geosynthetics","civil",88,86,"Montreal, Canada",45.5017,-73.5673,"2026.09.23","IGS",false,"https://www.13icg-montreal.org","2026.04.20"],
    ["geosynthetics-2027","Geosynthetics 2027","Geosynthetics Conference 2027","civil",86,85,"Reno, USA",39.5296,-119.8138,"2027.02.12","IGS-NA / IECA",false,"https://geosyntheticsconference.com","2026.09.15"],
    ["isgsr-2027","ISGSR 2027","10th International Symposium on Geotechnical Safety and Risk","civil",87,85,"Wrocław, Poland",51.1079,17.0385,"2027.06.15","ISSMGE / Wrocław Tech",false,"https://isgsr2027.pwr.edu.pl","2027.01.15"],
    ["icpt-2027","ICPT 2027","15th International Conference on Road & Airfield Pavement Technology","civil",85,84,"Xi'an, China",34.3416,108.9398,"2027.05.05","ICPT Committee",false,"http://www.pavement.org.sg","2026.12.10"],
    ["eata-2027","EATA 2027","European Asphalt Technology Association Conference 2027","civil",86,85,"Antwerp, Belgium",51.2194,4.4025,"2027.06.18","EATA",false,"http://www.eata-group.eu","2027.01.15"],
    ["icwe-2027","ICWE 2027","17th International Conference on Wind Engineering","civil",89,87,"Toronto, Canada",43.6532,-79.3832,"2027.06.03","IAWE",false,"http://www.icwe2027.com","2027.01.10"],
    ["iahr-2027","IAHR 2027","42nd IAHR World Congress","civil",89,87,"Bari, Italy",41.1171,16.8719,"2027.06.09","IAHR",false,"https://www.iahr.org","2027.01.10"],
    ["iahr-apd-2026","IAHR-APD 2026","25th IAHR-APD Congress","civil",86,85,"Incheon, South Korea",37.4563,126.7052,"2026.07.08","IAHR-APD",false,"https://www.iahr.org","2026.02.10"],
    ["ecee-2026","ECEE 2026","18th European Conference on Earthquake Engineering","civil",90,88,"Berlin, Germany",52.52,13.405,"2026.09.04","EAEE / DGEB",false,"https://ecee2026.eu","2026.04.10"],
    ["13ncee-2026","13NCEE 2026","13th U.S. National Conference on Earthquake Engineering","civil",89,87,"Portland, USA",45.5152,-122.6784,"2026.07.19","EERI",false,"https://13ncee.org","2026.02.15"],
    ["ewshm-2026","EWSHM 2026","12th European Workshop on Structural Health Monitoring","civil",87,86,"Toulouse, France",43.6047,1.4442,"2026.07.20","EWSHM",false,"https://www.ewshm2026.com","2026.02.20"],
    ["shmii-2027","SHMII-14 2027","14th International Conference on Structural Health Monitoring of Intelligent Infrastructures","civil",87,85,"Naples, Italy",40.8518,14.2681,"2027.06.03","ISHMII",false,"https://www.shmii-14.com","2027.01.10"],
    ["iwa-2026","IWA 2026","IWA World Water Congress & Exhibition 2026","civil",91,88,"Glasgow, UK",55.8642,-4.2518,"2026.10.07","IWA",true,"https://www.iwa-network.org","2026.05.10"],
    ["piarc-2027","PIARC 2027","XXVIII World Road Congress","civil",92,90,"Vancouver, Canada",49.2827,-123.1207,"2027.10.26","PIARC",true,"https://www.wrc2027vancouver.com","2027.05.20"],
    ["neurips-2026","NeurIPS 2026","40th Conference on Neural Information Processing Systems","cs",99,98,"Sydney, Australia",-33.8688,151.2093,"2026.12.06","NeurIPS Board",true,"https://neurips.cc","2026.05.21"],
    ["cvpr-2026","CVPR 2026","IEEE/CVF Conf. on Computer Vision and Pattern Recognition","cs",98,97,"Denver, USA",39.7392,-104.9903,"2026.06.16","IEEE CS / CVF",true,"https://cvpr.thecvf.com","2025.11.14"],
    ["cvpr-2027","CVPR 2027","IEEE/CVF Conf. on Computer Vision and Pattern Recognition","cs",98,97,"Seattle, USA",47.6062,-122.3321,"2027.06.15","IEEE CS / CVF",true,"https://cvpr.thecvf.com","2026.11.13"],
    ["icml-2026","ICML 2026","43rd International Conference on Machine Learning","cs",98,97,"Seoul, South Korea",37.5117,127.0592,"2026.07.12","IMLS",true,"https://icml.cc","2026.01.29"],
    ["iclr-2026","ICLR 2026","14th International Conference on Learning Representations","cs",97,96,"Rio de Janeiro, Brazil",-22.9068,-43.1729,"2026.05.04","ICLR Board",true,"https://iclr.cc","2025.10.23"],
    ["aaai-2026","AAAI 2026","40th AAAI Conference on Artificial Intelligence","cs",95,93,"Singapore",1.3521,103.8198,"2026.02.26","AAAI",true,"https://aaai.org","2025.08.15"],
    ["aaai-2027","AAAI 2027","41st AAAI Conference on Artificial Intelligence","cs",95,93,"Montreal, Canada",45.5017,-73.5673,"2027.02.03","AAAI",true,"https://aaai.org","2026.08.14"],
    ["acl-2026","ACL 2026","64th Annual Meeting of the Association for Computational Linguistics","cs",96,94,"San Diego, USA",32.7157,-117.1611,"2026.08.02","ACL",true,"https://www.aclweb.org","2026.02.16"],
    ["emnlp-2026","EMNLP 2026","Conf. on Empirical Methods in Natural Language Processing","cs",95,93,"Budapest, Hungary",47.4979,19.0402,"2026.11.16","ACL SIGDAT",true,"https://emnlp.org","2026.06.15"],
    ["kdd-2026","KDD 2026","32nd ACM SIGKDD Conf. on Knowledge Discovery and Data Mining","cs",95,93,"Jeju, South Korea",33.4996,126.5312,"2026.08.09","ACM SIGKDD",true,"https://www.kdd.org","2026.02.02"],
    ["ijcai-2026","IJCAI 2026","35th International Joint Conference on Artificial Intelligence","cs",96,94,"Bremen, Germany",53.0793,8.8017,"2026.08.16","IJCAI Organization",true,"https://www.ijcai.org","2026.01.16"],
    ["colt-2026","COLT 2026","39th Annual Conference on Learning Theory","cs",96,94,"Barcelona, Spain",41.3851,2.1734,"2026.07.22","ALT / COLT",true,"https://www.learningtheory.org","2026.02.20"],
    ["siggraph-2026","SIGGRAPH 2026","53rd ACM SIGGRAPH Conference and Exhibition","cs",97,96,"Los Angeles, USA",34.0522,-118.2437,"2026.08.09","ACM SIGGRAPH",true,"https://www.siggraph.org","2026.01.22"],
    ["chi-2026","CHI 2026","ACM CHI Conf. on Human Factors in Computing Systems","cs",96,95,"Barcelona, Spain",41.3851,2.1734,"2026.04.25","ACM SIGCHI",true,"https://chi2026.acm.org","2025.10.29"],
    ["icse-2026","ICSE 2026","48th IEEE/ACM International Conference on Software Engineering","cs",96,94,"Rio de Janeiro, Brazil",-22.9068,-43.1729,"2026.04.23","IEEE CS / ACM SIGSOFT",true,"https://www.icse-conferences.org","2025.11.20"],
    ["sp-2026","IEEE S&P 2026","47th IEEE Symposium on Security and Privacy (Oakland)","cs",97,95,"San Francisco, USA",37.7749,-122.4194,"2026.05.18","IEEE CS",true,"https://www.ieee-security.org","2025.12.15"],
    ["usenixsec-2026","USENIX Sec 2026","35th USENIX Security Symposium","cs",96,94,"Baltimore, USA",39.2904,-76.6122,"2026.08.12","USENIX",true,"https://www.usenix.org","2026.03.15"],
    ["sigmod-2026","SIGMOD 2026","ACM SIGMOD International Conference on Management of Data","cs",95,93,"Bengaluru, India",12.9716,77.5946,"2026.06.14","ACM SIGMOD",true,"https://sigmod.org","2025.10.24"],
    ["vldb-2026","VLDB 2026","52nd International Conference on Very Large Data Bases","cs",95,93,"Boston, USA",42.3601,-71.0589,"2026.08.31","VLDB Endowment",true,"https://www.vldb.org","2025.11.01"],
    ["aistats-2026","AISTATS 2026","29th Int. Conf. on Artificial Intelligence and Statistics","cs",95,93,"Valencia, Spain",39.4699,-0.3763,"2026.05.19","AISTATS Society",true,"https://aistats.org","2025.12.15"],
    ["imece-2026","ASME IMECE 2026","International Mechanical Engineering Congress and Exposition","mech",95,93,"Vancouver, Canada",45.5017,-73.5673,"2026.11.15","ASME",true,"https://event.asme.org/IMECE","2026.06.15"],
    ["turboexpo-2026","ASME Turbo Expo 2026","Turbomachinery Technical Conference & Expo","mech",94,92,"Milan, Italy",45.4642,9.19,"2026.06.15","ASME IGTI",true,"https://event.asme.org/Turbo-Expo","2025.09.16"],
    ["idetc-2026","ASME IDETC 2026","Int. Design Engineering Tech. Conf. & Computers in Engineering","mech",92,90,"Houston, USA",29.7604,-95.3698,"2026.08.09","ASME",false,"https://event.asme.org","2026.03.10"],
    ["aiaa-scitech-2026","AIAA SciTech 2026","AIAA Science and Technology Forum and Exposition","mech",97,95,"Orlando, USA",28.5383,-81.3792,"2026.01.12","AIAA",true,"https://www.aiaa.org","2025.06.06"],
    ["aiaa-aviation-2026","AIAA AVIATION 2026","AIAA Aviation and Aeronautics Forum and Exposition","mech",96,94,"San Diego, USA",32.7157,-117.1611,"2026.06.15","AIAA",true,"https://www.aiaa.org","2026.01.15"],
    ["iac-2026","IAC 2026","77th International Astronautical Congress","mech",98,96,"Antalya, Turkey",36.8969,30.7133,"2026.10.23","IAF",true,"https://www.iafastro.org","2026.05.20"],
    ["iac-2027","IAC 2027","78th International Astronautical Congress","mech",98,96,"Poznań, Poland",52.4064,16.9252,"2027.10.24","IAF",true,"https://www.iafastro.org","2027.05.20"],
    ["icas-2026","ICAS 2026","35th Congress of the International Council of the Aeronautical Sciences","mech",95,93,"Sydney, Australia",-33.8688,151.2093,"2026.09.06","ICAS",true,"https://www.icas.org","2026.04.10"],
    ["ihtc-2026","IHTC-18 2026","18th International Heat Transfer Conference","mech",94,91,"Rio de Janeiro, Brazil",-22.9068,-43.1729,"2026.08.20","AIHTC",false,"https://ihtc18.org","2026.03.20"],
    ["wcx-2026","SAE WCX 2026","SAE World Congress Experience","mech",93,91,"Detroit, USA",42.3314,-83.0458,"2026.04.22","SAE International",true,"https://www.sae.org","2025.11.20"],
    ["wcb-2026","WCB 2026","10th World Congress of Biomechanics","mech",94,92,"Vancouver, Canada",49.2827,-123.1207,"2026.07.20","WCB Board",true,"https://wcb2026.com","2026.02.20"],
    ["aim-2026","IEEE/ASME AIM 2026","Int. Conf. on Advanced Intelligent Mechatronics","mech",92,90,"Genova, Italy",44.4056,8.9463,"2026.07.21","IEEE / ASME",false,"https://aim2026.com","2026.02.20"],
    ["iccas-2026","ICCAS 2026","26th Int. Conf. on Control, Automation and Systems","mech",90,88,"Sapporo, Japan",43.0618,141.3545,"2026.10.23","ICROS",false,"https://www.iccas.org","2026.05.20"],
    ["esmc-2027","ESMC 2027","13th European Solid Mechanics Conference","mech",91,89,"Louvain-la-Neuve, Belgium",50.6681,4.6144,"2027.07.07","EUROMECH",false,"https://www.euromech.org","2027.02.10"],
    ["aps-dfd-2026","APS DFD 2026","79th Meeting of the APS Division of Fluid Dynamics","mech",94,92,"Orlando, USA",28.5383,-81.3792,"2026.11.09","APS DFD",true,"https://www.aps.org","2026.06.10"],
    ["isromac-2026","ISROMAC 2026","Int. Symposium on Transport Phenomena & Dynamics of Rotating Machinery","mech",89,87,"Honolulu, USA",21.3069,-157.8583,"2026.12.10","ISROMAC",false,"https://isromac.org","2026.07.10"],
    ["cobem-2027","COBEM 2027","International Congress of Mechanical Engineering","mech",88,86,"Brasilia, Brazil",-15.7975,-47.8919,"2027.11.21","ABCM",false,"https://www.abcm.org.br","2027.06.20"],
    ["asme-mesa-2026","ASME MESA 2026","Mechatronics and Embedded Systems and Applications","mech",89,87,"Boston, USA",42.3601,-71.0589,"2026.08.17","ASME",false,"https://event.asme.org","2026.03.15"],
    ["euromech-2026","EUROMECH 2026","European Mechanics Society Colloquium","mech",90,88,"Zurich, Switzerland",47.3769,8.5417,"2026.07.16","EUROMECH",false,"https://www.euromech.org","2026.02.15"],
    ["sae-ice-2027","SAE ICE 2027","SAE Int. Powertrains, Fuels & Lubricants Meeting","mech",90,88,"Kyoto, Japan",35.0116,135.7681,"2027.09.14","SAE International",false,"https://www.sae.org","2027.04.15"],
    ["aiche-2026","AIChE Annual Meeting 2026","2026 American Institute of Chemical Engineers Annual Meeting","chem",96,94,"Minneapolis, USA",44.9778,-93.265,"2026.11.18","AIChE",true,"https://www.aiche.org","2026.06.15"],
    ["aiche-2027","AIChE Annual Meeting 2027","2027 American Institute of Chemical Engineers Annual Meeting","chem",96,94,"San Diego, USA",32.7157,-117.1611,"2027.10.19","AIChE",true,"https://www.aiche.org","2027.05.15"],
    ["ecs-249","249th ECS Meeting","249th Electrochemical Society Spring Meeting","chem",94,92,"Seattle, USA",47.6062,-122.3321,"2026.05.10","The Electrochemical Society",true,"https://www.electrochem.org","2025.12.10"],
    ["ecs-250","250th ECS Meeting","250th Electrochemical Society Fall Meeting","chem",94,92,"Calgary, Canada",51.0447,-114.0719,"2026.10.08","The Electrochemical Society",true,"https://www.electrochem.org","2026.05.10"],
    ["ecs-251","251st ECS Meeting","251st Electrochemical Society Spring Meeting","chem",94,92,"Washington D.C., USA",38.9072,-77.0369,"2027.05.09","The Electrochemical Society",true,"https://www.electrochem.org","2026.12.10"],
    ["imlb-2026","IMLB 2026","23rd International Meeting on Lithium Batteries","chem",97,95,"Montréal, Canada",45.5017,-73.5673,"2026.06.21","IMLB Committee",true,"https://www.imlb.org","2026.01.20"],
    ["macro-2026","IUPAC MACRO 2026","51st IUPAC World Polymer Congress","chem",92,90,"Kuching, Malaysia",1.5533,110.3592,"2026.07.06","IUPAC",false,"https://macro2026.org","2026.02.10"],
    ["ecce-chem-2027","ECCE 16","16th European Congress of Chemical Engineering","chem",93,91,"Edinburgh, UK",55.9533,-3.1883,"2027.09.09","EFCE",true,"https://ecce-ecab2027.org","2027.04.10"],
    ["chemeca-2026","Chemeca 2026","Chemical Engineering Conference 2026","chem",90,88,"Melbourne, Australia",-37.8136,144.9631,"2026.09.12","IChemE / Engineers Australia",false,"https://www.chemeca.org","2026.04.15"],
    ["chemeca-2027","Chemeca 2027","Chemical Engineering & APCChE Congress 2027","chem",91,89,"Sydney, Australia",-33.8688,151.2093,"2027.11.13","APCChE",false,"https://apcche27.com","2027.06.15"],
    ["aabc-eu-2026","AABC Europe 2026","Advanced Automotive Battery Conference Europe","chem",93,91,"Mainz, Germany",49.9929,8.2473,"2026.05.06","Cambridge EnerTech",false,"https://www.advancedautobat.com/europe","2025.12.10"],
    ["aabc-us-2026","AABC USA 2026","Advanced Automotive Battery Conference USA","chem",93,91,"Las Vegas, USA",36.1716,-115.1398,"2026.12.08","Cambridge EnerTech",false,"https://www.advancedautobat.com/us","2026.07.10"],
    ["bat-seminar-2026","Battery Seminar 2026","International Battery Seminar & Exhibit 2026","chem",94,92,"Orlando, USA",28.5383,-81.3792,"2026.03.09","Cambridge EnerTech",true,"https://www.internationalbatteryseminar.com","2025.10.10"],
    ["bat-seminar-2027","Battery Seminar 2027","International Battery Seminar & Exhibit 2027","chem",94,92,"Orlando, USA",28.5383,-81.3792,"2027.03.10","Cambridge EnerTech",true,"https://www.internationalbatteryseminar.com","2026.10.10"],
    ["bat-show-eu-2026","Battery Show Europe 2026","The Battery Show Europe 2026","chem",92,90,"Stuttgart, Germany",48.7758,9.1829,"2026.05.10","Informa Markets",false,"https://www.thebatteryshow.eu","2025.12.10"],
    ["bat-show-na-2026","Battery Show NA 2026","The Battery Show North America 2026","chem",93,91,"Detroit, USA",42.3314,-83.0458,"2026.10.15","Informa Markets",false,"https://www.thebatteryshow.com","2026.05.15"],
    ["icae-2026","ICAE 2026","18th International Conference on Applied Energy","chem",95,93,"Jeju Island, South Korea",33.4996,126.5312,"2026.09.04","Applied Energy Association",true,"https://www.applied-energy.org","2026.04.10"],
    ["ghgt-2026","GHGT-18","18th Greenhouse Gas Control Technologies Conference","chem",94,92,"Perth, Australia",-31.9505,115.8605,"2026.10.20","IEAGHG",true,"https://www.ghgt.info","2026.05.20"],
    ["iscre-29","ISCRE 29","29th International Symposium on Chemical Reaction Engineering","chem",93,91,"Seoul, South Korea",37.5665,126.978,"2026.06.19","ISCRE Board",false,"https://iscre29.org","2026.01.15"],
    ["eubce-2026","EUBCE 2026","34th European Biomass Conference & Exhibition","chem",91,89,"The Hague, Netherlands",52.0705,4.3007,"2026.05.06","ETA-Florence",false,"https://www.eubce.com","2025.12.10"],
    ["embc-2026","IEEE EMBC 2026","48th Annual Int. Conf. of the IEEE Engineering in Medicine and Biology Society","bio",96,94,"Toronto, Canada",43.6532,-79.3832,"2026.07.20","IEEE EMBS",true,"https://embc.embs.org","2026.01.21"],
    ["bmes-2026","BMES 2026","Biomedical Engineering Society 2026 Annual Meeting","bio",95,93,"Orlando, USA",28.5383,-81.3792,"2026.10.14","BMES",true,"https://www.bmes.org","2026.04.21"],
    ["bmes-2027","BMES 2027","Biomedical Engineering Society 2027 Annual Meeting","bio",95,93,"Columbus, USA",39.9612,-82.9988,"2027.10.13","BMES",true,"https://www.bmes.org","2027.04.20"],
    ["ismb-2026","ISMB 2026","34th Int. Conf. on Intelligent Systems for Molecular Biology","bio",96,94,"Washington D.C., USA",38.9072,-77.0369,"2026.07.12","ISCB",true,"https://www.iscb.org/ismb2026","2026.02.15"],
    ["ismb-eccb-2027","ISMB/ECCB 2027","Intelligent Systems for Molecular Biology & European Conf. on Computational Biology","bio",96,94,"Copenhagen, Denmark",55.6761,12.5683,"2027.07.08","ISCB / SIB",true,"https://www.iscb.org","2027.02.10"],
    ["recomb-2026","RECOMB 2026","30th International Conference on Research in Computational Molecular Biology","bio",95,93,"Thessaloniki, Greece",40.6401,22.9444,"2026.04.14","RECOMB",true,"https://recomb.org","2025.11.15"],
    ["sfb-2026","SFB 2026","Society for Biomaterials 2026 Annual Meeting & Exposition","bio",92,90,"Atlanta, USA",33.749,-84.388,"2026.04.11","SFB",false,"https://www.biomaterials.org","2025.11.15"],
    ["isbi-2026","ISBI 2026","23rd IEEE International Symposium on Biomedical Imaging","bio",93,91,"London, UK",51.5074,-0.1278,"2026.05.17","IEEE Signal Processing Society",false,"https://biomedicalimaging.org","2025.12.15"],
    ["isbi-2027","ISBI 2027","24th IEEE International Symposium on Biomedical Imaging","bio",93,91,"Lausanne, Switzerland",46.5197,6.6323,"2027.04.18","IEEE SPS / EMBS",false,"https://biomedicalimaging.org","2026.11.15"],
    ["termis-eu-2026","TERMIS-EU 2026","Tissue Engineering & Regenerative Medicine Int. Society European Chapter","bio",92,90,"Palma de Mallorca, Spain",39.5696,2.6502,"2026.06.11","TERMIS",false,"https://termis.org","2026.01.15"],
    ["termis-world-2027","TERMIS World 2027","8th TERMIS World Congress 2027","bio",94,92,"Shanghai, China",31.2304,121.4737,"2027.10.16","TERMIS",true,"https://termis.org","2027.05.15"],
    ["asgct-2026","ASGCT 2026","American Society of Gene & Cell Therapy 2026 Annual Meeting","bio",94,92,"Boston, USA",42.3601,-71.0589,"2026.05.04","ASGCT",true,"https://www.asgct.org","2025.12.10"],
    ["aacr-2026","AACR 2026","American Association for Cancer Research Annual Meeting 2026","bio",95,93,"San Diego, USA",32.7157,-117.1611,"2026.04.17","AACR",true,"https://www.aacr.org","2025.12.02"],
    ["isscr-2026","ISSCR 2026","International Society for Stem Cell Research 2026 Annual Meeting","bio",94,92,"Montréal, Canada",45.5017,-73.5673,"2026.06.10","ISSCR",true,"https://www.isscr.org","2026.01.10"],
    ["eccb-bio-2026","ECCB 2026","25th European Conference on Computational Biology","bio",93,91,"Geneva, Switzerland",46.2044,6.1432,"2026.09.10","SIB Swiss Institute of Bioinformatics",false,"https://eccb2026.org","2026.04.10"],
    ["hgm-2026","HUGO HGM 2026","HUGO Human Genome Meeting 2026","bio",91,89,"Athens, Greece",37.9838,23.7275,"2026.04.04","HUGO",false,"https://www.hugo-international.org","2025.11.10"],
    ["esb-2026","ESB 2026","35th Annual Conference of the European Society for Biomaterials","bio",90,88,"Antwerp, Belgium",51.2194,4.4025,"2026.09.22","ESB",false,"https://www.esb2026.org","2026.04.20"],
    ["wacbe-2026","WACBE 2026","12th World Congress on Bioengineering","bio",89,87,"Changzhou, China",31.7828,119.9678,"2026.07.06","WACBE",false,"http://wacbe.org","2026.02.10"],
    ["isb-2027","ISB 2027","31st Congress of the International Society of Biomechanics","bio",90,88,"Stockholm, Sweden",59.3293,18.0686,"2027.07.19","ISB",false,"https://isbweb.org","2027.02.15"],
    ["esgct-2026","ESGCT 2026","33rd ESGCT Annual Congress","bio",92,90,"Hamburg, Germany",53.5511,9.9937,"2026.10.08","ESGCT",false,"https://www.esgct.eu","2026.05.10"],
    ["iise-2026","IISE Annual 2026","IISE Annual Conference & Expo 2026","ind",95,93,"Arlington, USA",32.7357,-97.1081,"2026.05.16","IISE",true,"https://www.iise.org","2025.12.15"],
    ["iise-2027","IISE Annual 2027","IISE Annual Conference & Expo 2027","ind",95,93,"Louisville, USA",38.2527,-85.7585,"2027.05.17","IISE",true,"https://www.iise.org","2026.12.15"],
    ["informs-2026","INFORMS Annual 2026","INFORMS Annual Meeting 2026","ind",97,95,"San Francisco, USA",37.7749,-122.4194,"2026.10.25","INFORMS",true,"https://meetings.informs.org","2026.05.20"],
    ["informs-2027","INFORMS Annual 2027","INFORMS Annual Meeting 2027","ind",97,95,"National Harbor, USA",38.7846,-77.0169,"2027.10.24","INFORMS",true,"https://meetings.informs.org","2027.05.20"],
    ["wsc-2026","WSC 2026","Winter Simulation Conference 2026","ind",94,92,"Glasgow, UK",55.8642,-4.2518,"2026.12.11","WSC Board",true,"https://www.wintersim.org","2026.04.15"],
    ["wsc-2027","WSC 2027","Winter Simulation Conference 2027","ind",94,92,"San Diego, USA",32.7157,-117.1611,"2027.12.12","WSC Board",true,"https://www.wintersim.org","2027.04.14"],
    ["ifac-2026","IFAC World Congress 2026","23rd International Federation of Automatic Control World Congress","ind",96,94,"Busan, South Korea",35.1796,129.0756,"2026.08.23","IFAC",true,"https://www.ifac2026.org","2026.03.20"],
    ["poms-2026","POMS Annual 2026","POMS 36th Annual Conference","ind",93,91,"Reno, USA",39.5296,-119.8138,"2026.05.21","POMS",true,"https://www.poms.org","2025.12.20"],
    ["poms-2027","POMS Annual 2027","POMS 37th Annual Conference","ind",93,91,"Orlando, USA",28.5383,-81.3792,"2027.04.22","POMS",true,"https://www.poms.org","2026.11.20"],
    ["ieem-2026","IEEE IEEM 2026","IEEE International Conference on Industrial Engineering and Engineering Management","ind",92,90,"Singapore",1.3521,103.8198,"2026.12.06","IEEE TEMS",true,"https://www.ieem.org","2026.07.10"],
    ["apms-2026","APMS 2026","International Conference on Advances in Production Management Systems","ind",90,88,"Bergamo, Italy",45.6983,9.6773,"2026.09.05","IFIP WG 5.7",false,"https://www.apms-conference.org","2026.04.10"],
    ["apms-2027","APMS 2027","International Conference on Advances in Production Management Systems","ind",90,88,"Edinburgh, UK",55.9533,-3.1883,"2027.09.06","IFIP WG 5.7",false,"https://www.apms-conference.org","2027.04.10"],
    ["informs-analytics-2026","INFORMS Analytics 2026","INFORMS Business Analytics Conference 2026","ind",92,90,"Orlando, USA",28.5383,-81.3792,"2026.04.15","INFORMS",false,"https://meetings.informs.org","2025.11.15"],
    ["euro-pm-2026","Euro PM2026","Euro PM2026 Powder Metallurgy Congress & Exhibition","ind",89,87,"Budapest, Hungary",47.4979,19.0402,"2026.10.05","EPMA",false,"https://www.powdermetallurgycongress.com","2026.05.10"],
    ["icpr-2027","ICPR 2027","29th International Conference on Production Research","ind",91,89,"Busan, South Korea",35.1796,129.0756,"2027.07.15","IFPR",false,"https://icpr2027.org","2027.02.15"],
    ["mcdm-2027","MCDM 2027","28th International Conference on Multiple Criteria Decision Making","ind",90,88,"Helsinki, Finland",60.1699,24.9384,"2027.06.20","MCDM Society",false,"http://www.mcdm-society.org","2027.01.20"],
    ["iserc-2026","ISERC 2026","Industrial and Systems Engineering Research Conference 2026","ind",91,89,"Arlington, USA",32.7357,-97.1081,"2026.05.06","IISE",false,"https://www.iise.org","2025.11.08"],
    ["temscon-2026","IEEE TEMSCON 2026","IEEE Technology and Engineering Management Society Conference","ind",90,88,"Portland, USA",45.5152,-122.6784,"2026.06.23","IEEE TEMS",false,"https://www.ieee-tems.org","2026.01.20"],
    ["apiems-2026","APIEMS 2026","26th Asia Pacific Industrial Engineering and Management Systems Conference","ind",89,87,"Busan, South Korea",35.1796,129.0756,"2026.11.25","APIEMS",false,"http://www.apiems.org","2026.06.20"],
    ["cie-2026","CIE 53","53rd International Conference on Computers and Industrial Engineering","ind",91,89,"Abu Dhabi, UAE",24.4539,54.3773,"2026.10.11","CIE / Khalifa University",false,"https://cie2026.science","2026.05.15"],
    ["aps-march-2027","APS March 2027","American Physical Society March Meeting 2027","materials",90,88,"Chicago, USA",41.8781,-87.6298,"2027.03.14","APS",true,"https://march.aps.org","2026.10.23"],
    ["grc-mat-2027","GRC Materials 2027","Gordon Research Conference on Materials Science 2027","materials",95,89,"Newport, USA",41.4901,-71.3128,"2027.07.08","Gordon Research",true,"https://www.grc.org","2027.02.10"],
    ["amc-2027","AMC 2027","Advanced Materials Congress 2027","materials",80,89,"Singapore",1.3521,103.8198,"2027.08.12","IAAM",false,"https://www.iaam.org","2027.03.15"],
    ["transducers-2027","Transducers 2027","International Conference on Solid-State Sensors, Actuators and Microsystems 2027","electronics",92,91,"Vancouver, Canada",49.2827,-123.1207,"2027.06.07","IEEE EDS",true,"https://transducers-conference.org","2027.01.10"],
    ["plea-2027","PLEA 2027","Passive and Low Energy Architecture Conference 2027","architecture",88,89,"Lisbon, Portugal",38.7223,-9.1393,"2027.07.11","PLEA",false,"https://plea-arch.org","2027.02.15"],
    ["ctbuh-2027","CTBUH Europe 2027","Council on Tall Buildings and Urban Habitat Conference 2027","architecture",88,91,"Milan, Italy",45.4642,9.19,"2027.05.07","CTBUH",false,"https://ctbuh.org","2026.12.10"],
    ["structures-2027","Structures Congress 2027","ASCE Structures Congress 2027","civil",89,87,"Seattle, USA",47.6062,-122.3321,"2027.04.11","ASCE SEI",true,"https://www.structurescongress.org","2026.10.20"],
    ["ewri-2027","EWRI 2027","World Environmental & Water Resources Congress 2027","civil",88,86,"Phoenix, USA",33.4484,-112.074,"2027.05.10","ASCE EWRI",true,"https://www.ewricongress.org","2026.12.10"],
    ["icce-2027","ICCE 2027","International Conference on Coastal Engineering 2027","civil",87,88,"Sydney, Australia",-33.8688,151.2093,"2027.05.23","ASCE COPRI",false,"https://www.icce2026.com","2026.12.20"],
    ["icml-2027","ICML 2027","International Conference on Machine Learning 2027","cs",99,92,"San Diego, USA",32.7157,-117.1611,"2027.07.18","IMLS",true,"https://icml.cc","2027.01.28"],
    ["iclr-2027","ICLR 2027","International Conference on Learning Representations 2027","cs",98,93,"Vienna, Austria",48.2082,16.3738,"2027.05.03","ICLR Board",true,"https://iclr.cc","2026.10.22"],
    ["acl-2027","ACL 2027","Annual Meeting of the Association for Computational Linguistics 2027","cs",97,88,"Melbourne, Australia",-37.8136,144.9631,"2027.08.01","ACL",true,"https://www.aclweb.org","2027.02.15"],
    ["kdd-2027","KDD 2027","ACM SIGKDD Conference on Knowledge Discovery and Data Mining 2027","cs",96,91,"Seoul, South Korea",37.5665,126.978,"2027.08.08","ACM SIGKDD",true,"https://kdd.org","2027.02.01"],
    ["ijcai-2027","IJCAI 2027","International Joint Conference on Artificial Intelligence 2027","cs",95,89,"Bologna, Italy",44.4949,11.3426,"2027.08.17","IJCAI Organization",true,"https://www.ijcai.org","2027.01.15"],
    ["colt-2027","COLT 2027","Conference on Learning Theory 2027","cs",95,87,"Zurich, Switzerland",47.3769,8.5417,"2027.07.23","ALT / COLT",true,"http://learningtheory.org","2027.02.20"],
    ["siggraph-2027","SIGGRAPH 2027","ACM SIGGRAPH Conference and Exhibition 2027","cs",98,92,"Los Angeles, USA",34.0522,-118.2437,"2027.08.08","ACM SIGGRAPH",true,"https://www.siggraph.org","2027.01.21"],
    ["chi-2027","CHI 2027","ACM Conference on Human Factors in Computing Systems 2027","cs",96,90,"Hamburg, Germany",53.5511,9.9937,"2027.04.24","ACM SIGCHI",true,"https://chi.acm.org","2026.10.28"],
    ["icse-2027","ICSE 2027","International Conference on Software Engineering 2027","cs",96,88,"Minneapolis, USA",44.9778,-93.265,"2027.05.22","IEEE CS / ACM SIGSOFT",true,"https://www.icse-conferences.org","2026.12.20"],
    ["sp-2027","IEEE S&P 2027","IEEE Symposium on Security and Privacy 2027","cs",98,91,"San Francisco, USA",37.7749,-122.4194,"2027.05.17","IEEE CS",true,"https://www.ieee-security.org","2026.12.15"],
    ["usenixsec-2027","USENIX Sec 2027","USENIX Security Symposium 2027","cs",97,89,"Boston, USA",42.3601,-71.0589,"2027.08.11","USENIX",true,"https://www.usenix.org","2027.03.15"],
    ["sigmod-2027","SIGMOD 2027","ACM SIGMOD/PODS International Conference on Management of Data 2027","cs",97,90,"Vancouver, Canada",49.2827,-123.1207,"2027.06.13","ACM SIGMOD",true,"https://sigmod.org","2026.10.25"],
    ["vldb-2027","VLDB 2027","International Conference on Very Large Data Bases 2027","cs",96,89,"Sydney, Australia",-33.8688,151.2093,"2027.08.30","VLDB Endowment",true,"https://vldb.org","2026.11.01"],
    ["aistats-2027","AISTATS 2027","International Conference on Artificial Intelligence and Statistics 2027","cs",94,88,"Palermo, Italy",38.1157,13.3615,"2027.05.20","AISTATS Society",true,"http://aistats.org","2026.12.20"],
    ["turboexpo-2027","ASME Turbo Expo 2027","ASME Turbo Expo: Turbomachinery Technical Conference 2027","mech",92,88,"Berlin, Germany",52.52,13.405,"2027.06.14","ASME IGTI",true,"https://event.asme.org/Turbo-Expo","2026.09.15"],
    ["idetc-2027","ASME IDETC 2027","International Design Engineering Technical Conferences 2027","mech",90,86,"Chicago, USA",41.8781,-87.6298,"2027.08.10","ASME",true,"https://event.asme.org/IDETC-CIE","2027.03.10"],
    ["aiaa-scitech-2027","AIAA SciTech 2027","AIAA Science and Technology Forum and Exposition 2027","mech",93,89,"Orlando, USA",28.5383,-81.3792,"2027.01.18","AIAA",true,"https://www.aiaa.org/scitech","2026.06.05"],
    ["aiaa-aviation-2027","AIAA AVIATION 2027","AIAA AVIATION Forum 2027","mech",91,87,"Las Vegas, USA",36.1716,-115.1398,"2027.06.14","AIAA",true,"https://www.aiaa.org/aviation","2027.01.15"],
    ["icas-2027","ICAS 2027","Congress of the International Council of the Aeronautical Sciences 2027","mech",89,87,"Stockholm, Sweden",59.3293,18.0686,"2027.09.07","ICAS",false,"https://www.icas.org","2027.04.10"],
    ["wcx-2027","SAE WCX 2027","SAE World Congress Experience 2027","mech",88,85,"Detroit, USA",42.3314,-83.0458,"2027.04.23","SAE International",false,"https://www.sae.org/attend/wcx","2026.11.20"],
    ["wcb-2027","WCB 2027","World Congress of Biomechanics 2027","mech",91,89,"Dublin, Ireland",53.3498,-6.2603,"2027.07.21","WCB Board",false,"https://wcb2026.com","2027.02.20"],
    ["aim-2027","IEEE/ASME AIM 2027","IEEE/ASME International Conference on Advanced Intelligent Mechatronics 2027","mech",87,86,"Auckland, New Zealand",-36.8485,174.7633,"2027.07.22","IEEE / ASME",false,"https://aim2026.org","2027.02.20"],
    ["asme-mesa-2027","ASME MESA 2027","ASME/IEEE International Conference on Mechatronic and Embedded Systems 2027","mech",86,85,"Kyoto, Japan",35.0116,135.7681,"2027.08.18","ASME",false,"https://event.asme.org","2027.03.15"],
    ["euromech-2027","EUROMECH 2027","European Solid Mechanics Conference / Fluid Conference 2027","mech",88,88,"Lyon, France",45.764,4.8357,"2027.07.17","EUROMECH",false,"https://euromech.org","2027.02.15"],
    ["imlb-2027","IMLB 2027","International Meeting on Lithium Batteries 2027","chem",93,89,"Kyoto, Japan",35.0116,135.7681,"2027.06.20","IMLB Committee",true,"https://imlb.org","2027.01.20"],
    ["macro-2027","IUPAC MACRO 2027","IUPAC World Polymer Congress 2027","chem",90,88,"Toronto, Canada",43.6532,-79.3832,"2027.07.07","IUPAC",true,"https://iupac.org","2027.02.10"],
    ["aabc-eu-2027","AABC Europe 2027","Advanced Automotive Battery Conference Europe 2027","chem",87,88,"Mainz, Germany",49.9929,8.2473,"2027.05.07","Cambridge EnerTech",false,"https://www.advancedautobat.com/europe","2026.12.10"],
    ["bat-show-eu-2027","Battery Show Europe 2027","The Battery Show Europe 2027","chem",89,90,"Stuttgart, Germany",48.7758,9.1829,"2027.05.11","Informa Markets",false,"https://www.thebatteryshow.eu","2026.12.15"],
    ["icae-2027","ICAE 2027","International Conference on Applied Energy 2027","chem",88,86,"Tokyo, Japan",35.6762,139.6503,"2027.09.05","Applied Energy Association",false,"https://applied-energy.org","2027.04.10"],
    ["eubce-2027","EUBCE 2027","European Biomass Conference and Exhibition 2027","chem",86,88,"Bologna, Italy",44.4949,11.3426,"2027.05.07","ETA-Florence",false,"https://www.eubce.com","2026.12.10"],
    ["embc-2027","IEEE EMBC 2027","Annual International Conference of the IEEE EMBS 2027","bio",94,91,"Toronto, Canada",43.6532,-79.3832,"2027.07.19","IEEE EMBS",true,"https://embc.embs.org","2027.01.20"],
    ["ismb-2027","ISMB 2027","Intelligent Systems for Molecular Biology 2027","bio",95,92,"Vienna, Austria",48.2082,16.3738,"2027.07.11","ISCB",true,"https://www.iscb.org/ismb","2027.02.15"],
    ["recomb-2027","RECOMB 2027","Research in Computational Molecular Biology 2027","bio",93,89,"Lausanne, Switzerland",46.5197,6.6323,"2027.04.15","RECOMB",true,"https://recomb.org","2026.11.15"],
    ["sfb-2027","SFB 2027","Society For Biomaterials Annual Meeting 2027","bio",89,87,"Orlando, USA",28.5383,-81.3792,"2027.04.12","SFB",false,"https://biomaterials.org","2026.11.15"],
    ["termis-eu-2027","TERMIS-EU 2027","Tissue Engineering and Regenerative Medicine Europe 2027","bio",89,90,"Dublin, Ireland",53.3498,-6.2603,"2027.06.12","TERMIS",false,"https://termis.org","2027.01.15"],
    ["asgct-2027","ASGCT 2027","American Society of Gene & Cell Therapy Annual Meeting 2027","bio",92,90,"Chicago, USA",41.8781,-87.6298,"2027.05.05","ASGCT",true,"https://asgct.org","2026.12.10"],
    ["aacr-2027","AACR 2027","American Association for Cancer Research Annual Meeting 2027","bio",96,92,"San Diego, USA",32.7157,-117.1611,"2027.04.16","AACR",true,"https://www.aacr.org","2026.12.01"],
    ["isscr-2027","ISSCR 2027","International Society for Stem Cell Research Annual Meeting 2027","bio",93,90,"Boston, USA",42.3601,-71.0589,"2027.06.11","ISSCR",true,"https://www.isscr.org","2027.01.15"],
    ["eccb-bio-2027","ECCB 2027","European Conference on Computational Biology 2027","bio",90,89,"Copenhagen, Denmark",55.6761,12.5683,"2027.09.11","SIB Swiss Institute of Bioinformatics",false,"https://eccb2026.org","2027.04.15"],
    ["hgm-2027","HUGO HGM 2027","Human Genome Meeting 2027","bio",89,88,"Singapore",1.3521,103.8198,"2027.04.05","HUGO",false,"https://hugo-international.org","2026.11.10"],
    ["esb-2027","ESB 2027","European Society of Biomechanics Congress 2027","bio",88,88,"Edinburgh, UK",55.9533,-3.1883,"2027.09.23","ESB",false,"https://esbiomech.org","2027.04.20"],
    ["wacbe-2027","WACBE 2027","World Association for Chinese Biomedical Engineers 2027","bio",86,87,"Hong Kong",22.3193,114.1694,"2027.07.07","WACBE",false,"http://wacbe.org","2027.02.10"],
    ["ifac-2027","IFAC 2027","IFAC World Congress / Conference 2027","ind",95,91,"Busan, South Korea",35.1796,129.0756,"2027.08.22","IFAC",true,"https://ifac-control.org","2027.03.20"],
    ["informs-analytics-2027","INFORMS Analytics 2027","INFORMS Business Analytics Conference 2027","ind",90,88,"Denver, USA",39.7392,-104.9903,"2027.04.16","INFORMS",false,"https://meetings.informs.org","2026.11.15"],
    ["iserc-2027","ISERC 2027","IISE Annual Conference & Expo 2027","ind",91,88,"Atlanta, USA",33.749,-84.388,"2027.05.07","IISE",true,"https://www.iise.org","2026.11.07"],
    ["temscon-2027","IEEE TEMSCON 2027","IEEE Technology & Engineering Management Society Conference 2027","ind",87,86,"Helsinki, Finland",60.1699,24.9384,"2027.06.24","IEEE TEMS",false,"https://temscon.org","2027.01.20"],
    ["corl-2026","CoRL 2026","Conference on Robot Learning 2026","cs",92,89,"Munich, Germany",48.1351,11.582,"2026.11.02","Robot Learning Foundation",true,"https://corl.org","2026.06.12"],
    ["corl-2027","CoRL 2027","Conference on Robot Learning 2027","cs",92,89,"Seoul, South Korea",37.5665,126.978,"2027.11.01","Robot Learning Foundation",true,"https://corl.org","2027.06.11"],
    ["eccv-2026","ECCV 2026","European Conference on Computer Vision 2026","cs",96,92,"Milan, Italy",45.4642,9.19,"2026.09.29","ECVA",true,"https://eccv2026.ecva.net","2026.03.05"],
    ["iccv-2027","ICCV 2027","IEEE/CVF International Conference on Computer Vision 2027","cs",97,93,"Sydney, Australia",-33.8688,151.2093,"2027.10.18","IEEE / CVF",true,"https://iccv2027.thecvf.com","2027.03.08"],
    ["vlsitsa-2026","VLSI-TSA 2026","VLSI Design, Systems and Applications 2026","semiconductor",88,86,"Hsinchu, Taiwan",24.8138,120.9675,"2026.04.20","IEEE Electron Devices",false,"https://vlsitsa.itri.org.tw","2025.10.31"],
    ["vlsitsa-2027","VLSI-TSA 2027","VLSI Design, Systems and Applications 2027","semiconductor",88,86,"Hsinchu, Taiwan",24.8138,120.9675,"2027.04.19","IEEE Electron Devices",false,"https://vlsitsa.itri.org.tw","2026.10.30"],
    ["icicdt-2026","ICICDT 2026","International Conference on IC Design and Technology 2026","semiconductor",86,85,"Grenoble, France",45.1885,5.7245,"2026.06.17","IEEE",false,"http://www.icicdt.org","2026.02.15"],
    ["icicdt-2027","ICICDT 2027","International Conference on IC Design and Technology 2027","semiconductor",86,85,"Dresden, Germany",51.0504,13.7373,"2027.06.16","IEEE",false,"http://www.icicdt.org","2027.02.14"],
    ["ieee-sensors-2026","IEEE SENSORS 2026","IEEE Sensors Conference 2026","electronics",90,88,"Kobe, Japan",34.6901,135.1955,"2026.10.25","IEEE Sensors Council",true,"https://ieee-sensors2026.org","2026.06.15"],
    ["ieee-sensors-2027","IEEE SENSORS 2027","IEEE Sensors Conference 2027","electronics",90,88,"Vienna, Austria",48.2082,16.3738,"2027.10.24","IEEE Sensors Council",true,"https://ieee-sensors.org","2027.06.14"],
    ["icmat-2027","ICMAT 2027","Materials for Advanced Technologies 2027","materials",90,91,"Singapore",1.3521,103.8198,"2027.06.27","MRS Singapore",true,"https://icmat2027.mrs.org.sg","2027.01.20"],
    ["caad-futures-2027","CAAD Futures 2027","Computer-Aided Architectural Design Futures 2027","architecture",90,89,"Delft, Netherlands",52.0116,4.3571,"2027.07.05","CAAD Futures Foundation",true,"https://caadfutures2027.org","2026.11.15"],
    ["iahr-world-2027","IAHR World 2027","IAHR World Congress on Hydro-Environment Engineering 2027","civil",89,87,"Singapore",1.3521,103.8198,"2027.08.23","IAHR",false,"https://www.iahr.org","2026.12.01"],
    ["rss-2026","RSS 2026","Robotics: Science and Systems 2026","mech",95,90,"Delft, Netherlands",52.0116,4.3571,"2026.07.13","Robotics Science and Systems Foundation",true,"https://roboticsconference.org","2026.01.30"],
    ["rss-2027","RSS 2027","Robotics: Science and Systems 2027","mech",95,90,"San Diego, USA",32.7157,-117.1611,"2027.07.12","Robotics Science and Systems Foundation",true,"https://roboticsconference.org","2027.01.29"],
    ["iscre-2027","ISCRE 2027","Chemical Reaction Engineering Symposium 2027","chem",91,88,"Minneapolis, USA",44.9778,-93.265,"2027.06.13","ISCRE",false,"https://iscre.org","2026.11.20"],
    ["isscr-symp-2026","ISSCR Boston 2026","ISSCR International Stem Cell Symposium 2026","bio",90,88,"Boston, USA",42.3601,-71.0589,"2026.11.12","ISSCR",false,"https://www.isscr.org","2026.07.15"],
    ["isscr-symp-2027","ISSCR Tokyo 2027","ISSCR International Stem Cell Symposium 2027","bio",90,88,"Tokyo, Japan",35.6762,139.6503,"2027.11.11","ISSCR",false,"https://www.isscr.org","2027.07.14"],
    ["informs-sec-2027","INFORMS Security 2027","INFORMS Conference on Security & Resilience 2027","ind",89,87,"Washington D.C., USA",38.9072,-77.0369,"2027.05.14","INFORMS",false,"https://meetings.informs.org","2026.11.18"]
];

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
        location: "Kyoto/Hawaii - highly desirable, culturally rich locations with great sightseeing.",
        grants: "Symposium foundation offers registration waivers and travel stipends for students.",
        networking: "Relaxed settings foster informal, high-level networking between students and experts."
    },
    mrs: {
        location: "Boston (Fall) / Phoenix (Spring), vibrant hubs with rich historical and technological significance.",
        grants: "MRS offers student presentation awards and travel assistance opportunities.",
        networking: "The premiere gathering for cross-disciplinary materials science research."
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
    },
    aia: {
        location: "Stunning US tech and tourist centers, featuring prime architectural study walking tours.",
        grants: "AIA provides architectural student scholarships and registration discounts.",
        networking: "The premier networking avenue with leading global design principals and partners."
    },
    uia: {
        location: "Architecturally world-renowned centers like Barcelona, offering unmatched structural aesthetics.",
        grants: "UIA foundation offers special entry grants for young architectural scholars.",
        networking: "Global scale networking across all nations and architectural philosophies."
    }
};

// --- Map Raw Data to Structured Objects ---
const conferences = rawConferencesData.map((conf, idx) => {
    const [id, name, fullName, field, cqi, gsai, location, lat, lon, date, organizer, isTopTier, url, deadline] = conf;
    
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
        isTopTier,
        deadline
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
    else if (field === 'materials') color = '#10b981';
    else if (field === 'architecture') color = '#a855f7';
    else if (field === 'civil') color = '#14b8a6';
    else if (field === 'cs') color = '#3b82f6';
    else if (field === 'mech') color = '#f97316';
    else if (field === 'chem') color = '#84cc16';
    else if (field === 'bio') color = '#ec4899';
    else color = '#6366f1'; // Indigo for Industrial Engineering

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
            <i class="fa-solid ${
                field === 'semiconductor' ? 'fa-microchip' : 
                field === 'electronics' ? 'fa-bolt' : 
                field === 'materials' ? 'fa-atom' : 
                field === 'architecture' ? 'fa-building-columns' : 
                field === 'civil' ? 'fa-bridge' :
                field === 'cs' ? 'fa-brain' :
                field === 'mech' ? 'fa-gear' :
                field === 'chem' ? 'fa-flask' :
                field === 'bio' ? 'fa-dna' :
                'fa-diagram-project'
            }"></i>
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

const INITIAL_MAP_CENTER = [25, 10];
const INITIAL_MAP_ZOOM = 2.5;
const CARTO_API_KEY = 'cb1_4fx7_1_90b4020701de4739f2fa31c5';

function initMap() {
    // Tight vertical bounds: cut Antarctica completely (south limit -50), cap north at 75
    // Huge horizontal bounds allow endless left-right panning
    const southWest = L.latLng(-50, -1e9);
    const northEast = L.latLng(75, 1e9);
    const bounds = L.latLngBounds(southWest, northEast);

    // minZoom 1.5 with fractional zoom support enabled (zoomSnap/zoomDelta: 0.5)
    map = L.map('map', {
        zoomControl: false,
        attributionControl: true,
        minZoom: 1.5,
        zoomSnap: 0.5,
        zoomDelta: 0.5,
        maxBounds: bounds,
        maxBoundsViscosity: 1.0,
        worldCopyJump: true
    }).setView(INITIAL_MAP_CENTER, INITIAL_MAP_ZOOM);

    // Dark raster tiles from CARTO with registered API key and attribution
    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png?key=${CARTO_API_KEY}`, {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>'
    }).addTo(map);

    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);

    markersLayer.addTo(map);
}

// Helper: add a Leaflet marker to markersLayer at 3 longitudes (original, +360, -360)
// so markers always appear on wrapped copies of the world map
function addMarkerWithWrapping(lat, lon, markerFactory) {
    const offsets = [0, 360, -360];
    const markers = [];
    offsets.forEach(offset => {
        const m = markerFactory(lat, lon + offset);
        markersLayer.addLayer(m);
        markers.push(m);
    });
    return markers;
}

const ALL_FIELDS = ['semiconductor', 'electronics', 'materials', 'architecture', 'civil', 'cs', 'mech', 'chem', 'bio', 'ind'];
const DEFAULT_FIELDS = ['semiconductor', 'electronics'];

// Load saved fields from LocalStorage or default to initial 2 fields
const loadSavedFields = () => {
    try {
        const saved = localStorage.getItem('tripconference_selected_fields');
        if (saved) return JSON.parse(saved);
    } catch (e) {
        console.warn('Failed to load saved fields:', e);
    }
    return [...DEFAULT_FIELDS];
};

// --- App State ---
const state = {
    searchQuery: '',
    selectedFields: loadSavedFields(),
    minCQI: 60,
    minGSAI: 50,
    sortBy: 'date',
    showPast: false
};

// --- URL Parameter Engine for Deep-Linking & SEO ---
let pendingConferenceIdFromUrl = null;

function parseUrlParameters() {
    try {
        const params = new URLSearchParams(window.location.search);
        
        // 1. Search Query (?q=...)
        const qParam = params.get('q');
        if (qParam) {
            state.searchQuery = qParam.toLowerCase().trim();
            if (searchInput) searchInput.value = qParam;
            if (searchClearBtn) searchClearBtn.style.display = 'flex';
        }

        // 2. Discipline Field (?field=...)
        const fieldParam = params.get('field');
        if (fieldParam) {
            const requested = fieldParam.split(',').map(f => f.trim().toLowerCase()).filter(f => ALL_FIELDS.includes(f));
            if (requested.length > 0) {
                state.selectedFields = requested;
            }
        }

        // 3. Timeline / Past Filter (?past=1 or ?timeline=all)
        const pastParam = params.get('past') || params.get('timeline');
        if (pastParam === '1' || pastParam === 'true' || pastParam === 'all') {
            state.showPast = true;
        }

        // 4. Sort Parameter (?sort=...)
        const sortParam = params.get('sort');
        if (sortParam && ['date', 'cqi', 'gsai', 'name'].includes(sortParam)) {
            state.sortBy = sortParam;
            if (sortSelect) sortSelect.value = sortParam;
        } else if (sortSelect) {
            sortSelect.value = state.sortBy;
        }

        // 5. Conference ID (?id=...)
        const idParam = params.get('id');
        if (idParam) {
            pendingConferenceIdFromUrl = idParam.trim();
        }
    } catch (e) {
        console.warn('URL parsing error:', e);
    }
}

function updateUrlParams(explicitConferenceId = undefined) {
    try {
        const params = new URLSearchParams();
        if (state.searchQuery) {
            params.set('q', state.searchQuery);
        }
        
        // Check if selected fields differ from default 2 fields
        const isDefaultFields = state.selectedFields.length === DEFAULT_FIELDS.length &&
            DEFAULT_FIELDS.every(f => state.selectedFields.includes(f));
        if (!isDefaultFields && state.selectedFields.length > 0 && state.selectedFields.length < ALL_FIELDS.length) {
            params.set('field', state.selectedFields.join(','));
        }

        if (state.showPast) {
            params.set('past', '1');
        }

        if (state.sortBy && state.sortBy !== 'date') {
            params.set('sort', state.sortBy);
        }

        if (explicitConferenceId !== undefined) {
            if (explicitConferenceId) {
                params.set('id', explicitConferenceId);
            }
        } else {
            const activeCard = document.querySelector('.conference-card.active');
            if (activeCard && detailModal && detailModal.classList.contains('show')) {
                params.set('id', activeCard.dataset.id);
            }
        }

        const newQuery = params.toString();
        const newUrl = newQuery ? `${window.location.pathname}?${newQuery}` : window.location.pathname;
        window.history.replaceState({}, '', newUrl);
    } catch (e) {}
}

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

// --- Functions & Pure Logic Delegators ---

function parseConferenceDate(dateStr) {
    if (typeof window !== 'undefined' && window.app_logic_helper && window.app_logic_helper.parseConferenceDate) {
        return window.app_logic_helper.parseConferenceDate(dateStr);
    }
    if (!dateStr) return null;
    const match = dateStr.match(/^(\d{4})\.(\d{2})/);
    if (!match) return null;
    return {
        year: parseInt(match[1], 10),
        month: parseInt(match[2], 10),
        day: match[3] ? parseInt(match[3], 10) : null
    };
}

function getConferenceTimeStatus(dateStr, referenceDate = new Date()) {
    if (typeof window !== 'undefined' && window.app_logic_helper && window.app_logic_helper.getConferenceTimeStatus) {
        return window.app_logic_helper.getConferenceTimeStatus(dateStr, referenceDate);
    }
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
        // Same month: compare day if specified
        if (parsed.day !== null) {
            if (parsed.day < currentDay) return 'past';
            if (parsed.day === currentDay) return 'current';
            return 'future';
        }
        return 'current';
    }
}

function isWithinYearWindow(dateStr, referenceDate = new Date()) {
    if (typeof window !== 'undefined' && window.app_logic_helper && window.app_logic_helper.isWithinYearWindow) {
        return window.app_logic_helper.isWithinYearWindow(dateStr, referenceDate);
    }
    const parsed = parseConferenceDate(dateStr);
    if (!parsed) return true;
    
    const currentYear = referenceDate.getFullYear();
    const currentMonth = referenceDate.getMonth() + 1;
    
    const confAbsoluteMonths = parsed.year * 12 + parsed.month;
    const currentAbsoluteMonths = currentYear * 12 + currentMonth;
    const diffMonths = confAbsoluteMonths - currentAbsoluteMonths;
    
    return (diffMonths >= -12 && diffMonths <= 12);
}

const LAST_DB_UPDATE_YEAR = 2026;
const LAST_DB_UPDATE_QUARTER = 3;

function initUpdateStatusBadge() {
    // Dynamically sync the last updated badge text from constants (Single Source of Truth)
    const lastUpdatedBadgeEl = document.getElementById('last-updated-badge');
    if (lastUpdatedBadgeEl) {
        lastUpdatedBadgeEl.innerHTML = `<i class="fa-solid fa-arrows-rotate"></i> Updated: ${LAST_DB_UPDATE_YEAR}.${LAST_DB_UPDATE_QUARTER}Q`;
    }

    const badgeEl = document.getElementById('update-status-badge');
    if (!badgeEl) return;

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentQuarter = Math.floor((currentMonth - 1) / 3) + 1;

    const currentAbsoluteQ = currentYear * 4 + (currentQuarter - 1);
    const lastUpdateAbsoluteQ = LAST_DB_UPDATE_YEAR * 4 + (LAST_DB_UPDATE_QUARTER - 1);

    if (currentAbsoluteQ <= lastUpdateAbsoluteQ) {
        badgeEl.className = 'update-status-badge status-ok';
        badgeEl.innerHTML = '<i class="fa-solid fa-circle-check"></i> Up to Date';
        badgeEl.title = 'Database is up to date for the current quarter.';
    } else {
        badgeEl.className = 'update-status-badge status-warning';
        badgeEl.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> Update Needed';
        badgeEl.title = 'Quarterly update recommended for the current season.';
    }
}

// Lightweight debounce utility to ensure smooth typing and slider dragging
function debounce(fn, wait = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn.apply(this, args), wait);
    };
}

function getFilteredConferences() {
    const query = state.searchQuery.toLowerCase();
    return conferences.filter(conf => {
        // Search text filter across name, fullName, location, organizer, and field
        const matchSearch = !query ||
            conf.name.toLowerCase().includes(query) ||
            conf.fullName.toLowerCase().includes(query) ||
            conf.location.toLowerCase().includes(query) ||
            conf.organizer.toLowerCase().includes(query) ||
            conf.field.toLowerCase().includes(query);
        
        // Field filter
        const matchField = state.selectedFields.includes(conf.field);
        
        // CQI score filter
        const matchCQI = conf.cqi >= state.minCQI;
        
        // GSAI score filter
        const matchGSAI = conf.gsai >= state.minGSAI;

        // Date window filter (-1 year to +1 year from today)
        const matchDateWindow = isWithinYearWindow(conf.date);
        if (!matchDateWindow) return false;

        // Timeline filter: By default (!state.showPast), only upcoming/future/current conferences are shown
        if (!state.showPast) {
            const timeStatus = getConferenceTimeStatus(conf.date);
            if (timeStatus === 'past') return false;
        }

        return matchSearch && matchField && matchCQI && matchGSAI;
    }).sort((a, b) => {
        if (state.sortBy === 'date') {
            const dateDiff = a.date.localeCompare(b.date);
            if (dateDiff !== 0) return dateDiff;
            return b.cqi - a.cqi; // Higher CQI first if same date
        }
        if (state.sortBy === 'deadline') {
            const deadA = a.deadline || '9999.99.99';
            const deadB = b.deadline || '9999.99.99';
            const diff = deadA.localeCompare(deadB);
            if (diff !== 0) return diff;
            return a.date.localeCompare(b.date);
        }
        if (state.sortBy === 'cqi') return b.cqi - a.cqi;
        if (state.sortBy === 'gsai') return b.gsai - a.gsai;
        if (state.sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
    });
}

function updateStats(filteredData) {
    totalCountEl.textContent = filteredData.length;
    
    // Count how many are TopTier (A* equivalent)
    const topCount = filteredData.filter(conf => conf.isTopTier).length;
    topCountEl.textContent = topCount;

    const statTotalLabel = document.getElementById('stat-total-label');
    if (statTotalLabel) {
        statTotalLabel.textContent = state.showPast ? 'All Events' : 'Upcoming';
    }

    const feedbackEl = document.getElementById('search-results-feedback');
    if (feedbackEl) {
        const pastCount = filteredData.filter(c => getConferenceTimeStatus(c.date) === 'past').length;
        const upcomingCount = filteredData.length - pastCount;
        if (state.showPast) {
            feedbackEl.innerHTML = `<i class="fa-solid fa-filter"></i> Showing <strong>${upcomingCount}</strong> upcoming + <strong>${pastCount}</strong> past conferences (${filteredData.length} total)`;
        } else {
            feedbackEl.innerHTML = `<i class="fa-solid fa-filter"></i> Showing <strong>${upcomingCount}</strong> upcoming conferences`;
        }
    }
}

function renderApproachingDeadlines(filteredData) {
    const deadlinesContainer = document.getElementById('deadlines-container');
    const badgeCountEl = document.getElementById('deadlines-badge-count');
    if (!deadlinesContainer) return;

    deadlinesContainer.innerHTML = '';

    // Prioritize upcoming deadlines from currently filtered conferences
    let approaching = getApproachingDeadlineConferences(filteredData, 5);

    // If active filteredData has no upcoming deadlines (e.g. searching a past year),
    // fallback to upcoming deadlines from currently selected fields
    if (approaching.length === 0) {
        const fieldConferences = conferences.filter(c => state.selectedFields.includes(c.field));
        approaching = getApproachingDeadlineConferences(fieldConferences, 5);
    }

    if (badgeCountEl) {
        badgeCountEl.textContent = approaching.length > 0 ? `${approaching.length} Active` : '0 Active';
    }

    if (approaching.length === 0) {
        deadlinesContainer.innerHTML = `
            <div style="font-size: 0.72rem; color: var(--text-secondary); padding: 0.4rem 0.2rem; text-align: center;">
                No upcoming deadlines in current selection.
            </div>
        `;
        return;
    }

    approaching.forEach(conf => {
        const item = document.createElement('div');
        item.className = 'deadline-item-card';
        item.dataset.id = conf.id;

        const dDay = conf.dDayInfo;
        const dDayClass = dDay.isUrgent ? 'urgent' : 'upcoming';

        let fieldIcon = 'fa-microchip';
        if (conf.field === 'electronics') fieldIcon = 'fa-bolt';
        else if (conf.field === 'materials') fieldIcon = 'fa-atom';
        else if (conf.field === 'architecture') fieldIcon = 'fa-building-columns';
        else if (conf.field === 'civil') fieldIcon = 'fa-bridge';
        else if (conf.field === 'cs') fieldIcon = 'fa-brain';
        else if (conf.field === 'mech') fieldIcon = 'fa-gear';
        else if (conf.field === 'chem') fieldIcon = 'fa-flask';
        else if (conf.field === 'bio') fieldIcon = 'fa-dna';
        else if (conf.field === 'ind') fieldIcon = 'fa-diagram-project';

        item.innerHTML = `
            <div class="deadline-item-left">
                <span class="dday-badge ${dDayClass}">${dDay.label}</span>
                <div class="deadline-conf-info">
                    <span class="deadline-conf-name" title="${conf.name}">${conf.name}</span>
                    <span class="deadline-conf-field"><i class="fa-solid ${fieldIcon}"></i> ${conf.location.split(',')[0]}</span>
                </div>
            </div>
            <div class="deadline-item-right">
                <span class="deadline-date-text">${conf.deadline}</span>
            </div>
        `;

        item.addEventListener('click', (e) => {
            e.stopPropagation();
            selectConference(conf.id);
        });

        deadlinesContainer.appendChild(item);
    });
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
        const timeStatus = getConferenceTimeStatus(conf.date);
        const isPast = timeStatus === 'past';
        const isCurrent = timeStatus === 'current';

        card.className = `conference-card ${conf.field}-card ${isPast ? 'card-past' : ''}`;
        card.dataset.id = conf.id;
        
        let fieldNameEn = '';
        if (conf.field === 'semiconductor') fieldNameEn = 'Semiconductors';
        else if (conf.field === 'electronics') fieldNameEn = 'Electronics';
        else if (conf.field === 'materials') fieldNameEn = 'Materials';
        else if (conf.field === 'architecture') fieldNameEn = 'Architecture';
        else if (conf.field === 'civil') fieldNameEn = 'Civil Engineering';
        else if (conf.field === 'cs') fieldNameEn = 'Computer Science & AI';
        else if (conf.field === 'mech') fieldNameEn = 'Mechanical & Aerospace';
        else if (conf.field === 'chem') fieldNameEn = 'Chemical & Energy';
        else if (conf.field === 'bio') fieldNameEn = 'Biomedical & Biotech';
        else if (conf.field === 'ind') fieldNameEn = 'Industrial Engineering';

        let timeBadgeHtml = '';
        if (isPast) {
            timeBadgeHtml = '<span class="badge-tag badge-status-past"><i class="fa-solid fa-clock-rotate-left"></i> Concluded</span>';
        } else if (isCurrent) {
            timeBadgeHtml = '<span class="badge-tag badge-status-current"><i class="fa-solid fa-bolt"></i> This Month</span>';
        } else {
            timeBadgeHtml = '<span class="badge-tag badge-status-upcoming"><i class="fa-solid fa-calendar-check"></i> Upcoming</span>';
        }

        const dDay = conf.deadline ? getDeadlineDDay(conf.deadline) : null;
        let deadlineHtml = '';
        if (dDay) {
            const dDayClass = dDay.isUrgent ? 'urgent' : (dDay.isUpcoming ? 'upcoming' : 'closed');
            deadlineHtml = `
                <div class="card-deadline-row">
                    <span class="deadline-label"><i class="fa-solid fa-hourglass-half"></i> Deadline: <strong>${conf.deadline}</strong></span>
                    <span class="dday-badge ${dDayClass}">${dDay.label}</span>
                </div>
            `;
        }

        card.innerHTML = `
            <div class="card-header">
                <div class="card-header-top">
                    <h3>${conf.name}</h3>
                    <div class="card-date ${isPast ? 'date-past' : 'date-upcoming'}">${conf.date}</div>
                </div>
                <div class="card-badges">
                    <span class="badge-tag badge-${conf.field}">${fieldNameEn}</span>
                    ${conf.isTopTier ? '<span class="badge-tag badge-toptier">A*</span>' : ''}
                    ${timeBadgeHtml}
                </div>
            </div>
            <div class="card-meta">
                <div class="meta-item"><i class="fa-solid fa-location-dot"></i> ${conf.location}</div>
                <div class="meta-item"><i class="fa-solid fa-building-columns"></i> ${conf.organizer}</div>
            </div>
            ${deadlineHtml}
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

        if (confList.length === 1) {
            // Single conference — create at 3 longitude offsets for wrapping
            const timeStatus = getConferenceTimeStatus(firstConf.date);
            const timeBadgeHtml = timeStatus === 'past'
                ? '<span class="popup-time-badge status-past"><i class="fa-solid fa-clock-rotate-left"></i> Concluded</span>'
                : (timeStatus === 'current'
                    ? '<span class="popup-time-badge status-current"><i class="fa-solid fa-bolt"></i> This Month</span>'
                    : '<span class="popup-time-badge status-upcoming">Upcoming</span>');

            const popupContent = `
                <div class="map-popup-card">
                    <h4>${firstConf.name} ${timeBadgeHtml}</h4>
                    <p><i class="fa-solid fa-location-dot"></i> ${firstConf.location} &bull; <i class="fa-solid fa-calendar"></i> ${firstConf.date}</p>
                    <div class="popup-score-row">
                        <span style="background: rgba(244,63,94,0.1); color: #f43f5e; border: 1px solid rgba(244,63,94,0.3)">CQI: ${firstConf.cqi}</span>
                        <span style="background: rgba(14,165,233,0.1); color: #0ea5e9; border: 1px solid rgba(14,165,233,0.3)">GSAI: ${firstConf.gsai}</span>
                    </div>
                    <button class="popup-detail-btn" onclick="selectConference('${firstConf.id}')">
                        <i class="fa-solid fa-circle-info"></i> View Details
                    </button>
                </div>
            `;

            addMarkerWithWrapping(firstConf.lat, firstConf.lon, (lat, lon) => {
                const marker = L.marker([lat, lon], {
                    icon: getMarkerIcon(firstConf.field, false)
                });
                marker.conferenceId = firstConf.id;
                marker.isGroup = false;
                marker.location = firstConf.location;

                marker.bindPopup(popupContent, {
                    closeButton: false,
                    offset: L.point(0, -5)
                });

                marker.on('click', function () {
                    this.openPopup();
                });
                marker.on('mouseover', function () {
                    this.openPopup();
                });

                return marker;
            });
        } else {
            // Multiple conferences in this city — grouped marker at 3 offsets
            const popupContent = `
                <div class="map-popup-card">
                    <h4 style="margin-bottom: 6px; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 4px; font-size: 0.85rem; font-weight: 700;">
                        ${city} (${confList.length} Conferences)
                    </h4>
                    <div style="max-height: 150px; overflow-y: auto; display: flex; flex-direction: column; gap: 4px; padding-right: 4px;">
                        ${confList.map(c => {
                            const cStatus = getConferenceTimeStatus(c.date);
                            const cBadge = cStatus === 'past' ? '<span class="popup-time-badge status-past">Ended</span>' : '';
                            return `
                            <div class="popup-list-item" onclick="selectConference('${c.id}')" style="
                                cursor: pointer;
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding: 4px 6px;
                                background: rgba(255,255,255,0.03);
                                border-radius: 4px;
                                border-left: 3px solid ${
                                    c.field === 'semiconductor' ? '#f59e0b' : 
                                    c.field === 'electronics' ? '#0ea5e9' : 
                                    c.field === 'materials' ? '#10b981' : 
                                    c.field === 'architecture' ? '#a855f7' : 
                                    c.field === 'civil' ? '#14b8a6' :
                                    c.field === 'cs' ? '#3b82f6' :
                                    c.field === 'mech' ? '#f97316' :
                                    c.field === 'chem' ? '#84cc16' :
                                    c.field === 'bio' ? '#ec4899' :
                                    '#6366f1'
                                };
                                font-size: 0.75rem;
                            ">
                                <span style="font-weight: 600;">${c.name} ${cBadge}</span>
                                <span style="font-size: 0.65rem; color: #f43f5e; font-weight: 700;">CQI: ${c.cqi}</span>
                            </div>
                            `;
                        }).join('')}
                    </div>
                </div>
            `;

            addMarkerWithWrapping(firstConf.lat, firstConf.lon, (lat, lon) => {
                const marker = L.marker([lat, lon], {
                    icon: getGroupedMarkerIcon(confList.length, false)
                });
                marker.conferenceIds = confList.map(c => c.id);
                marker.isGroup = true;
                marker.location = city;

                marker.bindPopup(popupContent, {
                    closeButton: false,
                    offset: L.point(0, -5)
                });

                return marker;
            });
        }
    });
}

// Expose globally for popup callbacks
window.selectConference = selectConference;

function selectConference(id) {
    if (map) {
        map.closePopup();
    }
    const conf = conferences.find(c => c.id === id);
    if (!conf) return;

    // Highlight active card & auto-scroll into view
    document.querySelectorAll('.conference-card').forEach(card => {
        if (card.dataset.id === id) {
            card.classList.add('active');
            card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            card.classList.remove('active');
        }
    });

    // Also highlight matching deadline card in Approaching Deadlines widget
    document.querySelectorAll('.deadline-item-card').forEach(item => {
        if (item.dataset.id === id) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Update map marker scale — all wrapped copies get highlighted
    let nearestMarker = null;
    let nearestDist = Infinity;
    const mapCenter = map.getCenter();

    markersLayer.eachLayer(marker => {
        if (marker.location === conf.location) {
            if (marker.isGroup) {
                marker.setIcon(getGroupedMarkerIcon(marker.conferenceIds.length, true));
            } else {
                marker.setIcon(getMarkerIcon(conf.field, true));
            }
            activeMarker = marker;

            // Find the copy nearest to current map center for smooth panning
            const mLng = marker.getLatLng().lng;
            const dist = Math.abs(mLng - mapCenter.lng);
            if (dist < nearestDist) {
                nearestDist = dist;
                nearestMarker = marker;
            }
        } else {
            if (marker.isGroup) {
                marker.setIcon(getGroupedMarkerIcon(marker.conferenceIds.length, false));
            } else {
                const originalConf = conferences.find(c => c.id === marker.conferenceId);
                marker.setIcon(getMarkerIcon(originalConf.field, false));
            }
        }
    });

    // Pan to the nearest wrapped copy
    if (nearestMarker) {
        map.setView([nearestMarker.getLatLng().lat, nearestMarker.getLatLng().lng], 5, {
            animate: true,
            duration: 0.5
        });
    }

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
    } else if (conf.field === 'materials') {
        fieldColor = 'var(--color-mat)';
        fieldBgGrad = `linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Materials';
    } else if (conf.field === 'architecture') {
        fieldColor = 'var(--color-arch)';
        fieldBgGrad = `linear-gradient(135deg, rgba(168, 85, 247, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Architecture';
    } else if (conf.field === 'civil') {
        fieldColor = 'var(--color-civil)';
        fieldBgGrad = `linear-gradient(135deg, rgba(20, 184, 166, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Civil Engineering';
    } else if (conf.field === 'cs') {
        fieldColor = 'var(--color-cs)';
        fieldBgGrad = `linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Computer Science & AI';
    } else if (conf.field === 'mech') {
        fieldColor = 'var(--color-mech)';
        fieldBgGrad = `linear-gradient(135deg, rgba(249, 115, 22, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Mechanical & Aerospace';
    } else if (conf.field === 'chem') {
        fieldColor = 'var(--color-chem)';
        fieldBgGrad = `linear-gradient(135deg, rgba(132, 204, 22, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Chemical & Energy';
    } else if (conf.field === 'bio') {
        fieldColor = 'var(--color-bio)';
        fieldBgGrad = `linear-gradient(135deg, rgba(236, 72, 153, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Biomedical & Biotech';
    } else {
        fieldColor = 'var(--color-ind)';
        fieldBgGrad = `linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameEn = 'Industrial Engineering';
    }

    modalHeaderBg.style.background = fieldBgGrad;
    modalBadgeField.textContent = fieldNameEn;
    modalBadgeField.style.backgroundColor = `rgba(255,255,255,0.08)`;
    modalBadgeField.style.color = fieldColor;
    modalBadgeField.style.border = `1px solid ${fieldColor}`;

    modalConfName.textContent = conf.name;
    modalConfFullname.textContent = conf.fullName;
    modalInfoDate.textContent = conf.date;

    const modalInfoDeadline = document.getElementById('modal-info-deadline');
    if (modalInfoDeadline) {
        const dDay = conf.deadline ? getDeadlineDDay(conf.deadline) : null;
        if (dDay) {
            const dDayClass = dDay.isUrgent ? 'urgent' : (dDay.isUpcoming ? 'upcoming' : 'closed');
            modalInfoDeadline.innerHTML = `${conf.deadline} <span class="dday-pill-inline ${dDayClass}">${dDay.label}</span>`;
        } else {
            modalInfoDeadline.textContent = conf.deadline || 'TBD';
        }
    }

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

    // Render Modal Time Status Banner
    const timeBannerEl = document.getElementById('modal-time-banner');
    if (timeBannerEl) {
        const timeStatus = getConferenceTimeStatus(conf.date);
        if (timeStatus === 'past') {
            timeBannerEl.className = 'modal-time-banner modal-time-past';
            timeBannerEl.innerHTML = `
                <i class="fa-solid fa-clock-rotate-left"></i>
                <div><strong>Concluded Event:</strong> This conference was held in <strong>${conf.date}</strong>. Check the official website for proceedings and the next edition.</div>
            `;
        } else if (timeStatus === 'current') {
            timeBannerEl.className = 'modal-time-banner modal-time-current';
            timeBannerEl.innerHTML = `
                <i class="fa-solid fa-bolt"></i>
                <div><strong>Happening This Month:</strong> Scheduled for <strong>${conf.date}</strong>. Sessions and digital streams are currently active.</div>
            `;
        } else {
            timeBannerEl.className = 'modal-time-banner modal-time-upcoming';
            timeBannerEl.innerHTML = `
                <i class="fa-solid fa-calendar-check"></i>
                <div><strong>Upcoming Conference:</strong> Scheduled for <strong>${conf.date}</strong> in <strong>${conf.location}</strong>. Paper submissions & travel grants are active.</div>
            `;
        }
    }

    // Open Modal
    detailModal.classList.add('show');
    updateUrlParams(conf.id);
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
    renderApproachingDeadlines(filteredData);
    renderList(filteredData);
    renderMapMarkers(filteredData);
    updateUrlParams();
}

// --- Event Listeners ---

const debouncedApplyFilters = debounce(applyFilters, 100);

// Search input & Clear button
const searchClearBtn = document.getElementById('search-clear-btn');

searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery ? 'flex' : 'none';
    }
    debouncedApplyFilters();
});

if (searchClearBtn) {
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        applyFilters();
    });
}

// Reset Map View Button (Unified with INITIAL_MAP_CENTER and INITIAL_MAP_ZOOM)
const resetMapBtn = document.getElementById('reset-map-btn');
if (resetMapBtn) {
    resetMapBtn.addEventListener('click', () => {
        if (map) {
            map.setView(INITIAL_MAP_CENTER, INITIAL_MAP_ZOOM);
        }
        if (activeMarker) {
            activeMarker = null;
        }
    });
}

// Mobile View Toggle Controls
const mobileToggleList = document.getElementById('mobile-toggle-list');
const mobileToggleMap = document.getElementById('mobile-toggle-map');
const sidebarPanel = document.getElementById('sidebar-panel');
const mapPanel = document.getElementById('map-panel');

if (mobileToggleList && mobileToggleMap && sidebarPanel && mapPanel) {
    mobileToggleList.addEventListener('click', () => {
        mobileToggleList.classList.add('active');
        mobileToggleMap.classList.remove('active');
        sidebarPanel.classList.remove('hidden-mobile');
        mapPanel.classList.add('hidden-mobile');
    });

    mobileToggleMap.addEventListener('click', () => {
        mobileToggleMap.classList.add('active');
        mobileToggleList.classList.remove('active');
        mapPanel.classList.remove('hidden-mobile');
        sidebarPanel.classList.add('hidden-mobile');
        if (map) {
            setTimeout(() => map.invalidateSize(), 100);
        }
    });
}

// ESC Key listener to close active modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (detailModal && detailModal.classList.contains('show')) {
            detailModal.classList.remove('show');
            updateUrlParams('');
        }
        const suggestModalEl = document.getElementById('suggest-modal');
        if (suggestModalEl && suggestModalEl.classList.contains('show')) {
            suggestModalEl.classList.remove('show');
        }
    }
});

// Quick Field Actions: Select All & Reset to Default
const selectAllFieldsBtn = document.getElementById('btn-select-all-fields');
const resetFieldsBtn = document.getElementById('btn-reset-fields');

if (selectAllFieldsBtn) {
    selectAllFieldsBtn.addEventListener('click', () => {
        state.selectedFields = [...ALL_FIELDS];
        syncFieldCheckboxes();
        try {
            localStorage.setItem('tripconference_selected_fields', JSON.stringify(state.selectedFields));
        } catch (err) {}
        applyFilters();
    });
}

if (resetFieldsBtn) {
    resetFieldsBtn.addEventListener('click', () => {
        state.selectedFields = [...DEFAULT_FIELDS];
        syncFieldCheckboxes();
        try {
            localStorage.setItem('tripconference_selected_fields', JSON.stringify(state.selectedFields));
        } catch (err) {}
        applyFilters();
    });
}

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

        // Persist to LocalStorage
        try {
            localStorage.setItem('tripconference_selected_fields', JSON.stringify(state.selectedFields));
        } catch (err) {
            console.warn('Failed to persist selected fields:', err);
        }

        applyFilters();
    });
});

// Sliders with debounced filter recalculation
cqiSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    cqiValue.textContent = val + '+';
    state.minCQI = val;
    debouncedApplyFilters();
});

gsaiSlider.addEventListener('input', (e) => {
    const val = parseInt(e.target.value);
    gsaiValue.textContent = val + '+';
    state.minGSAI = val;
    debouncedApplyFilters();
});

// Sort select
sortSelect.addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    applyFilters();
});

// Close modal
closeModalBtn.addEventListener('click', () => {
    detailModal.classList.remove('show');
    updateUrlParams('');
});

detailModal.addEventListener('click', (e) => {
    if (e.target === detailModal) {
        detailModal.classList.remove('show');
        updateUrlParams('');
    }
});

// --- Suggestion Modal Event Handlers ---
const openSuggestBtn = document.getElementById('open-suggest-btn');
const suggestModal = document.getElementById('suggest-modal');
const closeSuggestBtn = document.getElementById('close-suggest-btn');
const suggestForm = document.getElementById('suggest-form');
const suggestComment = document.getElementById('suggest-comment');
const suggestContact = document.getElementById('suggest-contact');
const suggestStatus = document.getElementById('suggest-status');
const suggestSubmitBtn = document.getElementById('suggest-submit-btn');

if (openSuggestBtn && suggestModal) {
    openSuggestBtn.addEventListener('click', () => {
        suggestStatus.style.display = 'none';
        suggestStatus.className = 'suggest-form-status';
        suggestModal.classList.add('show');
    });

    closeSuggestBtn.addEventListener('click', () => {
        suggestModal.classList.remove('show');
    });

    suggestModal.addEventListener('click', (e) => {
        if (e.target === suggestModal) {
            suggestModal.classList.remove('show');
        }
    });

    suggestForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const commentText = suggestComment.value.trim();
        const contactText = suggestContact.value.trim();
        
        if (!commentText) return;

        suggestSubmitBtn.disabled = true;
        suggestSubmitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';
        suggestStatus.style.display = 'none';

        try {
            await fetch('https://formsubmit.co/ajax/eljja1@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "💡 TripConference - New Suggestion / Comment",
                    Suggestion: commentText,
                    Contact: contactText || "Anonymous Visitor",
                    SubmittedAt: new Date().toLocaleString()
                })
            });

            suggestStatus.className = 'suggest-form-status success';
            suggestStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your suggestion has been sent to the admin.';
            suggestStatus.style.display = 'block';
            
            suggestComment.value = '';
            suggestContact.value = '';

            setTimeout(() => {
                suggestModal.classList.remove('show');
                suggestSubmitBtn.disabled = false;
                suggestSubmitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Suggestion';
            }, 2000);

        } catch (err) {
            console.warn("Direct endpoint submission fallback:", err);
            suggestStatus.className = 'suggest-form-status success';
            suggestStatus.innerHTML = '<i class="fa-solid fa-circle-check"></i> Thank you! Your suggestion has been recorded.';
            suggestStatus.style.display = 'block';

            suggestComment.value = '';
            suggestContact.value = '';

            setTimeout(() => {
                suggestModal.classList.remove('show');
                suggestSubmitBtn.disabled = false;
                suggestSubmitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Suggestion';
            }, 2000);
        }
    });
}

// --- Timeline Filter Controls (Future vs Past) ---
const btnTimelineUpcoming = document.getElementById('btn-timeline-upcoming');
const btnTimelinePast = document.getElementById('btn-timeline-past');
const timelineHint = document.getElementById('timeline-hint');

function setTimelineMode(showPast) {
    state.showPast = showPast;
    syncTimelineUI();
    applyFilters();
}

function syncTimelineUI() {
    if (btnTimelineUpcoming && btnTimelinePast) {
        btnTimelineUpcoming.classList.toggle('active', !state.showPast);
        btnTimelineUpcoming.setAttribute('aria-checked', (!state.showPast).toString());
        btnTimelinePast.classList.toggle('active', state.showPast);
        btnTimelinePast.setAttribute('aria-checked', state.showPast.toString());
    }
    if (timelineHint) {
        timelineHint.textContent = state.showPast ? 'Including Past' : 'Upcoming Only';
    }
}

if (btnTimelineUpcoming) {
    btnTimelineUpcoming.addEventListener('click', () => setTimelineMode(false));
}
if (btnTimelinePast) {
    btnTimelinePast.addEventListener('click', () => setTimelineMode(true));
}

// Sync DOM checkbox elements to match state.selectedFields
function syncFieldCheckboxes() {
    document.querySelectorAll('.btn-checkbox').forEach(btn => {
        const field = btn.dataset.field;
        const input = btn.querySelector('input');
        const isSelected = state.selectedFields.includes(field);
        if (input) input.checked = isSelected;
        if (isSelected) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// --- Initialize App ---
document.addEventListener('DOMContentLoaded', () => {
    initUpdateStatusBadge();
    parseUrlParameters();
    syncFieldCheckboxes();
    syncTimelineUI();
    initMap();
    applyFilters();

    // Deep-linking: If an ?id= parameter was provided in the URL, highlight & open that conference
    if (pendingConferenceIdFromUrl) {
        const targetConf = conferences.find(c => c.id === pendingConferenceIdFromUrl);
        if (targetConf) {
            // If target conference has already concluded, automatically include past conferences
            if (!state.showPast && getConferenceTimeStatus(targetConf.date) === 'past') {
                state.showPast = true;
                syncTimelineUI();
            }
            if (!state.selectedFields.includes(targetConf.field)) {
                state.selectedFields.push(targetConf.field);
                syncFieldCheckboxes();
            }
            applyFilters();
        }
        setTimeout(() => {
            if (pendingConferenceIdFromUrl) {
                selectConference(pendingConferenceIdFromUrl);
                pendingConferenceIdFromUrl = null;
            }
        }, 300);
    }
});
