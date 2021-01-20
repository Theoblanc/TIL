# HTTP 프로토콜

## HTTP

> HTTP는 클라이언트와 서버 간에 통신을 합니다.

클라이언트는 요청을, 서버는 리소스를 제공하는 쪽입니다.

```
GET /index.html HTTP /1.1
HOST www.theoblanc.com
```

GET: 메소드를 의미합니다.

index.html: 리소스를 나타냅니다. (Request URI)

HTTP /1.1: 클라이언트 기능을 식별하기 위한 HTTP버전 번호 입니다.

```
HTTP/ 1.1 200 OK
DATE TUE, 10 May 2020 09:00:12 GMT
Content-Length: 362
Content-Type: text/html

BODY: {
    <html>
    ....
}
```

요청을 하면 리퀘스트 처리결과 입니다.
<br></br>

## HTTP는 상태를 유지하지 않는 프로토콜

---

Requset와 Response를 교환하는 동안에 상태를 유지하지 않습니다.

상태를 유지하기위해 쿠키, 세션이라는 기술이 도입되었습니다.
<br></br>

## 상태코드

---

|     | 클래스        | 설명                                        |
| --- | ------------- | ------------------------------------------- |
| 1xx | Informational | 리퀘스트를 받아들여 처리중                  |
| 2xx | Success       | 리퀘스트를 정상적으로 처리했음              |
| 3xx | Redirection   | 리퀘스트를 완료하기 위해서 추가 동작이 필요        |
| 4xx | Client Error  | 서버는 리퀘스트 이해 불가능                 |
| 5xx | server Error  | 서버는 리퀘스트 처리 실패                   |


