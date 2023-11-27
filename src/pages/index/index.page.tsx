import "@radix-ui/themes/styles.css";
import "../../styles/index.css";

import { ClientOnly } from "../../../renderer/ClientOnly";
export { Page };

function Page() {
    return (
        <ClientOnly component={() => import("./App")} fallback={<div>Loading...</div>}></ClientOnly>
    );
}
