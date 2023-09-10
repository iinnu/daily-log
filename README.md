# DAILY LOG
- 로컬 스토리지 기반 투두 리스트
- 배포: [링크](http://iinnu-daily-log.s3-website.ap-northeast-2.amazonaws.com/)

## 주요 기능
### ✅ 오늘의 날씨
![오늘의 날씨](https://github.com/iinnu/daily-log/assets/55791128/23c562d0-fe99-4973-a829-07eb99fdf690)  

- 오늘 날짜와 날씨를 보여줍니다. (대구 지역 기준)

### ✅ 메모
![메모](https://github.com/iinnu/daily-log/assets/55791128/a36c6d6c-d1a8-482a-a456-a1a85f58d086)

- 간단한 메모를 남기고 저장할 수 있습니다.

### ✅ 카테고리 기능
<img width='500' src='https://github.com/iinnu/daily-log/assets/55791128/44f458f1-e333-4dad-93fd-c1315fc77b3b' />

- 카테고리를 추가하고 삭제할 수 있습니다.

### ✅ 투두 기능
<img width='500' src='https://github.com/iinnu/daily-log/assets/55791128/aa996bb9-a7ec-451e-8db0-1bdd5a7c0e97' />

- 투두를 추가하고 수정, 삭제할 수 있습니다.
- 체크박스로 완료 여부를 체크할 수 있습니다.

## 기술 스택

* ![React][React.js]
* ![typescript][typescript]
* ![styledcomponents][styledcomponents]

## 실행 방법
1. 레포지토리 clong
   ```bash
   git clone https://github.com/iinnu/daily-log.git
   ```
2. 루트 경로에 .env 파일 생성하고 [기상청 날씨 OPEN API](https://www.data.go.kr/data/15084084/openapi.do)의 Key 저장
    ```js
    // .env
    REACT_APP_API_KEY=발급받은 key값
    ```
3. 의존성 모듈 설치 및 실행
    ```bash
    npm install
    npm start
    ```
  

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[typescript]: https://img.shields.io/badge/TypeScript-20232A?style=for-the-badge&logo=typescript&logoColor=3178C6
[styledcomponents]: https://img.shields.io/badge/styledcomponents-20232A?style=for-the-badge&logo=styledcomponents&logoColor=#DB7093
