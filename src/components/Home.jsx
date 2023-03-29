import React from "react";
import Header from "./Header";
import Main from "./Main";
import Container from "./helpers/Container";
import { H1 } from "./helpers/Heading";
import Leader from "./Leader";
import Creations from "./Creations";
import Footer from "./Footer";

export default function Home() {
    const header = React.useRef();
    const [ headerHeight, setHeaderHeight ] = React.useState();

    React.useEffect(() => {
        const watch = () => setHeaderHeight(header.current.clientHeight);
        
        watch();
        window.addEventListener("resize", watch);
        return () => window.removeEventListener("resize", watch);
    });

    return (
        <>
            <Header ref={header} />
            <Main headerHeight={headerHeight}>
                <div></div>
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
