// --- Conference Database (30 Top-Tier Conferences) ---
const conferences = [
    {
        id: "isscc",
        name: "ISSCC",
        fullName: "IEEE International Solid-State Circuits Conference",
        field: "semiconductor",
        cqi: 95,
        cqiSub: { prestige: 98, selectivity: 95, industry: 96, history: 92 },
        gsai: 88,
        gsaiSub: { location: 85, support: 92, networking: 90 },
        location: "San Francisco, USA",
        lat: 37.7749,
        lon: -122.4194,
        date: "2027.02",
        organizer: "IEEE SSCS",
        benefits: {
            location: "샌프란시스코 실리콘밸리와 인접하여 글로벌 IT 트렌드를 확인하기 최적의 장소입니다.",
            grants: "IEEE SSCS에서 세계 각국의 학생들을 위해 매우 관대하게 Student Travel Grant를 제공합니다.",
            networking: "전 세계 최고 반도체 석학 및 글로벌 기업(Intel, Apple 등) 채용 담당자와 직접 면접 기회가 제공됩니다."
        },
        url: "https://www.isscc.org",
        isTopTier: true
    },
    {
        id: "iedm",
        name: "IEDM",
        fullName: "IEEE International Electron Devices Meeting",
        field: "semiconductor",
        cqi: 94,
        cqiSub: { prestige: 96, selectivity: 94, industry: 95, history: 90 },
        gsai: 85,
        gsaiSub: { location: 80, support: 88, networking: 88 },
        location: "Washington D.C., USA",
        lat: 38.9072,
        lon: -77.0369,
        date: "2026.12",
        organizer: "IEEE EDS",
        benefits: {
            location: "미국의 수도로, 박물관(스미소니언 등)과 역사적 명소가 밀집해 관광으로 매우 훌륭합니다.",
            grants: "IEEE EDS 및 기금 협찬사들로부터 아시아 학생을 위한 여비 보조 프로그램이 지원됩니다.",
            networking: "반도체 소자 물리(Device Physics) 및 나노 단위 트랜지스터 핵심 연구 그룹과 깊은 교류가 가능합니다."
        },
        url: "https://www.ieee-iedm.org",
        isTopTier: true
    },
    {
        id: "vlsi",
        name: "VLSI Symposium",
        fullName: "Symposium on VLSI Technology and Circuits",
        field: "semiconductor",
        cqi: 93,
        cqiSub: { prestige: 95, selectivity: 92, industry: 93, history: 91 },
        gsai: 94,
        gsaiSub: { location: 98, support: 90, networking: 92 },
        location: "Honolulu, Hawaii, USA",
        lat: 21.3069,
        lon: -157.8583,
        date: "2026.06",
        organizer: "IEEE / JSAP",
        benefits: {
            location: "세계 최고의 휴양지 하와이 와이키키 비치에서 학회가 개최되어 학생들의 선호도가 1위인 곳입니다.",
            grants: "Symposium 기금과 공헌 협회에서 학생 참가자 등록비 면제 및 여행비를 지원합니다.",
            networking: "석양이 지는 야외 리셉션 및 만찬을 통해 격식 없는 활발한 브레인스토밍이 이루어집니다."
        },
        url: "https://www.vlsisymposium.org",
        isTopTier: true
    },
    {
        id: "dac",
        name: "DAC",
        fullName: "Design Automation Conference",
        field: "semiconductor",
        cqi: 91,
        cqiSub: { prestige: 92, selectivity: 90, industry: 92, history: 90 },
        gsai: 84,
        gsaiSub: { location: 82, support: 85, networking: 86 },
        location: "San Francisco, USA",
        lat: 37.7760,
        lon: -122.4130,
        date: "2026.06",
        organizer: "ACM / IEEE",
        benefits: {
            location: "실리콘밸리의 기술 거점이자 문화가 살아 있는 미국 서부의 중심지입니다.",
            grants: "ACM/IEEE 주관으로 학생 자원봉사자(Student Volunteer) 지원 시 등록비 및 숙박이 100% 지원됩니다.",
            networking: "반도체 설계 소프트웨어(EDA) 업계 최고 글로벌 리더(Synopsys, Cadence)들의 대규모 전시 및 네트워킹 파티가 열립니다."
        },
        url: "https://www.dac.com",
        isTopTier: true
    },
    {
        id: "isca",
        name: "ISCA",
        fullName: "International Symposium on Computer Architecture",
        field: "semiconductor",
        cqi: 92,
        cqiSub: { prestige: 94, selectivity: 92, industry: 88, history: 93 },
        gsai: 86,
        gsaiSub: { location: 80, support: 90, networking: 88 },
        location: "Gothenburg, Sweden",
        lat: 57.7089,
        lon: 11.9746,
        date: "2026.06",
        organizer: "ACM / IEEE",
        benefits: {
            location: "아름다운 운하와 북유럽 특유의 여유로운 분위기를 느낄 수 있는 스웨덴의 제2도시입니다.",
            grants: "학회 메인 스폰서인 대기업(Google, Nvidia 등) 재정 지원을 통해 대규모 학생 여행 그랜트를 상시 지급합니다.",
            networking: "아키텍처 분야 최상위 학회로 전 세계 탑티어 대학 연구실들과 인적 네트워킹을 쌓을 최적의 기회입니다."
        },
        url: "https://www.iscaconf.org",
        isTopTier: true
    },
    {
        id: "irps",
        name: "IRPS",
        fullName: "IEEE International Reliability Physics Symposium",
        field: "semiconductor",
        cqi: 88,
        cqiSub: { prestige: 89, selectivity: 86, industry: 92, history: 85 },
        gsai: 89,
        gsaiSub: { location: 92, support: 86, networking: 88 },
        location: "Monterey, California, USA",
        lat: 36.6002,
        lon: -121.8947,
        date: "2026.04",
        organizer: "IEEE EDS / reliability",
        benefits: {
            location: "아름다운 해안 도로와 태평양이 보이는 캘리포니아 몬터레이 베이의 절경을 감상할 수 있습니다.",
            grants: "신뢰성 기술 위원회를 통해 우수한 학생 논문 저자들에게 Travel Award를 수여합니다.",
            networking: "반도체 제조사들의 품질 관리/소자 분석 실무자들과 밀접한 오프라인 교류를 할 수 있습니다."
        },
        url: "https://www.irps.org",
        isTopTier: false
    },
    {
        id: "spie-litho",
        name: "SPIE Lithography",
        fullName: "SPIE Advanced Lithography + Patterning",
        field: "semiconductor",
        cqi: 90,
        cqiSub: { prestige: 91, selectivity: 88, industry: 94, history: 87 },
        gsai: 85,
        gsaiSub: { location: 83, support: 84, networking: 88 },
        location: "San Jose, California, USA",
        lat: 37.3382,
        lon: -121.8863,
        date: "2026.02",
        organizer: "SPIE",
        benefits: {
            location: "실리콘밸리의 실질적인 중심 도시인 산호세에서 개최되며 인근의 IT 박물관 등을 둘러보기 좋습니다.",
            grants: "SPIE 협회 차원에서 풍성한 학생 회비 지원 및 장학금 기회를 부여합니다.",
            networking: "반도체 초미세 공정에 필수적인 노광 기술 관련 ASML 등 독점 장비 기업과의 네트워킹 기회가 열립니다."
        },
        url: "https://spie.org",
        isTopTier: false
    },
    {
        id: "icassp",
        name: "ICASSP",
        fullName: "IEEE International Conference on Acoustics, Speech, and Signal Processing",
        field: "electronics",
        cqi: 91,
        cqiSub: { prestige: 93, selectivity: 89, industry: 88, history: 94 },
        gsai: 95,
        gsaiSub: { location: 98, support: 92, networking: 95 },
        location: "Florence, Italy",
        lat: 43.7696,
        lon: 11.2558,
        date: "2026.05",
        organizer: "IEEE SPS",
        benefits: {
            location: "르네상스의 발상지인 이탈리아 피렌체에서 개최되어 문화 예술과 결합된 최고의 학회 출장을 즐길 수 있습니다.",
            grants: "IEEE Signal Processing Society에서 전 세계 학생 저자 수백 명에게 Travel Grant를 지급합니다.",
            networking: "음향, 통신, 데이터 과학의 초대형 연구 풀을 한곳에서 만나 협업 및 네트워킹을 극대화할 수 있습니다."
        },
        url: "https://2026.ieeeicassp.org",
        isTopTier: true
    },
    {
        id: "icc",
        name: "IEEE ICC",
        fullName: "IEEE International Conference on Communications",
        field: "electronics",
        cqi: 90,
        cqiSub: { prestige: 91, selectivity: 88, industry: 89, history: 92 },
        gsai: 88,
        gsaiSub: { location: 87, support: 89, networking: 88 },
        location: "Denver, Colorado, USA",
        lat: 39.7392,
        lon: -104.9903,
        date: "2026.06",
        organizer: "IEEE COMSOC",
        benefits: {
            location: "마일하이 시티 덴버는 로키산맥 국립공원과 인접하여 대자연 탐방에 최적화된 곳입니다.",
            grants: "IEEE Communications Society를 통해 아시아/남미 지역 학생용 여행 기금을 대거 운영합니다.",
            networking: "이동통신 표준 및 6G 선행 기술을 다루는 글로벌 인프라 대기업 엔지니어들이 대거 동참합니다."
        },
        url: "https://icc2026.ieee-icc.org",
        isTopTier: true
    },
    {
        id: "globecom",
        name: "GLOBECOM",
        fullName: "IEEE Global Communications Conference",
        field: "electronics",
        cqi: 89,
        cqiSub: { prestige: 90, selectivity: 87, industry: 88, history: 92 },
        gsai: 85,
        gsaiSub: { location: 82, support: 86, networking: 87 },
        location: "Washington D.C., USA",
        lat: 38.9073,
        lon: -77.0368,
        date: "2026.12",
        organizer: "IEEE COMSOC",
        benefits: {
            location: "박물관, 백악관 및 국회의사당 등 다양한 무료 국립 명소를 구경하기 좋습니다.",
            grants: "학생 자원봉사자 프로그램(Student Volunteer)을 적극 모집하여 경비 세이브 기회를 제공합니다.",
            networking: "글로벌 통신 학계와 산업계의 거물들이 참여하는 기술 패널 토의 세션이 가득합니다."
        },
        url: "https://globecom2026.ieee-globecom.org",
        isTopTier: true
    },
    {
        id: "apec",
        name: "APEC",
        fullName: "IEEE Applied Power Electronics Conference",
        field: "electronics",
        cqi: 89,
        cqiSub: { prestige: 90, selectivity: 88, industry: 93, history: 85 },
        gsai: 91,
        gsaiSub: { location: 94, support: 88, networking: 91 },
        location: "Orlando, Florida, USA",
        lat: 28.5383,
        lon: -81.3792,
        date: "2026.03",
        organizer: "IEEE / PSMA",
        benefits: {
            location: "디즈니월드와 유니버설 스튜디오의 본고장 올랜도에서 개최되어 학생들에게 꿈의 도시입니다.",
            grants: "APEC 교육위원회를 통해 학생들에게 우선적으로 장학금 및 출장여비를 정액 지원합니다.",
            networking: "전력전자 분야 최대 전시회가 동시 진행되어 유수의 업계 실무 리더들과 면담할 수 있습니다."
        },
        url: "https://apec-conf.org",
        isTopTier: false
    },
    {
        id: "ims",
        name: "IEEE IMS",
        fullName: "International Microwave Symposium",
        field: "electronics",
        cqi: 88,
        cqiSub: { prestige: 89, selectivity: 86, industry: 91, history: 86 },
        gsai: 86,
        gsaiSub: { location: 83, support: 87, networking: 88 },
        location: "Washington D.C., USA",
        lat: 38.9074,
        lon: -77.0367,
        date: "2026.06",
        organizer: "IEEE MTT-S",
        benefits: {
            location: "문화, 역사, 예술이 공존하는 미국 동부의 중요 거점에서 미식과 관광을 동시에 즐길 수 있습니다.",
            grants: "MTT-S Society를 통해 국제 학생들의 여비를 풍부하게 보조하는 제도를 실행 중입니다.",
            networking: "초고주파 및 RF 하드웨어 관련 최신 계측기 및 테스트 솔루션 전시 부스를 집중 참관할 수 있습니다."
        },
        url: "https://ims-ieee.org",
        isTopTier: false
    },
    {
        id: "iros",
        name: "IROS",
        fullName: "IEEE/RSJ International Conference on Intelligent Robots and Systems",
        field: "electronics",
        cqi: 90,
        cqiSub: { prestige: 92, selectivity: 88, industry: 86, history: 94 },
        gsai: 89,
        gsaiSub: { location: 88, support: 88, networking: 91 },
        location: "Munich, Germany",
        lat: 48.1351,
        lon: 11.5820,
        date: "2026.10",
        organizer: "IEEE RAS",
        benefits: {
            location: "맥주의 본고장이자 전통 독일 문화가 깃든 뮌헨에서 옥토버페스트 시즌 인근에 로봇 연구를 배울 수 있습니다.",
            grants: "로봇 연구 활성화를 위해 해외 저자 지원금을 풍성하게 확보하여 제공합니다.",
            networking: "지능형 자율주행 및 로봇 제어 시스템 전반의 핵심 연구자들과 로봇 시연을 관람하며 소통합니다."
        },
        url: "https://www.iros.org",
        isTopTier: true
    },
    {
        id: "itc",
        name: "IEEE ITC",
        fullName: "IEEE International Test Conference",
        field: "electronics",
        cqi: 87,
        cqiSub: { prestige: 88, selectivity: 84, industry: 92, history: 84 },
        gsai: 90,
        gsaiSub: { location: 94, support: 85, networking: 91 },
        location: "Anaheim, California, USA",
        lat: 33.8366,
        lon: -117.9143,
        date: "2026.10",
        organizer: "IEEE Computer Society",
        benefits: {
            location: "캘리포니아 디즈니랜드 리조트와 인접하여 활기찬 분위기 속에 즐겁게 연구를 공유할 수 있습니다.",
            grants: "ITC 위원회 주관의 우수 학생 논문 및 학생 발표 특별 장학금 제도가 있습니다.",
            networking: "반도체 수율 향상 및 하드웨어 보안 테스트 업계 실무 리더들과 직접적인 연계가 활발합니다."
        },
        url: "https://www.itctestproceeding.org",
        isTopTier: false
    },
    {
        id: "mrs-spring",
        name: "MRS Spring",
        fullName: "Materials Research Society Spring Meeting",
        field: "materials",
        cqi: 92,
        cqiSub: { prestige: 95, selectivity: 82, industry: 90, history: 95 },
        gsai: 90,
        gsaiSub: { location: 88, support: 92, networking: 90 },
        location: "Phoenix, Arizona, USA",
        lat: 33.4484,
        lon: -112.0740,
        date: "2026.04",
        organizer: "MRS",
        benefits: {
            location: "웅장한 사막 경관을 가진 피닉스에서 개최되며, 차량 대여 시 그랜드 캐니언 투어가 연계됩니다.",
            grants: "MRS 협회의 높은 재정을 바탕으로 Student Poster Award 및 참가 여비를 다수에게 지원합니다.",
            networking: "수천 명의 재료 연구자들이 모여 나노재료부터 바이오소재까지 수많은 포스터 세션에서 자유롭게 토론합니다."
        },
        url: "https://www.mrs.org",
        isTopTier: true
    },
    {
        id: "mrs-fall",
        name: "MRS Fall",
        fullName: "Materials Research Society Fall Meeting",
        field: "materials",
        cqi: 93,
        cqiSub: { prestige: 96, selectivity: 83, industry: 91, history: 96 },
        gsai: 92,
        gsaiSub: { location: 92, support: 92, networking: 92 },
        location: "Boston, Massachusetts, USA",
        lat: 42.3601,
        lon: -71.0589,
        date: "2026.11",
        organizer: "MRS",
        benefits: {
            location: "하버드와 MIT가 위치한 세계 학문의 도시 보스턴에서 찰스강의 아름다운 단풍을 즐기며 학술 활동에 임합니다.",
            grants: "우수 포스터 제출자 및 학생 발표자에게 최대 $1,000의 Travel Award를 폭넓게 분배합니다.",
            networking: "MIT 등 최고 명문 대학교 연구실 방문 교류 및 공동연구 미팅 제안 기회가 넘쳐납니다."
        },
        url: "https://www.mrs.org",
        isTopTier: true
    },
    {
        id: "emrs",
        name: "E-MRS Spring",
        fullName: "European Materials Research Society Spring Meeting",
        field: "materials",
        cqi: 90,
        cqiSub: { prestige: 91, selectivity: 80, industry: 85, history: 91 },
        gsai: 91,
        gsaiSub: { location: 92, support: 90, networking: 90 },
        location: "Strasbourg, France",
        lat: 48.5734,
        lon: 7.7521,
        date: "2026.05",
        organizer: "E-MRS",
        benefits: {
            location: "프랑스와 독일 경계의 운치 있는 역사 도시 스트라스부르의 쁘띠프랑스를 구경할 수 있는 낭만 가득한 곳입니다.",
            grants: "유럽 학생 및 해외 비유럽 학생 저자들을 위한 특별 여비 보조 프로그램이 잘 발달해 있습니다.",
            networking: "유럽 각지에서 활약 중인 첨단 재료 연구 그룹들과 친밀한 학술 네트워크를 구축하기에 최고입니다."
        },
        url: "https://www.european-mrs.com",
        isTopTier: true
    },
    {
        id: "tms",
        name: "TMS",
        fullName: "TMS Annual Meeting & Exhibition",
        field: "materials",
        cqi: 89,
        cqiSub: { prestige: 90, selectivity: 82, industry: 88, history: 94 },
        gsai: 92,
        gsaiSub: { location: 96, support: 88, networking: 92 },
        location: "San Diego, California, USA",
        lat: 32.7157,
        lon: -117.1611,
        date: "2026.03",
        organizer: "TMS",
        benefits: {
            location: "1년 내내 따뜻한 날씨와 멋진 해변을 품은 미국 서부 최고의 휴양도시 샌디에이고에서 열립니다.",
            grants: "TMS 재단 주관의 다수 포스터/발표 경진대회를 통해 상금 및 출장 경비를 환원해 줍니다.",
            networking: "금속, 구조재료 등 전통 공학 핵심 인프라를 지탱하는 전 세계 노련한 학자 및 실무진과의 가교 역할을 합니다."
        },
        url: "https://www.tms.org",
        isTopTier: false
    },
    {
        id: "mst",
        name: "MS&T",
        fullName: "Materials Science & Technology",
        field: "materials",
        cqi: 87,
        cqiSub: { prestige: 88, selectivity: 80, industry: 86, history: 89 },
        gsai: 86,
        gsaiSub: { location: 85, support: 84, networking: 88 },
        location: "Portland, Oregon, USA",
        lat: 45.5152,
        lon: -122.6784,
        date: "2026.10",
        organizer: "ACerS / AIST / ASM",
        benefits: {
            location: "아기자기한 부티크 문화와 장미의 도시로 유명한 친환경 오레곤주 포틀랜드에서 개최됩니다.",
            grants: "소속 협회(세라믹협회, 철강협회 등) 회원 학생에 대해 파격적인 등록비 감면 제도를 시행합니다.",
            networking: "세라믹, 유리, 금속의 다차원 소재 혁신 성과를 발표하는 대가들과 학문 분야 장벽 없이 토론합니다."
        },
        url: "https://www.matscitech.org",
        isTopTier: false
    },
    {
        id: "iumrs",
        name: "IUMRS-ICAM",
        fullName: "International Conference on Advanced Materials",
        field: "materials",
        cqi: 88,
        cqiSub: { prestige: 89, selectivity: 78, industry: 85, history: 90 },
        gsai: 93,
        gsaiSub: { location: 98, support: 86, networking: 90 },
        location: "Kyoto, Japan",
        lat: 35.0116,
        lon: 135.7681,
        date: "2026.09",
        organizer: "IUMRS / MRS-J",
        benefits: {
            location: "천년의 역사를 품은 일본 교토에서 청수사 및 전통 사찰 관광과 어우러진 최고의 학회 여정을 보장합니다.",
            grants: "일본 재료학회(MRS-J) 기금 지원을 통해 아시아권 학생들에게 관대한 Travel Award 기회를 부여합니다.",
            networking: "아시아 및 태평양 연안의 저명한 첨단 나노소재 학술 리더들이 대거 총집결하여 성과를 공유합니다."
        },
        url: "https://www.iumrs.org",
        isTopTier: false
    },
    {
        id: "ieee-nano",
        name: "IEEE NANO",
        fullName: "IEEE International Conference on Nanotechnology",
        field: "materials",
        cqi: 86,
        cqiSub: { prestige: 87, selectivity: 80, industry: 80, history: 85 },
        gsai: 95,
        gsaiSub: { location: 100, support: 88, networking: 92 },
        location: "Jeju Island, South Korea",
        lat: 33.4996,
        lon: 126.5312,
        date: "2026.07",
        organizer: "IEEE Nanotechnology Council",
        benefits: {
            location: "아름다운 천혜의 섬 제주도에서 한라산과 에메랄드빛 바다를 배경으로 전 세계 석학들을 만날 기회입니다.",
            grants: "비교적 저렴한 국내 출장비용으로 참가할 수 있으며, 국내외 학생들을 위한 풍성한 숙박 혜택이 마련됩니다.",
            networking: "나노 신소재 및 나노 소자 융합을 연구하는 국내외 우수 동료 학생 연구자들과 밤낮으로 깊은 우정을 다집니다."
        },
        url: "https://ieeenano.org",
        isTopTier: false
    },
    // --- 10 Additional Conferences ---
    {
        id: "iccad",
        name: "ICCAD",
        fullName: "IEEE/ACM International Conference on Computer-Aided Design",
        field: "semiconductor",
        cqi: 91,
        cqiSub: { prestige: 92, selectivity: 90, industry: 89, history: 91 },
        gsai: 85,
        gsaiSub: { location: 83, support: 86, networking: 88 },
        location: "San Jose, California, USA",
        lat: 37.3392,
        lon: -121.8845,
        date: "2026.11",
        organizer: "IEEE / ACM",
        benefits: {
            location: "글로벌 IT 업계의 심장부인 산호세 컨벤션 센터 인근에서 미국의 역동적인 기술 발전을 체험합니다.",
            grants: "ACM SIGDA 및 IEEE CEDA 위원회 기금으로 매년 학생들에게 대규모 여비 지원금을 분배합니다.",
            networking: "세계 최고의 EDA 및 반도체 디자인 기술 관련 최고 연구실의 헤드들과 직접 미팅이 추진됩니다."
        },
        url: "https://iccad.com",
        isTopTier: true
    },
    {
        id: "date",
        name: "DATE",
        fullName: "Design, Automation and Test in Europe",
        field: "semiconductor",
        cqi: 89,
        cqiSub: { prestige: 90, selectivity: 87, industry: 91, history: 89 },
        gsai: 89,
        gsaiSub: { location: 92, support: 85, networking: 88 },
        location: "Antwerp, Belgium",
        lat: 51.2194,
        lon: 4.4025,
        date: "2026.03",
        organizer: "IEEE / ACM",
        benefits: {
            location: "벨기에 안트베르펜은 다이아몬드와 역사적인 성곽 도시로 유명하여 풍요롭고 독특한 유럽 정취를 제공합니다.",
            grants: "유럽 거주 또는 아시아 우수 해외 연구자 학생들에게 한화 약 100만 원 규모 출장 지원비 기회가 제공됩니다.",
            networking: "유럽 최대 규모의 임베디드 및 설계 자동화 산업 전시가 열려 현지 채용 시장을 리서치하기에 아주 유리합니다."
        },
        url: "https://www.date-conference.com",
        isTopTier: true
    },
    {
        id: "cicc",
        name: "CICC",
        fullName: "IEEE Custom Integrated Circuits Conference",
        field: "semiconductor",
        cqi: 89,
        cqiSub: { prestige: 90, selectivity: 88, industry: 92, history: 86 },
        gsai: 87,
        gsaiSub: { location: 85, support: 88, networking: 88 },
        location: "Denver, Colorado, USA",
        lat: 39.7380,
        lon: -104.9920,
        date: "2026.04",
        organizer: "IEEE SSCS",
        benefits: {
            location: "웅장한 대자연 로키산맥 입구 덴버의 현대적인 전시장과 문화를 탐방할 수 있는 쾌적한 출장지입니다.",
            grants: "IEEE SSCS 분회에서 학생들에게 가입 혜택과 맞물린 든든한 출장 경비를 지급합니다.",
            networking: "아날로그 집적 회로 설계 등 실무 기술 논문이 대거 공개되어 깊이 있는 전공 토론이 펼쳐집니다."
        },
        url: "https://www.ieee-cicc.org",
        isTopTier: true
    },
    {
        id: "islped",
        name: "ISLPED",
        fullName: "International Symposium on Low Power Electronics and Design",
        field: "semiconductor",
        cqi: 88,
        cqiSub: { prestige: 89, selectivity: 86, industry: 90, history: 84 },
        gsai: 85,
        gsaiSub: { location: 82, support: 86, networking: 86 },
        location: "Boston, Massachusetts, USA",
        lat: 42.3610,
        lon: -71.0570,
        date: "2026.08",
        organizer: "ACM / IEEE",
        benefits: {
            location: "쾌적하고 선선한 8월 보스턴의 다양한 명문 학계 투어를 다녀오기에 최선의 조건입니다.",
            grants: "저전력 전자기기 위원회에서 재정 보조 및 Student Assistant 제도를 통해 등록비를 면제해 줍니다.",
            networking: "초미세 공정에서의 극저전력 설계 아이디어를 들고 나온 유망주 연구원들과 협력 연구를 타진할 수 있습니다."
        },
        url: "http://www.islped.org",
        isTopTier: true
    },
    {
        id: "icra",
        name: "ICRA",
        fullName: "IEEE International Conference on Robotics and Automation",
        field: "electronics",
        cqi: 92,
        cqiSub: { prestige: 94, selectivity: 90, industry: 88, history: 94 },
        gsai: 91,
        gsaiSub: { location: 90, support: 91, networking: 93 },
        location: "Vienna, Austria",
        lat: 48.2082,
        lon: 16.3738,
        date: "2026.05",
        organizer: "IEEE RAS",
        benefits: {
            location: "음악과 예술의 도시 오스트리아 빈에서 궁전 관람과 비엔나 클래식 선율 속에 지능형 하드웨어를 학습합니다.",
            grants: "IEEE Robotics & Automation Society에서 막강한 재정을 동원하여 해외 학생들에게 여비를 지급합니다.",
            networking: "로보틱스 분야 부동의 1위 최우수 학회로서 세계 시장을 주도하는 석학 및 테크 리더들과 밀도 높게 교류합니다."
        },
        url: "https://www.ieee-ras.org",
        isTopTier: true
    },
    {
        id: "sensors",
        name: "IEEE SENSORS",
        fullName: "IEEE Sensors Conference",
        field: "electronics",
        cqi: 85,
        cqiSub: { prestige: 86, selectivity: 82, industry: 84, history: 84 },
        gsai: 90,
        gsaiSub: { location: 94, support: 86, networking: 88 },
        location: "Gold Coast, Australia",
        lat: -28.0167,
        lon: 153.4000,
        date: "2026.10",
        organizer: "IEEE Sensors Council",
        benefits: {
            location: "호주 최고의 해안 휴양지 골드코스트에서 멋진 서핑과 돌고래 와칭, 휴식을 누리며 학회에 동참합니다.",
            grants: "센서스 카운슬을 통해 다수 학생을 위한 파격적인 조기 등록 할인 혜택 및 여행 보조금을 지급합니다.",
            networking: "스마트 기기부터 화학, 물리, 에너지 센서 전반을 아우르는 유망주 학생들과 넓은 인간관계를 형성합니다."
        },
        url: "https://ieee-sensors.org",
        isTopTier: false
    },
    {
        id: "pesgm",
        name: "PES GM",
        fullName: "IEEE Power & Energy Society General Meeting",
        field: "electronics",
        cqi: 88,
        cqiSub: { prestige: 90, selectivity: 85, industry: 87, history: 89 },
        gsai: 86,
        gsaiSub: { location: 84, support: 85, networking: 88 },
        location: "Seattle, Washington, USA",
        lat: 47.6062,
        lon: -122.3321,
        date: "2026.07",
        organizer: "IEEE PES",
        benefits: {
            location: "커피와 IT(Microsoft, Amazon)의 메카 시어틀에서 쾌적한 여름 날씨 속에 첨단 기술을 배울 수 있습니다.",
            grants: "PES 학생 연합회 및 기업 후원을 연계한 대규모 숙박/항공 정액 쿠폰 발급이 활발합니다.",
            networking: "전력 및 스마트그리드 전력망 분야에서 세계 최대 규모이므로 네트워킹 스케일 자체가 상상을 초월합니다."
        },
        url: "https://pes-gm.org",
        isTopTier: false
    },
    {
        id: "grc-mat",
        name: "GRC Materials",
        fullName: "Gordon Research Conference on Materials Science",
        field: "materials",
        cqi: 94,
        cqiSub: { prestige: 97, selectivity: 95, industry: 85, history: 92 },
        gsai: 88,
        gsaiSub: { location: 80, support: 92, networking: 94 },
        location: "Ventura, California, USA",
        lat: 34.2805,
        lon: -119.2945,
        date: "2026.07",
        organizer: "Gordon Research Conferences",
        benefits: {
            location: "LA 북쪽의 해안 도시 벤투라에서 휴양 분위기 속에 전 세계 소수 석학들과 긴밀하게 고립되어 집중 토의합니다.",
            grants: "초청(Invitation) 승인을 받은 대학원생들을 위해 여비 및 세션 발표 참여 장학제도가 마련되어 있습니다.",
            networking: "비공개 100% 밀착 세션으로, 아침 식사부터 저녁 와인 파티까지 교수진과 하루 종일 동침하며 친밀도를 극대화합니다."
        },
        url: "https://www.grc.org",
        isTopTier: true
    },
    {
        id: "carbon",
        name: "Carbon",
        fullName: "International Conference on Carbon",
        field: "materials",
        cqi: 88,
        cqiSub: { prestige: 89, selectivity: 83, industry: 87, history: 90 },
        gsai: 90,
        gsaiSub: { location: 90, support: 88, networking: 91 },
        location: "Seoul, South Korea",
        lat: 37.5665,
        lon: 126.9780,
        date: "2026.07",
        organizer: "Korean Carbon Society / ACS",
        benefits: {
            location: "전통과 첨단이 공존하는 대한민국 서울 코엑스에서 편안한 대중교통과 한류 문화를 전 세계인들과 즐깁니다.",
            grants: "국내 개최 학회이므로 여비 부담이 거의 없으며, 국내 대학원생을 위한 저렴한 등록 비용 혜택을 크게 제공합니다.",
            networking: "글로벌 탄소 재료(그래핀, CNT 등) 분야 전 세계의 선구적 연구자들과 국내 유수 연구팀이 네트워크를 다집니다."
        },
        url: "http://carbon2026.org",
        isTopTier: false
    },
    {
        id: "icam",
        name: "ICAM",
        fullName: "International Conference on Advanced Materials",
        field: "materials",
        cqi: 87,
        cqiSub: { prestige: 88, selectivity: 80, industry: 84, history: 89 },
        gsai: 89,
        gsaiSub: { location: 90, support: 86, networking: 88 },
        location: "Barcelona, Spain",
        lat: 41.3851,
        lon: 2.1734,
        date: "2026.08",
        organizer: "IUMRS",
        benefits: {
            location: "가우디 건축과 지중해 해변의 도시 바르셀로나에서 정열적이고 기억에 오래 남을 학회 여행을 선사합니다.",
            grants: "IUMRS 산하 지부(MRS-Spain)를 통해 해외 유학생 및 아시아 대학원생에게 여행 보조 장학을 지원합니다.",
            networking: "글로벌 첨단 고분자 및 바이오, 나노소재 학술 세션을 다각도로 탐험하며 다양한 융합 연구 기회를 논의합니다."
        },
        url: "https://www.iumrs-icam.org",
        isTopTier: false
    }
];

