# 출처 기록

- 조사 시각: 2026-11-02 KST
- 선정 제목: AI 학습 거절 신호가 하나로 모인다
- 사건일: 2026-10-30
- 선정 이유: 최근 48시간 안에서 1차 출처와 독립 확인을 갖춘 적합한 새 AI 개발을 찾지 못해 최근 7일로 확장했다. OpenAI와 Google의 공식 발표, IETF 기술 초안, 독립 보도를 모두 열어 읽었고 웹 게시자의 학습 선호를 여러 제공자에게 한 번에 알리는 약속과 아직 남은 표준화·구현 한계를 함께 설명할 수 있어 선정했다.

## 1차 출처

- URL: https://openai.com/index/helping-websites-express-ai-training-preferences/
- 제목: Making it easier for websites to express AI training preferences
- 게시자: OpenAI
- 게시일: 2026-10-30
- 확인 내용: OpenAI는 웹사이트가 robots.txt의 공통 신호로 여러 참여 제공자에게 생성형 AI 학습 선호를 전달할 수 있도록 지원하고, 이 신호를 수개월 안에 구현할 계획이라고 밝혔다. 기존 OpenAI 전용 크롤러 제어는 계속 적용된다.

- URL: https://datatracker.ietf.org/doc/draft-kelley-aipref-training-preference-signal/
- 제목: Machine-Readable Training Preference Signal
- 게시자: IETF Datatracker
- 게시일: 2026-10-30
- 확인 내용: 개인 인터넷 초안은 `__usage_ai-training` 정책 토큰과 경로별 Allow·Disallow 해석을 제안한다. 이 신호는 콘텐츠의 생성형 AI 학습 사용 선호를 표현하며 크롤링 허용·차단 규칙과는 별개다. 누구나 제출할 수 있는 초안으로 IETF의 공식 지지나 표준 지위는 없다.

- URL: https://developers.google.com/search/blog/2026/10/ai-training-control
- 제목: Supporting a shared AI training control for websites
- 게시자: Google Search Central
- 게시일: 2026-10-30
- 확인 내용: Google도 공통 학습 제어를 지원하겠다고 밝혔으며 기존 Google-Extended 제어와 함께 2027년부터 지원할 계획이다.

## 독립 확인

- URL: https://searchengineland.com/google-also-gives-publishers-more-control-over-how-ai-uses-their-content-499971
- 제목: Google also gives publishers more control over how AI uses their content
- 게시자: Search Engine Land
- 게시일: 2026-10-30
- 확인 내용: Google, OpenAI, Microsoft, Anthropic이 IETF에서 검토 중인 공동 제안을 지지했다고 확인한다. 아직 작업 중인 제안이고 Google은 2027년 지원을 예고했다는 범위를 함께 짚는다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-10-30 웹사이트의 공통 robots.txt 학습 선호 신호를 존중하겠다고 발표했다. [OpenAI, Google, Search Engine Land]
- C2 — 공통 신호는 웹사이트가 제공자별 규칙을 각각 관리해야 하는 부담을 줄이는 것을 목표로 한다. [OpenAI, Google]
- C3 — 제안된 신호는 경로별 생성형 AI 학습 사용 선호를 표현하며 크롤링 규칙 자체와는 별개다. [IETF 초안]
- C4 — OpenAI는 수개월 내 구현을 목표로 하고 Google은 2027년 지원을 예고해 회사별 적용 시점이 다르다. [OpenAI, Google, Search Engine Land]
- C5 — 기반 문서는 개인 인터넷 초안이며 IETF의 공식 지지나 표준 지위가 없다. [IETF Datatracker]
- C6 — 기존 회사별 크롤러·학습 제어는 공통 신호와 함께 계속 사용된다. [OpenAI, Google]

## 불확실성 잠금

여러 회사의 지지는 현재의 구현 완료나 준수 감사 결과가 아니다. 초안은 바뀌거나 폐기될 수 있고, 회사마다 적용 시점과 해석이 다를 수 있다. 공통 학습 선호 신호는 크롤링 자체를 막는 보편 규칙도 아니며 이미 수집된 자료의 처리까지 자동으로 결정한다고 볼 수 없다.

## 출처 지문과 중복 확인

- 출처 지문: `https://openai.com/index/helping-websites-express-ai-training-preferences/|2026-10-30`
- 원장 비교: ep-001부터 ep-046까지의 지문과 모두 달라 중복 없음.

## 검토 후 제외한 후보

- 2026-11-01 AI 뉴스 모음: 1차 출처가 아닌 요약 페이지이거나 기존 발표 재소개여서 제외했다.
- OpenAI 청소년 안전 보고서: 2026-10-30 발표지만 8월의 청소년용 ChatGPT를 다룬 ep-002와 핵심 주제가 겹쳐 제외했다.
- OpenAI 웹사이트 공정 이용 글: 같은 날 게시됐지만 법적·정책적 주장에 비해 독립 확인과 구체적 사용자 행동이 부족해 제외했다.
