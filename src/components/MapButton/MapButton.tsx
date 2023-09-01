import React from "react";
import styled from "styled-components";

const RoundButton = styled.button`
    --size: 32px;
    border-radius: 2px;
    height: var(--size);
    width: var(--size);
    background-color: var(--river-blue);
    color: white;
    border: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    &:hover {
        background-color: var(--dark-river-blue);
    }
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default React.forwardRef<HTMLButtonElement, React.BaseHTMLAttributes<HTMLButtonElement>>(
    function MapButton({ children, ...delegated }, ref) {
        return (
            <RoundButton ref={ref} {...delegated}>
                {children}
            </RoundButton>
        );
    }
);
