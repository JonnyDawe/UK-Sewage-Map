import styled from "@emotion/styled";
import { IconButton as PrimitiveIconButton } from "@radix-ui/themes";
import React from "react";

const IconButton = styled(PrimitiveIconButton)`
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const MapButton = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof PrimitiveIconButton>
>(function MapButton({ children, ...delegated }, ref) {
    return (
        <IconButton size={"2"} radius="small" {...delegated} ref={ref}>
            {children}
        </IconButton>
    );
});

export default MapButton;
