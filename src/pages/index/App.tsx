import { AppThemeProvider } from "../../components/Theme/ThemeProvider";
import AppTheme from "../../components/Theme/AppTheme";
import MapView from "../../components/common/Map/MapView";
import "@radix-ui/themes/styles.css";
import "../../styles/index.css";
import { SewageMapView } from "../../components/SewageMap/SewageMapView";
import { MapProvider } from "../../components/common/Map/useMapView";
import { SewageMapOverlay } from "../../components/SewageMap/SewageMapOverlay";

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
                <MapProvider>
                    <SewageMapView>
                        <SewageMapOverlay></SewageMapOverlay>
                    </SewageMapView>
                </MapProvider>
            </AppTheme>
        </AppThemeProvider>
    );
}
