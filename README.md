# interview

개발자 면접을 대비하여 공부한 내용을 정리하는 저장소입니다.

## HTML

-   [x] HTML vs XML ?
-   [x] XML vs JSON ?
-   [x] script tag는 왜 마지막에 넣는가?

## CSS

-   [x] 이벤트 버블링과 캡처링의 차이를 말해 보아라
-   [ ] CSS이벤트 제어 방법(event delegation, event bubbling 등)

## Javascript

-   [x] Object.create의 역할은 무엇인가요?
-   [x] 자바스크립트에서 모듈내의 private한 속성을 만드는 방법을 아는대로 쓰세요.
-   [x] JS에서 재귀호출로 인한 stack overflow를 막을 수 있는방법은?
-   [ ] closure 와 스코프관계를 설명해보세요.
-   [x] == 보다, === 를 써야할때는?
-   [ ] ES6의 Class extends 내부 동작원리에 대해서 설명해보세요.
-   [x] 객체를 탐색하는 방법에 대해서 2가지를 작성해보세요.
-   [x] NodeList 타입을, Array에 있는 reduce메서드를 사용하는 방법은?
-   [x] arrow 함수의 this가 결정되는 방식을 설명해보세요.
-   [x] undefined와 null의 차이점을 설명하세요.
-   [x] 아래처럼 동작하는 flatten함수를 reduce를 활용해서 만들어보세요.

    ```js
    const arr = [
    	[1, 2],
    	[3, 4],
    	[5, 6],
    ];
    const flattenedArray = flatten(arr);
    console.log(flattenedArray); //[1, 2, 3, 4, 5, 6];
    ```

-   [x] 객체를 복사해서 새로운 객체를 만들고 싶습니다. 코드를 구현해보세요. (객체의 깊이는 1단계만 있다고 가정)
-   [x] Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.
-   [ ] prototype 의 동작방식에 대해서 설명해보세요.
-   [ ] 순환되는 캐로셀UI의 구현 원리에 대해서 설명해보세요.
-   [ ] 이벤트루프랑 이벤트큐 콜스택 질문
-   [ ] Event 객체에 대해서 설명해보세요.
-   [x] Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.
-   [x] arrow 함수의 this가 결정되는 방식을 설명해보세요.
-   [ ] 비동기의 장점을 설명해보세요.
-   [x] bind 가 필요한 상황을 간단한 코드로 보여주세요.
-   [ ] CommonJS 스펙에 대해 설명해보세요.
-   [ ] 클로저로 동작되는 상황을 예시코드로 보여주세요.
-   [ ] 클로져가 뭔가 클로져를 여러 곳에서 사용하면 어떤 문제가 있나
-   [x] 자바스크립트의 원시 타입(Primitive Data Type)은 몇가지이며, 전부 말해달라
-   [x] 자바스크립트의 Number Type은 다른 언어들과 차이점이 무엇인가, 왜 하나만 존재하는가
-   [x] 실행 컨텍스트(Execution Context)에 대해 설명해달라
-   [x] 자바스크립트의 호이스팅(Hoisting)은 어떻게 이루어져 있는가
-   [ ] 클로저(Closure)란 무엇이며, 왜 이러한 패턴을 사용하는가
        This
-   [x] 자바스크립트에서 This는 몇가지로 추론 될수 있는가, 아는대로 말해달라
-   [x] Call, Apply, Bind 함수에 대해 설명해달라

## ES6

-   [ ] 크롬 정도의 브라우저를 제외하곤 ES6 스펙에 대한 지원이 완벽하지 않다. 해결방법은 무엇인가
-   [ ] Babel의 기능을 한 단어로 말해달라
-   [x] ES6 에서 추가된 스펙에 대해 아는대로 다 말해달라(let, const, rest parameter, class, arrow function...)
-   [ ] var 와 let, const의 가장 큰 차이점은 무엇인가 (function scope와 block scope의 개념에서)
-   [ ] Class 는 무엇이고, Prototype, fucntion의 ES5 스펙만으로 Class를 구현할수 있는가
-   [ ] es6 let const var 호이스팅 관점 설명
-   [ ] 제너레이터 펑션이 뭔가

## TypeScript

