import styled, { css } from "styled-components";

export const H1 = styled.h1(({ theme }) => (css`
    font-size: ${theme.fontSizes.h1};
    line-height: 1.02;
    letter-spacing: 0.6px;

    ${theme.breakpoints.md} {
        font-size: 6.2rem;
    }
    ${theme.breakpoints.sm} {
        font-size: 5rem;
        line-height: 1.05;
    }
    @media (max-width: 430px) {
        font-size: 4rem;
        line-height: 1.1;
    }
    @media (max-width: 350px) {
        font-size: 3rem;
        line-height: 1.15;
    }
`));

export const H2 = styled.h2(({ theme }) => (css`
    font-size: ${theme.fontSizes.h2};
    line-height: 1.1;
    letter-spacing: 0.4px;

    ${theme.breakpoints.lg} {
        font-size: 4rem;
    }
    ${theme.breakpoints.sm} {
        font-size: 2.7rem;
        line-height: 1.2;
    }
`));

export const H3 = styled.h3(({ theme }) => (css`
    font-size: ${theme.fontSizes.h3};
    line-height: 1.3;

    ${theme.breakpoints.xl} {
        font-size: 2.5rem;
    }
    ${theme.breakpoints.lg} {
        font-size: 2.3rem;
    }
    ${theme.breakpoints.lg} {
        font-size: 2rem;
    }
`));