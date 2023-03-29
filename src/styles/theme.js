import { breakpoints, desktop, animation } from "./mediaQueries";
import * as mixins from "./mixins";

const theme = {
    breakpoints,
    media: { desktop, animation },
    mixins,
    grid: {
        container: {
            default: "1320px",
            xxl: "1140px",
            xl: "960px",
            lg: "720px",
            md: "540px",
            sm: "100%",
        },
        gutter: "30px",
    },
    fontFamilies: [
        "'Alata', sans-serif",
        "'Josefin Sans', sans-serif",
    ],
    fontSizes: {
        h1: "6.2rem",
        h2: "4.8rem",
        h3: "3.2rem",
        body: "1.8rem",
    },
    colors: {
        supportLight1: "#FFF",
        supportDark1: "#000",
        supportDark2: "#696969",
        supportDark3: "#8c8c8c",
    },
    transitions: {
        global: {
            duration: "300ms",
            timingFunction: "ease-in-out",
        },
        button: {
            duration: "200ms",
            timingFunction: "ease-in-out",
        },
    },
};

export default theme;
