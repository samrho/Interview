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
