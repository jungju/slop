# 출처 기록

- 조사 시각: 2026-11-10 KST
- 선정 제목: TPU 두 개가 역할을 나눴다
- 사건일: 2026-11-10
- 선정 이유: 최근 48시간의 AI 발표를 검색해 Google Cloud 공식 발표와 Reuters 독립 보도를 모두 열어 대조했다. 일반 독자가 새 칩 두 종으로 오해하기 쉬운 발표에서 실제로는 기존 8세대 칩을 서로 다른 용도에 맞게 구성한 두 시스템이라는 차이를 설명할 가치가 크다.

## 1차 출처

- URL: https://cloud.google.com/blog/topics/ai-infrastructure/tpu-8tx-and-tpu-8i-max
- 제목: Our newest TPUs: 8tx and 8i Max, built for the agentic era
- 게시자: Google Cloud
- 게시일: 2026-11-10
- 확인 내용: Google은 8세대 TPU 제품군에 TPU 8tx와 TPU 8i Max라는 두 시스템을 추가했다. 회사는 새 칩 설계와 달리 시스템은 기존 칩 둘레의 패키징, 메모리, 네트워크, 보안을 조합한다고 설명했다. 8tx는 8t와 같은 실리콘에 AMD EPYC 호스트와 사용 중 데이터 보호 기능을 결합하고, 8i Max는 8i 칩 두 개를 한 패키지에 결합해 연산량·SRAM·HBM 대역폭을 각각 두 배로 늘렸다고 밝혔다.

## 독립 확인

- URL: https://live.euronext.com/en/financial-news/google-unveils-new-ai-chip-variants-cloud-demand-surges
- 제목: Google unveils new AI chip variants as cloud demand surges
- 게시자: Reuters / Euronext
- 게시일: 2026-11-09
- 확인 내용: Reuters는 Google이 8tx와 8i Max를 공개했으며, 기존 프로세서를 고객 용도에 맞게 재구성한 변형이라고 보도했다. 8tx는 처리 중 민감 정보 보호, 8i Max는 대량 정보 처리를 겨냥한다는 범위를 확인했지만 속도와 성능 수치는 Google 설명에 따른 것이라고 명시했다.

## 회차에 사용한 원자 주장

- C1 — Google은 2026-11-10 8세대 TPU 제품군에 8tx와 8i Max 두 시스템을 추가 발표했다. [Google Cloud]
- C2 — 두 제품은 완전히 새로 설계한 칩이라기보다 기존 8t·8i 칩 주변의 패키징, 메모리, 네트워크, 보안을 용도별로 구성한 시스템이다. [Google Cloud, Reuters]
- C3 — 8tx는 8t와 같은 실리콘에 AMD EPYC 호스트와 하드웨어 수준의 사용 중 데이터 보호를 결합한 보안 추론용 시스템이다. [Google Cloud, Reuters]
- C4 — 8i Max는 8i 칩 두 개를 한 패키지에 결합해 연산량, SRAM, HBM 대역폭을 각각 두 배로 늘린 대용량 문맥용 시스템이다. [Google Cloud, Reuters]
- C5 — Google은 8tx가 8t보다 지연 시간을 최대 두 배 낮춘다고 주장하지만 Reuters도 이 수치를 회사 설명으로만 전했다. [Google Cloud, Reuters]
- C6 — 공개 자료는 실제 고객 환경의 독립 성능 시험을 제시하지 않으므로 발표 수치가 모든 작업에서 재현된다고 단정할 수 없다. [Google Cloud, Reuters에서의 회사 주장 표기에서 편집적 추론]

## 불확실성 잠금

이번 발표는 용도별 시스템 구성을 공개한 것이다. Google의 속도·밀도·효율 수치는 독립 실사용 시험 결과가 아니며, 구체적인 작업과 배포 환경에 따라 달라질 수 있다.

## 출처 지문과 중복 확인

- 출처 지문: `https://cloud.google.com/blog/topics/ai-infrastructure/tpu-8tx-and-tpu-8i-max|2026-11-10`
- 원장 비교: ep-001부터 ep-050까지 동일 지문이 없다. ep-031의 Microsoft AI 칩과는 회사·제품·사건이 다르고, 이번 회차는 Google의 8세대 TPU 시스템 분화에 초점을 둔다.

## 검토 후 제외한 후보

- Anthropic의 가스 발전기 확보 보도: Financial Times·Reuters 보도는 있었지만 이번 조사에서 Anthropic의 1차 발표를 확보하지 못해 제외했다.
- 미국 AI 안전센터의 백악관 보고 논란: AP 보도는 확인했지만 공개된 공식 지시문이나 기관 발표를 1차 출처로 확보하지 못해 제외했다.
- Eric Schmidt의 AI 전망 인터뷰: 새로운 제품·연구·정책 사건보다 개인 전망 중심이라 제외했다.
