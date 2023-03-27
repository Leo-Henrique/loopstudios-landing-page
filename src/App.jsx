import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <p>App</p>
        </ThemeProvider>
    );
}
