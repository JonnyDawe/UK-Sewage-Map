import styled from "styled-components";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { CloseIcon, RainIcon } from "../Icon";
import MapButton from "../MapButton";
import Popover from "../Popover";
import RainRadar from "./RainRadar";

const Title = styled.p`
    font-size: 1.2rem;
    line-height: 1;
    color: var(--font-1);
    font-weight: 500;
`;

const RainRadarPopover = ({ view }: { view: __esri.MapView }) => {
    return (
        <ErrorBoundary>
            <Popover.Root>
                <Popover.Trigger asChild>
                    <MapButton>
                        <RainIcon></RainIcon>
                    </MapButton>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content
                        className="PopoverContent"
                        sideOffset={5}
                        collisionPadding={{ top: 16 }}
                        side={"left"}
                        onInteractOutside={(ev) => {
                            ev.preventDefault();
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <Title className="Text" style={{ marginBottom: 10 }}>
                                🌧️ Rainfall Radar
                            </Title>
                            <RainRadar
                                view={view}
                                opacity={0.3}
                                colorScheme="2"
                                playOnLoad={false}
                                playSpeed={1}
                                relativeTime={false}
                            ></RainRadar>
                        </div>
                        <Popover.CloseCornerButton aria-label="Close">
                            <CloseIcon></CloseIcon>
                        </Popover.CloseCornerButton>
                        <Popover.Arrow className="PopoverArrow" />
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </ErrorBoundary>
    );
};

export default RainRadarPopover;
