import { notFound } from "next/navigation";
import { type Metadata } from "next/types";

import SewageMapView from "@/components/Map/Map";

type Props = {
    searchParams: Promise<{
        PermitNumber?: string;
    }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
    const searchParams = await props.searchParams;
    const permitNumber = searchParams?.PermitNumber ?? "";

    try {
        return {
            metadataBase: new URL("https://www.sewagemap.co.uk"),
            title: "Sewage Map",
            description:
                "Real-Time Thames Sewage Discharge Monitoring | Sewage Map - Stay Updated on Sewage Pollution",
            openGraph: {
                images: [
                    {
                        url: permitNumber ? `/api/og?PermitNumber=${permitNumber}` : "/api/og",
                        width: 1200,
                        height: 630,
                        alt: `Sewage Map ${permitNumber ? `for Permit Number ${permitNumber}` : ""}`
                    }
                ]
            }
        };
    } catch {
        notFound();
    }
}

export default async function MapPage(props: Props) {
    const searchParams = await props.searchParams;
    return <SewageMapView csoId={searchParams?.PermitNumber} />;
}
