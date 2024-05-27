import { SewageMapView } from "@/components/SewageMap/LazyMapView";

export default function MapPage({
    searchParams
}: {
    searchParams?: {
        PermitNumber?: string;
    };
}) {
    return <SewageMapView csoId={searchParams?.PermitNumber ?? undefined} />;
}
