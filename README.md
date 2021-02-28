# huWeb

### huWeb팀 (2020.12.22 ~ 2021.02.14)

**2020년 2학기 스터디 상생플러스**

4가지 편집 기능과 사진첩 기능을 제공하는 이미지 편집 사이트

# Role

|                            이름                             |              역할              |                           책임                            |
| :---------------------------------------------------------: | :----------------------------: | :-------------------------------------------------------: |
|   [kimseongeun1212(김성은)](https://github.com/kimseongeun1212)     |       Team Leader 👑        |                전체적인 프로젝트 관리 담당                |
|   [youngseo0526(김영서)](https://github.com/youngseo0526)   |        Back-end Coder         |               데이터베이스 및 Server Side 기능 구현 및 관리               |
|   [mok010(목은경)](https://github.com/mok010)   |        Front-end Coder         |               Client Side 기능 구현 및 관리               |
|   [leemijung(이미정)](https://github.com/leemijung)   |        Front-end Coder         |            Client Side 기능 구현 및 관리                  |
|   [yoon0223(윤혜진)](https://github.com/yoon0223)   |        Front-end Coder         |              Client Side 기능 구현 및 관리                |

-------------------

**1. 메인 기능**

- **모자이크** : 이미지를 흐릿하게 변환

- **흑백 필터** : 컬러로 된 이미지에 흑백 필터를 입혀 보정

- **밝기 조절** : 이미지의 밝기를 어둡게 혹은 밝게 조절

- **크키 변환** : 이미지의 크기를 축소, 확대

- **gallery** : 구현된 이미지를 업로드 할 수 있는 사진첩

-------------------

**2.개발 도구**

- **IntelliJ** : Meteor 구동 및 Javascipt 코드 구현

- **MongoDB** : 기능 구현 전 이미지, 기능 구현 후 이미지 저장

- **Kakao Oven** : 구체적인 UI 스케치

-------------------

**3. 프로젝트 환경 구현**

#### Install meteor

* [미티어 설치](https://www.meteor.com/install)

#### npm install (최초 1회 실행)

```
meteor npm install
```

#### Run

```
meteor
```

* 실행 후 웹 브라우저에서 localhost:3000 접속  (```meteor run --port <port number>```로 포트번호 지정 가능)

------------------------

**4. 웹사이트 실행 화면**

<br>

- 커버 화면

시작하기 버튼을 눌러 메인 화면으로 넘어감

![image](https://user-images.githubusercontent.com/60006301/108483774-72d80d00-72de-11eb-823d-00da329f2483.png)

<br>

- 메인 화면

4가지 주요 기능 선택 가능

![image](https://user-images.githubusercontent.com/60006301/108483502-28ef2700-72de-11eb-91be-12c54361f4e2.png)

<br>

- 모자이크 적용할 이미지 업로드 화면

내 pc에서 모자이 기능을 적용할 이미지를 업로드, 이미지와 함께 저장할 코멘트 입력

![image](https://user-images.githubusercontent.com/60006301/108483595-40c6ab00-72de-11eb-8e12-f9fb486eaa6e.png)

![image](https://user-images.githubusercontent.com/60006301/108484742-7cae4000-72df-11eb-8c03-fe7d1ec1d446.png)

<br>

- 모자이크 처리된 이미지 도출 화면

모자이크 처리된 이미지가 나타남, 저장하기 버튼을 눌러 내 pc로 다운로드 가능

![image](https://user-images.githubusercontent.com/60006301/108484998-cb5bda00-72df-11eb-9320-a40981c34bd2.png)

<br>

- 흑백 필터 적용할 이미지 업로드 화면

내 pc에서 흑백 필터 기능을 적용할 이미지를 업로드, 이미지와 함께 저장할 코멘트 입력

![image](https://user-images.githubusercontent.com/60006301/108485683-8ab09080-72e0-11eb-9e67-603743deb6d6.png)

![image](https://user-images.githubusercontent.com/60006301/108486169-1f1af300-72e1-11eb-92bd-c1caf237f8b9.png)

<br>

- 흑백 필터 처리된 이미지 도출 화면

흑백 필터 처리된 이미지가 나타남, 저장하기 버튼을 눌러 내 pc로 다운로드 가능

![image](https://user-images.githubusercontent.com/60006301/108485980-e4b15600-72e0-11eb-9457-36b57786fb78.png)

<br>

- 밝기 조절 적용할 이미지 업로드 화면

내 pc에서 밝기 조절 기능을 적용할 이미지를 업로드, 이미지와 함께 저장할 코멘트 입력

![image](https://user-images.githubusercontent.com/60006301/108486584-918bd300-72e1-11eb-88f6-d1adb4536b9c.png)

![image](https://user-images.githubusercontent.com/60006301/108486568-8df84c00-72e1-11eb-99f4-fe17007764c3.png)

<br>

- 밝기 조절 처리된 이미지 도출 화면

밝기 조절 처리된 이미지가 나타남, 저장하기 버튼을 눌러 내 pc로 다운로드 가능

![image](https://user-images.githubusercontent.com/60006301/108486777-ce57ca00-72e1-11eb-88ce-24077363069d.png)

<br>

- 크기 변환 적용할 이미지 업로드 화면

내 pc에서 크기 변환 기능을 적용할 이미지를 업로드, 이미지와 함께 저장할 코멘트 입력

![image](https://user-images.githubusercontent.com/60006301/108487524-b6347a80-72e2-11eb-9bb9-3ee52577418f.png)

![image](https://user-images.githubusercontent.com/60006301/108487556-bd5b8880-72e2-11eb-8268-92dec76d6c32.png)

![image](https://user-images.githubusercontent.com/60006301/108487563-bfbde280-72e2-11eb-9607-1d60ab03fa6a.png)

<br>

- 크기 변환 처리된 이미지 도출 화면

크기 변환 처리된 이미지가 나타남, 저장하기 버튼을 눌러 내 pc로 다운로드 가능

![image](https://user-images.githubusercontent.com/60006301/108487763-f693f880-72e2-11eb-87c7-cad67d6a249d.png)

<br>

- gallery 메인 화면

![image](https://user-images.githubusercontent.com/60006301/108488095-54284500-72e3-11eb-9e79-86ae05cbd29c.png)

<br>

- gallery에 올릴 이미지 업로드 화면

![image](https://user-images.githubusercontent.com/60006301/108488233-7b7f1200-72e3-11eb-846d-98047f1392be.png)

![image](https://user-images.githubusercontent.com/60006301/108488434-bc772680-72e3-11eb-8a8a-7e1fb77d7964.png)

<br>

- huWeb팀 소개 화면

-------------------

**5. 참고**

[Meteor- guide](https://guide.meteor.com/)

[Meteor - API docs](https://docs.meteor.com/)

[Tutorialpoint - Meteor](https://www.tutorialspoint.com/meteor)

[TCP School](http://tcpschool.com/css/css_intro_basic)

[npm](https://www.npmjs.com/)

[mongodb - docs](https://docs.mongodb.com/)

[bootstrap - docs](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

