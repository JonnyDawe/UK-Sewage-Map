import styled from "@emotion/styled";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Box, Button, Flex, Heading, Separator, Text } from "@radix-ui/themes";
import React from "react";
import Wave from "react-wavify";

import { useOnFirstVisit } from "../../hooks/useOnUserFirstVisit";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import MapButton from "../common/Buttons/MapButton";
import Dialog from "../common/Dialog/Dialog";
import { ModalHeader } from "../common/Dialog/DialogTitle";
import {
    CloseIcon,
    HydrologyModelIcon,
    InfoIcon,
    WasteWaterIcon,
    WaterInfoIcon
} from "../common/Icons";
import { Em, Link } from "../common/Text";
import TextInfoList from "../TextInfoList/TextInfoList";
import { AppTheme } from "../Theme/AppTheme";

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

                        <Box position={"relative"} p={"5"} style={{ overflow: "hidden" }}>
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

                                <Flex direction={"column"} gap={"4"} mb="4">
                                    <Text>
                                        This map shows, in real-time, which river sections are
                                        downstream of sewage discharges from storm overflows.
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
                                            (EDM) by Thames Water, providing near{" "}
                                            <Link href="https://www.thameswater.co.uk/edm-map">
                                                real-time updates
                                            </Link>{" "}
                                            on storm overflows. Such overflows release untreated,
                                            diluted sewage into the environment. Currently, only
                                            Thames Water provide an API to the raw EDM data, so the
                                            map is limited to the Thames Basin. More water companies
                                            have committed to sharing their sewer overflow
                                            monitoring data with the public, so map coverage should
                                            expand in the future.
                                        </Text>
                                    </TextInfoList>
                                    <TextInfoList icon={<HydrologyModelIcon></HydrologyModelIcon>}>
                                        <Heading as={"h3"} size={"4"}>
                                            Hydrology Model{" "}
                                        </Heading>
                                        <Text>
                                            To identify river stretches downstream of an overflow,
                                            we combine the real-time EDM data with a basic
                                            hydrological model. Using the Center for Ecology and
                                            Hydrology’s{" "}
                                            <Link href="https://www.ceh.ac.uk/data/integrated-hydrological-digital-terrain-model">
                                                Integrated Hydrological Digital Terrain Model
                                            </Link>
                                            , we track sewage discharges downstream along non-tidal
                                            river networks. We highlight areas downstream of active
                                            and recent discharges in brown. This simple approach
                                            does not consider dilution, river flow, or dispersion
                                            effects on pollutant concentration. Since water
                                            companies do not provide real-time data on discharge
                                            volume or pollutant concentrations, accurately modelling
                                            these effects is very difficult. Consequently, on its
                                            own,
                                            <Em>
                                                this map should not be used to assess pollution risk
                                            </Em>{" "}
                                            at a specific location, for example, for bathing water
                                            quality.
                                        </Text>
                                    </TextInfoList>
                                    <TextInfoList icon={<WasteWaterIcon></WasteWaterIcon>}>
                                        <Heading as={"h3"} size={"4"}>
                                            Waste Water
                                        </Heading>
                                        <Text>
                                            According to the Environment Agency’s{" "}
                                            <Link href="https://www.bbc.co.uk/news/science-environment-68665335">
                                                data for 2023
                                            </Link>
                                            , sewage overflows released untreated sewage for total
                                            duration of 3.6 million hours. Untreated sewage
                                            overflows are responsible for releasing various
                                            pollutants, including{" "}
                                            <Link href="https://www.nature.com/articles/s41893-021-00718-2">
                                                microplastics
                                            </Link>
                                            ,{" "}
                                            <Link href="https://www.sciencedirect.com/science/article/pii/S0048969724029747">
                                                illegal drugs
                                            </Link>
                                            , and{" "}
                                            <Link href="https://www.sciencedirect.com/science/article/pii/S0048969723029030">
                                                human effluent
                                            </Link>
                                            , into the environment.
                                        </Text>
                                    </TextInfoList>
                                    <Text mt={"2"}>
                                        <strong>
                                            For more information and to see the full source code,
                                            visit our GitHub pages:
                                        </strong>{" "}
                                        <br></br>
                                    </Text>
                                    <Flex gap={"2"} justify={"start"}>
                                        <Link href="https://github.com/AlexLipp/thames-sewage ">
                                            backend
                                        </Link>
                                        <Separator orientation="vertical"></Separator>
                                        <Link href="https://github.com/JonnyDawe/UK-Sewage-Map/ ">
                                            frontend
                                        </Link>
                                    </Flex>

                                    <Text mt={"2"}>
                                        Whilst every effort has been made to ensure accuracy, this
                                        is experimental software and errors may occur. If you see
                                        any issues please reach out to us so we can fix them (see
                                        GitHub links above).
                                    </Text>

                                    <Text mt={"2"}>
                                        <strong>We welcome suggestions and contributions!</strong>
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
