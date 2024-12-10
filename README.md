# PitchingMate Frontend

## 📝 프로젝트 소개

PitchingMate는 사용자들이 스포츠 경기를 함께할 파트너를 찾고, 경기를 관리하며, 리뷰를 남길 수 있는 플랫폼입니다. 이 저장소는 PitchingMate의 프론트엔드 소스 코드를 포함하고 있습니다.

---

## ⚙️ 기술 스택

### 프론트엔드

- **언어**: TypeScript
- **프레임워크**: React
- **번들러**: Vite
- **상태 관리**: Zustand, React Query (Tanstack Query)
- **API 통신**: Ky
- **라우팅**: React-Router
- **스타일링**: Styled-Components
- **실시간 통신**: stompjs

### CI/CD

- **플랫폼**: GitHub Actions
- **배포**: AWS S3 (예정)

### 협업 도구

- 노션
- 디스코드

---

## 🗂️ 프로젝트 구조

```plaintext
src/
├── apis/                # API 요청 관련 코드
├── assets/              # 이미지, 아이콘, 폰트 등 정적 파일
├── components/          # 재사용 가능한 UI 컴포넌트
├── hooks/               # 커스텀 React 훅
├── layouts/             # 페이지 레이아웃 컴포넌트
├── pages/               # 페이지 컴포넌트
├── routes/              # 라우팅 설정
├── store/               # Zustand 상태 관리 코드
├── styles/              # 전역 스타일 및 테마 설정
├── typings/             # TypeScript 타입 정의
├── utils/               # 유틸리티 함수 및 모델
└── tests/               # 테스트 코드
```

---

## 🚀 설치 및 실행

### 1. 프로젝트 클론

```bash
git clone https://github.com/your-repo/pitchingmate-frontend.git
```

### 2. 의존성 설치

```bash
cd pitchingmate-frontend
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

### 4. 프로덕션 빌드

```bash
npm run build
```

---

## ✅ 코드 컨벤션

- **ESLint & Prettier**: 일관된 코드 스타일 유지
- **React Hooks**: 최신 React 사용법 준수
- **컴포넌트 분리**: 재사용성을 고려한 모듈화
- **파일 네이밍**: PascalCase와 camelCase 혼용

---

## ✨ 주요 기능

- **스포츠 매칭**: 사용자 간 매칭 기능
- **스케줄 관리**: 경기 일정 등록 및 확인
- **실시간 채팅**: 경기 관련 대화 지원
- **리뷰 작성**: 경기 후 리뷰 작성 및 확인


## 프로젝트 미리보기
![메인 시연](https://github.com/user-attachments/assets/96e35a77-8e1a-45a6-9825-b507be2c6426)
![메이트 목록 및 채팅](https://github.com/user-attachments/assets/47cfa828-76ac-4ca1-9a6e-13b4dca98926)
![굿즈 거래 작성](https://github.com/user-attachments/assets/785a1be1-8e16-404e-b16f-5dd7315714f8)

---

## 🔗 기여 방법

### 1. 이슈 생성

- 프로젝트의 기능 추가나 버그 수정을 위해 [Issues](https://github.com/prgrms-web-devcourse-final-project/WEB1_2_PitchingMate_FE/issues) 탭에 새로운 이슈를 생성합니다.

### 2. 브랜치 생성

```bash
git checkout -b feat/#이슈번호
```

### 3. Pull Request 생성

- PR 템플릿을 활용하여 리뷰 요청

---

## 📜 라이선스

이 프로젝트는 [MIT 라이선스](LICENSE)를 따릅니다.

