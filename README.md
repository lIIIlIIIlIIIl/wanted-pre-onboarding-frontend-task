# wanted-pre-onboarding

</br>

### 요구사항

---

1. 이슈 목록 화면 기능 구현

- 이슈 목록 가져오기 API 활용
- open 상태의 이슈 중 코멘트가 많은 순으로 정렬
- 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
- 다섯번째 셀에는 광고 이미지 출력 - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
- 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

</br>

2. 이슈 상세 화면 기능 구현

- 이슈의 상세 내용 표시
- ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시

</br>

3. 공통 헤더

- 두 페이지는 공통 헤더를 공유합니다.
- 헤더에는 Organization Name / Repository Name이 표시됩니다.

</br>

4. 필수 요구 사항

- 이슈 목록 및 상세 화면 기능 구현
- Context API를 활용한 API 연동
- 데이터 요청 중 로딩 표시
- 에러 화면 구현
- 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

</br>

### 사용한 기술

---

React, TypeScript, Axios, react-markdown, remark-gfm

</br>

### 프로젝트의 실행 방법

---

</br>

해당 레파지토리를 clone 후, `npm install & npm start` 명령러를 통해 실행시킬 수 있습니다.

</br>

### 베포

---

https://wanted-pre-onboarding-frontend-task.vercel.app/
