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

        > div:first-child {
            position: relative;
            z-index: ${theme.zIndex.headerContent};
        }
    }
`));

export const Hamburger = styled.button(({ theme }) => (css`
    position: relative;
    z-index: ${theme.zIndex.headerContent};
    display: none;
    padding: 1.2rem;
    padding-right: 0;
    cursor: pointer;
    ${theme.mixins.transition(["opacity"])};
    ${theme.media.desktop} {
        &:hover {
            opacity: 0.7;
        }
    }
    &:active {
        opacity: 0.4;
    }

    ${theme.breakpoints.lg} {
        display: block;
    }
`));