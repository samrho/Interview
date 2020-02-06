## HTML

### HTML vs XML ?

-   HTML
    -   data를 `display`하기 위해 만들어짐
-   XML - data를 `transport`하기 위해 만들어짐

### XML vs JSON ?

#### JSON(Javascript Object Notation)

-   language independent format이고, server와 client(browser)의 통신에 사용되는 open-standard file format이다.
-   map data structure(faster, key-value system)
-   2002년 개발
-   supports array

#### XML(Extensible Markup Language)

-   tree data structure
-   1996년 개발
-   array not supported

### script tag는 왜 마지막에 넣는가?

> browser는 HTML file을 쭉 훑어 내려가다 `<script>` tag를 만나면 parsing & DOM tree building 작업을 멈추고 `<script>` tag 내부에 있는 자바스크립트 code chunk나 src에 명시된 파일을 찾아가 코드를 실행한다.  
> 어쨌든 화면을 그리는 작업이 일시중단되기 때문에 사용자 경험에 나쁜 영향을 끼칠 수가 있기 때문에, 맨 마지막 라인에 이 tag를 삽입하는 것이 일반적이다.
