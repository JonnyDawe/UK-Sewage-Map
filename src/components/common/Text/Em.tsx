import styled from "@emotion/styled";
import { Em as PrimitiveEm } from "@radix-ui/themes";

export const Em = styled(PrimitiveEm)`
    --em-font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
        "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --em-font-size-adjust: 1.05;
    color: var(--blue-a10);
`;
