import styled, { css } from "styled-components";

export const H1 = styled.h1(({ theme }) => (css`
    font-size: ${theme.fontSizes.h1};
    line-height: 1.02;
    letter-spacing: 0.6px;
`));

export const H2 = styled.h2(({ theme }) => (css`
    font-size: ${theme.fontSizes.h2};
    line-height: 1.1;
    letter-spacing: 0.4px;
`));

export const H3 = styled.h3(({ theme }) => (css`
    font-size: ${theme.fontSizes.h3};
    line-height: 1.3;
`));