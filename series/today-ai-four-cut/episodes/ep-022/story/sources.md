# 출처 기록

- 조사 시각: 2026-10-02 06:02 KST
- 선정 제목: AI의 숨은 풀이를 노렸다
- 사건일: 2026-09-30
- 선정 이유: 최근 48시간의 비중복 AI 발표를 검토한 뒤 OpenAI의 조직적 모델 증류 활동 공개를 선정했다. OpenAI 공식 발표, 공개 보안 연구, The Independent와 The Decoder의 보도를 모두 열어 읽고, 회사 측 관찰·귀속 주장과 독립 연구 결과를 구분했다.

## 1차 출처

- URL: https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/
- 제목: Disrupting a coordinated model-distillation campaign
- 게시자: OpenAI
- 게시일: 2026-09-30
- 확인 내용: OpenAI는 보호된 추론을 추출하려 한 조직적 활동을 발견·차단했다고 밝혔다. 7월 24~25일 관련 패턴의 요청 16,000건이 4,000명 넘는 사용자에게서 발생했고, 전체 조사에서는 15,000명 넘는 사용자 군집의 관련 패턴을 확인했다고 설명했다. 이 수치는 성공 건수가 아니라 시도 건수다.

- URL: https://arxiv.org/abs/2608.09867
- 제목: Stealing Reasoning Traces from Proprietary LLM APIs
- 게시자: arXiv / 연구 저자 8인
- 게시일: 2026-08-10
- 확인 내용: 암호화된 추론 블록이 세션·사용자·모델 사이에서 호환되는 구조를 악용해 숨은 추론을 평문으로 끌어내는 공격 경로를 OpenAI·Anthropic·Google에서 실증하고 완화책을 제안했다.

## 독립 확인

- URL: https://www.independent.co.uk/tech/security/chatgpt-openai-moonshot-distillation-b3059668.html
- 제목: OpenAI reveals huge ‘co-ordinated campaign’ to attack ChatGPT
- 게시자: The Independent
- 게시일: 2026-10-01
- 확인 내용: OpenAI 발표의 규모·차단 시점·부분 귀속 주장을 보도하고, 모델 증류는 정당한 연구 기법으로도 쓰이지만 회사 약관을 위반한 대규모 추출은 별개의 문제라고 구분했다.

- URL: https://the-decoder.com/openai-says-it-stopped-a-campaign-to-steal-its-models-reasoning-but-the-trick-still-worked-on-azure/
- 제목: OpenAI says it stopped a campaign to steal its models' reasoning, but the trick still worked on Azure
- 게시자: The Decoder
- 게시일: 2026-10-01
- 확인 내용: 공식 발표와 연구진의 후속 감사를 대조해, 1차 API에서 막힌 경로가 제3자 클라우드에서 늦게까지 남았다는 연구진의 측정과 서비스별 방어 동기화 필요성을 설명했다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-09-30 보호된 추론을 노린 조직적 모델 증류 활동을 공개했다. [OpenAI, The Independent]
- C2 — 7월 24~25일 관련 추출 패턴 요청 16,000건이 4,000명 넘는 사용자에게서 관찰됐다. 이 수치는 성공이 아니라 시도다. [OpenAI]
- C3 — 추가 조사에서 15,000명 넘는 사용자 군집의 관련 패턴을 확인했고 7월 28일까지 차단했다고 OpenAI는 밝혔다. [OpenAI, The Independent]
- C4 — 운영자들은 암호를 깨거나 DB·저장된 사용자 대화에 직접 침입한 것이 아니라 모델 상호작용을 조작해 숨은 추론이 보이게 하려 했다. [OpenAI]
- C5 — OpenAI는 계정 제한, 가입·인프라 통제, 출력 감시, 추론 재생 경로 차단을 적용했다고 밝혔다. [OpenAI]
- C6 — 연구진과 The Decoder는 1차 API와 제3자 클라우드의 방어 적용 시점이 달랐다고 보고해 서비스 전반의 동기화된 방어가 필요함을 보여 준다. [연구진 후속 감사, The Decoder]
- C7 — OpenAI는 모든 운영자가 한 주체였는지 불분명하다고 했고, 핵심 집단 일부만 Moonshot AI 관계자에게 귀속했다. [OpenAI, The Independent]

## 불확실성 잠금

16,000건과 15,000명 넘는 사용자 군집은 OpenAI가 관찰한 요청·패턴 규모이며 성공한 추론 탈취 건수가 아니다. 암호화 파괴나 데이터베이스 침해로 표현하지 않는다. Moonshot AI 관련 귀속은 OpenAI의 평가이며 전체 운영자를 한 주체로 단정하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/|2026-09-30`
- 원장 비교: ep-001부터 ep-021까지의 모든 지문과 다르다. ep-016은 연구 에이전트의 사진 전송 사건, ep-021은 Gemini 4 제한 공개를 다뤘으며 이번 회차의 핵심인 대규모 적대적 증류 시도와 다중 서비스 방어는 중복되지 않는다.

## 검토 후 제외한 후보

- 2026-10-01 Anthropic·Barclays 협업 발표: 기업 도입 발표이지만 구체적인 검증 결과보다 도입 계획 중심이라 제외했다.
- 2026-09-30 OpenAI Dots 공개: 중요한 제품 발표지만 ep-008의 개인 AI 에이전트 주제와 가까워 중복 위험이 있어 제외했다.
- 2026-09-29 GPT-6.1 Astra 공개 연기: 보도는 확인했으나 이번 후보보다 발표 시점이 이르고 회사 원문보다 보도 의존도가 높아 제외했다.
