import styled, { css } from "styled-components";

export const Wrapper = styled.section(({ theme }) => (css`
    padding-bottom: 18rem;

    > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        row-gap: 8rem;
    }
    h2 {
        color: ${theme.colors.supportDark1};
    }
`));

export const SeeAll = styled.div(({ theme }) => (css`
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
    }
`));

export const Collections = styled.ul(({ theme }) => (css`
    grid-column: 1 / 3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;

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
        }
        div {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.8));
            ${theme.mixins.transition(["background-color"])};
        }
    }
`));