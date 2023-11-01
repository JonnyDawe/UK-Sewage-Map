import { AppThemeProvider } from "../../components/Theme/ThemeProvider";
import AppTheme from "../../components/Theme/AppTheme";
import MapView from "../../components/MapView/MapView";

export default function () {
    return (
        <AppThemeProvider
            theme={{
                accentColor: "blue",
                grayColor: "gray",
                panelBackground: "solid"
            }}
        >
            <AppTheme>
                <MapView></MapView>
            </AppTheme>
        </AppThemeProvider>
    );
}
