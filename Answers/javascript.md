## Javascript

### Object.create의 역할은 무엇인가요?

-   argument로 들어오는 객체를 프로토타입으로 가지는 새 객체를 만들어 return한다.

### 자바스크립트에서 모듈내의 private한 속성을 만드는 방법을 아는대로 쓰세요.

-   자바스크립트는 태생적 한계로 인해 private member를 explictly 만들 수가 없다. 대신 개발자들 사이에서 convention으로 implicitly 하게 private member임을 알릴 수가 있다. 바로 `_(underscore)`를 이름 앞에 적어 주는 것.
-   [TC39 experimental] class라면, `#` 사인을 붙여서 클래스임을 나타낼 수 있다. 이것뿐만 아니라 TC39에는 public static field, method를 정의할 수 있게 한다.

-   `symbol`을 이용한다.
    ```js
    // sym1 === sym3 -> false
    var sym1 = Symbol("a");
    var sym2 = Symbol("b");
    var sym3 = Symbol("a");
    ```
    위의 성질을 이용하여..
    ```js
    const nameSymbol = Symbol("name");
    Person.prototype.getName = function() {
    	return this[nameSymbol];
    };
    ```
    와 같이 구현할 수 있다. `getName`을 하지 않고 `obj.name`과 같이 하면.. `Symbol('name')`과 `name`은 엄연히 다른 것이기 때문에 `undefined`가 뜬다.
-   `closure`를 이용한다.

### JS에서 재귀 호출로 인한 stack overflow를 막을 수 있는 방법은?

-   `tail recursion(꼬리 재귀)`를 이용한다. 전통적인 함수 콜스택에 함수가 return되면 다시 돌아갈 자리를 저장해놓는다. 이 경우에 recursive 함수를 실행하고 난 결과를 가지고 연산을 처리하고서야 바깥 함수의 실행이 끝나기 때문에 무조건 돌아갈 주소값이 필요하다. 그런데, `꼬리재귀`의 경우에는 마지막에 실행을 마치고 반환된 값으로 더 실행할 코드가 없어 돌아갈 곳이 필요가 없으므로 compiler단에서 optimization이 들어간다.

### closure 와 스코프관계를 설명해보세요.

### == 보다, === 를 써야할때는?

-   `=` : 대입 연산자.
-   `==` : 타입에 관계없이 값을 비교한다.
-   `===` : 타입까지 체크한다.

### ES6의 Class extends 내부 동작원리에 대해서 설명해보세요.

### 객체를 탐색하는 방법에 대해서 2가지를 작성해보세요.

-   뭔 두 가지야 여러 개 해 볼게

1. `for ... in`
    ```js
    const obj = {
    	a: 1,
    	b: 2,
    	c: 3,
    	d: 4,
    	e: 5,
    	f: 7,
    };
    for (const key in obj) {
    	console.log(obj[key]);
    }
    ```
    이 떄, 주의해야 할 점은, obj.key 안 된다는 것이다. 왜냐하면 `obj.a`와 같이 접근해야 하는데, `obj."a"`가 되어버리기 때문이다. key는 string type이다.
    `obj.hasOwnProperty(key)`를 해주고 넘어가는 것이 `for ... in loop`가 prototype chain을 따라서도 돌기 때문에 안전성 측면에서 더 훌륭하다.
2. `Object.keys(obj)` -> 객체의 key들을 담은 배열을 return
3. `Object.values(obj)` -> 객체의 value들을 담은 배열을 return
4. `Object.entries(obj)` -> [key, value]의 array를 뱉는다.
5. `Object.getOwnPropertyNames(obj)` -> 객체의 key들을 담은 배열을 return

### NodeList 타입을, Array에 있는 reduce메서드를 사용하는 방법은?

`[].slice` 이든지, `randomArr.slice`이든지 어쨌든 `Array.prototype.slice`를 참조하기 때문에(`===` 연산을 해보면 true라고 나온다. ) 이 method를 빌려 작업을 처리하려고 한다. slice를 비롯한 내장 array 메서드들은 this를 참조한다. 그렇기 때문에 method만 빌리고 method 내부에서 참조하는 object를 강제로 잡아 넣어 주면 우리가 원하는 작업을 성취할 수 있다. 바로 아래와 같이 말이다.

