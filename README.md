<<<<<<< HEAD
# DaengDaengMarket
댕댕마켓 개인 작업 레포지토리 

# vue-cli

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 개발 참여 인원


### 깃 커밋 규칙

🎨 => 폴더 파일 구조 개선, 코드 포맷 양식 개선
⚡️ => 성능 향상
🔥 => 코드나 파일 삭제
🐛 => 코드 버그 수정
🚑️ => 위급하게 고쳐야 할 때
✨ => 새로운 특성 도입
📝 => (README.md 파일 수정, 추가)
🔀 => 브랜치(branch merge)병합시
⏪️ => 커밋 되돌리기
💄 => UI, css 파일 생성(vue file) & 수정
➕ => 새로운 모듈 도입
➖ => 모듈 삭제
🚚 => 파일, 경로 이름 수정시
🔧 => 구성 파일 수정삭제(eslint or vue.config.js)
🔨 => 개발 스크립트 수정시(package.json)
🚀 => 프로젝트 배포
✏️ => 오타 수정
💬 => 단순 텍스트 입력, 추가
🍱 => assets 추가나 업데이트시

* 사이트 참조 https://gitmoji.dev/

### 깃 브랜치 Merge 규칙
1. 자신이 작성한 파일을 커밋한 후 자신의 레퍼지토리 내 브랜치나 혹은 fork 후 본인 레퍼지토리에서 푸쉬한다
2. 그 후 pull request를 날려준다

### Todolist 작성 및 issue 등록
- Todolist 작성
본인이 하고 있는 작업에 대하여 간단하게 Todolist에 남길 것
- 작업 완료 후 issue 등록
todolist에 간단하게 작성한 작업에 대하여 세부적으로 어떠한 부분을 바꿨는지 기록을 남길 것
- 새롭게 추가해야 할 일이 생각나거나 예정하는 일이 있다면 issue에 등록하기

### 1주차 주요 내용
- jQUery 파일 html,css,javascript 및 bootstrap을 이용하여 변경
기존 템플릿에서 jquery 파일이 제대로 작동하지 않는 원인모를 오류가 발생하여 이를 해결하기 위하여
각자 분담하여 구현하였음

### 2주차 주요 내용
- home page 컴포넌트화 작업
컴포넌트화 및 vuex 기반으로 구조화 작업 진행하였습니다.
=======
# <div align="center">댕댕마켓</div>

<!-- heading -->
# 백엔드

- Java
- Spring Boot
- Mysql
- JPA

<img width="1014" alt="도구 툴" src="https://justinnn980.github.io/devtoop.png">

<details>
<summary>1주차</symmary>

>계획설정 및 Restful API

BackEnd Plan

<img width="1014" alt="백엔드 계획표" src="https://justinnn980.github.io/backplan.png">

</details>



<details>
<summary>2주차</summary>
오프라인으로 만나서 초기 설정 완료
>bulid.gradle 모듈설치와 설정 공유

>DTO -> Service -> Entity(JPA)

>DB테이블 만들기, mysql 연동 

>상품,회원 상품이미지,채팅방,채팅메세지,찜,리뷰,신고 광고 테이블(Entity) 및 <br/> 더미값 추가 완료


공지사항 CRUD
>JAVA spring boot CRUD교육
</details>





<details>
 <summary>3주차</summary>

>홈 화면 데이터 뿌려주기

- 상품등록, 수정, 삭제, 상세

_________
>Spring Boot를 이용한 JWT 인증, 인가 구현

- 인증은 Request를 보낸 User가 누구인지? 올바른 User인지 확인하는 과정
- 인가는 Request가 수행하고자 하는 행동이 허가된 행동인지를 확인하는 과정

__________
>회원가입 기능 구현

### [수정사항]
1. MySQL쿼리를 보기 위해 JPA 방언처리를 했고
2. requestBuilder를 Entity로 변환하기 위해 User Entity에 생성자 및 builder 추가
3. UserController의 URI 오타 수정(/user -> /users)

### [추가사항]
1. requestDto 추가
2. 이메일 중복검사 exception 추가
3. JPA(entityManager)를 사용하는 repository 추가(회원가입과 이메일로 회원들 찾기)
4. 회원가입, 중복 체크 단위 테스트 및 Controller API 테스트

![스크린샷 2021-06-26 오전 3 13 23](https://user-images.githubusercontent.com/68089565/123473444-8819cb00-d633-11eb-92f0-0b3f0f5ed761.png)

<img width="1014" alt="스크린샷 2021-06-26 오전 3 44 03" src="https://user-images.githubusercontent.com/68089565/123473493-9b2c9b00-d633-11eb-902a-cab98b0006e2.png">

## API TEST CODE
> 아래와 같이 작성 시 랜덤 포트에서도 테스트가 가능하고 api의 기능이 정상 작동하는지(HTTP상태코드, 결과값)를 확인 가능합니다.

```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserControllerTest {

    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate testRestTemplate;

    @Autowired
    private JPAUserRepository jpaUserRepository;

    @Test
    @Transactional
    public void 회원가입_API() throws Exception {
        //given
        String email = "ssss@ss.ss";
        String tel = "010234534634";
        UserRequestDto dto = new UserRequestDto();
        UserRequestDto userDto = dto.builder()
                .email(email)
                .password("1234")
                .nickname("닉넴")
                .concern(BigCategory.BIG)
                .tel(tel)
                .build();
        String url = "http://localhost:" + port + "/users";

        //when
        ResponseEntity<String> responseEntity = testRestTemplate.postForEntity(url, userDto, String.class);

        //then
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).hasSizeGreaterThan(0);

        List<User> findUserByEmail = jpaUserRepository.findByEmail(email);
        assertThat(findUserByEmail.get(0).getEmail()).isEqualTo(email);
        assertThat(findUserByEmail.get(0).getTel()).isEqualTo(tel);
    }
} 

```
#### 결과
![스크린샷 2021-06-26 오전 3 45 35](https://user-images.githubusercontent.com/68089565/123473484-9667e700-d633-11eb-8995-23fe540e5abc.png)
</details>

<details>
<summary>4주차</summary>

>프론트엔드와 백엔드 연동

- 로그인, 회원가입, 상품, 공지사항

>로그인에 따른 네비바 및 페이지 접속
</details>

<details>
<summary>5주차</summary>
</details>

<details>
<summary>6주차</summary>
</details>


<details>
<summary>7주차</summary>
테스트 및 버그 수정
</details>


<br/>



## 파트 소개
| 이름  |  메인 역할  |
|:----:|:-------:|
| [강경민](https://github.com/kangkyoungmin) | `프론트엔드` |
| [장성필](https://github.com/hackjap) | `프론트엔드` |
| [김준현](https://github.com/whitejh) | `프론트엔드` |
| [백성규](https://github.com/sunggyupaik) | `백엔드` |
| [송영섭](https://github.com/LastCow9000)  | `백엔드` |
| [박준철](https://github.com/godtaehee)  | `백엔드` |  
>>>>>>> 4b6d34175770c3116724dd28ed86b1d74618f663
