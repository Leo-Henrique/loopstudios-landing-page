import { css } from "styled-components";

const typography = css(({ theme }) => (css`
    font-size: ${theme.fontSizes.body};
    line-height: 1.5;
    font-weight: 300;
    font-family: ${theme.fontFamilies.alata};
    color: ${theme.colors.supportDark3};
`));


export default typography;