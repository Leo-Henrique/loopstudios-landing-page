import React from "react";
import Header from "./Header";
import Main from "./Main";
import Container from "./helpers/Container";
import { H1 } from "./helpers/Heading";
import Leader from "./Leader";
import Creations from "./Creations";
import Footer from "./Footer";
import LeoAnimate from "leo-animate.js";

export default function Home() {
    const header = React.useRef();
    const [ headerHeight, setHeaderHeight ] = React.useState();

    React.useEffect(() => {
        const watch = () => setHeaderHeight(header.current.clientHeight);
        
        new LeoAnimate();
        watch();
        window.addEventListener("resize", watch);
        return () => window.removeEventListener("resize", watch);
    });

    return (
        <>
            <Header ref={header} 
            headerHeight={headerHeight} />
            <Main headerHeight={headerHeight}>
                <div></div>
                <Container>
                    <H1 data-animate="fadeRight">
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
