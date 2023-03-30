import styled, { css } from "styled-components";

export const Wrapper = styled.section(({ theme }) => (css`
    padding-bottom: 18rem;

    ${theme.breakpoints.lg} {
        padding-bottom: 10rem;
    }
    ${theme.breakpoints.sm} {
        padding-bottom: 8rem;
    }

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        row-gap: 8rem;

        ${theme.breakpoints.lg} {
            row-gap: 4rem;
        }
        ${theme.breakpoints.lg} {
            row-gap: 2rem;
        }
    }
    h2 {
        color: ${theme.colors.supportDark1};

        ${theme.breakpoints.md} {
            grid-column: 1 / 3;
            text-align: center;
        }
    }
`));

export const SeeAll = styled.div(({ theme }) => (css`
    ${theme.breakpoints.md} {
        order: 1;
        grid-column: 1 / 3;
    }
    button {
        display: block;
        margin-left: auto;
        padding: 1.2rem 3.5rem;
        text-transform: uppercase;
        letter-spacing: 2.8px;
        white-space: nowrap;
        color: ${theme.colors.supportDark1};
        border: 2px solid ${theme.colors.supportDark2};
        cursor: pointer;
        ${theme.mixins.transition([
            "color", 
            "background-color",
            "border-color"
        ])};

        ${theme.media.desktop} {
            &:hover {
                background-color: ${theme.colors.supportDark1};
                border-color: ${theme.colors.supportDark1};
                color: ${theme.colors.supportLight1};
            }
        }
        &:active {
            color: ${theme.colors.supportDark2};
        }
        ${theme.breakpoints.md} {
            margin-left: initial;
            ${theme.mixins.center};
        }
    }
`));

export const Collections = styled.ul(({ theme }) => (css`
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;

    ${theme.breakpoints.lg} {
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
    }
    ${theme.breakpoints.md} {
        grid-template-columns: 1fr;
    }

    a {
        display: block;
        position: relative;
        color: ${theme.colors.supportLight1};
        ${theme.mixins.transition(["color"])};

        &:hover {
            color: ${theme.colors.supportDark1};

            div {
                background-color: rgba(255, 255, 255, 0.7);
                background-image: initial;
            }
        }
        h3 {
            width: 100%;
            position: absolute;
            inset: auto 0 0;
            z-index: 1;
            padding: 3.5rem;
            ${theme.breakpoints.xl} {
                padding: 2.5rem;
            }
            ${theme.breakpoints.lg} {
                padding: 2rem;
            }
            ${theme.breakpoints.md} {
                padding: 2.5rem;
                max-width: 200px;
            }
            ${theme.breakpoints.md} {
                padding: 2rem;
            }
        }
        div {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.8));
            ${theme.mixins.transition(["background-color"])};
            ${theme.breakpoints.md} {
                background-image: linear-gradient(270deg, transparent 10%, rgba(0, 0, 0, 0.8));
            }
        }
    }
`));