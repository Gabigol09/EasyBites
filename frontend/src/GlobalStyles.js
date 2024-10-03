import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${props => props.theme.body};
    }
`;

export { GlobalStyles };
