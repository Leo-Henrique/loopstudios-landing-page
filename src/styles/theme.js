import { breakpoints, desktop, animation } from "./mediaQueries";
import * as mixins from "./mixins";

const theme = {
    breakpoints,
    media: { desktop, animation },
    mixins,
    grid: {
        container: {
            default: "1145px",
            xxl: "1140px",
            xl: "960px",
            lg: "720px",
            md: "540px",
            sm: "100%",
        },
        gutter: "30px",
    },
    fontFamilies: ["'Alata', sans-serif", "'Josefin Sans', sans-serif"],
    fontSizes: {
        h1: "6.5rem",
        h2: "4.8rem",
        h3: "2.9rem",
        body: "1.5rem",
        small: "1.3rem"
    },
    colors: {
        supportLight1: "#FFF",
        supportLight2: "#f2f2f2",
        supportLight3: "#cccccc",
        supportDark1: "#000",
        supportDark2: "#696969",
        supportDark3: "#8c8c8c",
    },
    transitions: {
        global: {
            duration: 300,
            timingFunction: "ease-in-out",
        },
        button: {
            duration: 200,
            timingFunction: "ease-in-out",
        },
    },
    zIndex: {
        header: 10,
        nav: 20,
        headerContent: 30,
    },
};

export default theme;
