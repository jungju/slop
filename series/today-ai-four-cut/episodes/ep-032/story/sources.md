# 출처 기록

- 조사 시각: 2026-10-15 KST
- 선정 제목: AI가 사기 대화를 폰 안에서 살핀다
- 사건일: 2026-10-14
- 선정 이유: 최근 48시간 창에서 Google DeepMind와 싱가포르 GovTech가 공개한 기기 내 사기 대화 탐지 모델을 선택했다. Google DeepMind 공식 원문, CNA의 싱가포르 국제 사이버 주간 현장 보도, Fintech.com.sg의 독립 분석을 모두 열어 읽었다. 기기 안에서 대화를 처리하는 구체적 설계와 아직 공개되지 않은 실제 앱·출시일·성능을 함께 설명할 수 있고 기존 원장과 지문·핵심 주제가 겹치지 않는다.

## 1차 출처

- URL: https://deepmind.google/blog/on-device-ai-scam-detection-mddi/
- 제목: Google DeepMind and Singapore Government collaborate to build fine-tuned AI model for scam detection
- 게시자: Google DeepMind
- 게시일: 2026-10-14
- 확인 내용: Google DeepMind와 GovTech Singapore는 현지 사기 대화로 조정한 경량 Gemma 모델을 만들었다. 1단계 저전력 분류기가 의심 메시지를 거르고, 2단계 Gemma가 더 넓은 대화 문맥을 분석한다. 앱에 통합되면 사용자 동의를 받아 기기 안에서 처리하며 Google과 싱가포르 정부가 배포를 통해 대화를 읽지 못하도록 설계했다. 배포는 단계적으로 진행될 예정이다.

## 독립 확인

- URL: https://www.channelnewsasia.com/singapore/govtech-google-deepmind-ai-scam-quantum-sicw-6455621
- 제목: GovTech and Google DeepMind developing real-time detection of scams on devices
- 게시자: CNA
- 게시일: 2026-10-14
- 확인 내용: 싱가포르 디지털개발정보부 장관의 행사 발언과 Google 발표를 바탕으로, 모델이 Android 기기에서 대화를 외부 서버로 보내지 않고 분석해 실시간 경고를 내도록 개발 중임을 확인했다. 설치·사용 세부사항은 추후 공개될 예정이다.

- URL: https://fintech.com.sg/govtech-deepmind-on-device-scam-detection-singapore
- 제목: GovTech and Google DeepMind build on-device AI to flag scam chats
- 게시자: Fintech.com.sg
- 게시일: 2026-10-14
- 확인 내용: 모델은 개발·시험됐지만 공개 앱과 출시일, 기기 요구사항, 탐지율·오탐률, 언어별 성능이 발표되지 않았다. 실제 피해 감소도 아직 입증되지 않았으며 앱의 권한·동의·보안 검토가 다음 확인 대상이다.

## 회차에 사용한 원자 주장

- C1 — Google DeepMind와 싱가포르 GovTech는 2026-10-14 스마트폰에서 사기 대화의 조작 신호를 찾는 모델을 공개했다. [Google DeepMind, CNA]
- C2 — 모델은 현지 사기 대화로 조정한 경량 Gemma를 사용하며, 저전력 분류기와 문맥 분석 모델의 2단계 구조다. [Google DeepMind, Fintech.com.sg]
- C3 — 앱에 통합되면 대화 분석을 외부 서버가 아니라 기기 안에서 수행하도록 설계됐다. [Google DeepMind, CNA]
- C4 — 배포 시 대화 접근에는 사용자의 동의와 앱 이용 조건이 적용되며, Google과 싱가포르 정부가 이 배포를 통해 대화를 읽지 못한다고 회사는 설명했다. [Google DeepMind, Fintech.com.sg]
- C5 — 배포는 단계적으로 진행될 예정이며 구체적인 앱, 출시일과 지원 기기는 아직 공개되지 않았다. [Google DeepMind, CNA, Fintech.com.sg]
- C6 — 탐지율·오탐률·언어별 성능과 실제 사기 피해 감소 결과는 공개되지 않았다. [Fintech.com.sg]

## 불확실성 잠금

발표는 기기 내 처리와 2단계 탐지 구조를 설명하지만, 지금 바로 설치할 수 있는 공개 소비자 기능을 뜻하지 않는다. 실제 앱·출시일·지원 기기·정확도·오탐률·피해 감소 결과가 없으므로 효과를 입증했다고 말하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://deepmind.google/blog/on-device-ai-scam-detection-mddi/|2026-10-14`
- 원장 비교: ep-001부터 ep-031까지 모든 지문과 다르다. 이전 회차에는 스마트폰 안에서 사기 대화 문맥을 탐지하는 모델을 중심으로 한 회차가 없다.

## 검토 후 제외한 후보

- Gemini 4 Argon의 광범위 공개·가격 후속 보도: ep-021이 같은 모델의 제한 공개와 회사 성능표 검증 한계를 이미 다뤄 핵심 주제가 중복되어 제외했다.
- Anthropic의 증류 공격 방어 발표: 모델 능력 추출 공격은 ep-022의 대규모 증류 시도와 핵심 설명이 겹쳐 제외했다.
- Anthropic 싱가포르 사무소·정부 양해각서: 구체적인 제품·연구 결과보다 협력 계획 중심이어서 이번 사기 탐지 모델보다 독자에게 전달할 검증 가능한 변화가 적어 제외했다.
