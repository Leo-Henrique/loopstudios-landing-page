import styled, { css } from "styled-components";

export const Wrapper = styled.header(({ theme }) => (css`
    width: 100%;
    position: absolute;
    inset: auto 0;
    z-index: ${theme.zIndex.header};
    background-color: transparent;
    padding-top: calc(6rem - 1.5rem);

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`));

export const Hamburger = styled.button(({ theme }) => (css`
    display: none;
`));