```js
const nodeList = document.querySelectorAll(".random-class");
const converted = [].slice.call(nodeList);
// or
const converted2 = Array.prototype.slice.apply(nodeList);
```

좀 더 모던한 방식으로 구현하려고 하면 아래와 같이 ES6 `from` 메서드를 호출해 주면 된다.  
주의해야 할 점은, 유사배열이 되기 위한 조건은 객체의 key는 `0`부터 시작하는 숫자여야 하고, 이 키-값 pair의 개수가 `length`라는 key의 값으로 들어와 있어야 한다는 것이다.

```js
const converted3 = Array.from(nodeList);
```

`slice()` 함수는 내부적으로 `this` value를 사용해 동작한다. 그런데 일반적으로 `slice()`함수를 사용하듯이 `nodeList.slice()`를 해주면 object의 property가 함수인(method) 케이스이기 때문에
call이나 apply나, 함수를 바로 실행해버리는 것은 동일한데 argument로 하나 하나를 받느냐 array로 받느냐에서 차이를 보이기 때문에  
첫 번째 argument로 오는 this로 binding될 object가 오는 것은 동일하다. 그리하여 apply로 해도 되고 call로 해도 무방하다.

### undefined와 null의 차이점을 설명하세요.

-   undefined는 변수가 선언되기는 했으나 값이 할당되지 않았을 때. 즉 값이 없다는 말이다.
-   null은 엄연히 할당이 된 값이다. null 값이라고도 하지 않는가.
-   `null == undefined` -> `true`
-   `null === undefined` -> `false`

### 아래처럼 동작하는 flatten함수를 reduce를 활용해서 만들어보세요.

```js
const arr = [
	[1, 2],
	[3, 4],
	[5, 6],
];
const flattenedArray = flatten(arr);
console.log(flattenedArray); //[1, 2, 3, 4, 5, 6];
```

```js
const reducer = (acc, item) =>
	acc.concat(Array.isArray(item) ? flat(item) : item);
const flat = (arr) => arr.reduce(reducer, []);
```

### 객체를 복사해서 새로운 객체를 만들고 싶습니다. 코드를 구현해보세요. (객체의 깊이는 1단계만 있다고 가정)

-   복사는 3가지가 있다.
    -   단순 객체복사
        -   `foo = bar`
        -   위와 같이 하면 똑같은 놈들을 가리키기 때문에 원하는 결과를 얻을 수 없을지도 모른다.
    -   얕은 복사
        -   spread syntax (`const newObj = {...oldObj}`)
        -   `Object.assign(target, source1, source2...)`
        -   문제점: 객체가 nested되어 있을 때, bitwise 복사이기 때문에 객체의 memory addr이 복사된다.
    -   깊은 복사
        -   `JSON.parse(JSON.stringify(obj))`를 통해 성취할 수 있다. 내부적으로 재귀적으로 복사한다.

### Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.

위에서 설명했던 것처럼, 아래 코드에 사용된 `Array.from` 메서드는 ES6에 추가된 것이기 때문에, 모든 브라우저에서 사용할 수가 없다.

```js
const elms = document.body.children;
const converted = Array.from(elms);
```

그리하여 폴리필 코드를 작성해 본다면 아래와 같이 할 수 있을 것이다.

```js
const elms = document.body.children;
const converted = [].slice.call(elms);
```

설명은 위를 참고하도록 한다.

### prototype 의 동작방식에 대해서 설명해보세요.

### 순환되는 캐로셀UI의 구현 원리에 대해서 설명해보세요.

### Event 객체에 대해서 설명해보세요.

### Array.from 이 모든 브라우저에서 동작하도록 polyfill코드를 만들어보세요.

### arrow 함수의 this가 결정되는 방식을 설명해보세요.

