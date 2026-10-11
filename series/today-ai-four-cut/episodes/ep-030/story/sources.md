# 출처 기록

- 조사 시각: 2026-10-12 KST
- 선정 제목: 작은 클로드가 더 싸졌다
- 사건일: 2026-10-07
- 선정 이유: 최근 48시간 후보인 Anthropic의 2026-10-09 의도치 않은 모델 행동 보고는 ep-009와 ep-016의 실제 시스템 접근·통제 실패 주제와 겹쳐 제외했다. 최근 7일 보완 창에서 10월 7일 출시된 Claude Haiku 5.5를 선택했다. Anthropic 공식 발표와 TechRepublic의 독립 보도, DataCamp의 독립 실험을 모두 열어 읽었다.

## 1차 출처

- URL: https://www.anthropic.com/claude-haiku-5-5
- 제목: Claude Haiku 5.5
- 게시자: Anthropic
- 게시일: 2026-10-07
- 확인 내용: Anthropic은 Haiku 5.5를 고빈도·비용 민감 작업용으로 출시했다. 10만 토큰 이하 프롬프트의 단가는 입력 100만 토큰당 0.10달러, 출력 0.50달러이고, 이를 넘으면 각각 0.50달러와 2.50달러다. 회사는 복잡한 에이전트 코딩에는 Sonnet 5.5와 Opus 5.5가 더 적합하다고 설명한다.

## 독립 확인

- URL: https://www.techrepublic.com/article/news-anthropic-claude-haiku-5-5-api-pricing/
- 제목: Anthropic Launches Claude Haiku 5.5 With API Prices Starting at $0.10
- 게시자: TechRepublic
- 게시일: 2026-10-09
- 확인 내용: 10만 토큰 이하와 초과 가격 경계를 확인했다. 회사 벤치마크는 Anthropic이 제공한 수치이며, 토큰 단가만으로 작업 총비용을 판단할 수 없고 소비 토큰·재시도·정확도가 비용을 바꾼다고 지적한다.

- URL: https://www.datacamp.com/blog/claude-haiku-5-5
- 제목: Claude Haiku 5.5: Features, Pricing, and a Hands-On Test
- 게시자: DataCamp
- 게시일: 2026-10-07
- 확인 내용: 동일한 24개 송장 분류 입력에서 Haiku 5.5와 4.5가 모두 정답을 냈고 5.5가 더 빠르고 저렴했다고 기록했다. 단일 소규모 실험이므로 일반 성능 증명으로 확대하지 않는다. 새 토크나이저와 10만 토큰 초과 단가가 실제 절감률을 바꿀 수 있다고 설명한다.

## 회차에 사용한 원자 주장

- C1 — Anthropic은 2026-10-07 Claude Haiku 5.5를 출시했다. [Anthropic, TechRepublic, DataCamp]
- C2 — Haiku 5.5는 요약·분류·라우팅·보조 에이전트처럼 빠르고 반복적인 작업을 겨냥한 소형 모델이다. [Anthropic, TechRepublic]
- C3 — 10만 토큰 이하 프롬프트의 입력·출력 토큰 단가는 Haiku 4.5보다 90% 낮다. [Anthropic, TechRepublic]
- C4 — 10만 토큰을 넘으면 입력·출력 단가가 낮은 구간보다 각각 다섯 배가 된다. [Anthropic, TechRepublic, DataCamp]
- C5 — Anthropic은 복잡한 에이전트 코딩에는 Sonnet 5.5와 Opus 5.5가 더 적합하다고 설명한다. [Anthropic]
- C6 — 토큰 단가만으로 실제 작업 총비용을 판단할 수 없으며 입력 길이·출력량·재시도·정확도가 비용에 영향을 준다. [Anthropic, TechRepublic, DataCamp]

## 불확실성 잠금

90% 인하는 10만 토큰 이하 프롬프트의 표면 토큰 단가 비교다. Anthropic은 토크나이저 변화와 긴 입력을 포함한 평균 실행비가 약 75% 낮다고 주장하지만, 독립적인 대규모 비용·품질 재현은 아니다. DataCamp의 24개 송장 실험은 한 가지 좁은 작업의 소규모 결과다. 이번 회차는 Haiku 5.5가 모든 작업에서 더 싸거나 더 정확하다고 주장하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://www.anthropic.com/claude-haiku-5-5|2026-10-07`
- 원장 비교: ep-001부터 ep-029까지의 모든 지문과 다르다. ep-006은 Fable·Mythos 5.1의 접근 경로, ep-020은 Sonnet 5.5의 속도·작업당 비용을 다뤘다. 이번 회차는 Haiku 5.5의 10만 토큰 가격 경계와 좁은 반복 작업 대 복잡한 코딩의 선택 기준이 핵심이다.

## 검토 후 제외한 후보

- Anthropic `Investigating unintended model actions in our evaluations and internal use` (2026-10-09): 최근 48시간의 중요한 보고지만 실제 시스템 접근과 통제 실패라는 핵심이 ep-009 및 ep-016과 중복되어 제외했다.
- OpenAI 안전 연구자 해고 분쟁 (2026-10-09): 독립 보도는 있으나 공식 조사 자료가 없고 당사자 주장과 회사 입장이 다투어지는 고용 분쟁이라 사실 서사로 고정하지 않았다.
- Anthropic 2026 Usage Policy 개정 (2026-10-08): 대부분 기존 규칙의 적용 예시를 명료화한 변경이며 새 독자 효용이 낮아 제외했다.
