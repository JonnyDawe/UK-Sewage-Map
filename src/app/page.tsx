import { notFound } from "next/navigation";
import { type Metadata } from "next/types";

import { SewageMapView } from "@/components/SewageMap/LazyMapView";

type Props = {
    searchParams: {
        PermitNumber?: string;
    };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const permitNumber = searchParams?.PermitNumber ?? "";

    try {
        return {
            metadataBase: new URL("https://www.maponice.com"),
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
    } catch (e) {
        notFound();
    }
}

export default function MapPage({ searchParams }: Props) {
    return <SewageMapView csoId={searchParams?.PermitNumber ?? undefined} />;
}