-   그냥 함수의 this binding을 먼저 설명하겠다.
    1. 객체의 property로서 함수가 올 때(method), 그 함수는 그 함수를 둘러싸고 있는(포함하고 있는) 객체를 가리킨다.
    2. method가 아닌 경우, 그냥 함수 내부에서 this를 찍어보면 global(browser에서는 window) 객체를 가리킴을 알 수 있다. strict mode에서는 암시적으로 전역 객체에 this를 바인딩하는 것을 허용하지 않으므로 undefined가 뜬다.
    3. new keyword를 사용해서 생성자 함수로 객체를 만들면 그 함수 안에서 가리키는 this는 새로 만들어지는 그 객체 자신이다.
    4. `func.call(obj, param1, param2)`, `func.apply(obj, [param1, param2])`, `func.bind(obj, param2, param2 )`는 obj를 this에 binding한다. `call` 과 `apply`는 바로 실행을 해버리고, `bind`는 새 함수를 return한다.
        > 그런데,
        > arrow 함수는 태생적으로 자신의 고유 this Binding을 가지고 있지 않다. 자신을 둘러싸고 있는 scope를 가리킨다.(일반적인 변수 lookup rules).

*   비동기의 장점을 설명해보세요.

### bind 가 필요한 상황을 간단한 코드로 보여주세요.

-   ```js
    const obj = {
    	val: 1,
    	func1: function() {
    		console.log(this.val);
    		function func2(arg1, arg2) {
    			console.log(this, arg1, arg2);
    		}
    		var bound = func2.bind(this, "param1", "param2");
    		bound();
    	},
    };
    ```

-   func1 함수는 객체의 method이므로 this가 포함하고 있는 객체에 잘 binding되지만, 내부 함수는 그냥 함수로 간주되기 때문에 func2 함수 내부에서는 this가 전역 객체에 binding된다. 명시적으로 함수에 this binding을 해주기 위해 .bind() 함수를 사용한다. bind() 함수의 첫 번째 argument는 this로 가리킬 놈이고

### CommonJS 스펙에 대해 설명해보세요.

### 클로저로 동작되는 상황을 예시코드로 보여주세요.

### 자바스크립트의 원시 타입(Primitive Data Type)은 몇가지이며, 전부 말해달라

-   Number, String, Boolean, Null, Undefined, (Symbol) 6가지.

### 자바스크립트의 Number Type은 다른 언어들과 차이점이 무엇인가, 왜 하나만 존재하는가

-   자바스크립트의 Number type은 언제나`double-precision 64-bit binary format IEEE 754`로 표시한다. 다른 언어들에서 찾아볼 수 있는 `double` type인 것이다.

### 실행 컨텍스트(Execution Context)에 대해 설명해달라

-   https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0
-   execution context는 자바스크립트 코드가 평가되고 실행되는 추상화된 개념이다. this value, objects, functions 등이 이걸 구성한다.
-   두 가지가 있다. global execution context과 functional execution context.
    -   global execution context
        -   자바스크립트 엔진이 스크립트를 처음 만났을 때. 전역 객체를 만들고 그걸 this에 binding한다.

### [x] 자바스크립트의 호이스팅(Hoisting)은 어떻게 이루어져 있는가

    > 자바스크립트의 hoisting.. 함수, 변수, 클래스의 선언부가 맨 위로 끌어올려지는 특징이다. var의 경우에는 선언부 없이 사용될 경우에는 global에 binding된다. 또한 var는 선언되기 전에 접근하면 undefined

### 클로저(Closure)란 무엇이며, 왜 이러한 패턴을 사용하는가

    This

### 자바스크립트에서 This는 몇가지로 추론 될수 있는가, 아는대로 말해달라

1. 객체의 프로퍼티로 함수가 있을 때 그 객체에
2. 그냥 함수에서 찍으면 global.
3. new keyword로 생성자 함수를 통해 call될 때
4. apply, call, bind 등을 통해.
5. 화살표 함수에서는 enclosing execution context.

### [x] Call, Apply, Bind 함수에 대해 설명해달라

-   call, apply, bind 함수는 함수의 prototype 내에 존재하는 method이다. call과 apply 함수는 함수를 바로 실행하는 반면, bind 함수는 새로운 함수를 return한다.
