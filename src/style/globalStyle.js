import { createGlobalStyle } from 'styled-components'
import Lora from './font/Lora-Regular.ttf'
import Philosopher from './font/Philosopher-Regular.ttf'
import Nunito from './font/Nunito-Light.ttf'

export default createGlobalStyle`

 @font-face {
    font-family: 'Lora';
    src: url(${Lora}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: 'Philosopher';
    src: url(${Philosopher}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
}

@font-face {
    font-family: 'Nunito';
    src: url(${Nunito}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100vh;
  width: 100%;
  background: #f9f9f9;

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button,li{
    font-size: 14px ;
    font-family: 'Lora', sans-serif;
    color: #222;
  }

  h2{
    font-family: 'Philosopher', sans-serif !important;
    color: #222 !important;
  }
 

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .newHeader{
    background: #ededed;
  }
}

`
