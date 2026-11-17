# 출처 기록

- 조사 시각: 2026-11-18 KST
- 선정 제목: GPT-6.2가 두 모델로 나왔다
- 사건일: 2026-11-17
- 선정 이유: 최근 48시간의 AI 발표를 우선 검색해 OpenAI 공식 발표, 시스템 카드, R&D World의 독립 지표 해설을 모두 열어 확인했다. 복잡한 전문 작업용 Astra와 일상 작업용 Sol의 동시 공개는 일반 독자의 모델 선택에 직접 영향을 주며, 회사 성능표와 실제 업무 검증의 차이를 함께 설명할 수 있어 선정했다.

## 1차 출처

- URL: https://openai.com/index/introducing-gpt-6-2-astra-sol/
- 제목: Introducing GPT-6.2 Astra and Sol
- 게시자: OpenAI
- 게시일: 2026-11-17
- 확인 내용: OpenAI는 GPT-6.2 Astra를 복잡한 전문 작업용, GPT-6.2 Sol을 일상 작업용 모델로 소개했다. 두 모델은 Plus, Pro, Enterprise, Edu의 ChatGPT Work와 Codex 및 API에서 제공된다. Astra의 API 입력·출력 단가는 GPT-6 Astra보다 20% 낮고 Sol은 GPT-6.1 Sol의 단가를 유지한다.

## 시스템 카드

- URL: https://deploymentsafety.openai.com/gpt-6-2-astra-sol/gpt-6-2-astra-sol.pdf
- 제목: GPT-6.2 Astra and Sol system card
- 게시자: OpenAI
- 게시일: 2026-11-17
- 확인 내용: 공개 평가와 내부 평가의 조건·한계를 기록하며, GPT-6.2 Astra와 Sol이 사이버보안 능력에서 Critical 임계값에 해당한다고 평가한다. 실제 배포에는 별도 보호조치가 적용되며 평가 결과가 모든 환경의 성능을 보장하지는 않는다.

## 독립 확인

- URL: https://www.rdworldonline.com/openais-gpt-6-2-astra-trails-claude-fable-5-2-by-three-points-on-an-independent-ai-index-at-a-fraction-of-the-cost-per-task/
- 제목: GPT-6.2 Astra trails Fable 5.2 on AI index at lower cost
- 게시자: R&D World
- 게시일: 2026-11-17
- 확인 내용: OpenAI의 과학·코딩 성능 주장을 소개하면서, 독립 AI 지표에서는 Astra가 Fable 5.2보다 점수는 낮지만 과제당 비용은 훨씬 낮았다고 정리한다. 평가 과제에 따라 성능과 비용의 상대 순위가 달라질 수 있음을 보여 준다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-11-17 GPT-6.2 Astra와 GPT-6.2 Sol을 공개했다. [OpenAI 발표, R&D World]
- C2 — OpenAI는 Astra를 복잡한 전문 작업용, Sol을 일상 작업용으로 구분한다. [OpenAI 발표]
- C3 — 두 모델은 ChatGPT Work, Codex, API에서 제공되며 요금제·관리자 설정에 따라 접근 범위가 다르다. [OpenAI 발표]
- C4 — Astra의 API 입력·출력 단가는 GPT-6 Astra보다 20% 낮고, Sol은 GPT-6.1 Sol의 단가를 유지한다. [OpenAI 발표]
- C5 — OpenAI가 공개한 여러 성능·비용 수치는 특정 벤치마크와 추론 설정에서 측정된 회사 발표값이다. [OpenAI 발표, 시스템 카드]
- C6 — 독립 지표에서는 특정 비교 모델보다 점수는 낮고 비용은 낮게 나타나, 과제에 따라 선택 결과가 달라질 수 있다. [R&D World]
- C7 — 실제 업무 품질과 총비용은 사용자의 자료·도구·추론 설정으로 직접 시험해야 한다는 것은 평가 조건 차이에 근거한 편집적 추론이다. [OpenAI 발표, 시스템 카드, R&D World]

## 불확실성 잠금

출시와 가격은 확인된 사실이지만 성능 우위는 과제·평가 조건·추론 설정에 따라 달라진다. 회사 벤치마크를 실제 업무 전반의 보장으로 표현하지 않고, 같은 조건의 직접 시험 필요성을 결론에 넣는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://openai.com/index/introducing-gpt-6-2-astra-sol/|2026-11-17`
- 원장 비교: ep-001부터 ep-056까지의 지문과 달라 중복 없음.

## 검토 후 제외한 후보

- 2026-11-17 Microsoft 특화 AI 모델 6종 발표: 독립 보도는 확인했으나 공식 1차 발표의 모델별 공개 범위와 검증 자료를 이번 회차 안에서 충분히 고정하기 어려워 제외했다.
- 2026-11-16 NVIDIA Nemotron for Science 발표: 과학용 모델·데이터·도구가 한 발표에 함께 묶여 있어 네 컷에서 핵심 변화와 검증 한계를 간결하게 분리하기 어려워 제외했다.
- 2026-11-17 OpenAI의 NATO 사이버 방어 협력: 중요한 소식이지만 군사·보안 맥락과 접근 범위를 네 줄로 충분히 설명하기 어려워 제외했다.
