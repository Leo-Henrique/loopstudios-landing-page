import { css } from "styled-components";
import theme from "./theme";

export const transition = (properties, type = "button") => (css`
    transition-property: ${properties.join(", ")};
    transition-duration: ${theme.transitions[type].duration}ms;
    transition-timing-function: ${theme.transitions[type].timingFunction};
`);

export const SVGResponsive = (css`
    display: block;
    max-width: 100%;
    height: auto;
`);

export const center = (css`
    margin-left: auto;
    margin-right: auto;
`);

export const link = (paddingX) => (css`
    display: flex;
    justify-content: center;
    position: relative;
    ${theme.mixins.transition(["opacity"])};

    ${theme.media.desktop} {
        &::after {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            width: 0;
            height: 2px;
            background-color: ${theme.colors.supportLight1};
            opacity: 0;
            ${theme.mixins.transition(["opacity", "width"])};
        }
        &:hover::after {
            opacity: 1;
            width: calc(100% - ${paddingX * 2}rem);
        }
    }
    &:active {
        opacity: 0.6;
    }
`);