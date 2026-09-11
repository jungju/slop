# 출처 기록

- 조사 시각: 2026-09-12 06:05 KST
- 선정 제목: AI 작업 관리가 API로 들어왔다
- 사건일: 2026-09-10
- 선정 이유: 최근 48시간의 주요 AI 발표를 검토해 OpenAI의 Agents API 공개 베타 출시를 선택했다. OpenAI 원문을 확인하고 Cloudflare와 Vercel의 같은 날 실행 환경 통합 공지로 출시 범위와 환경 선택 구조를 교차 확인했다.

## 1차 출처

- URL: https://openai.com/index/introducing-the-agents-api/
- 제목: Introducing the Agents API
- 게시자: OpenAI
- 게시일: 2026-09-10
- 확인 내용: Agents API가 공개 베타로 출시됐으며 OpenAI가 에이전트 세션, 조정, 문맥 관리와 복구를 맡고 개발자가 도구와 실행 환경을 선택할 수 있다고 설명한다. 별도 API 사용료 없이 토큰과 도구 비용을 지불하며 베타 기간에 기능을 계속 수정한다고 명시한다.

## 독립 확인

- URL: https://developers.cloudflare.com/changelog/post/2026-09-10-using-openai-agents-api-with-cloudflare-containers/
- 제목: Use Cloudflare Containers with Codex via the OpenAI Agents API
- 게시자: Cloudflare
- 게시일: 2026-09-10
- 확인 내용: OpenAI가 세션, 조정, 문맥 압축과 복구를 관리하고 Cloudflare Containers가 자체 호스팅 실행 환경을 제공하는 통합과 공개 구현을 확인한다.

- URL: https://vercel.com/changelog/build-with-openai-agents-api-on-vercel
- 제목: Build with OpenAI Agents API on Vercel
- 게시자: Vercel
- 게시일: 2026-09-10
- 확인 내용: OpenAI가 에이전트 루프와 세션 상태를 관리하고 Vercel이 샌드박스의 코드 실행, 파일 접근, 재연결과 지속 작업 공간을 제공하는 통합을 확인한다.

## 회차에 사용한 원자 주장

- C1 — OpenAI는 2026-09-10 장시간 실행되는 에이전트를 위한 Agents API를 공개 베타로 출시했다. [OpenAI]
- C2 — OpenAI는 세션, 조정, 문맥 압축, 도구 사용과 복구를 관리한다고 설명한다. [OpenAI, Cloudflare]
- C3 — 개발자는 OpenAI 관리 샌드박스, 자체 인프라 또는 파트너 실행 환경을 선택할 수 있다. [OpenAI]
- C4 — Cloudflare와 Vercel은 각자의 샌드박스를 Agents API 실행 환경으로 연결하는 구현을 같은 날 공개했다. [Cloudflare, Vercel]
- C5 — Agents API 자체의 추가 요금은 없지만 사용한 모델 토큰과 도구 비용은 사용자가 부담한다. [OpenAI]
- C6 — 제품은 공개 베타이며 OpenAI는 피드백을 바탕으로 일반 출시 전까지 빠르게 수정할 예정이라고 밝혔다. 따라서 실제 업무의 비용, 권한, 오류 복구 성능은 사용자가 직접 시험해야 한다. [OpenAI]

## 불확실성 잠금

Agents API는 공개 베타이며 OpenAI가 소개한 운영 편의와 고객 성과가 모든 실제 업무에서 재현된다고 볼 수 없다. Cloudflare와 Vercel의 공지는 통합 제공 사실을 확인하지만 독립적인 성능 평가가 아니다. 토큰·도구 비용, 실행 환경 권한, 장시간 작업의 오류 복구는 각 사용 사례에서 직접 검증해야 한다.

## 출처 지문과 중복 확인

- 출처 지문: `https://openai.com/index/introducing-the-agents-api/|2026-09-10`
- 원장 비교: ep-001부터 ep-010까지의 지문과 모두 달라 중복 없음.

## 검토 후 제외한 후보

- OpenAI의 ChatGPT for Financial Services: 같은 날의 중요한 산업 제품이지만 금융 전문 도구라 일반 독자에게 개인화된 금융 조언으로 오해될 여지가 있어 제외했다.
- OpenAI의 GPT-Live-1 API: 음성 모델 자체는 7월에 먼저 공개됐고 이번 발표는 API 제공 확대이므로 새 에이전트 운영 방식보다 변화 폭이 작다고 판단했다.
- OpenAI의 AI 정책 입장: 기업의 정책 주장 비중이 높고 구체적인 제품·연구 변화가 아니어서 제외했다.
