# 출처 기록

- 조사 시각: 2026-08-29 KST
- 선정 제목: AI 시험지를 양쪽에 숨겼다
- 사건일: 2026-08-27
- 선정 이유: 최근 48시간의 AI 안전 발표 가운데 외부 평가의 독립성과 벤치마크 오염 문제를 구체적인 기술 구조로 다룬 첫 파일럿을 선택했다. Google DeepMind의 발표와 평가에 직접 참여한 비영리 외부 감사기관 AVERI, 독립 벤치마크 컨소시엄 MLCommons의 기록을 교차 확인했다.

## 1차 출처

- URL: https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/
- 제목: Piloting the world's first double-blind AI evaluations
- 게시자: Google DeepMind
- 게시일: 2026-08-27

## 독립 확인

- URL: https://www.averi.org/ourwork/tag/pilot%2Breports
- 제목: AVERI Pilot Report: The World’s First Double-Blind Evaluation of a Proprietary Language Model
- 게시자: AI Verification and Evaluation Research Institute (AVERI)
- 게시일: 2026-08-27
- 확인 내용: 비영리 외부 감사기관이 Gemini 2.5 Flash-Lite와 미사용 AILuminate 문항을 보안 엔클레이브에서 평가한 절차, 결과 비공개 범위, 남은 보증 한계를 설명한다.

- URL: https://mlcommons.org/2026/08/double-blind-reliability-evaluation/
- 제목: The key to trustworthy AI evaluation is secrecy by design
- 게시자: MLCommons
- 게시일: 2026-08-27
- 확인 내용: 독립 벤치마크 컨소시엄이 처음 쓰는 AILuminate 안전 문항을 제공했고, 개발사와 평가자가 서로의 기밀 자산을 보지 못한 구조를 확인한다.

## 회차에 사용한 원자 주장

- C1 — Google DeepMind는 2026-08-27 독점형 프런티어급 모델을 대상으로 한 첫 이중맹검 평가 파일럿을 발표했다. [1차 출처]
- C2 — 파일럿은 Gemini 2.5 Flash-Lite와 MLCommons가 제공한 미사용 AILuminate 안전 평가 문항을 사용했다. [1차 출처, AVERI, MLCommons]
- C3 — 모델과 평가 문항은 보안 GPU 엔클레이브에서 함께 실행됐다. [1차 출처, AVERI]
- C4 — Google DeepMind는 평가 문항을 수집·저장·학습에 쓰지 못했고, AVERI·OpenMined·MLCommons는 모델 가중치를 볼 수 없었다. [1차 출처, AVERI]
- C5 — AVERI는 관찰한 성공과 실패 유형 및 정량 결과를 Google DeepMind에 비공개 보고했다. 공개 자료에는 실제 점수와 문항·출력이 없다. [AVERI]
- C6 — AVERI는 이 설계가 가능한 모든 조작 경로를 막지는 못했고, 고위험 상황에는 추가 보증이 필요하며 모델 평가가 전체 AI 감사와 같지 않다고 밝혔다. [AVERI]

## 불확실성 잠금

3·4컷에서 양쪽 기밀을 지키는 의미와 첫 파일럿이라는 범위를 함께 보여 준다. 이 방식이 모델 성능을 높였다고 말하지 않고, 비공개 결과를 추정하지 않으며, 모든 감사 문제를 해결했다고 단정하지 않는다.

## 출처 지문과 중복 확인

- 출처 지문: `https://deepmind.google/blog/piloting-the-worlds-first-double-blind-ai-evaluations/|2026-08-27`
- 원장 비교: ep-001부터 ep-004까지의 지문과 모두 다르므로 중복 없음.

## 검토 후 제외한 후보

- OpenAI x MHESI AI Accelerator: 2026-08-28의 새 발표지만 8주 프로그램의 시작 단계라 실제 제품 성과가 아직 없어서 제외.
- OpenAI·Bocconi 학생 실험: 2026-08-27 공개된 무작위 실험으로 흥미롭지만 단일 대학의 1학년 학생과 특정 과제에 한정돼 더 넓은 효과로 오해될 위험이 커서 제외.
- OpenAI의 브라질 지사 확대: 최근 48시간 발표지만 조직 확장 소식으로서 일반 독자에게 설명할 기술적 변화가 작아 제외.
