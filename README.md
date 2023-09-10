# DAILY LOG
- 로컬 스토리지 기반 투두 리스트
- 배포: [링크](http://iinnu-daily-log.s3-website.ap-northeast-2.amazonaws.com/)

## 주요 기능
### ✅ 오늘의 날씨

### ✅ 메모

### ✅ 카테고리 기능

### ✅ 투두 기능

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