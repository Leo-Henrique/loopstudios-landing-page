const theme = {
    breakpoints: {
        property: "max-width",
        get xxl() {
            return `(${this.property}: 1399.98px)`;
        },
        get xl() {
            return `(${this.property}: 1199.98px)`;
        },
        get lg() {
            return `(${this.property}: 991.98px)`;
        },
        get md() {
            return `(${this.property}: 767.98px)`;
        },
        get sm() {
            return `(${this.property}: 575.98px)`;
        },
    },
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
    fontFamilies: {
        alata: "'Alata', sans-serif;",
        josefin: "'Josefin Sans', sans-serif;",
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
