# 네트워크 기본 TCP/IP

## **TCP/IP**

일반적으로 사용하고 있는 네트워크는 TCP/IP 프로토콜에서 움직이고 있습니다.

컴퓨터와 네트웥크 기기가 상호간에 통신하기 위해서는 서로 같은방법으로 통신해야합니다.

프로토콜에는 여러가지 방법이 있습니다.

- 케이블 규격이랑 IP 주소 지정방법
- 떨어진 상대를 찾기 위한 방법과 그곳에 도달하는 순서
- 웹을 표시하기 위한 순서
- ....

이렇게 관련된 프로토콜들을 모은 것이 <span style="color: orange;">TCP/IP</span>라고 부릅니다.
<br></br>

---

### **TCP/IP 계층**

TCP/IP에서 중요한 개념 중 하는 계층(Layer)입니다.

- 애플리케이션 계층
- 트랜스포트 계층
- 네트워크 계층
- 링크 계층

총 4개로 나눠져있습니다.
<br></br>

**애플리케이션 계층** :

유저들에게 제공되는 애플리케이션에서 사용하는 통신의 움직임을 결정하고 있습니다. (EX. FTP, DNS, HTTP)

**트랜스포트 계층** (TCP):

통신하기쉽도록 HTTP 메세지를 패킷으로 분해

**네트워크 계층** (IP):

상대가 어디에 있는지 찾아 중계해 가면서 배송 (EX. 쓰리웨이 핸드쉐이킹)

**링크 계층** :
전반적으로 물리적인 부분을 담당합니다.
<br></br>

# URI와 URL

### **URI** (리소스 식별자: Uniform Resource Identifiers)

리소스를 식별하기 위해 문자열 전반을 나타냅니다.

### **URL**

리소스의 장소를 나타냅니다.

서로 비슷하지만 URI안에 URL이 있습니다.

<img src="https://t1.daumcdn.net/cfile/tistory/2416C94158D62B9E11" width="50%">
