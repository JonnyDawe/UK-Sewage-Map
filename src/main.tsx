import "./styles/index.css";

import { setAssetPath } from "@esri/calcite-components/dist/components";
import React from "react";
import { createRoot } from "react-dom/client";

import App, { GlobalStyles } from "./components/App";

// Local assets path for Calcite Components
setAssetPath("https://unpkg.com/@esri/calcite-components/dist/calcite/assets");

const container = document.getElementById("root");
const root = createRoot(container as HTMLDivElement);
root.render(
    <React.StrictMode>
        <GlobalStyles></GlobalStyles>
        <App />
    </React.StrictMode>
);
