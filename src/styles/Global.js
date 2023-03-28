import { createGlobalStyle } from "styled-components";
import leoReset from "/node_modules/leo-reset.css/dist/leo-reset.css?inline";
import typography from "./typography";

const GlobalStyle = createGlobalStyle`
    ${leoReset};
    body {
        ${typography};
    }
`;

export default GlobalStyle;