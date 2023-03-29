import { css, createGlobalStyle } from "styled-components";
import leoReset from "/node_modules/leo-reset.css/dist/leo-reset.css?inline";

const GlobalStyle = createGlobalStyle(({ theme }) => (css`
    ${leoReset};

    body {
        font-size: ${theme.fontSizes.body};
        line-height: 1.5;
        font-weight: 300;
        font-family: ${theme.fontFamilies[0]};
        color: ${theme.colors.supportDark3};
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.fontFamilies[1]};
        font-weight: 300;
    }
`));

export default GlobalStyle;