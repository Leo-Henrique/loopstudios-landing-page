import { breakpoints, desktop, animation } from "./mediaQueries";

const theme = {
    breakpoints: breakpoints(),
    media: { desktop, animation },
    grid: {
        container: {
            default: "1320px",
            xxl: "1140px",
            xl: "960px",
            lg: "720px",
            md: "540px",
            sm: "100%",
        },
        gutter: 30,
    },
    fontFamilies: {
        alata: "'Alata', sans-serif",
        josefin: "'Josefin Sans', sans-serif",
    },
    fontSizes: {
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
