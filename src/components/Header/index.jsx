import React from "react";
import { Wrapper, Logo, Hamburger } from "./style";
import Container from "../helpers/Container";
import SVGLogo from "../../assets/icons/logo.svg";
import SVGHamburger from "../../assets/icons/hamburger.svg"
import Nav from "../Nav";

export default function Header() {
    return (
        <Wrapper>
            <Container>
                <Logo>
                    <SVGLogo />
                </Logo>

                <Hamburger type="button"
                aria-label="Abrir menu de navegação">
                    <SVGHamburger />
                </Hamburger>

                <Nav />
            </Container>
        </Wrapper>
    )
}
