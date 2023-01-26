# 👕 firebase, cloudinary를 이용한 반응형 쇼핑몰
## [📌 배포 사이트](https://papershop.netlify.app/)

<div align="center">
  <img width="500px" src="https://user-images.githubusercontent.com/107424974/214815238-2fa9e41b-5e8c-4e97-a467-245edfcf07a5.gif"/>
  <img width="500px" src="https://user-images.githubusercontent.com/107424974/214815926-573ad34f-3b17-41b6-8450-df961d11f875.gif"/>

#### 🗓 구현 일정 : 2022.12.25 - 2023.01.03

</div>

</br>

## 목차

1. [프로젝트 실행 방법](#프로젝트-실행-방법)
2. [구현사항](#구현사항)

</br>

## 프로젝트 실행 방법

<br>

```bash
# 프로젝트 패키지 설치
npm install
```

```bash
# 로컬 실행
npm start
```

```bash
# .env 파일에 해당 Firebase와 cloudinary 경로를 기입
REACT_APP_FIREBASE_API_KEY=""
REACT_APP_FIREBASE_AUTH_DOMAIN=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_DB_URL=""
REACT_APP_CLOUDINARY_URL=""
REACT_APP_CLOUDINARY_PRESET="" 
```


<br>

## 기술스택

> React, Firebase, cloudinary, axios, react-query, react-router-dom, tailwind-css

<br>


## 구현사항

#### 1. protected Route를 이용해 경로 보호

https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/index.js#L15-L38
https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/pages/ProtectedRoute.jsx#L1-L13

  - 상품 입고 page는 **admin 아이디만 허용**
  - cart page는 **로그인한 회원만 허용**
  - `protectedRoute.jsx`를 이용해 로그인 상태를 판별하여, **비로그인 상태일 시** 주소에 직접 경로를 입력하더라도 main으로 이동
  
<br>

#### 2. react-query 이용 로직을 hook으로 분리하여 관리

https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/hooks/useCarts.jsx#L5-L13
https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/pages/MyCart.jsx#L8-L12

  - cart page에서 수량 증감, 아이템 삭제 등의 action이 view에 실시간으로 반영 될 수 있도록 react-query의 mutate 함수를 이용
  - `useCarts.jsx`에 react-query의 ['cart'] key 이용 로직을 분리하여 관리를 용이하게 함
    
<br>

#### 3. 데이터 베이스와 구글 로그인 인증 시 Firebase, 이미지 업로드 시 cloudinary 이용

https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/api/firebase.js#L31-L36
https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/context/AuthContext.jsx#L5-L23

  - real time database와 구글 로그인은 firebase 이용
  - 로그인 정보는 `context api`를 이용해 전역으로 관리
  - 상품 입고시 상품 이미지 업로드는 cloudinary 이용

</br>

## Contributor

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Paperkeem"><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="100px;" alt=""/><br /><sub><b>김종이</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
