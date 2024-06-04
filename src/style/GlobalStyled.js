import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing:  border-box;
    list-style: none;
    text-decoration: none;
    color: black;
    font-family: "Noto Sans", sans-serif;
}

html{
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

:root{
    // variables  

    --violet-navbar: #5E548E;

}

body{



}

`;
