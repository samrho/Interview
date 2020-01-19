## React

### React의 virtual DOM 은 뭐에요?

> https://bitsofco.de/understanding###the###virtual###dom/를 참고하면 좋다. virtual DOM 은 실제 DOM tree를 javascript object notation으로 나타낸 것인데, 변경이 일어났을 때, 새로운 version의 DOM tree object를 만든 뒤 diff를 따고 그 diff를 loop로 돌면서 변경 사항만 실제 DOM에 적용시키는 기술이다.

### React의 렌더링 방식은 무엇인가요?

### React의 초기화면 느린 부분은 어떻게 해결해야해요?

> code split 기법을 사용한다. webpack과 같은 module bundler를 사용하여 이를 성취할 수 있는데, 코드 맨 위쪽에 정적으로 함수나 컴포넌트를 import하는 대신, 그 부분이 비로소 필요로 하게 될 때서야 동적으로 불러오게 코드를 작성한다. dynamic import는 TC39에 제안된 기능인데 webpack이 이렇게 작성된 코드를 변환해 준다.

### SSR은 무엇인가요? 어떻게 구현하죠?

> 최초 한 번 전체 페이지를 로딩한 뒤 데이터만 변경한 후 사용할 수 있는 SPA가 클라이언트 사이드 렌더링(Client Side Rendering)과 달리 서버 사이드 렌더링(Server Side Rendering, SSR)은 서버에서 이른바 `완성된` HTML 파일을 브라우저에게 주어 브라우저가 아무 가공 없이 화면에 그릴 수 있도록 하는 렌더링 방법이다. 구현은 간단하게 할 수 있다. 서버에서 모든 처리를 완료한 후에 HTML file을 브라우저에게 건네기만 하면 되는 것이다.
