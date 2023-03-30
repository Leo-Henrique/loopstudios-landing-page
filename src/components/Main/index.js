import styled, { css } from "styled-components";
import IMGHero from "../../assets/images/hero.jpg";
import IMGHeroMobile from "../../assets/images/mobile/hero.jpg";

const paddingTop = (headerHeight, padding) => {
    return `calc(${headerHeight}px + ${padding} - 1.2rem)`;
}
const Main = styled.main(({ theme, headerHeight }) => (css`
    background: url(${IMGHero}) center / cover no-repeat;
    padding-top: ${paddingTop(headerHeight, "13rem")};
    padding-bottom: 13rem;
    position: relative;

    ${theme.breakpoints.md} {
        background-image: url(${IMGHeroMobile});
        padding-top: ${paddingTop(headerHeight, "16rem")};
        padding-bottom: 16rem;
    }

    > div:first-child {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);

        ${theme.breakpoints.md} {
            display: none;
        }
    }
    h1 {
        position: relative;
        z-index: 1;
        max-width: 650px;
        padding: calc(3rem + 2rem) 3rem 3rem;
        border: 2px solid ${theme.colors.supportLight1};
        color: ${theme.colors.supportLight1};
        text-transform: uppercase;

        ${theme.breakpoints.sm} {
            padding: calc(1.5rem + 2rem) 1.5rem 1.5rem;
        }
    }
`));

export default Main;