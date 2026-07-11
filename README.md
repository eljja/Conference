# TripConference

<p align="center">
  <img src="banner.png" alt="TripConference Banner" width="100%">
</p>

<p align="center">
  <strong>Interactive Geographic Analysis Dashboard for Global Academic Conferences</strong><br>
  전 세계 주요 학술 대회의 학술적 권위와 연구 환경(매력도)을 지도 상에 시각화하는 인터랙티브 대시보드
</p>

<p align="center">
  <a href="#korean-한국어">🇰🇷 한국어 설명</a> | <a href="#english-description">🇺🇸 English Description</a>
</p>

<p align="center">
  <a href="https://eljja.github.io/Conference/">
    <img src="https://img.shields.io/badge/Live_Demo-https%3A%2F%2Feljja.github.io%2FConference%2F-blueviolet?style=for-the-badge&logo=github&logoColor=white" alt="Live Demo">
  </a>
</p>

---

## Korean (한국어)

### 📌 프로젝트 소개
**TripConference**는 반도체, 전자, 신소재, 컴퓨터 과학 및 인공지능(AI), 기계공학, 화학공학, 생명공학, 산업공학 등 다양한 학문 분야의 권위 있는 국제 학술 대회(Conference) 정보를 지도상에 시각화하고 분석해 주는 인터랙티브 웹 애플리케이션입니다. 

대학원생, 연구자, 학계 종사자들이 논문을 투고할 학회를 결정하거나 참석 일정을 계획할 때 학회의 **학술적 위상**과 **지리적 매력도**를 직관적으로 비교·대조할 수 있도록 설계되었습니다.

---

### 📊 핵심 평가 지표 (Strategy & Metrics)
대시보드는 각 학회에 대해 두 가지 핵심 정량 지표를 산출하여 제공합니다.

#### 1. CQI (Conference Quality Index) - 학술 영향도 지수
학회의 학술적 권위와 논문 채택 난이도를 평가하는 지표입니다.
* **산출 요소**: 학회의 역사와 전통, 평균 논문 채택률(Acceptance Rate), H-index, 학계 내 인지도(Flagship 여부).
* **점수대 의미**: 
  * `95+`: 최상위 최고 권위 학회 (A* / Flagship 급)
  * `90+`: 우수 국제 학술 대회 (A 급)
  * `80+`: 공신력 있는 일반 국제 학술 대회 (B 급)

#### 2. GSAI (Geographical Student Attraction Index) - 학생 매력도 지수
학생 및 연구자 입장에서 해당 학회 개최지가 주는 지리적·재정적·환경적 유인 요소를 평가합니다.
* **산출 요소**: 개최지 인근의 글로벌 IT 기업 및 대학 밀집도, 물가 수준, 기후 및 치안, 학생 대상 여행 경비 지원(Travel Grants) 혜택.
* **점수대 의미**:
  * 개최 도시가 허브 도시(예: 샌프란시스코, 싱가포르)이거나 학회 차원의 학생 재정 지원이 넉넉할수록 고득점을 획득합니다.

---

### 📂 지원 분야 및 데이터 통계
현재 총 **9개 학문 분야**의 **313개 실존 국제 학술 대회** 정보가 등록되어 있으며, 검증된 공식 웹사이트 주소와 좌표를 포함합니다.

| 분야 ID | 학문 분야 (Academic Fields) | 대표 색상 (Theme) | 대표 아이콘 (Icon) | 등록 학회 수 |
| :--- | :--- | :--- | :---: | :---: |
| `semiconductor` | 반도체 (Semiconductors) | Amber (`#f59e0b`) | `fa-microchip` | 33 |
| `electronics` | 전자공학 (Electronics) | Sky Blue (`#0ea5e9`) | `fa-bolt` | 68 |
| `materials` | 신소재/재료공학 (Materials) | Emerald (`#10b981`) | `fa-atom` | 46 |
| `architecture` | 건축학 (Architecture) | Purple (`#a855f7`) | `fa-building-columns` | 36 |
| `civil` | 토목공학 (Civil Engineering) | Teal (`#14b8a6`) | `fa-bridge` | 30 |
| `cs` | 컴퓨터공학 & AI (Computer Science & AI) | Blue (`#3b82f6`) | `fa-brain` | 20 |
| `mech` | 기계/항공우주공학 (Mechanical & Aerospace) | Orange (`#f97316`) | `fa-gear` | 20 |
| `chem` | 화학공학/배터리/에너지 (Chemical & Energy) | Lime Green (`#84cc16`) | `fa-flask` | 20 |
| `bio` | 바이오메디컬/생명공학 (Biomedical & Biotech) | Rose Pink (`#ec4899`) | `fa-dna` | 20 |
| `ind` | 산업공학 (Industrial Engineering) | Indigo (`#6366f1`) | `fa-diagram-project` | 20 |

---

### ⏱️ 업데이트 주기 및 데이터 필터링 규칙 (Sliding Window Policy)

#### 1. 분기별 정기 업데이트 (Quarterly Updates)
대시보드의 학회 일정 및 개최지 정보는 매 분기(Quarter)마다 정기적으로 검토 및 업데이트됩니다. 
* **최종 업데이트 시점**: **2026년 3분기 (2026.3Q)**

