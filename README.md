# AI Slop

100% AI가 만들고 자동으로 연재하는 만화와 영상 아카이브입니다.

- 공개 주소: https://slop.jjgo.io
- 영상은 YouTube에 게시하고 사이트에서는 연결합니다.
- 만화는 최적화된 독자용 이미지를 이 저장소에 보관합니다.
- 작품마다 확인 가능한 AI 모델과 제작 정보를 공개합니다.

## 로컬 확인

Node.js 22.x의 22.13 이상 또는 24 이상에서 다음 명령을 사용합니다.

    npm ci
    npm run check
    npm run serve

`check`는 ESLint, Prettier, 회귀 테스트, 연재 검증, 빌드, 생성된 사이트의
링크·이미지·캡션·메타데이터 검증을 순서대로 수행합니다. `npm run format`으로
코드 형식을 맞춥니다. 사이트 빌드는 Node.js 표준 모듈을 사용하며 ESLint와
Prettier는 개발용 도구입니다. 이미지 최종화에는 ImageMagick의 `magick` 명령이 필요합니다.

## 코드 구조

- `scripts/build.mjs`: 정적 자산과 HTML, sitemap 생성
- `scripts/templates/`: 공통 문서 레이아웃, 작품 목록, 만화 리더 렌더링
- `scripts/lib/series-content.mjs`: 연재 패키지 로딩과 공개 콘텐츠 구성
- `scripts/lib/validate-series.mjs`: 공통 연재 검증; 작품별 필수 파일은 `harness.json`에서 지정
- `scripts/series.mjs`: 초안 생성과 이미지 최종화 명령
- `scripts/verify.mjs`: `_site`의 실제 생성 결과 검증
- `src/app.js`, `src/reader.js`: 메뉴·필터·홈 애니메이션과 리더 동작
- `src/styles/`: 공통 스타일, 작품 화면, 리더 스타일

CSS와 JavaScript는 빌드 시 각각 하나의 해시 파일로 합칩니다. `_site`는
생성 결과이므로 직접 수정하지 않습니다. 원본 이미지, 원고, 스펙은 연재
패키지에 보존하고, 공개 빌드에는 회차 메타데이터에 등록된 독자용 이미지만 복사합니다.

## 웹 분석

PostHog로 페이지 조회, 페이지 이탈, 링크·버튼 상호작용을 수집합니다.
세션 녹화는 비활성화되어 있습니다. 배포 환경에서는 GitHub 저장소의
Actions variables에 다음 값을 등록합니다.

- `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN`: PostHog 프로젝트 토큰
- `NEXT_PUBLIC_POSTHOG_HOST`: PostHog 수집 호스트

## 연재 구조

모든 연재는 `series/<slug>` 안에 스토리, 스펙, 하네스, 회차 메타데이터와
독자용 이미지를 함께 보관합니다. 빌드는 이 디렉터리를 자동으로 발견합니다.

    npm run series:list
    npm run series -- next wind-returning-place
    npm run series -- verify wind-returning-place
    npm run series -- scaffold wind-returning-place --title "새 회차 제목"
    npm run series -- finalize wind-returning-place ep-030 --source <원본 이미지 폴더>

새 연재를 추가할 때는 같은 구조의 `series.json`, `harness.json`, `episodes/`만
만들면 됩니다. 작품별 사이트나 가져오기 스크립트는 만들지 않습니다.

`status: "draft"` 회차는 하네스에서 유지하며 공개 HTML, `content.json`,
모델 사용 범위 및 이미지 복사에서 제외합니다. 기본 연재 검증은 게시 회차를
검사합니다. 초안을 게시하기 전에는 `verify <slug> <ep-NNN>`으로 해당 회차를
명시하여 모든 페이지와 필수 제작 파일을 검사합니다. 게시 회차의 누락 파일은
오류로 처리하며, 초안을 숨기는 규칙으로 우회하지 않습니다.
