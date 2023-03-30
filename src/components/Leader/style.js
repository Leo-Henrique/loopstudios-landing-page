import styled, { css } from "styled-components";

export const Wrapper = styled.section(({ theme }) => (css`
    padding: 16rem 0;

    ${theme.breakpoints.lg} {
        padding: 10rem 0;
    }
    ${theme.breakpoints.sm} {
        padding: 8rem 0;
    }

    > div {
        display: flex;
        align-items: flex-end;

        ${theme.breakpoints.lg} {
            flex-direction: column;
            align-items: center;
            row-gap: 4rem;
        }
        ${theme.breakpoints.sm} {
            row-gap: 5rem;
        }
    }
`));

export const Content = styled.div(({ theme }) => (css`
    max-width: 550px;
    margin-left: -16rem;
    background-color: ${theme.colors.supportLight1};
    padding-top: 9rem;
    padding-left: 9rem;

    ${theme.breakpoints.xl} {
        padding-top: 6rem;
        padding-left: 6rem;
    }
    ${theme.breakpoints.lg} {
        max-width: 550px;
        margin-left: initial;
        padding: initial;
        text-align: center;
    }

    h2 {
        color: ${theme.colors.supportDark1};
        margin-bottom: 3rem;

        ${theme.breakpoints.sm} {
            margin-bottom: 2rem;
        }
    }
`));