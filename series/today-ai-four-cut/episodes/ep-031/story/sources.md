# 출처 기록

- 조사 시각: 2026-10-13 KST
- 선정 제목: 마이크로소프트가 AI 칩을 공개했다
- 사건일: 2026-10-12
- 선정 이유: 최근 48시간 창에서 Microsoft가 공개한 Maia 300을 선택했다. Microsoft 공식 발표와 SiliconANGLE, The Next Web의 독립 보도를 모두 열어 읽었다. 직전 회차들과 겹치지 않는 추론 하드웨어·전력 효율 주제이며, 아직 배포 전인 회사 예상치라는 핵심 한계를 대사에 포함했다.

## 1차 출처

- URL: https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/
- 제목: Microsoft to expand Azure Maia system to multi-gigawatt deployments
- 게시자: Microsoft
- 게시일: 2026-10-12
- 확인 내용: Microsoft는 추론 중심 Maia 300을 공개하고 2027년 생산 배포를 시작할 계획이라고 밝혔다. 회사는 선도 GPU 시스템보다 메가와트당 토큰이 40% 많고, 96개 가속기 랙이 Maia 200 대비 최대 7배 토큰 처리량을 낼 것으로 예상한다.

## 독립 확인

- URL: https://siliconangle.com/2026/10/12/microsoft-debuts-multichiplet-maia-300-inference-accelerator/
- 제목: Microsoft debuts multichiplet Maia 300 inference accelerator
- 게시자: SiliconANGLE
- 게시일: 2026-10-12
- 확인 내용: 추론 최적화, 4개 연산 칩렛, 8개 HBM4 모듈, 96개 가속기 랙과 2027년 배포 계획을 확인했다. 40%와 7배는 Microsoft의 예상치로 보도한다.

- URL: https://thenextweb.com/news/microsoft-maia-300-ai-chip-2027
- 제목: Microsoft says Maia 300 chip will run its AI services from 2027
- 게시자: The Next Web
- 게시일: 2026-10-12
- 확인 내용: Microsoft의 2027년 배포 계획과 40% 메가와트당 토큰 주장을 확인했다. Microsoft가 비교한 GPU 시스템을 밝히지 않았다고 지적한다.

## 회차에 사용한 원자 주장

- C1 — Microsoft는 2026-10-12 자체 AI 가속기 Maia 300을 공개했다. [Microsoft, SiliconANGLE, The Next Web]
- C2 — Maia 300은 학습보다 이미 학습한 모델의 답을 만드는 추론에 초점을 두며, 긴 문맥·대화·다단계 에이전트 작업을 겨냥한다. [Microsoft, The Next Web]
- C3 — Microsoft는 Maia 300이 선도 GPU 시스템보다 메가와트당 토큰을 40% 더 낼 것으로 예상한다. [Microsoft, SiliconANGLE, The Next Web]
- C4 — 96개 가속기 랙의 토큰 처리량이 Maia 200 대비 최대 7배라는 수치도 Microsoft가 제시한 예상치다. [Microsoft, SiliconANGLE]
- C5 — 생산 배포는 2027년 시작 예정이며, 40% 비교에 쓰인 GPU 시스템과 세부 작업 조건은 공개되지 않았다. [Microsoft, The Next Web]
- C6 — Maia 200은 이미 Microsoft Copilot의 일부 실제 작업에 쓰이고 있지만 Maia 300의 실제 대규모 배포 성능은 아직 확인되지 않았다. [Microsoft, The Next Web]

## 불확실성 잠금

40%와 최대 7배는 Microsoft가 공개한 설계 목표·예상치다. Maia 300은 아직 2027년 생산 배포 전이며, 40% 비교의 GPU 이름과 작업 조건, 독립적인 전력·처리량 측정은 공개되지 않았다. 이번 회차는 Maia 300이 모든 GPU보다 실제로 40% 효율적이라고 단정하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://blogs.microsoft.com/blog/2026/10/12/microsoft-to-expand-azure-maia-system-to-multi-gigawatt-deployments/|2026-10-12`
- 원장 비교: ep-001부터 ep-030까지 모든 지문과 다르다. 이전 회차에는 Microsoft 자체 추론 칩이나 데이터센터 전력 효율을 중심으로 한 회차가 없다.

## 검토 후 제외한 후보

- Microsoft-Decision-1 (2026-10-09): 고정 선택지와 확률을 반환하는 결정 모델로, ep-029의 OpenAI Decisions API와 핵심 설명이 중복되어 제외했다.
- Anthropic의 의도치 않은 모델 행동 보고 후속 보도 (2026-10-10~12): ep-009·ep-016과 실제 시스템 접근·통제 실패 주제가 겹치고, 새 1차 발표가 아닌 후속 정리여서 제외했다.
- AlphaProof Nexus의 Science 게재 보도 (2026-10-08): 연구 결과 자체는 2026년 5월 사전 공개되어 이번 48시간 창의 새 결과로 보기 어려워 우선순위를 낮췄다.
