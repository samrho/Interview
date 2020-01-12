## 비동기 프로그래밍

### AJAX란 무엇인가

    -   Asynchronous Javascript And XML을 뜻하는데, 부분을 나누어서 설명하려고 한다.
        -   Asynchronous는 웹서버에 요청을 하는 방식을 나타낸다. 뜻을 그대로 풀어보면 `비동기적인` 이라는 뜻인데, 동기적으로 데이터를 요청하고 응답이 올 때까지 계속 기다리는 것이 아니라, 요청을 보내 놓고 다음 코드를 실행한다는 것을 뜻한다. 대부분의 AJAX call은 XMLHttpRequest API를 사용하여 이루어지는데, 데이터는 예전에는 XML format으로 돌아왔는데, unformatted plain text로 받아올 수도 있고, 요즘은 JSON으로 받아오는 것이 대세라서 AJAJ로 불려야 한다는 의견도 있다.

### Promise란 무엇이며 코드가 어떻게 구성되어있는가

> promise는, MDN 문서의 말을 빌리자면 비동기작업이 맞이할 미래의 완료 또는 실패와 그 값을 나타냅니다. 코드는 프로미스를 생성하는 부분과 받아서 사용하는 부분으로 나눌 수 있습니다. Promise 객체는 executor 함수를 파라미터로 가지는데, 각각 미래에 성공, 실패 했을 때의 값을 싸서 반환하는 역할을 합니다. executor 함수 내에서 비동기 작업을 완료한 뒤에 성공하면 `resolve`, 실패하면 `reject` 함수를 호출하여 프로미스 생성 절차를 마무리합니다. <br><br>
> 다음으로 promise를 받아서 사용하는 부분에서는 생성된 프로미스 객체에 존재하는 `then`과 `catch`를 통해 값을 확인할 수 있습니다.

### Promise와 Callback의 차이점은 무엇이며 각각의 장단점에 대해 설명해달라

### Async, Await가 무엇이며, 사용해본 경험이 있는가

### 비동기를 처리할 수 있는 4가지 방법에 대해 이야기해 보고 장단점, 특징을 논하라(callback, promise, async/await, generator function)
