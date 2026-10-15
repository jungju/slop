# 출처 기록

- 조사 시각: 2026-10-16 KST
- 선정 제목: 초대형 AI 모델의 가중치가 열렸다
- 사건일: 2026-10-15
- 선정 이유: 최근 48시간 창에서 StepFun이 Step 5 Preview의 실제 모델 가중치와 배포 자료를 공개한 사건을 선택했다. 공식 GitHub 저장소, Hugging Face의 실제 체크포인트 파일, 공식 기술 블로그, Pandaily의 독립 보도를 모두 열어 읽었다. 공개 가중치의 실질적 의미와 1.21TB BF16 저장소·다중 GPU 배포 문턱을 함께 설명할 수 있고 기존 원장과 지문 및 핵심 주제가 겹치지 않는다.

## 1차 출처

- URL: https://github.com/stepfun-ai/Step-5-Preview
- 제목: Step-5-Preview: StepFun's flagship model for agentic work
- 게시자: StepFun
- 게시일: 2026-10-15
- 확인 내용: Step 5 Preview의 모델 코드·설정·배포 지침과 가중치 저장소 연결이 공개됐다. 공식 문서는 FP8 배포에 B300 GPU 4장, BF16 배포에 B300 GPU 8장 또는 H200 GPU 16장을 사용하는 예시를 제공하며, 100만 토큰 문맥 길이가 실제 메모리 수용을 보장하지 않는다고 명시한다. 모델은 StepFun Model License 1.0을 사용하며 추가 귀속 및 상업 조건이 있다.

- URL: https://huggingface.co/stepfun-ai/Step-5-Preview-BF16/tree/main
- 제목: stepfun-ai/Step-5-Preview-BF16
- 게시자: Hugging Face / StepFun
- 게시일: 2026-10-15
- 확인 내용: BF16 체크포인트 저장소가 공개 상태이며 총 표시 용량은 1.21TB다. 여러 safetensors 샤드와 설정·라이선스 파일을 실제로 확인했다.

- URL: https://platform.stepfun.ai/blog/inside-step-5-preview
- 제목: Inside Step 5 Preview: Architecture and Training for Agentic Work
- 게시자: StepFun
- 게시일: 2026-10-15
- 확인 내용: StepFun은 모델이 92개 Transformer 블록, 희소 어텐션 구조와 에이전트 기반 데이터 합성 절차를 사용한다고 설명한다. 데이터 합성이 쉬운·반복적인 과제로 치우칠 수 있어 난도와 다양성을 명시적으로 제어했다고 밝힌다.

## 독립 확인

- URL: https://pandaily.com/stepfun-step-5-preview-open-weights-technical-blog-92-layer-sparse-gqa
- 제목: StepFun Releases Open Weights for Step 5 Preview, Publishes Technical Blog on Its Architecture
- 게시자: Pandaily
- 게시일: 2026-10-15
- 확인 내용: BF16·FP8 가중치가 Hugging Face와 ModelScope에 공개됐고 기술 블로그와 개발 도구가 함께 나왔음을 확인한다. 600B 전체·27B 활성 파라미터, 100만 토큰 문맥과 장기 에이전트 작업 지향 설명을 공식 자료와 대조해 보도한다.

## 회차에 사용한 원자 주장

- C1 — StepFun은 2026-10-15 Step 5 Preview의 모델 가중치와 배포 자료를 공개했다. [StepFun GitHub, Hugging Face, Pandaily]
- C2 — 공개된 저장소에는 모델 설정, 코드, 라이선스와 실제 체크포인트 샤드가 있어 사용자가 가중치를 내려받아 자체 배포를 검토할 수 있다. [StepFun GitHub, Hugging Face]
- C3 — BF16 체크포인트 저장소의 표시 용량은 1.21TB다. [Hugging Face]
- C4 — 공식 배포 예시는 FP8에 B300 GPU 4장, BF16에 B300 GPU 8장 또는 H200 GPU 16장을 사용한다. [StepFun GitHub]
- C5 — 100만 토큰 문맥 한도와 27B 활성 파라미터 수는 일반 PC에서의 쉬운 실행이나 장기 작업 신뢰성을 보장하지 않는다. [StepFun GitHub, Pandaily]
- C6 — 회사 성능표와 기술 설명은 공개됐지만 모든 실제 업무에서의 독립 재현 결과를 뜻하지 않는다. [StepFun model page, Pandaily]

## 불확실성 잠금

가중치 공개는 직접 검증·배포할 수 있는 선택지를 늘리지만, 쉬운 설치나 저사양 실행을 뜻하지 않는다. BF16 저장소 규모와 공식 다중 GPU 예시를 근거로 개인 PC에서 바로 실행할 수 있다고 말하지 않으며, 회사 성능표도 독립 재현 결과로 다루지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://github.com/stepfun-ai/Step-5-Preview|2026-10-15`
- 원장 비교: ep-001부터 ep-032까지 모든 지문과 다르다. 이전 회차에는 공개 모델 가중치의 실제 저장 용량과 자체 배포 하드웨어 문턱을 중심으로 한 회차가 없다.

## 검토 후 제외한 후보

- Anthropic의 독립 평가자 접근 시작 발표: ep-013이 Anthropic의 외부 평가자 도입 약속과 이행·검증 한계를 이미 다뤄 핵심 주제가 중복된다.
- Artificial Analysis 로봇 벤치마크: 흥미로운 새 시험이지만 주요 수치의 독립 재현과 상세 프로토콜 확인이 이번 가중치 공개보다 약해 제외했다.
- ICE의 AI 감시 도구 정보요청: 계약이나 배포가 확정되지 않은 조달 사전 단계여서 실제 공개 산출물이 있는 후보보다 우선순위가 낮다.
