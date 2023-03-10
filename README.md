# ๐ firebase, cloudinary๋ฅผ ์ด์ฉํ ๋ฐ์ํ ์ผํ๋ชฐ
## [๐ ๋ฐฐํฌ ์ฌ์ดํธ](https://papershop.netlify.app/)

<div align="center">
  <img width="500px" src="https://user-images.githubusercontent.com/107424974/214815238-2fa9e41b-5e8c-4e97-a467-245edfcf07a5.gif"/>
  <img width="500px" src="https://user-images.githubusercontent.com/107424974/214815926-573ad34f-3b17-41b6-8450-df961d11f875.gif"/>

#### ๐ ๊ตฌํ ์ผ์  : 2022.12.25 - 2023.01.03

</div>

</br>

## ๋ชฉ์ฐจ

1. [ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ](#ํ๋ก์ ํธ-์คํ-๋ฐฉ๋ฒ)
2. [๊ตฌํ์ฌํญ](#๊ตฌํ์ฌํญ)

</br>

## ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ

<br>

```bash
# ํ๋ก์ ํธ ํจํค์ง ์ค์น
npm install
```

```bash
# ๋ก์ปฌ ์คํ
npm start
```

```bash
# .env ํ์ผ์ ํด๋น Firebase์ cloudinary ๊ฒฝ๋ก๋ฅผ ๊ธฐ์
REACT_APP_FIREBASE_API_KEY=""
REACT_APP_FIREBASE_AUTH_DOMAIN=""
REACT_APP_FIREBASE_PROJECT_ID=""
REACT_APP_FIREBASE_DB_URL=""
REACT_APP_CLOUDINARY_URL=""
REACT_APP_CLOUDINARY_PRESET="" 
```


<br>

## ๊ธฐ์ ์คํ

> React, Firebase, cloudinary, axios, react-query, react-router-dom, tailwind-css

<br>


## ๊ตฌํ์ฌํญ

#### 1. protected Route๋ฅผ ์ด์ฉํด ๊ฒฝ๋ก ๋ณดํธ

https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/index.js#L15-L38
https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/pages/ProtectedRoute.jsx#L1-L13

  - ์ํ ์๊ณ  page๋ **admin ์์ด๋๋ง ํ์ฉ**
  - cart page๋ **๋ก๊ทธ์ธํ ํ์๋ง ํ์ฉ**
  - `protectedRoute.jsx`๋ฅผ ์ด์ฉํด ๋ก๊ทธ์ธ ์ํ๋ฅผ ํ๋ณํ์ฌ, **๋น๋ก๊ทธ์ธ ์ํ์ผ ์** ์ฃผ์์ ์ง์  ๊ฒฝ๋ก๋ฅผ ์๋ ฅํ๋๋ผ๋ main์ผ๋ก ์ด๋
  
<br>

#### 2. react-query ์ด์ฉ ๋ก์ง์ hook์ผ๋ก ๋ถ๋ฆฌํ์ฌ ๊ด๋ฆฌ

https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/hooks/useCarts.jsx#L5-L13
https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/pages/MyCart.jsx#L8-L12

  - cart page์์ ์๋ ์ฆ๊ฐ, ์์ดํ ์ญ์  ๋ฑ์ action์ด view์ ์ค์๊ฐ์ผ๋ก ๋ฐ์ ๋  ์ ์๋๋ก react-query์ mutate ํจ์๋ฅผ ์ด์ฉ
  - `useCarts.jsx`์ react-query์ ['cart'] key ์ด์ฉ ๋ก์ง์ ๋ถ๋ฆฌํ์ฌ ๊ด๋ฆฌ๋ฅผ ์ฉ์ดํ๊ฒ ํจ
    
<br>

#### 3. ๋ฐ์ดํฐ ๋ฒ ์ด์ค์ ๊ตฌ๊ธ ๋ก๊ทธ์ธ ์ธ์ฆ ์ Firebase, ์ด๋ฏธ์ง ์๋ก๋ ์ cloudinary ์ด์ฉ

https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/api/firebase.js#L31-L36
https://github.com/Paperkeem/react-ShoppingMall/blob/ff05db334aa76f6fc026e0e1cb6cb1006b16f931/src/context/AuthContext.jsx#L5-L23

  - real time database์ ๊ตฌ๊ธ ๋ก๊ทธ์ธ์ firebase ์ด์ฉ
  - ๋ก๊ทธ์ธ ์ ๋ณด๋ `context api`๋ฅผ ์ด์ฉํด ์ ์ญ์ผ๋ก ๊ด๋ฆฌ
  - ์ํ ์๊ณ ์ ์ํ ์ด๋ฏธ์ง ์๋ก๋๋ cloudinary ์ด์ฉ

</br>

## Contributor

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/Paperkeem"><img src="https://user-images.githubusercontent.com/107424974/212338824-fc8fd767-7ed3-4600-9596-7665f823be03.jpeg" width="100px;" alt=""/><br /><sub><b>๊น์ข์ด</b></sub></a><br /></td>
    </tr>
  </tbody>
</table>
