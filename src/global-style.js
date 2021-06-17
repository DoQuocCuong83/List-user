import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
}
ol, ul{
    list-style: none;
}
a{
    text-decoration: none;
	color: #fff;
}
html {
    font-size: 14px; }
body {
    font-family: "Roboto", "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 300;}
h1, h2, h3, h4, h5, h6 {
    font-weight: 700;}
}
`;
