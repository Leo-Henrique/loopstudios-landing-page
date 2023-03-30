import { css, createGlobalStyle } from "styled-components";
import leoReset from "/node_modules/leo-reset.css/dist/leo-reset.css?inline";
import leoAnimate from "/node_modules/leo-animate.js/dist/leo-animate.css?inline";

const GlobalStyle = createGlobalStyle(({ theme }) => (css`
    ${leoReset};
    ${leoAnimate};

    body {
        font-size: ${theme.fontSizes.body};
        line-height: 1.5;
        font-weight: 300;
        font-family: ${theme.fontFamilies[0]};
        color: ${theme.colors.supportDark3};

        &.hide-scrollbar {
            position: fixed;
            inset: 0;
            overflow: hidden;
        }
    }
    h1, h2, h3, h4, h5, h6 {
        font-family: ${theme.fontFamilies[1]};
        font-weight: 300;
        text-transform: uppercase;
    }
`));

export default GlobalStyle;