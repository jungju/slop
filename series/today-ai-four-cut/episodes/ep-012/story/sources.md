# 출처 기록

- 조사 시각: 2026-09-13 06:03 KST
- 선정 제목: ChatGPT 저장소가 Rust로 갈아탔다
- 사건일: 2026-09-11
- 선정 이유: 최근 48시간의 주요 AI 발표를 검토해 OpenAI가 ChatGPT·API·Codex를 지원하는 온라인 저장 플랫폼 Habitat의 규모와 Python에서 Rust로의 운영 전환 결과를 공개한 기술 보고를 선택했다. OpenAI 원문을 읽고 NEXSIGHT AI WIRE의 독립 보도로 발표 내용과 공개 수치가 OpenAI 공칭값이라는 한계를 교차 확인했다.

## 1차 출처

- URL: https://openai.com/index/scaling-storage-one-billion-users-part-one/
- 제목: Rapidly scaling online storage to serve over 1 billion ChatGPT users
- 게시자: OpenAI
- 게시일: 2026-09-11
- 확인 내용: Habitat가 ChatGPT, API, Codex와 내부 서비스를 위한 온라인 저장 플랫폼이며 초당 7천만 건 이상, 주간 10억 명 이상이 쓰는 제품, 약 40개 지역, 500PB 이상의 데이터를 지원한다고 설명한다. 2026년 2분기에 두 엔지니어가 Codex와 GPT-5.5를 사용해 서비스를 Rust로 다시 썼고, Rust 서비스가 현재 운영 요청의 95%를 처리하며 Python 대비 CPU 효율 6배, 메모리 효율 15배라고 보고한다.

## 독립 확인

- URL: https://ai.nexsight.co/articles/2026/09/12/openai-habitat-storage-scale/
- 제목: OpenAIが10億人規模のストレージ基盤「Habitat」を解説 — PythonからRustへ、毎秒7000万リクエスト・500PB超
- 게시자: NEXSIGHT AI WIRE
- 게시일: 2026-09-12
- 확인 내용: OpenAI의 Habitat 공개 내용을 별도 기사로 정리해 95% 운영 요청과 CPU·메모리 효율 수치를 확인하면서, 모든 성능 수치가 OpenAI 공칭값이고 독립적인 제3자 평가는 제시되지 않았다고 명시한다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-09-11 ChatGPT, API, Codex 등을 지원하는 온라인 저장 플랫폼 Habitat의 확장 과정을 공개했다. [OpenAI]
- C2 — OpenAI는 Habitat가 초당 7천만 건 이상의 요청과 500PB 이상의 데이터를 처리하고 주간 10억 명 이상이 쓰는 제품을 지원한다고 밝혔다. [OpenAI]
- C3 — OpenAI는 2026년 2분기 Habitat 서비스를 Python에서 Rust로 다시 썼으며 Rust 서비스가 현재 운영 요청의 95%를 처리한다고 밝혔다. [OpenAI]
- C4 — OpenAI 내부 측정에서 Rust 서비스는 Python 버전보다 CPU 효율 6배, 메모리 효율 15배였고 평균 및 꼬리 지연도 낮았다고 보고됐다. [OpenAI]
- C5 — NEXSIGHT AI WIRE는 같은 전환과 수치를 보도했지만 해당 값들이 OpenAI 공칭값임을 분명히 했다. [NEXSIGHT AI WIRE]
- C6 — 공개 자료에는 독립된 제3자가 같은 운영 환경에서 재현한 성능 평가가 제시되지 않았다. 따라서 이 수치를 일반적인 Python 대 Rust 성능 결론으로 확대할 수 없다. [OpenAI, NEXSIGHT AI WIRE]

## 불확실성 잠금

95% 운영 요청, CPU 효율 6배, 메모리 효율 15배는 OpenAI가 자체 Habitat 운영 환경에서 측정해 공개한 수치다. NEXSIGHT AI WIRE도 이를 OpenAI 공칭값으로 표시하며 독립 검증이 없음을 지적한다. 이 결과는 ChatGPT 전체 성능이나 모든 Python·Rust 시스템에 그대로 적용되는 비교가 아니다.

## 출처 지문과 중복 확인

- 출처 지문: `https://openai.com/index/scaling-storage-one-billion-users-part-one/|2026-09-11`
- 원장 비교: ep-001부터 ep-011까지의 지문과 모두 달라 중복 없음.

## 검토 후 제외한 후보

- OpenAI IPO 연기 보도: 기업 재무 일정과 경영진 발언이 중심이고 확인 가능한 새 AI 기능·연구 변화가 아니어서 제외했다.
- GPT-5.3-Codex-Spark 종료 안내: 개발자에게는 중요하지만 일반 독자가 이해할 수 있는 독립 확인 자료가 부족해 제외했다.
- Anthropic 위협 보고서 후속 보도: 직전 ep-010의 핵심 출처와 사건을 반복하므로 제외했다.
