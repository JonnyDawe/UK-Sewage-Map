import WebTileLayer from "@arcgis/core/layers/WebTileLayer.js";
import { Flex } from "@radix-ui/themes";
import React from "react";
import useSWR from "swr";

import { Config, RAINVIEWERCOVERAGEURL, RainviewerItem } from "./config";
import { TimeSlider } from "./Timeslider";
import {
    findLayersByIdKeyword,
    generateColorLegend,
    generateTileID,
    getRoundUpUnixTs
} from "./Utils";

// fetch task for Rainviewer
async function fetchTimePaths(url: string) {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the rain radar data.");
        throw error;
    }

    const data = await res.json();
    return {
        past: data.radar.past,
        nowcast: data.radar.nowcast
    } as {
        past: RainviewerItem[];
        nowcast: RainviewerItem[];
    };
}

function refreshInterval() {
    const timeout = getRoundUpUnixTs() - new Date().getTime() / 1000;
    // add 60 seconds to ensure data readiness
    return Math.round(timeout * 1000 + 60000);
}

const RainRadar = ({ colorScheme, opacity, view }: Config) => {
    const pastTimePathRef = React.useRef<RainviewerItem | null>(null);
    const timePathRef = React.useRef<RainviewerItem | null>(null);
    const [currentTimePath, setCurrentTimePath] = React.useState<RainviewerItem | null>(null);

    const handleTimeSliderChange = (index: number) => {
        setCurrentTimePath(timePathList[index]);
    };

    // get available image list
    const { data: radarTimePaths } = useSWR(RAINVIEWERCOVERAGEURL, fetchTimePaths, {
        refreshInterval: refreshInterval()
    });
    const timePathList = [...(radarTimePaths?.past ?? []), ...(radarTimePaths?.nowcast ?? [])];

    // generate web tile layer
    const generateWebTileLayer = React.useCallback(
        (tPath: RainviewerItem): WebTileLayer => {
            const id = generateTileID(tPath.time);

            const urlTemplate = `https://tilecache.rainviewer.com${tPath.path}/256/{z}/{x}/{y}/${colorScheme}/1_0.png`;

            const copyright = '<a href="https://www.rainviewer.com/api.html">Rainviewer</a>';

            // Create a WebTileLayer for Nearmap imagery.
            // We are using tileinfo we created earlier.
            const wtl = new WebTileLayer({
                urlTemplate,
                copyright,
                title: `Rainfall Radar for ${id}`,
                listMode: "hide",
                visible: false,
                opacity: opacity,
                id
            });

            wtl.on("layerview-create-error", () => {
                wtl.refresh();
            });

            return wtl;
        },
        [colorScheme, opacity]
    );

    const loadMapTask = React.useCallback(
        (tPath: RainviewerItem): void => {
            if (view !== null) {
                const newMapLayer = generateWebTileLayer(tPath);
                view.map.add(newMapLayer);
            }
        },
        [generateWebTileLayer, view]
    );

    // remove all map layers
    const mapCleanupTask = React.useCallback((): void => {
        if (view !== null) {
            const oldLayers = findLayersByIdKeyword(view.map.layers, "rainfall-radar-base-");
            view.map.removeMany(oldLayers);
        }
    }, [view]);

    // show and hide map for smoother play
    const smoothShowHideMapTask = React.useCallback(
        (tPath: RainviewerItem) => {
            if (view !== null) {
                let oldLayers: __esri.Layer[] = [];

                const newLayers = findLayersByIdKeyword(view.map.layers, `${tPath.time}`);

                if (pastTimePathRef.current && pastTimePathRef.current.time !== tPath.time) {
                    oldLayers = findLayersByIdKeyword(
                        view.map.layers,
                        `${pastTimePathRef.current.time}`
                    );
                }

                if (newLayers.length !== 0) {
                    newLayers[0].listMode = "show";
                    newLayers[0].visible = true;
                    if (oldLayers.length !== 0) {
                        setTimeout(() => {
                            // delayHideRef.current = requestAnimationFrame(() => {
                            oldLayers[0].listMode = "hide";
                            oldLayers[0].visible = false;
                            // });
                        }, 80);
                    }
                }
            }
        },
        [view]
    );

    // time path list hook
    React.useEffect(() => {
        if (radarTimePaths) {
            if (currentTimePath === null) {
                setCurrentTimePath(radarTimePaths.past[radarTimePaths.past.length - 1]);
            }
            pastTimePathRef.current = radarTimePaths.past[radarTimePaths.past.length - 2];
            timePathList.forEach((tp) => {
                loadMapTask(tp);
            });
        }
        return () => {
            mapCleanupTask();
        };
    }, [loadMapTask, mapCleanupTask, radarTimePaths]);

    // time path hook
    React.useEffect(() => {
        timePathRef.current = currentTimePath;
        currentTimePath && smoothShowHideMapTask(currentTimePath);
        return () => {
            pastTimePathRef.current = currentTimePath;
        };
    }, [smoothShowHideMapTask, currentTimePath]);

    return (
        <Flex direction={"column"} gap={"5"}>
            {radarTimePaths && currentTimePath && (
                <TimeSlider
                    timePathList={timePathList}
                    currentTimePath={currentTimePath}
                    handleTimeSliderChange={handleTimeSliderChange}
                ></TimeSlider>
            )}
            {generateColorLegend(colorScheme)}
        </Flex>
    );
};

export default RainRadar;
