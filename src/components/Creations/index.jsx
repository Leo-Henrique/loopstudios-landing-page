import React from "react";
import { Wrapper, SeeAll, Collections } from "./style";
import Container from "../helpers/Container";
import { H2, H3 } from "../helpers/Heading";
import IMGDeepEarth from "../../assets/images/deep-earth.jpg";
import IMGDeepEarthMobile from "../../assets/images/mobile/deep-earth.jpg";
import IMGNightArcade from "../../assets/images/night-arcade.jpg";
import IMGNightArcadeMobile from "../../assets/images/mobile/night-arcade.jpg";
import IMGSoccerTeam from "../../assets/images/soccer-team.jpg";
import IMGSoccerTeamMobile from "../../assets/images/mobile/soccer-team.jpg";
import IMGGrid from "../../assets/images/grid.jpg";
import IMGGridMobile from "../../assets/images/mobile/grid.jpg";
import IMGFromAbove from "../../assets/images/from-above.jpg";
import IMGFromAboveMobile from "../../assets/images/mobile/from-above.jpg";
import IMGPocketBorealis from "../../assets/images/pocket-borealis.jpg";
import IMGPocketBorealisMobile from "../../assets/images/mobile/pocket-borealis.jpg";
import IMGCuriosity from "../../assets/images/curiosity.jpg";
import IMGCuriosityMobile from "../../assets/images/mobile/curiosity.jpg";
import IMGFisheye from "../../assets/images/fisheye.jpg";
import IMGFisheyeMobile from "../../assets/images/mobile/fisheye.jpg";
import { devices } from "../../styles/mediaQueries";

export default function Creations() {
    const collections = [
        {
            title: "Terra profunda",
            img: IMGDeepEarth,
            imgMobile: IMGDeepEarthMobile,
        },
        {
            title: "Fliperama noturno",
            img: IMGNightArcade,
            imgMobile: IMGNightArcadeMobile,
        },
        {
            title: "Time de futebol VR",
            img: IMGSoccerTeam,
            imgMobile: IMGSoccerTeamMobile,
        },
        {
            title: "A grade",
            img: IMGGrid,
            imgMobile: IMGGridMobile,
        },
        {
            title: "VR de cima",
            img: IMGFromAbove,
            imgMobile: IMGFromAboveMobile,
        },
        {
            title: "Bolso boreal",
            img: IMGPocketBorealis,
            imgMobile: IMGPocketBorealisMobile,
        },
        {
            title: "A curiosidade",
            img: IMGCuriosity,
            imgMobile: IMGCuriosityMobile,
        },
        {
            title: "Faça olho de peixe",
            img: IMGFisheye,
            imgMobile: IMGFisheyeMobile,
        },
    ];

    return (
        <Wrapper>
            <Container>
                <H2 data-animate="fadeDown">Nossas criações</H2>

                <SeeAll data-animate="fadeDown">
                    <button type="button">
                        Ver tudo
                    </button>
                </SeeAll>

                <Collections>
                    {collections.map((item) => (
                        <li key={item.title} data-animate="fadeDown">
                            <a href="#">
                                <picture>
                                    <source srcSet={item.imgMobile}
                                    media={devices.lg}
                                    type="image/jpg" />

                                    <img src={item.img} alt="" />
                                </picture>

                                <H3>{item.title}</H3>

                                <div></div>
                            </a>
                        </li>
                    ))}
                </Collections>
            </Container>
        </Wrapper>
    );
}
