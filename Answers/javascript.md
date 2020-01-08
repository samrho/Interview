## Javascript

-   [x] Object.create의 역할은 무엇인가요?
    > argument로 들어오는 객체를 프로토타입으로 가지는 새 객체를 만들어 return한다.
-   [ ] 자바스크립트에서 모듈내의 private한 속성을 만드는 방법을 아는대로 쓰세요.
-   [ ] JS에서 재귀호출로 인한 stack overflow를 막을 수 있는방법은?
-   [ ] closure 와 스코프관계를 설명해보세요.
-   [ ] = 보다, === 를 써야할때는?
-   [ ] ES6의 Class extends 내부 동작원리에 대해서 설명해보세요.
-   [ ] 객체를 탐색하는 방법에 대해서 2가지를 작성해보세요.
-   [ ] NodeList 타입을, Array에 있는 reduce메서드를 사용하는 방법은?
-   [ ] arrow 함수의 this가 결정되는 방식을 설명해보세요.
-   [ ] undefined와 null의 차이점을 설명하세요.
-   [ ] 아래처럼 동작하는 flatten함수를 reduce를 활용해서 만들어보세요.

    ```js
    const arr = [
    	[1, 2],
    	[3, 4],
    	[5, 6],
    ];
    const flattenedArray = flatten(arr);
    console.log(flattenedArray); //[1, 2, 3, 4, 5, 6];
    ```

-   [ ] 객체를 복사해서 새로운 객체를 만들고 싶습니다. 코드를 구현해보세요. (객체의 깊이는 1단계만 있다고 가정)
-   [ ] Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.
-   [ ] prototype 의 동작방식에 대해서 설명해보세요.
-   [ ] 순환되는 캐로셀UI의 구현 원리에 대해서 설명해보세요.
-   [ ] Event 객체에 대해서 설명해보세요.
-   [ ] Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.
-   [ ] arrow 함수의 this가 결정되는 방식을 설명해보세요.
-   [ ] 비동기의 장점을 설명해보세요.
-   [ ] bind 가 필요한 상황을 간단한 코드로 보여주세요.
-   [ ] CommonJS 스펙에 대해 설명해보세요.
-   [ ] 클로저로 동작되는 상황을 예시코드로 보여주세요.
-   [ ] 자바스크립트의 원시 타입(Primitive Data Type)은 몇가지이며, 전부 말해달라
-   [ ] Number, String, Boolean, Null, Undefined, (Symbol)
        자바스크립트의 Number Type은 다른 언어들과 차이점이 무엇인가, 왜 하나만 존재하는가
-   [ ] 실행 컨텍스트(Execution Context)에 대해 설명해달라
-   [x] 자바스크립트의 호이스팅(Hoisting)은 어떻게 이루어져 있는가
    > 자바스크립트의 hoisting.. 함수, 변수, 클래스의 선언부가 맨 위로 끌어올려지는 특징이다. var의 경우에는 선언부 없이 사용될 경우에는 global에 binding된다. 또한 var는 선언되기 전에 접근하면 undefined
-   [ ] 클로저(Closure)란 무엇이며, 왜 이러한 패턴을 사용하는가
        This
-   [ ] 자바스크립트에서 This는 몇가지로 추론 될수 있는가, 아는대로 말해달라
-   [x] Call, Apply, Bind 함수에 대해 설명해달라
    > call, apply, bind 함수는 함수의 prototype 내에 존재하는 method이다. call과 apply 함수는 함수를 바로 실행하는 반면, bind 함수는 새로운 함수를 return한다.
