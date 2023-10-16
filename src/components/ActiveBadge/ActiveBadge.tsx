import styled from "@emotion/styled";
import { Badge } from "@radix-ui/themes";

const PulseDot = styled.span`
    border-radius: 100%;
    background-color: var(--accent-a9);
    width: 4px;
    display: inline-block;
    height: 4px;
    vertical-align: middle;
    margin-right: 4px;
    box-shadow: 0 0 0 0 var(--accent-a9);
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
        <Badge color="red" radius="full">
            <PulseDot></PulseDot>
            {children}
        </Badge>
    );
}

export default PulsatingBadge;
