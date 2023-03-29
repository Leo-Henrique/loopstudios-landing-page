import styled, { css } from "styled-components";
import IMGHero from "../../assets/images/hero.jpg";

const Main = styled.main(({ theme, headerHeight }) => (css`
    background: url(${IMGHero}) center / cover no-repeat;
    padding-top: calc(${`${headerHeight}px`} + 13rem - 1.2rem);
    padding-bottom: 13rem;
    position: relative;

    > div:first-child {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);
    }
    h1 {
        position: relative;
        z-index: 1;
        max-width: 650px;
        padding: calc(3rem + 2rem) 3rem 3rem;
        border: 2px solid ${theme.colors.supportLight1};
        color: ${theme.colors.supportLight1};
        text-transform: uppercase;
    }
`));

export default Main;