// --- Map Initialization ---
let map;
let markersLayer = L.layerGroup();
let activeMarker = null;

// Customized Marker Icons based on fields
function getMarkerIcon(field, isActive = false) {
    let color;
    if (field === 'semiconductor') color = '#f59e0b';
    else if (field === 'electronics') color = '#0ea5e9';
    else color = '#10b981';

    const shadowColor = isActive ? color : 'rgba(0,0,0,0.4)';
    const scale = isActive ? 'scale(1.3)' : 'scale(1.0)';
    const zIndex = isActive ? 1000 : 100;

    const html = `
        <div style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background-color: rgba(17, 24, 39, 0.85);
            border: 2px solid ${color};
            border-radius: 50%;
            box-shadow: 0 0 10px ${shadowColor};
            transform: ${scale};
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            color: ${color};
            font-size: 11px;
            font-weight: 700;
        ">
            <i class="fa-solid ${field === 'semiconductor' ? 'fa-microchip' : field === 'electronics' ? 'fa-bolt' : 'fa-atom'}"></i>
        </div>
    `;

    return L.divIcon({
        html: html,
        className: 'custom-map-marker',
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
}

function initMap() {
    // Standard map focus center (World map, centered, zoomed out slightly)
    map = L.map('map', {
        zoomControl: false,
        attributionControl: false
    }).setView([30, 0], 2);

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
    
    // Count how many are TopTier
    const topCount = filteredData.filter(conf => conf.isTopTier).length;
    topCountEl.textContent = topCount;
}

function renderList(filteredData) {
    conferenceList.innerHTML = '';
    
    if (filteredData.length === 0) {
        conferenceList.innerHTML = `
            <div class="loading-placeholder">
                <i class="fa-solid fa-face-frown" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                검색 조건에 부합하는 학회가 없습니다.
            </div>
        `;
        return;
    }

    filteredData.forEach(conf => {
        const card = document.createElement('div');
        card.className = `conference-card ${conf.field}-card`;
        card.dataset.id = conf.id;
        
        let fieldNameKo = '';
        if (conf.field === 'semiconductor') fieldNameKo = '반도체';
        else if (conf.field === 'electronics') fieldNameKo = '전자공학';
        else fieldNameKo = '재료공학';

        card.innerHTML = `
            <div class="card-header">
                <div class="card-title">
                    <h3>${conf.name}</h3>
                    <span class="badge-tag badge-${conf.field}">${fieldNameKo}</span>
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
                    <span class="score-label">학술(CQI)</span>
                    <span class="score-num">${conf.cqi}</span>
                </div>
                <div class="score-badge gsai-badge">
                    <span class="score-label">학생(GSAI)</span>
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

        // Custom Popup on hover/click
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
    let fieldColor, fieldBgGrad, fieldNameKo;
    if (conf.field === 'semiconductor') {
        fieldColor = 'var(--color-semi)';
        fieldBgGrad = `linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameKo = '반도체';
    } else if (conf.field === 'electronics') {
        fieldColor = 'var(--color-elec)';
        fieldBgGrad = `linear-gradient(135deg, rgba(14, 165, 233, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameKo = '전자공학';
    } else {
        fieldColor = 'var(--color-mat)';
        fieldBgGrad = `linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(11, 15, 23, 0.95) 100%)`;
        fieldNameKo = '재료공학';
    }

    modalHeaderBg.style.background = fieldBgGrad;
    modalBadgeField.textContent = fieldNameKo;
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
        ${renderMetricRow("학술 인지도 (Prestige)", conf.cqiSub.prestige)}
        ${renderMetricRow("논문 수락률 (Selectivity)", conf.cqiSub.selectivity)}
        ${renderMetricRow("산업체 연계성 (Industry)", conf.cqiSub.industry)}
        ${renderMetricRow("학회 역사 (History)", conf.cqiSub.history)}
    `;

    // Render GSAI Sub-Metrics
    modalGsaiMetrics.innerHTML = `
        ${renderMetricRow("개최지 관광 매력도 (Location)", conf.gsaiSub.location)}
        ${renderMetricRow("학생 재정 지원 (Travel Grants)", conf.gsaiSub.support)}
        ${renderMetricRow("네트워킹 프로그램 (Networking)", conf.gsaiSub.networking)}
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
                <strong>${score}점</strong>
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
        e.preventDefault(); // Prevents checkbox double trigger
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
