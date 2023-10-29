import "./styles/index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";

import { AppThemeProvider } from "./components/Theme/ThemeProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import AppPage from "./pages/map-page";
import AppTheme from "./components/Theme/AppTheme";

export const router = createBrowserRouter([
    {
        path: "/*",
        element: <AppPage />,
        errorElement: <ErrorPage />
    }
]);

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
            <AppTheme>
                <RouterProvider router={router} />
            </AppTheme>
        </AppThemeProvider>
    </React.StrictMode>
);
