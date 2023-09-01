import React from "react";
import styled from "styled-components";

const AppButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 32px;
    background-color: var(--river-blue);
    border-radius: 5px;
    border: unset;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: var(--dark-river-blue);
    }
`;

const Button = React.forwardRef<HTMLButtonElement, React.BaseHTMLAttributes<HTMLButtonElement>>(
    function Button({ children, ...delegated }, ref) {
        return (
            <AppButton ref={ref} {...delegated}>
                {children}
            </AppButton>
        );
    }
);

export default Button;
