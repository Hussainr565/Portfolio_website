import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#EDEDED",
    fontColor: "#171717"
};

export const darkTheme = {
    body: "#171717",
    fontColor: "#EDEDED"
};

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
`