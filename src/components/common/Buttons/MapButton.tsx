import React from "react";
import styled from "@emotion/styled";
import { IconButton as PrimitiveIconButton } from "@radix-ui/themes";

const IconButton = styled(PrimitiveIconButton)`
    cursor: pointer;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
`;

const MapButton = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof PrimitiveIconButton>
>(({ children, ...delegated }, ref) => {
    return (
        <IconButton size={"2"} radius="small" {...delegated} ref={ref}>
            {children}
        </IconButton>
    );
});

export default MapButton;