#### 2. 동적 시간 윈도우 필터링 (Dynamic Sliding Window Filter)
대시보드는 데이터베이스의 노후화를 방지하고 최신 일정에 초점을 맞추기 위해 사용자가 접속한 현재 날짜를 기준으로 다음 규칙에 따라 학회를 자동 필터링합니다.
* **과거 데이터 제한**: 현재 분기 기준 **과거 3분기 이내 (`-3Q`)**의 학회 일정만 유지합니다. (그 이전 완료된 학회는 대시보드 화면 및 지도에서 자동 숨김)
* **미래 데이터 제한**: 현재 분기 기준 **미래 6분기 이내 (`+6Q`)** (약 1.5년 뒤)의 학회 일정까지만 노출합니다.

---

### 💻 기술 스택 (Technology Stack)
* **지도 엔진**: Leaflet.js (지형 래핑 및 무한 스크롤, 남극 구역 렌더링 제한 적용)
* **스타일링**: CSS Grid & Flexbox, Glassmorphism 테마, FontAwesome v6
* **데이터 관리 및 로직**: Pure Vanilla JavaScript (LocalStorage 기반 필터 선택 상태 영구 유지)
* **피드백 시스템**: FormSubmit.co를 이용한 비동기 백엔드리스 건의사항 전송 시스템

---

### 🛠️ 로컬 실행 및 테스트 방법
저장소를 클론한 후 로컬 환경에서 실행하고 데이터베이스 유효성을 검사할 수 있습니다.

1. **로컬 서버 구동** (VS Code의 Live Server 플러그인을 권장하며, 또는 아래 명령어를 사용합니다):
   ```bash
   npx serve .
   ```
2. **데이터베이스 유효성 검사** (학회 ID 중복, 좌표 오류, URL 유효성 검사):
   ```bash
   node validate_db.js
   ```

---
---

## English Description

### 📌 Project Overview
**TripConference** is an interactive web-based dashboard designed to map and analyze prestigious global academic conferences across 9 key engineering and science disciplines. 

It aims to support graduate students and researchers in making informed decisions about where to submit papers and plan academic trips by comparing the **academic prestige** of conferences with the **geographical attraction** of their venues.

---

### 📊 Key Evaluation Metrics (Strategy & Metrics)
The dashboard scores and visualizes two major indices for each conference:

#### 1. CQI (Conference Quality Index)
Evaluates the academic prestige, selection difficulty, and overall reputation of the conference.
* **Factors**: Historical reputation, average acceptance rates, H-index, and Flagship conference status.
* **Scoring Bracket**:
  * `95+`: Elite, world-class conference (A* / Flagship level)
  * `90+`: Highly reputable international conference (A level)
  * `80+`: Reliable general international conference (B level)

#### 2. GSAI (Geographical Student Attraction Index)
Evaluates the venue's appeal, financial incentives, and logistical benefits for student attendees.
* **Factors**: Proximity to global tech hubs and institutions, local cost of living, safety, climate, and student travel grant offerings.
* **Scoring Bracket**:
  * Premium hub cities (e.g., San Francisco, Singapore) or conferences offering substantial travel grant funds receive higher scores.

---

### 📂 Supported Fields & Database Statistics
The database contains **313 verified real-world international conferences** with exact coordinates, schedules, and active official websites.

| Field ID | Academic Field | Theme Color | Icon | Count |
| :--- | :--- | :--- | :---: | :---: |
| `semiconductor` | Semiconductors | Amber (`#f59e0b`) | `fa-microchip` | 33 |
| `electronics` | Electronics | Sky Blue (`#0ea5e9`) | `fa-bolt` | 68 |
| `materials` | Materials | Emerald (`#10b981`) | `fa-atom` | 46 |
| `architecture` | Architecture | Purple (`#a855f7`) | `fa-building-columns` | 36 |
| `civil` | Civil Engineering | Teal (`#14b8a6`) | `fa-bridge` | 30 |
| `cs` | Computer Science & AI | Blue (`#3b82f6`) | `fa-brain` | 20 |
| `mech` | Mechanical & Aerospace | Orange (`#f97316`) | `fa-gear` | 20 |
| `chem` | Chemical & Energy | Lime Green (`#84cc16`) | `fa-flask` | 20 |
| `bio` | Biomedical & Biotech | Rose Pink (`#ec4899`) | `fa-dna` | 20 |
| `ind` | Industrial Engineering | Indigo (`#6366f1`) | `fa-diagram-project` | 20 |

---

### ⏱️ Update Cycle & Data Filtering (Sliding Window Policy)

#### 1. Quarterly Updates
The database schedules, locations, and links are fully reviewed and updated every quarter.
* **Last Updated**: **2026 Q3 (2026.3Q)**

#### 2. Dynamic Sliding Window Filter
To keep the dashboard focused on active timelines, the application dynamically filters events relative to the current date:
* **Past Window Limit**: Only retains events within the **past 3 quarters (`-3Q`)**. Older past events are automatically hidden.
* **Future Window Limit**: Displays future events up to **6 quarters ahead (`+6Q`)** (approx. 1.5 years).

---

### 💻 Tech Stack
* **Map Engine**: Leaflet.js (configured with tile wrapping, horizontal copy-jumping, and vertical coordinate clipping for Antarctica).
* **UI & Styling**: Vanilla CSS Grid & Flexbox, Glassmorphism properties, FontAwesome v6.
* **Logic**: Vanilla JavaScript (leverages LocalStorage to persist filter selections across page reloads).
* **Feedback Pipeline**: Serverless suggestion submission routed through FormSubmit.co.

---

### 🛠️ Local Development & Validation
Clone the repository and run the project locally:

1. **Serve locally** (Use VS Code Live Server or run):
   ```bash
   npx serve .
   ```
2. **Database Integrity Verification** (Checks for duplicate IDs, incorrect coordinates, and broken links):
   ```bash
   node validate_db.js
   ```
