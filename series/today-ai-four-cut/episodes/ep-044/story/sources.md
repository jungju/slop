# 출처 기록

- 조사 시각: 2026-10-29 KST
- 선정 제목: 로봇 판단 두뇌가 클라우드에 열렸다
- 사건일: 2026-10-27
- 선정 이유: 최근 48시간의 새 발표 중 Google Cloud의 Gemini Robotics ER 2 공개 시험을 선택했다. 공식 발표와 문서, 10월 28일 독립 요약을 모두 열어 읽었다. 전날 ep-043의 Genie 4는 같은 지문이라 제외했고, 10월 28일 Rime Prism은 독립 검증 자료가 충분하지 않아 제외했다.

## 1차 출처

- URL: https://cloud.google.com/blog/products/ai-machine-learning/gemini-robotics-embodied-reasoning-2-is-now-available-on-google-cloud
- 제목: Gemini Robotics Embodied Reasoning 2 is now available on Google Cloud
- 게시자: Google Cloud
- 게시일: 2026-10-27
- 확인 내용: Gemini Robotics ER 2를 Gemini platform의 Model Garden에서 공개 시험으로 제공한다. 연속 영상을 보고 작업 진행을 판단하고 여러 단계 계획을 세우며 개발자가 연결한 VLA, 이동, 조작 API를 도구로 호출하는 상위 판단 계층이다.

- URL: https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/gemini/gemini-robotics-er
- 제목: Gemini Robotics ER 2 overview
- 게시자: Google Cloud Documentation
- 게시일: 2026-10-27
- 확인 내용: 기능은 공간 추론, 작업 오케스트레이션, 영상 진행 판단을 포함한다. 공개 시험은 제한 지원 조건이며, 모델은 환각할 수 있고 물리 로봇은 손상을 일으킬 수 있으므로 안전한 환경을 유지할 책임이 운영자에게 있다고 명시한다.

## 독립 확인

- URL: https://nvdium.com/en/articles/178522196
- 제목: Gemini Robotics ER 2 Hits Public Preview as a High-Level Brain for Arms to Humanoids
- 게시자: Nvdium
- 게시일: 2026-10-28
- 확인 내용: Google Cloud Model Garden 공개 시험과 상위 판단·저수준 제어 분리 구조를 확인하고, 실환경에서 지연과 안전 장치가 유지되는지가 남은 과제라고 설명한다.

## 회차에 사용한 원자 주장

- C1 — Google Cloud는 2026-10-27 Gemini Robotics ER 2를 Model Garden에서 공개 시험으로 제공하기 시작했다. [Google Cloud 발표, Google Cloud 문서, Nvdium]
- C2 — 이 모델은 영상에서 공간과 시간 흐름을 이해하고 작업 진행을 판단하며 여러 단계 계획을 세우는 상위 판단 계층이다. [Google Cloud 발표, Google Cloud 문서, Nvdium]
- C3 — 저수준 동작은 개발자가 연결한 VLA, 이동, 조작 API가 맡고 ER 2가 이를 도구처럼 호출한다. [Google Cloud 발표, Google Cloud 문서, Nvdium]
- C4 — 공개 시험은 정식 출시 전 단계이며 제한된 지원 조건이 적용된다. [Google Cloud 문서]
- C5 — 공식 문서는 생성형 AI가 잘못된 답을 낼 수 있고 실제 로봇이 손상을 일으킬 수 있다고 경고한다. [Google Cloud 문서]
- C6 — 안전한 환경, 사람 고지·동의, 저수준 제어와 비상 정지는 운영자가 별도로 설계하고 검증해야 한다. [Google Cloud 문서]

## 불확실성 잠금

이번 공개는 로봇이 모든 동작과 안전을 스스로 책임지는 완성품 출시가 아니다. 공개 시험 중인 상위 판단 모델이며, 저수준 제어 도구 연결과 물리적 안전 환경은 운영자의 책임이다. 공식 성능 수치는 회사 측 평가이므로 실제 작업별 검증이 필요하다.

## 출처 지문과 중복 확인

- 출처 지문: `https://cloud.google.com/blog/products/ai-machine-learning/gemini-robotics-embodied-reasoning-2-is-now-available-on-google-cloud|2026-10-27`
- 원장 비교: ep-001부터 ep-043까지의 지문과 모두 달라 중복 없음.

## 검토 후 제외한 후보

- Google DeepMind Genie 4: 전날 ep-043에서 같은 2026-10-27 발표를 이미 다뤄 중복이라 제외했다.
- Rime Prism: 2026-10-28의 새 음성 모델 발표지만 회사 발표와 배포 보도 외에 성능을 독립적으로 검증한 자료가 충분하지 않아 제외했다.
- OpenAI·Anthropic의 Exponential Time Hypothesis 반박 주장: 2026-10-26 발표로 48시간 우선 창보다 오래됐고 전문 수학 검증을 네 컷으로 과장 없이 줄이기 어려워 제외했다.
