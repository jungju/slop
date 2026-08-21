# 출처 기록

- 조사 시각: 2026-08-22 KST
- 선정 제목: 강한 보안 AI가 방어 도구에 들어갔다
- 사건일: 2026-08-21
- 선정 이유: 최근 48시간의 공식 AI 발표 가운데 실제 보안 업무의 도구와 접근 방식이 달라진 사례를 선택했다. 독립 정부 평가로 모델 계열의 강한 사이버 능력과 실제 환경에 대한 한계를 함께 확인했다.

## 1차 출처

- URL: https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders
- 제목: Bringing the cybersecurity capabilities of Claude Mythos 5 to more defenders
- 게시자: Anthropic
- 게시일: 2026-08-21

## 독립 확인

- URL: https://www.aisi.gov.uk/blog/our-evaluation-of-claude-mythos-previews-cyber-capabilities
- 제목: Our evaluation of Claude Mythos Preview’s cyber capabilities
- 게시자: UK AI Security Institute
- 게시일: 2026-04-10
- 확인 내용: 이전 Mythos Preview가 통제된 시험에서 다단계 공격과 취약점 악용 능력을 보였음을 확인했다. 동시에 시험 환경에는 능동 방어 도구 등이 없어 실제의 잘 방어된 시스템에 같은 결과가 적용된다고 단정할 수 없다고 밝혔다.

## 회차에 사용한 원자 주장

- C1 — Anthropic은 2026-08-21 Claude Mythos 5의 방어 목적 접근 확대를 발표했다. [1차 출처]
- C2 — Claude Enterprise 고객은 공개 베타인 Claude Security에서 Mythos 5로 자신이 소유한 코드 저장소의 취약점을 검사할 수 있다. [1차 출처]
- C3 — 검사 결과에는 취약점 분류, 신뢰도·심각도, 제안 수정안이 포함된다. [1차 출처]
- C4 — 이 방식은 사용자가 모델을 직접 프롬프트하지 않고 정해진 방어 결과만 받도록 제한한다. [1차 출처]
- C5 — 제안된 패치는 적용 전에 사람이 검토하고 승인해야 한다. [1차 출처]
- C6 — UK AI Security Institute는 이전 Mythos Preview가 통제된 평가에서 약하게 방어된 네트워크의 다단계 공격을 수행할 능력을 확인했다. [독립 확인]
- C7 — 같은 평가는 능동 방어와 실제 보안 도구가 빠진 단순화된 환경이어서 잘 방어된 현실 시스템의 성능은 단정할 수 없다고 명시했다. [독립 확인]

## 불확실성 잠금

3·4컷에서 제한된 출력과 사람 검토를 보여 준다. 이전 모델의 통제된 평가를 이번 제품의 실제 성능 증명으로 확대하지 않으며, AI가 모든 취약점을 찾거나 자동으로 안전한 패치를 적용한다고 표현하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://claude.com/blog/bringing-claude-mythos-5-to-more-defenders|2026-08-21`
- 원장 비교: ep-001 및 ep-002의 지문과 다르므로 중복 없음.

## 검토 후 제외한 후보

- OpenAI 민주적 국가안보 감독 이니셔티브: 2026-08-18 발표로 최근 48시간을 벗어났고 구체적 제품 변화보다 정책 지원 프로그램에 가까워 제외.
- Anthropic 2026년 8월 위험 보고서: 중요한 공개 자료지만 2026-08-14 발표로 최근 7일 경계 밖이며 내부 모델·안전 사건을 네 컷으로 단순화할 때 오해 위험이 커 제외.
- OpenAI Zero Data Retention 확대: 2026-08-19 발표로 최근 7일 안이지만 일반 독자보다 기업 API 고객에게 국한되어 차순위로 제외.