-   [x] 타입스크립트가 무엇인가?
-   [x] 타입스크립트를 사용하는 이유는 무엇인가요?
-   [x] 타입스크립트를 사용해본 경험이 있는가, 타입스크립트에 대한 본인의 생각과 도입시의 장점을 말해달라
-   [ ] 타입스크립트에서, Interface와 Abstract Class의 차이는 뭔가요?

## React

-   [ ] React의 virtual DOM 은 뭐에요?
-   [ ] React의 렌더링 방식은 무엇인가요?
-   [ ] React의 초기화면 느린 부분은 어떻게 해결해야해요?
-   [ ] SSR은 무엇인가요? 어떻게 구현하죠?
-   [ ] hooks 장점 훅 어떤어떤 거 썼나
-   [ ] class component의 life cycle에 대해 설명해 보세요
-   [ ] function component의 life cycle에 대해 설명해 보세요

## Node

-   [x] node의 middleware의 동작방식을 설명해보세요.

## Web

-   [ ] 브라우저의 렌더링 동작과정을 짧게 설명해보세요.
-   [ ] 웹사이트의 초기 로딩속도를 더 빠르게 하기 위해서 무엇을 해야 할까요?
-   [ ] Cross Origin Resource Sharing (Access-Control-Allow-Origin header 사용하는) 이 어떤 것이며, 보안 관점에서 왜 필요한 건가요?

## Algorithm

-   [x] DFS, BFS를 통한 트리탐색방법 중 본인이 경험(사용)했던 방식은 무엇이고, 동작원리를 짧게 설명해보세요.
-   [x] 자료구조에 대해 공부한 적이 있는가
-   [x] Binary Search Tree 에 대해 알고 있는가, 설명해달라
-   [x] Graph 에서 다른 노드를 참조하는 구조를 코드로 구현 할수 있는가

## 통신

-   [x] RESTful API 가 무엇인가, 아는대로 다 말해달라
-   [ ] 보안은 서버쪽에서 많이 신경쓰고 있지만, 프론트엔드 개발에서 보안관련 이슈는 어떠한 것들이 있는가
-   [x] Wireshark 에 대해 알고 있는가
-   [x] HTTP 통신의 문제점에 대해서 아는대로 말해달라
-   [x] CORS(Cross-Origin Resource Sharing)는 무엇인가 왜 이러한 방법이 정의 되었으며, 본인이 코드를 작성하면서 CORS와 관련하여서 경험하였던 이슈는 무엇인가
-   [ ] 간단한 데이터를 클라이언트로만 관리 할수 있는가, 이와 관련해서 브라우저 에서 어떠한 것들을 지원하고 있는가, 예를 들면 소셜 로그인같은 것들에 대한 브라우저 종료시 발생하는 문제에 대응 경험이 있는가
-   [ ] GET method와 POST method의 차이점이 무엇인가?
-   [x] 브라우저 URL 창에 naver.com을 치면 어떻게 되는가?

## OOP

-   [ ] 본인이 경험한 OOP관점에서의 객체분리를 설명하고, 느낀 장점을 말해보세요.
-   [ ] immutable과 mutable은 무엇이 다른것인가요?
-   [ ] 본인이 생각하는 좋은 객체지향프로그래밍에 대해서 설명해보세요.
-   [x] OOP에 특징에 대해 설명해달라(상속, 캡슐화 등등...)
-   [ ] 현실에 상황을 예로 들어 OOP의 개념으로 설계과정을 설명해달라 ex) 축구를 게임으로 만든다거나, 기타 어떠한 상황이라도 좋다

## 함수형 프로그래밍

-   [ ] 함수형 프로그래밍(Function Programming)
-   [ ] 함수형 프로그래밍에 대해 설명해달라
-   [ ] 함수형 프로그래밍에 개념에서 순수함수란 무엇인가
-   [ ] OOP와 함수형 프로그래밍의 가장 큰 차이점은 무엇인가

## 비동기 프로그래밍

