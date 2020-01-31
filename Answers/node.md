## Node

### node의 middleware의 동작방식을 설명해보세요.

일단 기본적인 생김새를 한 번 살펴 보자.

```js
const express = require("express");
const app = express();
app.use("/user/:id", function(req, res, next) {
	console.log(req.params.id);
	next();
});
```

node에만 종속된 middleware라는 개념은 존재하지 않고, 보통은 **Express**나 **Koa**와 같은 서버 프레임워크에서 사용되는 개념이다.  
위의 코드를 살펴 보면, `express` 모듈을 require해 주고 인스턴스를 만들어 `app`이라는 변수에 할당한다. app의 method 중 `use`를 통해 미들웨어를 사용할 수 있다.

`app.use` method는 argument의 개수에 따라 다르게 동작하도록 overload되어 구현되어 있다. 일단 여기서는 기본적인 사용법을 위해 가장 많이 사용되는 `app.use(<uri>, <미들웨어 함수>)` 형태를 설명하도록 하겠다. 그렇다, 일단 미들웨어는 **함수** 형태를 띤다. 가독성, 테스트 가능한 코드를 작성하기 위해 inline으로 anonymous function을 위와 같이 작성하지 않고 분리하는 것이 좋다.

저 URI로 HTTP request가 들어왔을 때 요청과 함께 전달된 parameter, 쿠키를 비롯한 환경에 접근하여 값을 조작할 수도 있고, client에게 `res.send()` 따위의 방법으로 응답을 전달할 수도 있다.  
또한 `next()`를 통해 다음 미들웨어에게 control을 넘길 수 있기 떄문에 middleware라는 이름이 적절하다고 본다.
