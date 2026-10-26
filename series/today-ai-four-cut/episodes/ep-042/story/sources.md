# 출처 기록

- 조사 시각: 2026-10-27 KST
- 선정 제목: 짧은 판단용 AI API가 정식 출시됐다
- 사건일: 2026-10-22
- 선정 이유: 2026-10-27 최근 48시간의 주요 공식 AI 발표를 다시 확인했지만 ep-041보다 새롭고 독립 확인 가능한 소재를 찾지 못해 최근 7일 보완 창을 사용했다. OpenAI의 제품 발표와 개발자 문서, TechCrunch의 독립 보도를 모두 다시 열어 일반 공개 시점, 제한된 답 형식, GPT-6 Luna 기반 구현과 속도 주장 범위를 교차 확인했다.

## 1차 출처

- URL: https://openai.com/index/decisions-api/
- 제목: Build more responsive apps with the Decisions API
- 게시자: OpenAI
- 게시일: 2026-10-22
- 확인 내용: OpenAI는 Decisions API를 정식 출시했다. 개발자가 정한 질문과 답 후보에 대해 확률, 선택 또는 점수를 반환하며 텍스트·이미지·JSON 입력을 지원한다. GPT-6 Luna를 Responses API로 사용할 때보다 최대 10배 빠르다는 수치는 OpenAI의 자체 비교다.

- URL: https://developers.openai.com/api/docs/guides/decisions
- 제목: Decisions
- 게시자: OpenAI Developers
- 게시일: 2026-10-22
- 확인 내용: 전용 Decisions 엔드포인트는 제한된 답을 빠르게 반환하는 용도이며 실제 적용 전 대표 사례로 평가하고 임계값·재시도·사람 검토 정책을 정해야 한다.

## 독립 확인

- URL: https://techcrunch.com/2026/10/22/openai-makes-its-jev-competitor-widely-available-as-decision-model-competition-heats-up/
- 제목: OpenAI makes its Jev competitor widely available as decision model competition heats up
- 게시자: TechCrunch
- 게시일: 2026-10-22
- 확인 내용: TechCrunch는 Decisions API가 10월 22일 모든 고객에게 공개됐고 GPT-6 Luna의 추론 경로를 빠르고 저렴하게 구성한 제품이라고 보도했다. 또한 좋은 판단 모델의 기준은 업무마다 속도·비용·보정·정확도의 균형이 달라 실제 시험이 필요하다고 짚었다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-10-22 Decisions API를 정식 출시했다. [OpenAI, TechCrunch]
- C2 — 이 API는 앱과 에이전트 안의 분류·경로 선택 같은 작은 결정을 위한 전용 엔드포인트다. [OpenAI]
- C3 — 개발자가 답 후보를 정하면 API는 확률, 선택 또는 점수 중 하나의 제한된 형식으로 답한다. [OpenAI 발표, 개발자 문서]
- C4 — OpenAI는 같은 GPT-6 Luna를 Responses API로 사용할 때보다 최대 10배 빠르다고 주장한다. [OpenAI]
- C5 — 최대 10배 수치는 OpenAI의 비교이며 모든 업무에서 독립적으로 검증된 보편적 속도 향상이 아니다. [OpenAI, TechCrunch]
- C6 — 실제 적용에서는 업무별 속도, 정확도, 보정과 사람 검토 기준을 함께 시험해야 한다. [OpenAI 개발자 문서, TechCrunch]

## 불확실성 잠금

정식 출시와 답 형식은 확인됐지만 최대 10배 속도는 OpenAI의 자체 비교다. 모든 분류·경로 선택 업무에서 같은 속도나 정확도를 보장하지 않으며, 실제 입력과 임계값을 이용한 업무별 평가가 필요하다.

## 출처 지문과 중복 확인

- 출처 지문: `https://openai.com/index/decisions-api/|2026-10-22`
- 원장 비교: ep-001부터 ep-041까지 모든 지문과 다르다. ep-011은 장기 작업 관리용 Agents API를 다뤘고, 이번 회차는 제한된 답을 반환하는 Decisions API의 정식 출시가 핵심이라 중복하지 않는다.

## 검토 후 제외한 후보

- 영국 AI 생물보안 연구소: 2026-10-24의 최신 발표지만 ep-041에서 이미 사용한 동일 출처 지문이라 제외했다.
- OpenAI 훈련 환경 보안 설명: 2026-10-23 게시물이지만 주로 내부 보안 설계 설명이고 이번 조사에서 독립 확인 자료가 부족해 제외했다.
- ChatGPT 저장소 확장 2부: 2026-10-23 게시물이지만 앞선 ep-012의 저장소 전환 주제와 실질적으로 겹쳐 제외했다.
- OpenAI의 PHP 취약점 대응: 2026-10-21의 중요한 사례지만 보안 AI 주제가 ep-003, ep-009와 가까워 새로운 제품 출시인 Decisions API를 우선했다.
