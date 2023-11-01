import { ClientOnly } from "../../../renderer/ClientOnly";

export { Page };

function Page() {
    return (
        <ClientOnly component={() => import("./App")} fallback={<div>Loading...</div>}></ClientOnly>
    );
}
