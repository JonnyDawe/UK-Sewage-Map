import "@radix-ui/themes/styles.css";
import "../../styles/index.css";

import { MapProvider } from "../../components/common/Map/useMapView";
import { SewageMapOverlay } from "../../components/SewageMap/SewageMapOverlay";
import { SewageMapView } from "../../components/SewageMap/SewageMapView";
import AppTheme from "../../components/Theme/AppTheme";
import { AppThemeProvider } from "../../components/Theme/ThemeProvider";

export default function App() {
    return (
        <AppThemeProvider
            theme={{
                accentColor: "blue",
                grayColor: "gray",
                panelBackground: "solid"
            }}
        >
            <AppTheme>
                <MapProvider>
                    <SewageMapView>
                        <SewageMapOverlay></SewageMapOverlay>
                    </SewageMapView>
                </MapProvider>
            </AppTheme>
        </AppThemeProvider>
    );
}
