import styled from "@emotion/styled";
import * as PrimitivePopover from "@radix-ui/react-popover";

const Content = styled(PrimitivePopover.Content)`
    border-radius: 4px;
    padding: 20px;
    width: 260px;
    background-color: var(--color-panel-solid);
    box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;

    @media (prefers-reduced-motion: no-preference) {
        [data-state="open"][data-side="top"] {
            animation-name: slideDownAndFade;
        }
        [data-state="open"][data-side="right"] {
            animation-name: slideLeftAndFade;
        }
        [data-state="open"][data-side="bottom"] {
            animation-name: slideUpAndFade;
        }
        [data-state="open"][data-side="left"] {
            animation-name: slideRightAndFade;
        }
    }

    @keyframes slideUpAndFade {
        from {
            opacity: 0;
            transform: translateY(2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideRightAndFade {
        from {
            opacity: 0;
            transform: translateX(-2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideDownAndFade {
        from {
            opacity: 0;
            transform: translateY(-2px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideLeftAndFade {
        from {
            opacity: 0;
            transform: translateX(2px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const CloseCornerButton = styled(PrimitivePopover.Close)`
    background-color: unset;
    border: unset;
    height: 20px;
    width: 20px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
`;

const Arrow = styled(PrimitivePopover.Arrow)`
    fill: var(--color-panel-solid);
`;

export default {
    ...PrimitivePopover,
    Arrow,
    CloseCornerButton,
    Content
};