-   [ ] 비동기 프로그래밍(Asynchronous)
-   [x] AJAX란 무엇인가
-   [x] Promise란 무엇이며 코드가 어떻게 구성되어있는가
-   [x] Promise와 Callback의 차이점은 무엇이며 각각의 장단점에 대해 설명해달라
-   [ ] Async, Await가 무엇이며, 사용해본 경험이 있는가
-   [ ] 비동기를 처리할 수 있는 4가지 방법에 대해 이야기해 보고 장단점, 특징을 논하라(callback, promise, async/await, generator function)
-   [ ] 이미지 레이지로딩 어케 했나

## 인프라

-   [ ] Docker 등 container 기술을 사용할때, Kubernates 나 Mesos등 container orchestration은 왜 필요한건가요?
-   [ ] CDN이 무엇이고, 왜 필요한가요?

-   [ ] RDBMS에서 PrimaryKey와 ForeignKey는 무엇인가요?

## Attitude

-   [x] 자기소개 해보세요
-   [x] 프로그래밍 요구사항을 받았을때, 구현하기 전까지 어떤 과정을 거치시나요?
-   [x] 최근 가장 깊게 공부하고 있는 부분은 무엇인가요? 그 부분에 대해서 간단하게 설명해보세요.
-   [x] 본인이 즐겨하는 디버깅 방법을 설명해보세요.
-   [x] 왜 개발자가 되려고 하는가
-   [x] 개발자로서의 본인의 비전을 이야기 해달라
-   [ ] 최근에 관심갖거나 공부 하고 싶은 개발 기술은 무엇인가
-   [x] 프로젝트 협업 과정을 경험한 적이 있는가
-   [x] 개발자가 되기 위해서 어떻게 공부하였는가
-   [x] 학습시 주로 이용하는 웹페이지나, 동영상 강좌 페이지는 어디인가
-   [x] 최근의 읽은 개발 관련 서적은 무엇인가
-   [x] 즐겨 보는 개발 관련 유튜브가 있는가
-   [x] 회사 기술 스택에 맞추어 단기간 내에 언어와 프레임워크를 학습 하여야 할 때, 어떻게 공부하고 해결할 것인가
-   [x] 포트폴리오 제작시에 비인기 라이브러리를 사용한 경험이 있는가, 이러한 비인기 라이브러리에 대한 정보를 어디서 얻는가 왜 활용하였는가
-   [x] 어려운 거 없었나
-   [x] 질문은 없나
-   [ ] 동료와의 커뮤니케이션

-   [ ] 동료와의 의견이 마찰이 있을 경우 대응

-   [ ] 리더와의 의견 차이

-   [ ] 팀장이라면 어떻게 팀원을 동기부여 할 것인가

-   [x] 좋은 개발자란?
-   [x] 당신의 약점이 무엇인가?
-   [x] 당신의 강점이 무엇인가?
-   [x] 마지막으로 할 말 있는가?

-   [ ] 본인이 도전했던 가장 어려운 기술적인 문제와 어려웠던 이유, 해결 방법과 과정을 최대한 상세히 설명해주세요.

-   [ ] 평상시 개발중 본인이 모르는 문제를 만나거나 새로운 내용을 공부해야할때, 주로 어떤 경로로 정보를 찾나요? (구체적인 예시가 있으면 더 좋습니다)

-   [ ] 본인이 최근에 새로 배우거나 알게된 개발 관련된 지식을 아무거나 설명해주세요.

-   [ ] 당신의 long-term career goal은 무엇이며, 이 회사에서 일하는 것이 거기에 어떻게 도움이 될것이라고 기대하고 계신가요?

-   [ ] 본인이 가장 열심히 개발을 한게 언제 였나요? 열심히 한 동기는 뭐였나요?

-   [ ] 본인이 프로그래밍을 하는 가장 근본적인 이유는 뭔가요?

## references

https://velog.io/@honeysuckle/%EC%8B%A0%EC%9E%85-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EB%A9%B4%EC%A0%91-%EC%A7%88%EB%AC%B8-%EB%AA%A8%EC%9D%8C  
https://github.com/JaeYeopHan/Interview_Question_for_Beginner  
https://lucas.codesquad.kr/  
https://github.com/eastgerm/interview
프론트엔드 면접 문제 은행: https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Korean
프론트엔드 체크리스트: https://github.com/kesuskim/Front-End-Checklist
자바스크립트 인터뷰 가이드(진짜 좋음): https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d
