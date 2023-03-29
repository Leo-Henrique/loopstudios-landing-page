import styled, { css } from "styled-components";

export const Wrapper = styled.section(({ theme }) => (css`
    padding: 16rem 0;

    > div {
        display: flex;
        align-items: flex-end;
    }
`));

export const Content = styled.div(({ theme }) => (css`
    max-width: 550px;
    margin-left: -16rem;
    background-color: ${theme.colors.supportLight1};
    padding-top: 9rem;
    padding-left: 9rem;

    h2 {
        color: ${theme.colors.supportDark1};
        margin-bottom: 3rem;
    }
`));