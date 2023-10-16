import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import Wave from "react-wavify";
import styled from "@emotion/styled";

import { useOnFirstVisit } from "../../hooks/useOnUserFirstVisit";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import {
    CloseIcon,
    HydrologyModelIcon,
    InfoIcon,
    WasteWaterIcon,
    WaterInfoIcon
} from "../common/Icons";
import MapButton from "../common/Buttons/MapButton";
import TextInfoList from "../TextInfoList";
import { ModalHeader } from "../common/Dialog/DialogTitle";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import AppTheme from "../Theme/AppTheme";
import Dialog from "../common/Dialog/Dialog";
import { Em, Link } from "../common/Text";

const BackgroundWave = styled(Wave)`
    position: absolute;
    width: 600px;
    bottom: -40px;
    right: 0;
`;

const InformationModal = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpenOnFirstVisit = React.useCallback(() => {
        setOpen(true);
    }, []);
    useOnFirstVisit(handleOpenOnFirstVisit);

    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
                <MapButton>
                    <InfoIcon></InfoIcon>
                </MapButton>
            </Dialog.Trigger>
            <Dialog.Portal>
                <AppTheme>
                    <Dialog.Overlay />
                    <Dialog.Content>
                        <Dialog.Title>
                            <VisuallyHidden>Information about this application</VisuallyHidden>
                        </Dialog.Title>
                        <Dialog.Description>
                            <VisuallyHidden>
                                Information and a description of the methodology for this map
                                application that displays sewage discharge into rivers. It also
                                includes an overview of the model for tracing waste downstream.
                            </VisuallyHidden>
                        </Dialog.Description>

                        <Box position={"relative"} p={"4"} style={{ overflow: "hidden" }}>
                            <BackgroundWave
                                fill="var(--blue-4)"
                                paused={prefersReducedMotion}
                                options={{
                                    height: 25,
                                    amplitude: 25,
                                    speed: 0.175,
                                    points: 5
                                }}
                            />
                            <Box position={"relative"}>
                                <ModalHeader
                                    title="Information"
                                    subTitle="Sewage Map"
                                    level={2}
                                ></ModalHeader>

                                <Flex direction={"column"} gap={"4"}>
                                    <Text>
                                        This map shows real-time information about river sections
                                        that might be affected by sewage discharges from combined
                                        sewer overflows. Currently, it is limited to the Thames
                                        basin, which is managed by <Em>Thames Water</Em>.
                                    </Text>
                                    <TextInfoList icon={<WaterInfoIcon></WaterInfoIcon>}>
                                        <Heading as={"h3"} size={"4"}>
                                            About the Data
                                        </Heading>
                                        <Text>
                                            The data is collected through{" "}
                                            <Link href="https://www.thameswater.co.uk/about-us/performance/river-health/storm-discharge-and-event-duration-monitoring">
                                                Event Duration Monitoring
                                            </Link>{" "}
                                            (EDM) by <Em>Thames Water</Em>, providing almost{" "}
                                            <Link href="https://www.thameswater.co.uk/edm-map">
                                                real-time updates
                                            </Link>{" "}
                                            on combined sewer overflows (CSOs). CSOs release
                                            untreated, diluted sewage into the environment. Starting
                                            in 2023, more water companies have committed to sharing
                                            their sewer overflow monitoring data with the public.
                                        </Text>
                                    </TextInfoList>
                                    <TextInfoList icon={<HydrologyModelIcon></HydrologyModelIcon>}>
                                        <Heading as={"h3"} size={"4"}>
                                            Hydrology Model{" "}
                                        </Heading>
                                        <Text>
                                            To identify river stretches affected by active CSOs, we
                                            combine real-time EDM data with a basic hydrological
                                            model. Using the{" "}
                                            <Em>Center for Ecology and Hydrology’s</Em>{" "}
                                            <Link href="https://www.ceh.ac.uk/data/integrated-hydrological-digital-terrain-model">
                                                Integrated Hydrological Digital Terrain Model
                                            </Link>
                                            , we track CSO discharges downstream along non-tidal
                                            river networks. We highlight areas downstream of active
                                            and recent discharges in brown, indicating the potential
                                            risk of sewage pollution. Please note that this approach
                                            does not consider dilution, river flow, or dispersion
                                            effects on pollutant concentration. Since water
                                            companies do not release real-time data on discharge
                                            quantity or concentration, accurately modelling these
                                            effects is very difficult.
                                        </Text>
                                    </TextInfoList>
                                    <TextInfoList icon={<WasteWaterIcon></WasteWaterIcon>}>
                                        <Heading as={"h3"} size={"4"}>
                                            Waste Water
                                        </Heading>
                                        <Text>
                                            According to the <Em>Environment Agency’s</Em>{" "}
                                            <Link href="https://www.gov.uk/government/news/environment-agency-publishes-event-duration-monitoring-data-for-2022">
                                                data for 2022
                                            </Link>
                                            , there were 301,091 instances when CSOs released
                                            untreated sewage. These discharges happened over a total
                                            duration of 1.75 million hours. CSOs are responsible for
                                            releasing various pollutants, including{" "}
                                            <Link href="https://www.nature.com/articles/s41893-021-00718-2">
                                                microplastics
                                            </Link>
                                            ,{" "}
                                            <Link href="https://www.sciencedirect.com/science/article/pii/S0048969718349519">
                                                illegal drugs
                                            </Link>
                                            , and{" "}
                                            <Link href="https://www.sciencedirect.com/science/article/pii/S0048969723029030">
                                                human effluent
                                            </Link>
                                            , into the environment. In 2022, the goal to clean up
                                            waterways in England by 2027 was postponed by 36 years
                                            to 2063.
                                        </Text>
                                    </TextInfoList>
                                    <Text mt={"2"}>
                                        <strong>Find out more at:</strong>{" "}
                                        <Link href="https://github.com/AlexLipp/thames-sewage ">
                                            https://github.com/AlexLipp/thames-sewage{" "}
                                        </Link>
                                    </Text>
                                </Flex>
                                <Flex justify={"end"} direction={"row"} pt={"2"}>
                                    <Dialog.Close asChild>
                                        <Button size="3" variant="solid">
                                            Lets Go!
                                        </Button>
                                    </Dialog.Close>
                                </Flex>
                            </Box>
                        </Box>

                        <Dialog.CloseCornerButton aria-label="Close">
                            <CloseIcon></CloseIcon>
                        </Dialog.CloseCornerButton>
                    </Dialog.Content>
                </AppTheme>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default InformationModal;
