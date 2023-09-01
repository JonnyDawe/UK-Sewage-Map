import styled from "styled-components";

const PulseDot = styled.span`
    border-radius: 100%;
    background-color: hsl(10, 90%, 50%);
    width: 4px;
    display: inline-block;
    height: 4px;
    margin-bottom: 2px;
    vertical-align: middle;
    margin-right: 4px;
    box-shadow: 0 0 0 0 hsl(10, 90%, 50%);
    transform: scale(1);

    @media (prefers-reduced-motion: no-preference) {
        animation: pulse 2s infinite;
    }

    @keyframes pulse {
        0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 hsl(9.95633187772926, 89.80392156862744%, 50%, 0.7);
        }

        70% {
            transform: scale(1);
            box-shadow: 0 0 0 5px hsl(10, 90%, 50%, 0);
        }

        100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 hsl(10, 90%, 50%, 0);
        }
    }
`;

function PulsatingBadge({ children }: React.PropsWithChildren) {
    return (
        <div
            css={`
                border-radius: 99999px;
                background-color: hsl(0, 100%, 97%);
                padding: 0px 8px;
                border: hsl(0, 100%, 90%) solid 1px;
                color: hsl(10, 90%, 50%);
                font-size: 0.7rem;
            `}
        >
            <PulseDot></PulseDot>
            {children}
        </div>
    );
}

export default PulsatingBadge;
