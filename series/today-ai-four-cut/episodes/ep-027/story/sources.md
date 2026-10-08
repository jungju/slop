# 출처 기록

- 조사 시각: 2026-10-09 06:08 KST
- 선정 제목: AI가 오픈소스 버그를 무료로 찾는다
- 사건일: 2026-10-08
- 선정 이유: 최근 48시간의 주요 AI 발표를 검색해 Anthropic의 OSS Scanner 출시를 선택했다. 공식 Cyber Mission 발표와 기술 설명, Axios의 독립 보도를 모두 열어 읽고 무료·선택형·대상 제한과 사람 검토 없이 전송되는 보고서의 한계를 교차 확인했다.

## 1차 출처

- URL: https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source
- 제목: Launching an opt-in vulnerability-finding service for open-source software
- 게시자: Anthropic
- 게시일: 2026-10-08
- 확인 내용: 핵심 오픈소스 프로젝트가 신청하는 선택형 OSS Scanner를 출시했다. 참여 프로젝트는 최신 모델의 정기 검사를 무료로 받으며, 보고서에는 재현 방법, 취약점 설명과 가능한 경우 수정안이 포함된다. 보고서는 사람의 검토나 분류 없이 전송되므로 잘못되거나 무효일 수 있고, 중복·과장된 심각도·프로젝트 위협 모델 오해가 생길 수 있다고 명시한다.

- URL: https://www.anthropic.com/news/anthropic-cyber-mission
- 제목: Introducing the Anthropic Cyber Mission
- 게시자: Anthropic
- 게시일: 2026-10-08
- 확인 내용: OSS Scanner를 핵심 오픈소스 프로젝트에 무료 정기 검사를 제공하는 Cyber Mission의 한 축으로 발표했다. 유지보수자가 처리할 역량이 있는 프로젝트를 대상으로 하며, 그렇지 않은 프로젝트에는 기존의 사람 검증 공개 절차를 계속 사용한다고 설명한다.

## 독립 확인

- URL: https://www.axios.com/2026/10/08/anthropic-critical-infrastructure-cybersecurity
- 제목: Anthropic launches AI push to protect critical infrastructure
- 게시자: Axios
- 게시일: 2026-10-08
- 확인 내용: Anthropic이 무료 OSS Scanner를 출시해 참여 프로젝트에 정기 검사와 자동 취약점 보고서·수정 제안을 제공한다고 보도한다. 보고서가 사람의 검토 없이 전송되어 일부 결과가 부정확할 수 있다는 한계도 확인한다.

## 회차에 사용한 원자 주장

- C1 — Anthropic은 2026-10-08 OSS Scanner를 출시했다. [Anthropic 기술 설명, Cyber Mission 발표, Axios]
- C2 — 이 서비스는 신청해 선정된 핵심 오픈소스 프로젝트를 대상으로 한다. [Anthropic 기술 설명, Cyber Mission 발표]
- C3 — 참여 프로젝트는 최신 모델의 정기 취약점 검사를 무료로 받는다. [Anthropic 기술 설명, Cyber Mission 발표, Axios]
- C4 — 보고서는 재현 방법, 취약점 설명과 가능한 경우 수정안을 포함한다. [Anthropic 기술 설명, Cyber Mission 발표, Axios]
- C5 — 보고서는 사람의 사전 검토 없이 전송되므로 잘못되거나 중복될 수 있고 심각도가 과장될 수 있다. [Anthropic 기술 설명, Cyber Mission 발표, Axios]
- C6 — 최종 확인과 수정 적용은 프로젝트 유지보수자의 검증 역량에 달려 있다. [Anthropic 기술 설명, Cyber Mission 발표; 편집적 결론]

## 불확실성 잠금

OSS Scanner는 실제 출시된 선택형 서비스지만 모든 오픈소스 프로젝트에 자동 적용되는 것은 아니다. 회사가 공개한 초기 검증 수치나 사례를 전체 프로젝트의 실제 성과로 일반화하지 않는다. 사람 검토 없이 전송되는 보고서는 오탐·중복·심각도 오류와 부적절한 수정안이 있을 수 있으므로 유지보수자의 확인이 필수다.

## 출처 지문과 중복 확인

- 출처 지문: `https://www.anthropic.com/research/launching-opt-in-vuln-finding-service-for-open-source|2026-10-08`
- 원장 비교: ep-001부터 ep-026까지의 모든 지문과 다르다. ep-003은 제한된 고성능 보안 AI의 방어 도구 통합, ep-009는 보안 평가 중 실제 시스템 접근 사건, ep-022는 모델 추론 추출 공격을 다뤘다. 이번 회차의 핵심은 핵심 오픈소스 프로젝트가 신청해 받는 무료 정기 AI 취약점 검사와 무검토 보고서의 검증 책임으로 중복되지 않는다.

## 검토 후 제외한 후보

- 2026-10-08 Anthropic 2026 사용 정책 개정: 대부분 기존 규칙과 예시를 명료화한 변경으로, 독자가 체감할 구체적 새 서비스 출시인 OSS Scanner보다 사건성이 낮아 제외했다.
- 2026-10-08 Anthropic Critical Infrastructure Defense Program: 전력·수도·교통 운영 기술 방어를 위한 중요한 프로그램이지만 실제 운영 성과보다 장기 계획과 파트너 구성이 중심이고, 이번 회차에서는 같은 발표 안의 더 구체적인 OSS Scanner만 다뤘다.
- 2026-10-08 영국 ICO의 AI 에이전트 증거 요청: 규제상 중요하지만 고위험 법률 맥락과 후속 절차 검증이 더 필요해 이번 회차에서 제외했다.
