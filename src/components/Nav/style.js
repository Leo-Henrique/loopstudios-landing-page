import styled, { css } from "styled-components";

const paddingAnchorX = 1.5;
const Wrapper = styled.nav(({ theme, local, headerHeight }) => (css`
    ul {
        display: flex;
    }
    a {
        padding: 1.2rem ${`${paddingAnchorX}rem`};
        color: ${theme.colors.supportLight1};
        white-space: nowrap;
        ${theme.mixins.link(paddingAnchorX)};
    }
    ${local === "header" ? (css`
        li:last-child a {
            padding-right: 0;
            ${theme.mixins.link(paddingAnchorX / 2)};
        }
        ${theme.breakpoints.lg} {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            inset: 0;
            z-index: ${theme.zIndex.nav};
            background-color: ${theme.colors.supportDark1};
            padding-top: calc(${`${headerHeight}px`} + 10rem);

            ul {
                flex-direction: column;
                align-items: flex-start;
            }
            a {
                font-size: ${theme.fontSizes.h3};
                font-family: ${theme.fontFamilies[1]};
                text-transform: uppercase;
                letter-spacing: 2px;
            }
        }
    `) : (css`
        li:first-child a {
            padding-left: 0;
            ${theme.mixins.link(paddingAnchorX / 2)};

            ${theme.breakpoints.md} {
                padding-left: ${`${paddingAnchorX}rem`};
                ${theme.mixins.link(paddingAnchorX)};
            }
        }

        ${theme.breakpoints.md} {
            ul {
                flex-direction: column;
            }
        }
    `)}

`));

export default Wrapper;