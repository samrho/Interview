## CSS

### 이벤트 버블링과 캡처링의 차이를 말해 보아라

Event bubbling이란, 하위 element에서 상위 element로 event가 propagate되는 현상이다. Event capturing이란 반대로 상위 element에서 하위 element로 event가 전파되는 현상이다. 정반대의 것이라고 할 수 있겠다.  
아래 예시 코드에서 `addEventListener` 함수 내에 3번째 argument로 option 객체를 넣을 수 있는데, 그 property로 `capture: true`를 주면 버블링 대신 캡쳐링 방식으로 이벤트를 전파할 수 있다.

```js
<body>
    <div class="one">
        <div class="two">
            <div class="three">
            </div>
        </div>
    </div>
</body>
<script>
  var divs = document.querySelectorAll('div');
  divs.forEach(function(div) {
      div.addEventListener('click', logEvent, {
        //이 부분이 달라짐.
        capture: true
      });
  });

  function logEvent(event) {
      console.log(event.currentTarget.className);
  }
</script>
```

### CSS이벤트 제어 방법(event delegation, event bubbling 등)

> 위에서 언급한 이벤트 버블링, 이벤트 캡쳐링을 통해서 event delegation을 구현할 수 있다. `위임`이라는 뜻을 가지고 있는 delegation이라는 단어를 보면 알 수 있듯이, 이벤트를 핸들하기 위해 리스너를 element들에게 모두 붙이는 대신, common ancestor에게 한 번만 붙여주고 target을 확인하여 이벤트 핸들링을 진행하는 방법이다.
