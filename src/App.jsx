import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyle from "./styles/Global";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <p>App</p>
        </ThemeProvider>
    );
}
