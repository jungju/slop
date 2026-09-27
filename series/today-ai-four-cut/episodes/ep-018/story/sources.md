# 출처 기록

- 조사 시각: 2026-09-28 KST
- 선정 제목: AI가 가구 조립 실수를 80% 찾았다
- 사건일: 2026-09-23
- 선정 이유: 최근 48시간의 주요 AI 발표를 먼저 검토했지만 충분한 1차 자료와 독립 확인을 갖춘 비중복 사건이 없어 7일 보완 창을 적용했다. 9월 23일 공개된 Furniture Assembly Benchmark의 보고서와 방법론, 9월 23일 및 26일의 독립 보도를 모두 열어 읽고, 최고 80% 점수와 60장·가구 3종·사람 기준 부재·언어 모델 채점이라는 범위를 함께 보존했다.

## 1차 출처 1

- URL: https://samaritan-research.org/publications/furniture-assembly
- 제목: AI has improved significantly at reasoning about IKEA furniture assembly
- 게시자: Samaritan Research (formerly Epoch AI benchmark publication)
- 게시일: 2026-09-23
- 확인 내용: 연구진은 가구 3종을 직접 조립하며 촬영한 60장 사진에 의도적인 오류를 넣고, 모델에 조립 설명서·확대 도구·Python 인터프리터를 제공했다. 초기 결과에서 GPT-6 Astra가 80%로 가장 높았고 사진당 중앙값 3분이었다. 연구진은 사람 성능을 측정하지 않았고 다른 물리 작업으로 일반화되는지는 불명확하다고 밝혔다.

## 1차 출처 2

- URL: https://epoch.ai/benchmarks/furniture-assembly
- 제목: Furniture Assembly Benchmark
- 게시자: Epoch AI
- 게시일: 2026-09-23
- 확인 내용: 각 항목은 최대 80단계의 에이전트 샌드박스에서 실행됐다. 틀린 조립은 모델이 오류 단계와 내용을 모두 찾아야 하며, 내용 설명은 GPT-5.6 Sol이 관대하게 채점했다. 공개 점수는 60장에 대한 정확도다.

## 독립 확인 1

- URL: https://theamateur.co.uk/research/ai/2026-09-23/furniture/
- 제목: Epoch AI tests whether models can spot mistakes in IKEA assembly
- 게시자: The Amateur Limited
- 게시일: 2026-09-23
- 확인 내용: 60장·가구 3종의 구성, Astra 80%, Fable 5.1 70%, Opus 5 61%와 3분 중앙값을 확인했다. 이 시험은 로봇이 가구를 조립한 것이 아니라 사진과 설명서를 보고 오류를 판단한 것이라고 구분했다.

## 독립 확인 2

- URL: https://www.tomsguide.fr/chatgpt-claude-gemini-lequel-repere-le-mieux-les-erreurs-de-montage-ikea/
- 제목: ChatGPT, Claude, Gemini : lequel repère le mieux les erreurs de montage IKEA ?
- 게시자: Tom's Guide France
- 게시일: 2026-09-26
- 확인 내용: 60장 사진과 가구 3종에서 Astra가 80%를 기록했다는 결과를 확인했다. 정확도와 응답 시간이 여전히 실시간 사용의 한계이며, 다른 물리 작업으로의 일반화는 알 수 없다는 연구진의 주의를 함께 전했다.

## 회차에 사용한 원자 주장

- C1 — Epoch AI 연구진은 2026-09-23 가구 조립 사진과 설명서를 비교하는 Furniture Assembly Benchmark를 공개했다. [Samaritan Research, Epoch AI, The Amateur]
- C2 — 시험은 가구 3종을 조립하며 촬영한 사진 60장으로 구성되고, 일부 사진에는 의도적인 조립 오류가 있다. [Samaritan Research, Epoch AI, The Amateur, Tom's Guide France]
- C3 — 초기 공개 결과에서 GPT-6 Astra가 80%로 가장 높은 점수를 기록했다. [Samaritan Research, The Amateur, Tom's Guide France]
- C4 — 모델은 사진, 공식 설명서, 확대 도구와 Python 인터프리터를 받아 오류 단계와 내용을 찾았다. [Samaritan Research, Epoch AI, The Amateur]
- C5 — 이 시험은 로봇의 실제 조립 능력이나 현장 수리 성능을 측정한 것이 아니다. [Samaritan Research, The Amateur]
- C6 — 표본은 가구 3종·사진 60장뿐이고 사람 기준 점수도 없어 다른 물리 작업으로의 일반화는 확인되지 않았다. [Samaritan Research, Tom's Guide France]

## 불확실성 잠금

80%는 특정 사진·설명서·도구·채점 조건에서 나온 벤치마크 정확도다. 실제 로봇이 가구를 조립한 결과가 아니며, 자동차 수리나 가전 정비 같은 현장에서 같은 정확도를 낸다는 증거도 아니다. 사람 기준 점수가 없고 설명의 일부는 별도 언어 모델이 관대하게 채점했다.

## 출처 지문과 중복 확인

- 출처 지문: `https://epoch.ai/benchmarks/furniture-assembly|2026-09-23`
- 원장 비교: ep-001부터 ep-017까지의 모든 지문과 다르다. ep-003·ep-007·ep-014가 모델의 업무·연구 능력을 다뤘지만 이번 회차는 사진과 설명서를 연결하는 좁은 공간 추론 시험과 실제 현장 일반화 한계가 핵심이라 중복되지 않는다.

## 검토 후 제외한 후보

- 2026-09-25 OpenAI 연구 에이전트 사진 유출 후속 보도: ep-016과 같은 사건·출처 지문을 반복하므로 제외했다.
- 2026-09-23 Anthropic 효소 체계 발견 후속 보도: ep-017의 핵심 사건과 동일해 제외했다.
- 2026-09-22 GPT-6 Sol·Luna 공개: 가격·모델 계층 주제가 ep-004 및 ep-006과 가깝고 이번 회차보다 중복 위험이 컸다.
- 2026-09-22 Claude Opus 5.5 공개: 비용·성능 중심 제품 발표로 기존 모델 출시 회차들과 유사해 제외했다.
