import React from "react";
import { Wrapper, Hamburger } from "./style";
import Container from "../helpers/Container";
import SVGLogo from "../../assets/icons/logo.svg";
import SVGHamburger from "../../assets/icons/hamburger.svg";
import Nav from "../Nav";

const Header = React.forwardRef((props, ref) => {
    return (
        <Wrapper ref={ref}>
            <Container>
                <div>
                    <SVGLogo />
                </div>

                <Hamburger
                    type="button"
                    aria-label="Abrir menu de navegação"
                >
                    <SVGHamburger />
                </Hamburger>

                <Nav local="header" />
            </Container>
        </Wrapper>
    );
});

export default Header;