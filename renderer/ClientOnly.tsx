import React, { ComponentType, LazyExoticComponent, useEffect, useState } from "react";

type ClientOnlyProps = {
    fallback: React.ReactNode;
    component: () => Promise<{ default: ComponentType<any> }>;
};

function ClientOnly({ component, fallback }: ClientOnlyProps) {
    const [Component, setComponent] = useState<LazyExoticComponent<ComponentType<any>> | null>(
        null
    );

    useEffect(() => {
        const loadComponent = async () => {
            const module = await component();
            setComponent(() => React.lazy(async () => ({ default: module.default })));
        };

        loadComponent();
    }, [component]);

    if (!Component) {
        return <>{fallback}</>;
    }

    return (
        <React.Suspense fallback={fallback}>
            <Component />
        </React.Suspense>
    );
}

export { ClientOnly };
