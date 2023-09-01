import "@esri/calcite-components/dist/components/calcite-slider";

import { CalciteSlider } from "@esri/calcite-components-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";

import { RainviewerItem } from "./config";

type TimeSliderProps = {
    currentTimePath: RainviewerItem;
    handleTimeSliderChange: (index: number) => void;
    timePathList: RainviewerItem[];
};

const renderTimePath = (time: number, relativeTime: boolean): string => {
    if (relativeTime) {
        const currentTime = new Date().getTime() / 1000;
        const diff = currentTime - time;
        const minutes = Math.floor(diff / 60);

        return minutes > 0 ? `${minutes} minutes ago` : `In ${Math.abs(minutes)} minutes`;
    }

    return new Date(time * 1000).toLocaleString("en", {
        timeStyle: "short"
    });
};

export function TimeSlider({
    timePathList,
    currentTimePath,
    handleTimeSliderChange
}: TimeSliderProps) {
    const uniqueId = React.useId();
    return (
        <div>
            <p>{renderTimePath(currentTimePath.time, false)}</p>
            <label htmlFor={uniqueId}>
                <VisuallyHidden>Rain Radar Time Slider</VisuallyHidden>
            </label>
            <CalciteSlider
                name={`radartimeslider-${uniqueId}`}
                id={uniqueId}
                min={0}
                max={timePathList.length - 1}
                value={timePathList.findIndex((item) => {
                    return item.time === currentTimePath?.time;
                })}
                onCalciteSliderInput={(event) => {
                    handleTimeSliderChange(event.target.value as number);
                }}
                ticks={1}
            ></CalciteSlider>
        </div>
    );
}
