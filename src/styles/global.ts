import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing:border-box;
  }

  body{
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  #root{
    min-height: 600px;
  }

  html, body, #root {
    height: 100%;
    width: 100%
  }

  input, button, textarea{
    font-family: "Nunito Sans", Arial, Helvetica, sans-serif;
  }

  button{
    cursor:pointer;
  }
`;
