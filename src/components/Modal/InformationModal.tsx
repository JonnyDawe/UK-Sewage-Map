import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";
import Wave from "react-wavify";
import styled from "styled-components";

import { useOnFirstVisit } from "../../hooks/useOnUserFirstVisit";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import Button from "../Button";
import Dialog from "../Dialog";
import { CloseIcon, HydrologyModelIcon, InfoIcon, WasteWaterIcon, WaterInfoIcon } from "../Icon";
import MapButton from "../MapButton";
import TextInfoList from "../TextInfoList";
import { ModalHeader } from "./DialogTitle";

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
                <Dialog.Overlay />
                <Dialog.Content>
                    <Dialog.Title>
                        <VisuallyHidden>Information about this application</VisuallyHidden>
                    </Dialog.Title>
                    <Dialog.Description>
                        <VisuallyHidden>
                            Information and a description of the methodology for this map
                            application that displays sewage discharge into rivers. It also includes
                            an overview of the model for tracing waste downstream.
                        </VisuallyHidden>
                    </Dialog.Description>

                    <div style={{ position: "relative", padding: "25px", overflow: "hidden" }}>
                        <BackgroundWave
                            fill="#E6F5FF"
                            paused={prefersReducedMotion}
                            options={{
                                height: 25,
                                amplitude: 25,
                                speed: 0.175,
                                points: 5
                            }}
                        />
                        <div style={{ position: "relative" }}>
                            <ModalHeader
                                title="Information"
                                subTitle="Sewage Map"
                                level={2}
                            ></ModalHeader>
                            <p>
                                This map shows real-time information about river sections that might
                                be affected by sewage discharges from combined sewer overflows.
                                Currently, it is limited to the Thames basin, which is managed by{" "}
                                <i>Thames Water</i>.
                            </p>
                            <TextInfoList icon={<WaterInfoIcon></WaterInfoIcon>}>
                                <h3>About the Data</h3>
                                <p>
                                    The data is collected through{" "}
                                    <a href="https://www.thameswater.co.uk/about-us/performance/river-health/storm-discharge-and-event-duration-monitoring">
                                        Event Duration Monitoring
                                    </a>{" "}
                                    (EDM) by <i>Thames Water</i>, providing almost{" "}
                                    <a href="https://www.thameswater.co.uk/edm-map">
                                        real-time updates
                                    </a>{" "}
                                    on combined sewer overflows (CSOs). CSOs release untreated,
                                    diluted sewage into the environment. Starting in 2023, more
                                    water companies have committed to sharing their sewer overflow
                                    monitoring data with the public.
                                </p>
                            </TextInfoList>
                            <TextInfoList icon={<HydrologyModelIcon></HydrologyModelIcon>}>
                                <h3>Hydrology Model </h3>
                                <p>
                                    To identify river stretches affected by active CSOs, we combine
                                    real-time EDM data with a basic hydrological model. Using the{" "}
                                    <i>Center for Ecology and Hydrology’s</i>{" "}
                                    <a href="https://www.ceh.ac.uk/data/integrated-hydrological-digital-terrain-model">
                                        Integrated Hydrological Digital Terrain Model
                                    </a>
                                    , we track CSO discharges downstream along non-tidal river
                                    networks. We highlight areas downstream of active and recent
                                    discharges in brown, indicating the potential risk of sewage
                                    pollution. Please note that this approach does not consider
                                    dilution, river flow, or dispersion effects on pollutant
                                    concentration. Since water companies do not release real-time
                                    data on discharge quantity or concentration, accurately
                                    modelling these effects is very difficult.
                                </p>
                            </TextInfoList>
                            <TextInfoList icon={<WasteWaterIcon></WasteWaterIcon>}>
                                <h3>Waste Water</h3>
                                <p>
                                    According to the <i>Environment Agency’s</i>{" "}
                                    <a href="https://www.gov.uk/government/news/environment-agency-publishes-event-duration-monitoring-data-for-2022">
                                        data for 2022
                                    </a>
                                    , there were 301,091 instances when CSOs released untreated
                                    sewage. These discharges happened over a total duration of 1.75
                                    million hours. CSOs are responsible for releasing various
                                    pollutants, including{" "}
                                    <a href="https://www.nature.com/articles/s41893-021-00718-2">
                                        microplastics
                                    </a>
                                    ,{" "}
                                    <a href="https://www.sciencedirect.com/science/article/pii/S0048969718349519">
                                        illegal drugs
                                    </a>
                                    , and{" "}
                                    <a href="https://www.sciencedirect.com/science/article/pii/S0048969723029030">
                                        human effluent
                                    </a>
                                    , into the environment. In 2022, the goal to clean up waterways
                                    in England by 2027 was postponed by 36 years to 2063.
                                </p>
                            </TextInfoList>
                            <p css={{ margin: "16px 0px" }}>
                                <strong>Find out more at:</strong>{" "}
                                <a href="https://github.com/AlexLipp/thames-sewage ">
                                    https://github.com/AlexLipp/thames-sewage{" "}
                                </a>
                            </p>
                            <div
                                style={{
                                    display: "flex",
                                    marginTop: 25,
                                    justifyContent: "flex-end"
                                }}
                            >
                                <Dialog.Close asChild>
                                    <Button>Lets Go!</Button>
                                </Dialog.Close>
                            </div>
                        </div>
                    </div>

                    <Dialog.CloseCornerButton aria-label="Close">
                        <CloseIcon></CloseIcon>
                    </Dialog.CloseCornerButton>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default InformationModal;
