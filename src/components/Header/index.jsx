import React from "react";
import { Wrapper, Hamburger } from "./style";
import Container from "../helpers/Container";
import SVGLogo from "../../assets/icons/logo.svg";
import SVGHamburger from "../../assets/icons/hamburger.svg";
import SVGClose from "../../assets/icons/close.svg";
import Nav from "../Nav";
import { useTheme } from "styled-components";

const Header = React.forwardRef(({ headerHeight }, ref) => {
    const [nav, setNav] = React.useState(false);
    const [navTransition, setNavTransition] = React.useState(false);
    const { transitions } = useTheme();
    const handleNav = ({ currentTarget: btn }) => {
        const transition = "data-transition";
        const duration = transitions.global.duration;

        if (!btn.hasAttribute(transition)) {
            btn.setAttribute(transition, "");

            if (!nav) {
                setNav(true);
                document.body.classList.add("hide-scrollbar");
                setTimeout(() => setNavTransition(true), 20);
                setTimeout(() => btn.removeAttribute(transition), duration + 20);
            } else {
                setNavTransition(false);
                setTimeout(() => {
                    setNav(false);
                    document.body.classList.remove("hide-scrollbar");
                    btn.removeAttribute(transition);
                }, duration);
            }
        }
    };

    return (
        <Wrapper ref={ref} data-animate="fadeDown">
            <Container >
                <div>
                    <SVGLogo />
                </div>

                <Hamburger
                    type="button"
                    aria-label={nav ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                    onClick={handleNav}
                >
                    {nav ? <SVGClose /> : <SVGHamburger />}
                </Hamburger>

                <Nav
                    local="header"
                    headerHeight={headerHeight}
                    nav={nav}
                    navTransition={navTransition}
                />
            </Container>
        </Wrapper>
    );
});

export default Header;
