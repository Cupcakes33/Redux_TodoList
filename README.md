# 📔 나오밥 ( 나는 오늘 밥을 머거따 )

![main](https://user-images.githubusercontent.com/108935568/209050088-6e3c7f21-78fd-4aa9-b542-5cacb17b099c.png)

## 📔 프로젝트 소개

- 가끔은 동심으로 돌아가고 싶을 때가 있어요.. 😢
- 어릴때 쓰던 그림일기를 써봐요 🥰

## 📔 공동작업 노션

<a href="https://www.notion.so/5-SA-27f1b60717ef4f0fa39193de00ce3374" target="_blank"> 5조 미니프로젝트 SA 링크 </a><br>

## 📔 Members

1. 우주호(FE)
2. 정창원(FE)
3. 이승재(FE)
4. 김진솔(BE)
5. 나지원(BE)
6. 이민용(BE)

## 📔 git Convention

<a href="https://velog.io/@ninto_2/%EC%BB%A4%EB%B0%8B-%EC%BB%A8%EB%B2%A4%EC%85%98" target="_blank"> 커밋 컨벤션 참고링크 </a><br>
<a href="https://gmlwjd9405.github.io/2018/05/11/types-of-git-branch.html" target="_blank"> 깃 플로우 컨벤션 참고링크</a>

## 📔 주요 기능

- 회원가입(유효성검사)
- 로그인(토큰저장)
- 로그인 유무에 따른(토큰 만료시) 메인페이지로 이동
- 유저 닉네임, 자기소개 및 프로필사진 수정기능
- 그림일기 작성기능
- 그림일기 조회기능

## 📔 STACK

<div align=center>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"/>
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=Vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
</div>

## 📔 DEV-Tool

<div align=center>
<img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=white"/>
<img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/ZEP-6476df?style=for-the-badge&logoColor=white"/>
</div>

## 📔 Trouble Shooting(FE)

<details>
<summary> 1. 회원가입, 로그인 </summary>

<div markdown="1">	
<br>
</div>
</details>
<details>
<summary> 2. 캔버스 </summary>

- 그림일기에 메인이 되는 캔버스 부분을 구현

1. react의 useRef 훅을 javascript의 querySelector 처럼 사용
2. 캔버스 관련 API 공식문서와 블로그 포스팅 등을 보고 양식에 맞춰 구현
3. 초기 구상보다 고려해야 할 요소가 많아서 까다로웠음

<div markdown="1">	
<br>
</div>
</details>
<details>
<summary> 3. 토큰 </summary>

- 우주호

1. 어떻게 인증을 유효하게 유지할 수 있을지, 인증이 되지 않았을 때 어떠한 방식으로 대응할 것인지를 생각
2. BE 에서 Bearer 토큰을 사용한 인증 방식을 채택하였고 프론트에서는 인증할 때 마다 토큰을 보내주어야 했음.

```
const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `Bearer ${token}` : null;
};

instance.interceptors.request.use(async (config) => {
  config.headers["Authorization"] = getToken();
  return config;
});

instance.interceptors.response.use(
  (response) => {
    response.headers["Authorization"] = getToken();
    response.status === 401 && localStorage.removeItem("token");
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      window.location.replace("http://localhost:3000/");
    }
  }
);
```

2-1. 토큰을 가져오는 유틸 함수를 만들었음. 토큰이 없을경우 null 처리.
2-2. axios의 interceptors 메소드를 사용해서 요청을 보낼때 headers에 토큰을 담아 인증요청
2-3. response 시 토큰이 인가되지 않았을 경우 메인페이지로 replace

<div markdown="1">	
<br>
</div>
</details>
<details>
<summary> 4. formData 관련 이슈 </summary>
1. canvas 이미지 처리 관련
1-1. 캔버스 이미지를 base64 파일로 변환받아서 어떻게 하면 서버로 보낼 수 있을지 고민.
1-2. base64는 이미지를 8비트 이진 데이터로 바꾸어 주어 손실은 없으나 용량이 크고 url이 길어 서버 전송엔 부적합.
2. 채택한 방법은 base64 -> blob -> formData
3. 길이가 긴 base64 url을 blob(이진 데이터)형태로 변환 후 formData 형식에 append 한 후 서버 전송. 
<div markdown="1">	
<br>
</div>
</details>
<details>
<summary> 5. 프로필 수정 이미지가 깨지는 현상 </summary>
1. 프로필 업데이트시 사진을 input type='file' 로 보내 base64로 썸네일을 그려주고 위와 동일하게 blob -> formData 변환 로직으로 전송.
2. 그런데 프로필 이미지를 업로드 하지 않으면 프로필 이미지가 깨지는 현상이 있었음.
3. 해당 유저의 프로필을 thunk 로 받아와서 썸네일에 업로드 하는 로직.
4. 문제는 썸네일로 받아온 서버에 저장된 url을 blob 으로 변환하는 로직 때문.

```
  const selfIntroUpdateSwitchHandler = () => {
    const blob = dataURItoBlob(profileImgStore);

    let formData = new FormData();
    formData.append("nickname", updateStore.nickname);
    formData.append("selfIntro", updateStore.selfIntro);
    blob.size > 20 && formData.append("image", blob, "img.file");
    dispatch(putAsyncUser(formData));
  };
```

5. 조건문으로 blob 변환 후 사이즈가 20 이상이면(정상적인 이미지라면) 같이보낼 수 있도록 조건문 설정

<div markdown="1">	
<br>
</div>
</details>

## 📔 Trouble Shooting(ALL)

1. 스코프 변경
2. CORS
