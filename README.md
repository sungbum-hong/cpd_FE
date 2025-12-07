# 청포도 프로젝트 프론트엔드 팀 개발 규칙

프론트엔드 팀에서 동일한 기준에서 개발하기 위해 아래 규칙을 반드시 준수합니다.
PR 과정에서 규칙 위반 시 **리뷰 반려 또는 수정 요청**이 발생할 수 있습니다.

---

## 📁 폴더 구조

```text
src/
 ├── common/               # 전역 공통 모듈 (재사용 목적)
 │   ├── ui/               # 공통 UI 컴포넌트 (순수 UI만 허용)
 │   └── logic/            # 공통 로직, hooks, util, api client 등
 └── features/             # 도메인(기능) 단위 모듈
     ├── {feature}/
     │    ├── ui/          # feature-specific UI (페이지/섹션/컴포넌트)
     │    └── logic/       # feature-specific 상태관리, API, hooks
```

### 📌 폴더 규칙

- **common/ui**
    - UI 외의 로직은 절대 포함하지 않음
    - API 호출 또는 상태 연동 불가
    - 오직 순수 컴포넌트 형태만 허용

- **common/logic**
    - 여러 feature에서 재사용되는 로직만 배치
    - 단순 util은 이곳, 비즈니스 의존 로직은 feature 내부에 둔다

- **features/{feature}/ui**
    - 해당 도메인에서만 쓰는 UI 배치
    - 컴포넌트 이름은 반드시 명확하게 기능을 표현해야 함
      예: `LoginForm.jsx`, `PostListSection.jsx`

- **features/{feature}/logic**
    - 상태관리(store), hooks, API 호출, DTO, 서비스 로직 포함 가능
    - 다른 feature의 로직을 직접 참조하는 것은 금지
    - 다른 feature의 로직이 필요하면 `common/logic`으로 승격 후 사용

---

## 📝 커밋 컨벤션

### 📌 Commit Message Format

```text
<type>: <description>

[optional body]

[optional footer]
```

### 📌 Commit Type Rules

| Type     | 설명                         | 예시                               |
| -------- | ---------------------------- | ---------------------------------- |
| feat     | 새로운 기능 추가             | feat: 글 작성 API 연동             |
| fix      | 버그 수정                    | fix: 로그인 토큰 저장 오류 해결    |
| refactor | 기능 변화 없는 구조 개선     | refactor: 공통 input 컴포넌트 분리 |
| style    | 코드 스타일 변경 (포맷팅 등) | style: prettier 포맷 적용          |
| docs     | 문서 수정                    | docs: README 폴더 구조 업데이트    |
| test     | 테스트 코드 작성/수정        | test: postService 테스트 추가      |
| chore    | 설정, 패키지, 빌드 관련 작업 | chore: husky pre-commit 설정       |

### 📌 커밋 규칙

- 하나의 커밋은 **하나의 목적만** 가져야 한다.
- UI + 로직 + 설정이 한 커밋에 섞이면 ❌ (리뷰 반려 대상)
- 커밋 메시지는 **요약 가능할 정도로 명확하게** 작성한다.
- `"fix: 오류 수정"` 같은 모호한 표현 금지 → 어떤 오류인지 반드시 명시한다.
    - ✅ `fix: 잘못된 페이지네이션 파라미터 수정`
    - ❌ `fix: 버그 수정`

---

## 🔤 네이밍 규칙

### 📌 공통 규칙

- 변수/함수는 **camelCase** 사용
- 상수는 **UPPER_CASE** 사용
- 컴포넌트 파일은 **PascalCase** 사용 (`ComponentName.jsx`)
- hook 파일은 `useSomething.js` 형식
- boolean 변수는 `is`, `has`, `can`, `should` Prefix 사용 (권장)
- 약어, 의미가 불명확한 줄임말 사용 금지

### 📌 파일 네이밍 규칙

- 컴포넌트: `ComponentName.jsx`
    - 예: `LoginForm.jsx`, `PostItem.jsx`

- 페이지 단위 UI: `FeaturePage.jsx`
    - 예: `LoginPage.jsx`, `UserProfilePage.jsx`

- hooks: `useFeatureAction.js`
    - 예: `useLogin.js`, `usePostList.js`

- API 모듈: `{feature}Api.js`
    - 예: `authApi.js`, `postApi.js`

- 상태(store): `{feature}Store.js`
    - 예: `authStore.js`, `userStore.js`

### 📌 예시 코드

```js
// boolean
const isLoggedIn = true;
const hasPermission = false;

// 변수
const userProfile = {};
const postList = [];

// 함수
function getUserProfile() {}
function updatePostTitle() {}
```

---

## ▶ 실행 방법

```bash
# 패키지 설치
npm install

# 로컬 개발 서버 실행
npm run dev

# 프로젝트 빌드
npm run build

# ===== 코드 품질 검사 (수동 실행용) =====
npm run lint        # ESLint 검사
npm run lint:fix    # ESLint 자동 수정
npm run format      # Prettier 포맷팅

```

---

## Husky 규칙

커밋 전 반드시 아래 작업이 자동 실행됩니다.
규칙을 통과하지 못하면 **커밋 자체가 차단됩니다.**

### 📌 pre-commit 설정

`.husky/pre-commit`:

```bash
npm run lint:fix
npm run format
```

### 📌 pre-commit 동작 규칙

1. `npm run lint:fix`
    - ESLint 규칙에 맞게 자동 수정 가능한 부분을 수정
    - 규칙 위반이 남아 있으면 커밋 실패

2. `npm run format`
    - Prettier 포맷팅 적용
    - 포맷팅이 필요하면 자동으로 수정

3. 두 명령 중 하나라도 실패하면 **커밋은 생성되지 않으며**,
   출력된 오류를 해결한 뒤 다시 커밋해야 한다.

---

## 🔎 PR 규칙 (Pull Request Rule)

- PR은 **기능 단위**로 작게 나눈다 (대규모 PR 지양)
- 최소 1명 이상 코드 리뷰 후 merge
- 리뷰어가 요구한 수정사항은 원칙적으로 반영
- merge 전 `develop`/`main` 브랜치와 **충돌 여부 직접 확인**
- 충돌 해결 과정에서 로직이 변경되면 반드시 다시 리뷰 요청

---

## ⚠ 팀 개발 시 공통 주의 사항

- `develop` / `main` 브랜치에 **직접 푸시 금지**
- 모든 기능 개발은 **feature 브랜치**에서 진행 (`feature/login-ui`, `feature/post-create` 등)
- 공통 로직(`common/*`) 수정 시 팀원에게 반드시 공유
- 폴더 구조에 맞지 않는 파일 위치는 리뷰 단계에서 조정
- `console.log`는 디버깅용으로만 사용, PR 시 **반드시 제거**
- 사용하지 않는 코드, 주석은 최대한 남기지 않는다.
- PR 제목은 가능하면 커밋 타입과 맞춰서 작성 (`feat: 로그인 API 연동` 등)
- 리뷰 승인 전에는 develop 브랜치로 절대 merge하지 않는다.

---
