# 출처 기록

- 조사 시각: 2026-10-03 06:04 KST
- 선정 제목: Claude Code에 모드가 생겼다
- 사건일: 2026-10-01
- 선정 이유: 최근 48시간의 비중복 AI 발표를 검토한 뒤 Anthropic의 Claude Code 모드 공개를 선정했다. 공식 발표와 공식 문서, 독립 프로젝트 ClaudeKit의 기술 요약을 모두 열어 읽고, 기능 범위와 사용자 권한으로 실행되는 위험을 함께 확인했다.

## 1차 출처

- URL: https://claude.com/blog/claude-code-mods
- 제목: Customize Claude Code with mods
- 게시자: Anthropic
- 게시일: 2026-10-01
- 확인 내용: Anthropic은 프롬프트 재작성, 도구 호출 차단·변경·재시도, UI 추가·교체, 새 명령 구현이 가능한 TypeScript 모드를 공개했다. 모드는 플러그인으로 배포되며 CLI와 데스크톱 앱에서 작동한다. 발표는 모드가 샌드박스되지 않고 Claude Code와 같은 기기 접근 권한으로 실행된다고 명시한다.

- URL: https://code.claude.com/docs/en/plugins/mods/overview
- 제목: Mods overview
- 게시자: Claude Code Docs
- 게시일: 2026-10-01
- 확인 내용: 공식 문서는 모드가 사용자 권한으로 파일 읽기·쓰기, 프로세스 시작, 네트워크 요청, 환경 변수와 설정의 비밀 읽기, 프롬프트와 도구 호출 변경, 일부 도구 호출 승인을 할 수 있다고 설명한다. 설치 전 `claude plugin validate`로 훅과 호출 범위를 살피도록 안내한다.

## 독립 확인

- URL: https://claudekit.io/en/updates/claude-code-mods/
- 제목: Customize Claude Code with mods
- 게시자: ClaudeKit
- 게시일: 2026-10-01
- 확인 내용: Anthropic과 무관한 ClaudeKit 프로젝트가 공식 발표와 문서를 대조해 최소 지원 버전, CLI·데스크톱 지원, 비샌드박스 권한, 설치 전 검증과 비활성화 방법을 정리했다.

## 회차에 사용한 원자 주장

- C1 — Anthropic은 2026-10-01 Claude Code의 동작과 화면을 바꾸는 모드를 공개했다. [Anthropic, ClaudeKit]
- C2 — 모드는 JavaScript 또는 TypeScript 이벤트 처리기로 프롬프트와 도구 호출을 관찰·변경·대체할 수 있다. [Anthropic, Claude Code Docs]
- C3 — 모드는 UI 패널·버튼·명령을 추가하거나 일부 내장 동작을 교체할 수 있고 플러그인으로 배포된다. [Anthropic, Claude Code Docs]
- C4 — 모드는 샌드박스되지 않고 사용자 권한으로 실행된다. [Anthropic, Claude Code Docs, ClaudeKit]
- C5 — 공식 문서상 모드는 사용자가 접근 가능한 파일·비밀·네트워크·세션과 도구 호출에 닿을 수 있다. [Claude Code Docs]
- C6 — 공식 문서와 독립 요약은 신뢰할 수 있는 출처만 설치하고 설치 전 훅과 호출 범위를 검토하라고 안내한다. [Claude Code Docs, ClaudeKit]

## 불확실성 잠금

모드는 단순한 설정이나 지시문이 아니라 사용자 권한으로 실행되는 코드다. 기능 공개가 모든 서드파티 모드의 안전성이나 품질을 보장한다고 표현하지 않는다. CLI와 데스크톱 앱 지원 범위를 다른 실행 환경 전체로 확대하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://claude.com/blog/claude-code-mods|2026-10-01`
- 원장 비교: ep-001부터 ep-022까지의 모든 지문과 다르다. ep-011은 OpenAI Agents API의 관리 기능, ep-013은 외부 평가자 접근, ep-020은 Claude Sonnet 5.5 성능 발표를 다뤘으며 이번 회차의 핵심인 사용자 실행 코드 기반 도구 확장과 권한 위험은 중복되지 않는다.

## 검토 후 제외한 후보

- 2026-10-01 Anthropic·Barclays 협업 발표: 구체적 운영 규모는 있으나 전날 검토에서 이미 도입 계획 중심으로 제외했고, 독립 성과 검증보다 공동 발표 의존도가 높아 재선정하지 않았다.
- 2026-09-30 Claude for Government 정식 출시: 제품 범위는 명확하지만 전주 국방부 공급망 판결 회차와 정부·Claude 주제가 가까워 중복 위험이 있어 제외했다.
- 2026-10-02 Google 9월 AI 요약: 새 사건이 아니라 기존 발표 묶음이며 Gemini 4 Argon은 ep-021에서 이미 다뤄 제외했다.
