import React from "react";
import Wrapper from "./style";

export default function Nav({ local }) {
    const links = ["Sobre", "Carreiras", "Eventos", "Produtos", "Suporte"];

    return (
        <Wrapper local={local}>
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
