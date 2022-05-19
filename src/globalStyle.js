import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: sans-serif;
    }
    body{
        background-color: #400;
    }
`

export default GlobalStyle;