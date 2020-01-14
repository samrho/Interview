## Network

### RESTful API 가 무엇인가, 아는대로 다 말해달라

    -   로이 필딩이라는 박사 논문에서 제시된 개념. 6가지 특징이 있다.
        1. Stateless
        2. code on-demand
        3. Hierarchy
        4. Uniform Resource
        5. Caching
        6. Server-client architecture
    -   두 개를 기억하면 된다. 자원과 그 자원에 대한 행위
    -   리소스에 대한 응답 코드

### 보안은 서버쪽에서 많이 신경쓰고 있지만, 프론트엔드 개발에서 보안관련 이슈는 어떠한 것들이 있는가

### Wireshark 에 대해 알고 있는가

-   패킷 분석 도구이다. 어느 시점에 각종 프로토콜로 호스트와 타겟 머신이 주고받는 패킷들의 스냅샷을 찍어 분석할 수 있게 하는 도구이다.

### HTTP 통신의 문제점에 대해서 아는대로 말해달라

-   각종 보안 취약점(암호화가 전혀 되어 있지 않음)
-   그렇기 때문에 HTTPS가 나오게 되었다.

### CORS(Cross-Origin Resource Sharing)는 무엇인가 왜 이러한 방법이 정의 되었으며, 본인이 코드를 작성하면서 CORS와 관련하여서 경험하였던 이슈는 무엇인가

### 간단한 데이터를 클라이언트로만 관리 할수 있는가, 이와 관련해서 브라우저 에서 어떠한 것들을 지원하고 있는가, 예를 들면 소셜 로그인같은 것들에 대한 브라우저 종료시 발생하는 문제에 대응 경험이 있는가

### GET method와 POST method의 차이점이 무엇인가?

### 브라우저 URL 창에 naver.com을 치면 어떻게 되는가?

-   DNS server에 쿼리를 날려 IP 주소를 받아 온다. 이 때, 4가지 cache를 뒤지는데, 다음과 같다.
    1. Browser cache
    2. OS cache
    3. Router cache
    4. ISP cache
-   Cache hit이 발생했으면 propagation을 중지하고 IP 주소를 반환한다.
-   Browser가 IP 주소를 받으면 그 IP 주소를 가지고 있는 server와 TCP connection을 맺는다.
    -   (다른 프로토콜로도 가능하지만 TCP가 일반적이다.)
    -   3-way handshake를 통해 이것이 가능하다. SYN, SYN&ACK, ACK을 차례로 교환한다.
-   맺어진 connection 위에서 browser(client)는 server에게 HTTP request를 보낸다.
    -   method는 get, post 등 다양하다. ㄷ
-   server는 이 request를 가지고 작업을 한 뒤에 response를 보낸다.
-   browser가 server로부터 받은 데이터를 토대로 display한다.
-   먼저, HTML, CSS를 parse하여 DOM tree, CSSOM tree를 만들고 이를 조합하여 render tree를 완성한다.
-   이 render tree를 바탕으로 브라우저가 DOM들을 하나씩 배치해 나간다.
