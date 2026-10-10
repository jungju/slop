# 출처 기록

- 조사 시각: 2026-10-11 KST
- 선정 제목: AI가 답 대신 판단을 돌려준다
- 사건일: 2026-10-06
- 선정 이유: 최근 48시간의 주요 AI 발표를 우선 검토했지만 2026-10-09 Anthropic의 의도치 않은 모델 행동 보고는 ep-009의 실제 시스템 접근 사건과 ep-016의 사용자 자료 외부 전송 사건에 핵심 주제가 겹쳐 제외했다. 최근 7일 보완 창에서 OpenAI가 10월 6일 모든 개발자에게 공개 베타로 연 Decisions API를 선택했다. 공식 변경 기록과 사용 가이드, TechCrunch의 제품 발표 보도, Jev News의 공개 접근 확인을 모두 열어 읽었다.

## 1차 출처

- URL: https://developers.openai.com/api/docs/changelog
- 제목: OpenAI API Changelog
- 게시자: OpenAI
- 게시일: 2026-10-06
- 확인 내용: OpenAI는 Decisions API를 GPT-6 Luna 기반 베타로 출시했다고 기록했다. 글과 이미지를 Responses API보다 약 10배 빠르게 정형 답으로 바꾼다는 회사 설명을 함께 제시했다.

- URL: https://developers.openai.com/api/docs/guides/decisions
- 제목: Decisions
- 게시자: OpenAI
- 게시일: 2026-10-06
- 확인 내용: API는 글·이미지를 받아 조건이 참일 추정 확률, 고정 선택지 중 하나, 기준표 점수를 반환한다. 현재 공개 베타이며 GPT-6 Luna만 지원한다. 공식 가이드는 실제 업무의 라벨 자료로 임계값을 정하고 오탐과 미탐 비용에 맞춰 라우팅·필터링·검토 기준을 선택하라고 안내한다.

## 독립 확인

- URL: https://techcrunch.com/2026/09/30/openais-jev-clone-could-help-the-frontier-lab-stop-its-swarming-agents/
- 제목: OpenAI's Jev clone could help the frontier lab stop its swarming agents
- 게시자: TechCrunch
- 게시일: 2026-09-30
- 확인 내용: TechCrunch는 DevDay 당시 Decisions API가 Luna 모델에 미리 정한 선택지를 주고 이미지 분류나 에이전트 행동 같은 결과를 고르게 하는 제품이라고 보도했다. 빠른 출력과 별개로 실제 세계에 맞게 확률이 보정되는지가 핵심 과제라고 짚었다. 공개 베타 전환일보다 앞선 사전 발표 확인 자료다.

- URL: https://jevainews.com/news/openai-decisions/
- 제목: OpenAI's Decisions API preview says results come back in 150 milliseconds
- 게시자: Jev News
- 게시일: 2026-10-06
- 확인 내용: 10월 6일 공개 베타 안내 뒤 실제 `/v1/decisions` 요청이 HTTP 200으로 응답했고 GPT-6 Luna와 입력·출력 토큰 정보를 반환한 것을 기록했다. 속도와 품질의 광범위한 독립 벤치마크로 사용하지 않는다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-10-06 Decisions API를 모든 개발자 대상 공개 베타로 열었다. [OpenAI 변경 기록, OpenAI 가이드, Jev News]
- C2 — API는 긴 자연어 답변보다 글과 이미지를 정형 판단 결과로 바꾸는 용도다. [OpenAI 변경 기록, OpenAI 가이드, TechCrunch]
- C3 — 지원 결과는 조건의 추정 확률, 고정 선택지, 기준표 점수이며 분류·요청 배정·업무 우선순위에 쓸 수 있다고 설명됐다. [OpenAI 가이드, TechCrunch]
- C4 — 현재 지원 모델은 GPT-6 Luna 하나이고 전용 `POST /v1/decisions` 엔드포인트를 사용한다. [OpenAI 가이드]
- C5 — 제품은 공개 베타이며 정식 일반 제공은 아직 예정 단계다. [OpenAI 가이드]
- C6 — 공식 가이드는 실제 라벨 자료로 임계값을 정하고 오탐·미탐 비용에 따라 자동 처리와 사람 검토 경계를 설계하라고 안내한다. [OpenAI 가이드]

## 불확실성 잠금

약 10배 빠르다는 수치는 OpenAI가 Responses API와 비교해 제시한 제품 설명이며 이번 회차에서 독립 재현된 벤치마크로 다루지 않는다. 반환 확률과 신뢰도는 모델의 추정이므로 실제 업무의 정확성이나 안전을 보장하지 않는다. 공개 베타와 단일 지원 모델이라는 범위를 유지하고, 자동 처리 전에 업무별 라벨 자료와 오판 비용으로 임계값을 검증해야 한다.

## 출처 지문과 중복 확인

- 출처 지문: `https://developers.openai.com/api/docs/changelog|2026-10-06`
- 원장 비교: ep-001부터 ep-028까지의 모든 지문과 다르다. ep-011은 장시간 에이전트 운영과 복구, ep-026은 ChatGPT 안의 대화형 UI를 다뤘다. 이번 회차는 글·이미지를 확률·선택·점수로 바꾸는 좁은 정형 판단 API와 임계값·사람 검토 설계가 핵심이라 중복되지 않는다.

## 검토 후 제외한 후보

- Anthropic의 `Investigating unintended model actions in our evaluations and internal use` (2026-10-09): 중요한 새 보고지만 실제 시스템 접근과 통제 실패라는 핵심이 ep-009 및 ep-016과 중복되어 제외했다.
- OpenAI 안전 연구자 해고 분쟁 (2026-10-09): AP 보도는 확인했지만 회사의 공식 상세 조사 자료가 공개되지 않았고 당사자 주장과 회사 입장이 다투어지는 고용 분쟁이어서 네 컷 사실 서사로 고정하지 않았다.
- Anthropic 2026 Usage Policy 개정 (2026-10-08): 대부분 기존 금지 규칙과 적용 예시를 명료화한 변경이며 ep-028 조사에서도 낮은 사건성과 기존 위협 회차 중복으로 제외됐다.
