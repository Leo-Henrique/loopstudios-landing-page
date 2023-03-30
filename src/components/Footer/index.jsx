import React from "react";
import { Wrapper, SocialNetwork, Copyright } from "./style";
import Container from "../helpers/Container";
import SVGLogo from "../../assets/icons/logo.svg";
import SVGFacebook from "../../assets/icons/facebook.svg";
import SVGTwitter from "../../assets/icons/twitter.svg";
import SVGPinterest from "../../assets/icons/pinterest.svg";
import SVGInstagram from "../../assets/icons/instagram.svg";
import Nav from "../Nav";

export default function Footer() {
    const socialNetwork = [
        {
            label: "Facebook",
            url: "https://www.facebook.com/",
            icon: <SVGFacebook />,
        },
        {
            label: "Twitter",
            url: "https://twitter.com/",
            icon: <SVGTwitter />,
        },
        {
            label: "Pinterest",
            url: "https://br.pinterest.com/",
            icon: <SVGPinterest />,
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/",
            icon: <SVGInstagram />,
        },
    ];

    return (
        <Wrapper>
            <Container>
                <div>
                    <SVGLogo />
                </div>

                <SocialNetwork>
                    {socialNetwork.map((item, index) => (
                        <li key={index}>
                            <a 
                                href={item.url}
                                target="_blank"
                                rel="external noopener noreferrer"
                                aria-label={item.label}
                            >
                                {item.icon}
                            </a>
                        </li>
                    ))}
                </SocialNetwork>

                <Nav local="footer"/>

                <Copyright>
                    <p>
                        Desenvolvido com <span>&hearts;</span>, React e
                        styled-components! Por {"\n"}
                        <a
                            href="https://www.linkedin.com/in/leonardo-henrique-/"
                            target="_blank"
                            rel="external noopener noreferrer"
                        >
                            Leonardo Henrique
                        </a>
                        .
                    </p>

                    <p>
                        Desafio do {"\n"}
                        <a
                            href="https://www.frontendmentor.io/"
                            target="_blank"
                            rel="external noopener noreferrer"
                        >
                            Frontend Mentor
                        </a>
                        .
                    </p>
                </Copyright>
            </Container>
        </Wrapper>
    );
}
