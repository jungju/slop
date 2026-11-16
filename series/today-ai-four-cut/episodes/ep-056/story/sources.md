# 출처 기록

- 최초 조사 시각: 2026-11-16 KST
- 재검증 시각: 2026-11-17 KST
- 선정 제목: AI 강수 지도가 공개됐다
- 사건일: 2026-11-13
- 선정 이유: 최근 48시간의 AI 발표를 우선 검색했으나 중복이 아니면서 충분히 검증 가능한 중대 발표를 찾지 못해 최근 7일로 확장했다. Google DeepMind 공식 발표와 PARDIG 논문, CASRAI의 독립 확인을 모두 열어 확인했다. AI 날씨 모델의 관측 기반 자료가 공개된 실용적 변화와 약 10킬로미터 격자·용도별 검증 필요성을 함께 설명할 수 있어 선정했다.
- 재검증: 2026-11-17 KST에 실시간 검색을 다시 수행하고 아래 세 URL을 모두 다시 열었다. 발표일, 공개 자료 범위, 0.1도·15분 해상도, 평가 범위와 CC BY 4.0 공개 사실이 유지됨을 확인했다. 이미 출처와 대사가 잠긴 `ep-056` 복구 초안을 이어가며 새 회차를 만들지 않았다.

## 1차 출처

- URL: https://deepmind.google/blog/opening-the-datasets-behind-our-ai-weather-models/
- 제목: Opening the datasets behind our AI weather models
- 게시자: Google DeepMind
- 게시일: 2026-11-13
- 확인 내용: Google DeepMind와 Google Research는 WeatherNext 3에 쓰인 SatWeave와 PARDIG의 과거 자료와 실시간 피드를 공개했다. SatWeave는 여러 정지궤도 위성 관측을 17개 채널의 전지구 모자이크로 묶고, PARDIG는 위성·대기 자료로 약 10킬로미터 격자의 강수를 15분 간격으로 추정한다.

## 연구 논문

- URL: https://arxiv.org/abs/2611.13941
- 제목: PARDIG: Global Precipitation Estimates Learned from Sparse Satellite Observations
- 게시자: arXiv
- 게시일: 2026-11-10
- 확인 내용: PARDIG는 0.1도 공간 해상도와 15분 시간 해상도의 강수장을 만들며, 미국·유럽·일본의 레이더망과 전 세계 3만6000개가 넘는 지상 관측소를 대상으로 평가됐다. 논문은 역사·근실시간 자료가 CC BY 4.0으로 공개됐다고 기록한다.

## 독립 확인

- URL: https://casrai.org/news/deepmind-open-ai-weather-model-datasets-2026
- 제목: DeepMind opens datasets behind its AI weather forecasting models
- 게시자: CASRAI
- 게시일: 2026-11-14
- 확인 내용: CASRAI는 두 자료의 공개, CC BY 4.0 조건, SatWeave의 관측 통합과 PARDIG의 약 10킬로미터·15분 격자, 연구 활용 범위를 독립적으로 정리했다.

## 회차에 사용한 원자 주장

- C1 — Google DeepMind와 Google Research는 2026-11-13 SatWeave와 PARDIG의 과거 자료와 실시간 피드를 공개했다. [Google DeepMind, CASRAI]
- C2 — SatWeave는 여러 정지궤도 기상위성 관측을 하나의 전지구 모자이크로 통합한다. [Google DeepMind, CASRAI]
- C3 — PARDIG는 위성 영상과 대기 자료를 입력으로 약 10킬로미터 격자의 강수를 15분 간격으로 추정한다. [Google DeepMind, arXiv, CASRAI]
- C4 — PARDIG 논문의 평가는 미국·유럽·일본의 레이더망과 전 세계 3만6000개가 넘는 지상 관측소를 포함하지만, 특정 동네의 홍수 예보 성능을 직접 검증한 것은 아니다. [arXiv]
- C5 — 약 10킬로미터 격자의 공개 강수 자료를 동네 단위 홍수 예보에 적용하려면 더 촘촘한 지역 관측과 용도별 검증이 필요하다는 것은 자료 해상도와 평가 범위에 근거한 편집적 추론이다. [Google DeepMind, arXiv]
- C6 — 역사·근실시간 자료는 CC BY 4.0 조건으로 공개됐다. [arXiv, CASRAI]

## 불확실성 잠금

공개된 것은 위성 관측과 AI 강수 추정 데이터이며, 특정 지역의 홍수 예보 정확도나 실제 운영 성과가 자동으로 보장되는 것은 아니다. 약 10킬로미터 격자와 공개 평가 범위를 명시하고, 지역별 검증 필요성을 편집적 추론으로 구분한다.

## 출처 지문과 중복 확인

- 출처 지문: `https://deepmind.google/blog/opening-the-datasets-behind-our-ai-weather-models/|2026-11-13`
- 원장 비교: ep-001부터 ep-055까지의 지문과 달라 중복 없음.

## 검토 후 제외한 후보

- 2026-11-15 Amazon World Product Graph 보도: 내부 문서 기반 보도로 공개된 1차 발표가 없어 제외했다.
- 2026-11-15 의료 영상의 심장 위험 신호 연구: 일반 독자에게 유용하지만 의료 고위험 주제이고 원 논문의 임상 한계를 네 컷에서 충분히 설명하기 어려워 제외했다.
- 2026-11-14 Google Antigravity /teamwork 성과 묶음: 여러 수학·소프트웨어 성과가 한 발표에 섞여 있어 독립 재현 범위를 간결하게 고정하기 어려워 제외했다.
