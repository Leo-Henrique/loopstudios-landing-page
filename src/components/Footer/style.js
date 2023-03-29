import styled, { css } from "styled-components";

export const Wrapper = styled.footer(({ theme }) => (css`
    background-color: ${theme.colors.supportDark1};
    padding: 4rem 3rem 3rem;

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1.5rem;
    }
`));

const paddingAnchorX = 0.8;
export const SocialNetwork = styled.ul(({ theme }) => (css`
    justify-self: end;
    display: flex;

    a {
        display: flex;
        align-items: center;
        padding: 1rem ${`${paddingAnchorX}rem`};

        ${theme.mixins.link(paddingAnchorX)};
    }
`));

export const Copyright = styled.div(({ theme }) => (css`
    justify-self: end;
    text-align: right;
    font-size: ${theme.fontSizes.small};

    ${theme.media.desktop} {
        &:hover {
            span {
                color: ${theme.colors.supportLight1};
            }
        }
    }
    &:active span {
        color: ${theme.colors.supportLight1};
    }
    span, a {
        ${theme.mixins.transition(["color"])};
    }
    a {
        display: inline-block;
        padding: 0.2rem 0;
        color: ${theme.colors.supportLight3};

        ${theme.media.desktop} {
            &:hover {
                color: ${theme.colors.supportLight1};
            }
        }
        &:active {
            color: ${theme.colors.supportLight2};
        }
    }
`));