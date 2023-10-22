import styled from "@emotion/styled";

import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { CloseIcon, RainIcon } from "../common/Icons";
import MapButton from "../common/Buttons/MapButton";
import Popover from "../common/Popover";
import RainRadar from "./RainRadar";
import AppTheme from "../Theme/AppTheme";
import { Flex, Heading } from "@radix-ui/themes";

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
                    <AppTheme>
                        <Popover.Content
                            className="PopoverContent"
                            sideOffset={5}
                            collisionPadding={{ top: 16 }}
                            side={"left"}
                            onInteractOutside={(ev) => {
                                ev.preventDefault();
                            }}
                        >
                            <Flex direction={"column"} gap={"2"}>
                                <Heading as="h3" size={"3"}>
                                    🌧️ Rainfall Radar
                                </Heading>
                                <RainRadar
                                    view={view}
                                    opacity={0.3}
                                    colorScheme="2"
                                    playOnLoad={false}
                                    playSpeed={1}
                                    relativeTime={false}
                                ></RainRadar>
                            </Flex>
                            <Popover.CloseCornerButton aria-label="Close">
                                <CloseIcon></CloseIcon>
                            </Popover.CloseCornerButton>
                            <Popover.Arrow className="PopoverArrow" />
                        </Popover.Content>
                    </AppTheme>
                </Popover.Portal>
            </Popover.Root>
        </ErrorBoundary>
    );
};

export default RainRadarPopover;
