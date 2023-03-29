import React from "react";
import Wrapper from "./style";

export default function Nav() {
    const links = ["Sobre", "Carreiras", "Eventos", "Produtos", "Suporte"];

    return (
        <Wrapper>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))}
            </ul>
        </Wrapper>
    );
}
