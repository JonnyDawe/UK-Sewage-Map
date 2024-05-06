"use client";
import { SewageMapOverlay } from "@/components/SewageMap/SewageMapOverlay";
import { SewageMapView } from "@/components/SewageMap/SewageMapView";

export default function MapPage() {
    return (
        <SewageMapView>
            <SewageMapOverlay></SewageMapOverlay>
        </SewageMapView>
    );
}
