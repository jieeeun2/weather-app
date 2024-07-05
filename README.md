# 날씨 앱

이 프로젝트는 특정 지역의 현재 날씨정보와 예보를 알려주는 웹 애플리케이션입니다. <br/>
Next 14버전의 학습을 위해 [[손에 익는 Next.js] Part 1 - 공식 문서 훑어보기](https://www.inflearn.com/course/%EC%86%90%EC%97%90-%EC%9D%B5%EB%8A%94-nextjs-part1#) 강의를 수강한 결과물입니다.

## 1. 배포 링크
https://weather-app-blue-rho-25.vercel.app/

## 2. 프로젝트 구조
```
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂revalidate
 ┃ ┃ ┃ ┗ 📜route.ts //revalidateTag 사용한 캐시 재검증 API 정의
 ┃ ┣ 📂[location]
 ┃ ┃ ┗ 📜page.tsx //선택한 지역에 대한 상세 기상예보 표출 및 동적메타데이터 설정
 ┃ ┣ 📜error.tsx //에러페이지
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜global.css //전역스타일링
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx //로딩페이지
 ┃ ┣ 📜page.tsx //지역별 현재날씨와 현재시간 표출
 ┃ ┗ 📜style.module.css //로컬스타일링
 ┣ 📂components
 ┃ ┣ 📜HomeButton.tsx //홈으로 이동 버튼
 ┃ ┗ 📜RevalidateButton.tsx //캐시 재검증 요청 버튼
 ┗ 📂utils
 ┃ ┣ 📜getCurrentWeather.ts //현재날씨 API호출함수
 ┃ ┣ 📜getForecast.ts //기상예보 API호출함수
 ┃ ┗ 📜getTime.ts //현재시간 API호출함수 (캐싱된 데이터 재검증 연습 위해 사용)
```

## 3. 의존성 목록

- dependencies
  - react: ^18
  - react-dom: ^18
  - next: 14.2.4

- devDependencies
  - typescript: ^5
  - @types/node: ^20
  - @types/react: ^18
  - @types/react-dom: ^18
  - eslint: ^8
  - eslint-config-next: 14.2.4



## 4. API 사용 정보
- 날씨데이터 API: https://www.weatherapi.com/ <br/>
- 시간데이터 API: https://timeapi.io/

## 5. 커밋 컨벤션

- 한 커밋당 하나의 작업단위, 한줄로 간결하게

  여러줄 내용을 쓸 때는 우선 포괄적인 내용으로 한줄을 간결하게 쓰고 줄의 끝에 `(+)`로 여러줄 글임을 표시한 후에 추가 설명을 작성하였습니다.

- 태그

  | 태그명   | 용도                                            |
  | -------- | ----------------------------------------------- |
  | chore    | 프로젝트 전반적인 설정                          |
  | build    | 패키지 설치                                     |
  | feat     | 기능 추가, 변수명 변경                          |
  | fix      | 기능상의 문제나 에러 수정                       |
  | refactor | 기능상의 문제는 없지만 더 나은 방법에 의한 변경 |
  | design   | css관련 UI디자인                                |
  | style    | 코드 포매팅                                     |
  | remove   | 파일 삭제                                       |
  | rename   | 파일명, 폴더명 변경                             |
  | docs     | 문서 수정                                       |
