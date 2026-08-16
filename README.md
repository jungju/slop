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

## 바람이 돌아오는 곳 동기화

로컬 JHub의 공개용 독자 이미지를 WebP로 변환하고 메타데이터를 갱신합니다.

    npm run import:wind

원본 JHub 패키지는 읽기만 하며 수정하지 않습니다. 다른 위치의 JHub를 사용할 때는
JHUB_WIND_SITE_ROOT 환경 변수로 web_app.wind-returning-place 패키지 경로를 지정합니다.
