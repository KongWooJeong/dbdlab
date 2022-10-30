<br>

# 💻  Covid Dashboard
<br>

# ⚙️ Installation
```
  1. git clone https://github.com/KongWooJeong/dbdlab.git
  2. cd dbdlab
  3. npm install
  4. npm run build
  5. npm run start
```

<br>

# 💡 구현 사항
1. 프로젝트 초기 세팅
  - 폴더 및 파일 정리
  - lint, prettier 세팅
2. 레이아웃 구성
  - 공통 레이아웃 구성
  - sidebar 컴포넌트 생성
  - dashboard 컴포넌트 생성
3. sidebar 컴포넌트
  - 메뉴 선택시 선택된 메뉴 color 변경
  - 메뉴 선택시 페이지 이동
  - 메인 섹션은 빈페이지로 라우팅
4. chart 컴포넌트 구현
  - Line 차트 컴포넌트
  - Horizontal Bar 차트 컴포넌트
  - Doughnut 차트 컴포넌트
5. 코로나 API 활용하여 차트 구현
  - 코로나 일자별 확진자 수 차트
  - 일자별 연령대 확진자 수 차트
  - 일자별 성별 확진자 수 차트
6. 리팩토링
  - 코로나 일자별 컴포넌트 chartOption 타입 지정
  - 일자별 연령대 컴포넌트 chartOption 타입 지정
  - 일자별 성별 컴포넌트 chartOption 타입 지정
  - SideBar 컴포넌트 menuList props 추가
  - 폴더 구조 정리
  - SelectBox 컴포넌트 구현

<br>

# 🛠 Folder Structure
```

  - components: 화면 구성에 필요한 컴포넌트
    - chart: 차트 관련 컴포넌트
    - pages: 각 페이지에서 사용하는 컴포넌트
    - common: 공용 컴포넌트
  - pages: 각 페이지 화면
  - public/covidData: covid mock data (.json file)
  - styles: global style 구성
```

<br>
