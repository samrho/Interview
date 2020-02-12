## Web

### 브라우저의 렌더링 동작과정을 짧게 설명해보세요.

> 먼저, HTML, CSS를 parse하여 DOM tree, CSSOM tree를 만들고 이를 조합하여 render tree를 완성한다.  
> 그리고 이 render tree를 바탕으로 브라우저가 DOM들을 하나씩 배치해 나간다.

### 웹사이트의 초기 로딩속도를 더 빠르게 하기 위해서 무엇을 해야 할까요?

> code split 기법을 사용한다. webpack과 같은 module bundler를 사용하여 이를 성취할 수 있는데, 코드 맨 위쪽에 정적으로 함수나 컴포넌트를 import하는 대신, 그 부분이 비로소 필요로 하게 될 때서야 동적으로 불러오게 코드를 작성한다. dynamic import는 TC39에 제안된 기능인데 webpack이 이렇게 작성된 코드를 변환해 준다.

## Cross Origin Resource Sharing (Access-Control-Allow-Origin header 사용하는) 이 어떤 것이며, 보안 관점에서 왜 필요한 건가요?

https://docs.google.com/forms/d/e/1FAIpQLScFNvyGV57eOZXhxa2dJrysdR60NLd8iREUmKImrOleEELbww/viewform
