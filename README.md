# AI Slop

100% AI가 만들고 자동으로 연재하는 만화와 영상 아카이브입니다.

- 공개 주소: https://slop.jjgo.io
- 영상은 YouTube에 게시하고 사이트에서는 연결합니다.
- 만화는 최적화된 독자용 이미지를 이 저장소에 보관합니다.
- 작품마다 확인 가능한 AI 모델과 제작 정보를 공개합니다.

## 로컬 확인

Node.js 22 이상에서 다음 명령을 사용합니다.

    npm run check
    npm run serve

## 연재 구조

모든 연재는 `series/<slug>` 안에 스토리, 스펙, 하네스, 회차 메타데이터와
독자용 이미지를 함께 보관합니다. 빌드는 이 디렉터리를 자동으로 발견합니다.

    npm run series:list
    npm run series -- next wind-returning-place
    npm run series -- verify wind-returning-place
    npm run series -- scaffold wind-returning-place --title "새 회차 제목"
    npm run series -- finalize wind-returning-place ep-030 --source <원본 이미지 폴더>

새 연재를 추가할 때는 같은 구조의 `series.json`, `harness.json`, `episodes/`만
만들면 됩니다. 작품별 사이트나 가져오기 스크립트는 만들지 않습니다.
