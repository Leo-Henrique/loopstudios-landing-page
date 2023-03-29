import React from "react";
import Header from "./Header";
import Main from "./Main";
import Container from "./helpers/Container";
import { H1 } from "./helpers/Heading";
import Leader from "./Leader";
import Creations from "./Creations";
import Footer from "./Footer";

export default function Home() {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    <H1>
                        Experiências imersivas que entregamos
                    </H1>
                </Container>
            </Main>
            <Leader />
            <Creations />
            <Footer />
        </>
    );
}
