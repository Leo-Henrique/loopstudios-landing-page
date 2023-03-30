import React from "react";
import { Wrapper, Content } from "./style";
import Container from "../helpers/Container";
import IMGLeader from "../../assets/images/interactive.jpg";
import IMGLeaderMobile from "../../assets/images/mobile/interactive.jpg";
import { devices } from "../../styles/mediaQueries";
import { H2 } from "../helpers/Heading";

export default function Leader() {
    return (
        <Wrapper>
            <Container>
                <picture data-animate
                data-animate-lg="fadeDown">
                    <source
                        srcSet={IMGLeaderMobile}
                        media={devices.lg}
                        type="image/jpg"
                    />

                    <img 
                        src={IMGLeader}
                        alt="Pessoa experimentando a realidade virtual com um VR"
                    />
                </picture>

                <Content>
                    <H2 data-animate="fadeLeft"
                    data-animate-lg="fadeDown">
                        O líder em VR interativo
                    </H2>

                    <p data-animate="fadeLeft"
                    data-animate-lg="fadeDown">
                        Fundada em 2011, a Loopstudios tem produzido
                        projetos de realidade virtual de classe mundial
                        para algumas das melhores empresas do mundo. Nossas
                        criações premiadas transformaram empresas por meio
                        de experiências digitais que se vinculam à sua
                        marca.
                    </p>
                </Content>
            </Container>
        </Wrapper>
    );
}
