import "./styles/index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import App from "./components/App/App";
import { AppThemeProvider } from "./components/Theme/ThemeProvider";

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
root.render(
    <React.StrictMode>
        <AppThemeProvider
            theme={{
                accentColor: "blue",
                grayColor: "gray",
                panelBackground: "solid"
            }}
        >
            <App />
        </AppThemeProvider>
    </React.StrictMode>
);
