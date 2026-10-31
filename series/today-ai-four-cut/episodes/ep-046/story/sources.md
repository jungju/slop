# 출처 기록

- 조사 시각: 2026-11-01 KST
- 선정 제목: 생명과학 연구 AI가 제한 공개됐다
- 사건일: 2026-10-30
- 선정 이유: 최근 48시간의 새 AI 발표를 비교해 OpenAI의 GPT-6 Rosalind Research 제한 배포를 선정했다. 공식 출시 기록과 시스템 카드를 모두 열어 읽고, 독립 기술 매체가 일반 API 공개가 아니라 승인된 조직의 내부 연구용 배포라는 범위를 확인한 자료도 함께 검토했다.

## 1차 출처

- URL: https://help.openai.com/en/articles/9624314-model-release-notes
- 제목: Model Release Notes — GPT-6 Rosalind Research
- 게시자: OpenAI
- 게시일: 2026-10-30
- 확인 내용: GPT-6 Rosalind Research가 다단계 생명과학 연구용으로 승인된 소수 Research 고객에게 Work, Codex, API를 통해 제한 배포되며 Chat 탭에는 제공되지 않는다. 조직과 사용자 모두 Research 승인이 필요하고 Enterprise에서는 2주 Admin Preview 동안 기본 비활성 상태다.

- URL: https://deploymentsafety.openai.com/gpt-rosalind-6
- 제목: GPT-Rosalind-6 System Card Addendum
- 게시자: OpenAI Deployment Safety Hub
- 게시일: 2026-10-30
- 확인 내용: 모델은 생물·화학 영역에서 High 역량으로 취급되며 Critical 기준에는 못 미쳤다. 승인 고객, 강한 접근 통제, 모니터링, 사람 검토를 요구하고, 공개된 평가는 특정 역량을 다룰 뿐 전체 생물학적 위해 능력을 완전히 시험한 것은 아니라고 설명한다.

## 독립 확인

- URL: https://newruntime.com/posts/openai-releases-gpt-6-rosalind-for-biological-reasoning-325c40/
- 제목: OpenAI releases GPT-6 Rosalind for biological reasoning to trusted-access life sciences organizations
- 게시자: New Runtime
- 게시일: 2026-10-31
- 확인 내용: 10월 30일 출시와 승인 조직의 내부 연구용 제한 접근을 확인한다. 일반 API 계정이 바로 쓸 수 있다는 뜻이 아니며, 구체적인 외부 성과와 평가 세부가 아직 충분히 공개되지 않았다고 짚는다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-10-30 생명과학 연구용 GPT-6 Rosalind Research 배포를 발표했다. [OpenAI 출시 기록, New Runtime]
- C2 — 배포 대상은 Rosalind Research 승인을 받은 제한된 조직과 승인 사용자다. [OpenAI 출시 기록, New Runtime]
- C3 — Work와 Codex, 별도 승인된 API에서 제공되며 일반 Chat 탭에는 제공되지 않는다. [OpenAI 출시 기록]
- C4 — 모델은 다단계 생명과학 연구와 과학 도구 사용을 지원하도록 제시됐다. [OpenAI 출시 기록, 시스템 카드]
- C5 — OpenAI는 생물·화학 영역을 High 역량으로 분류했지만 Critical 평가 기준은 충족하지 않았다고 밝혔다. [OpenAI 시스템 카드]
- C6 — 승인 고객은 접근 통제와 사람 검토를 적용해야 하며, 공개 평가는 실제 연구 성과나 전체 위해 가능성을 완전히 입증하지 않는다. [OpenAI 시스템 카드, New Runtime]

## 불확실성 잠금

역량 수치와 안전 분류는 OpenAI의 자체 평가다. 제한 배포와 사람 검토 요구는 안전 조치이지 실제 연구 성과 또는 모든 위험이 검증됐다는 뜻이 아니다. 독립 보도도 출시 범위를 확인하지만 별도의 성능 재현 결과를 제공하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://help.openai.com/en/articles/9624314-model-release-notes|2026-10-30`
- 원장 비교: ep-001부터 ep-045까지의 지문과 모두 달라 중복 없음.

## 검토 후 제외한 후보

- Google DeepMind Gemini 4 Carbon: 2026-10-28 발표로 최근 7일 안이지만 이번 후보보다 오래됐고, 직전 실행에서 초안 후보로 이미 검토했다.
- Mistral Large 4 공개 가중치: 2026-10-29의 중요한 발표지만 ep-033의 공개 가중치 주제와 겹쳐 제외했다.
- 생물 뉴런 기반 영상 모델 Mischief 1: 2026-10-30 발표지만 속도와 비용 주장을 독립 평가로 확인할 수 없어 제외했다.
