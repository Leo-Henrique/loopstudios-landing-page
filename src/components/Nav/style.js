import styled, { css } from "styled-components";

const paddingAnchorX = 1.5;
const Wrapper = styled.nav(({ theme, local }) => (css`
    ul {
        display: flex;
    }
    a {
        padding: 1.2rem ${`${paddingAnchorX}rem`};
        color: ${theme.colors.supportLight1};
        white-space: nowrap;
        ${theme.mixins.link(paddingAnchorX)};
    }
    li:first-child a {
        ${local === "footer" ? (css`
            padding-left: ${local === "footer" ? 0 : null};
            ${theme.mixins.link(paddingAnchorX / 2)}
        `) : null}
    }
`));

export default Wrapper;