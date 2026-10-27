# 출처 기록

- 조사 시각: 2026-10-28 KST
- 선정 제목: 소리 나는 가상세계가 바로 열린다
- 사건일: 2026-10-27
- 선정 이유: 최근 48시간의 주요 AI 발표를 검색하고 Google DeepMind 공식 발표와 모델 페이지, Ars Technica와 TechCrunch 원문을 모두 열어 확인했다. 같은 기간 GPT-6.1 Terra도 검토했지만 직전 회차의 제품 API 주제와 가까워, 더 새롭고 일반 독자에게 세계 모델의 기능과 한계를 구체적으로 보여 줄 수 있는 Genie 4를 선택했다.

## 1차 출처

- URL: https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/
- 제목: Genie 4: A new generation of world simulation
- 게시자: Google DeepMind
- 게시일: 2026-10-27
- 확인 내용: Google DeepMind는 Genie 4를 실시간 상호작용형 세계 모델로 발표했다. 사용자는 텍스트로 날씨·카메라·사람·물체를 바꿀 수 있고 모델은 화면과 음악·환경음·대화를 함께 생성한다. 현재 신뢰 테스터용 연구 미리보기이며 세부 장면, 물체 지속성, 복잡한 물리, 공간·텍스트·소리 정확도와 장기 일관성은 진행 중인 연구라고 밝혔다.

- URL: https://deepmind.google/models/genie/
- 제목: Genie 4
- 게시자: Google DeepMind
- 게시일: 2026-10-27
- 확인 내용: Google AI Ultra의 Project Genie와 Gemini API·AI Studio 조기 접근 파트너로 순차 확대될 예정이다. 연속 상호작용은 장시간이 아니라 몇 분 수준이며, 시간이 길어지면 시각 세부와 물체 지속성이 흔들릴 수 있다고 명시한다.

## 독립 확인

- URL: https://arstechnica.com/google/2026/10/deepminds-genie-4-world-model-adds-audio-and-more-realistic-people-to-simulations/
- 제목: DeepMind unveils Genie 4 world model promising more realistic physics and humans
- 게시자: Ars Technica
- 게시일: 2026-10-27
- 확인 내용: Ars Technica는 실시간 장면 변경과 네이티브 소리 생성을 확인하면서, 장면 일관성이 몇 분 수준이고 개발자·소비자 확대의 구체적 일정과 가격은 아직 정해지지 않았다고 보도했다.

- URL: https://techcrunch.com/2026/10/27/googles-genie-4-world-model-adds-audio-more-realistic-worlds-and-real-time-steering/
- 제목: Google’s Genie 4 world model adds audio, more realistic worlds, and real-time steering
- 게시자: TechCrunch
- 게시일: 2026-10-27
- 확인 내용: TechCrunch는 연구 미리보기 출시와 실시간 편집·소리 생성, 향후 제한적 확대 계획을 확인했다. 회사 데모 기준 장면은 짧게 유지되지만 시간이 길어지면 세부와 물체가 바뀌고 소리·글자 정확도 문제가 남아 있다고 전했다.

## 회차에 사용한 원자 주장

- C1 — Google DeepMind는 2026-10-27 Genie 4를 연구 미리보기로 공개했다. [Google DeepMind, Ars Technica, TechCrunch]
- C2 — Genie 4는 사용자가 텍스트로 지시하는 동안 가상 장면을 실시간 생성하고 바꿀 수 있다. [Google DeepMind, Ars Technica, TechCrunch]
- C3 — 화면과 함께 음악·환경음·대화 같은 소리도 생성한다. [Google DeepMind, Ars Technica, TechCrunch]
- C4 — 현재 접근은 신뢰 테스터부터 시작하며 Google AI Ultra와 일부 개발자 파트너로 순차 확대될 예정이다. [Google DeepMind, Ars Technica, TechCrunch]
- C5 — 연속 상호작용은 몇 분 수준이고, 시간이 길거나 복잡한 편집이 이어지면 장면 세부와 물체 지속성이 흔들릴 수 있다. [Google DeepMind, Ars Technica, TechCrunch]
- C6 — 실제 로봇 훈련과 창작 활용은 가능성을 보여 주는 초기 실험이며 장기 일관성·공간·글자·소리 정확도는 아직 연구 과제다. [Google DeepMind, TechCrunch]

## 불확실성 잠금

Genie 4의 기능은 Google DeepMind가 공개한 데모와 내부 평가에 근거한다. 현재는 제한된 연구 미리보기이고 몇 분 이상의 장기 일관성, 실제 로봇 훈련 성과, 정확한 공간·물리·소리 재현이 독립적으로 입증된 완성 제품은 아니다.

## 출처 지문과 중복 확인

- 출처 지문: `https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/|2026-10-27`
- 원장 비교: ep-001부터 ep-042까지 모든 지문과 다르다. ep-005는 이중맹검 AI 평가, ep-032는 기기 내 사기 탐지라 세계 모델 연구 미리보기와 핵심 주장이 겹치지 않는다.

## 검토 후 제외한 후보

- OpenAI GPT-6.1 Terra: 2026-10-26의 새 모델 출시지만 직전 ep-042의 OpenAI API 제품 출시와 주제가 가깝고, Genie 4가 더 최신이며 다른 핵심 개념을 제공해 제외했다.
- Anthropic IPO 보도: 중요한 기업 사건이지만 금융·기업가치 중심이며 확정 공모가와 상장 결과가 아직 없어 교육용 AI 기능 회차보다 우선하지 않았다.
- OpenAI 훈련 환경 보안 설명: 최근 7일 안이지만 10월 23일 게시물이고 ep-009·ep-016의 격리 이탈 사건과 주제가 겹쳐 제외했다.
