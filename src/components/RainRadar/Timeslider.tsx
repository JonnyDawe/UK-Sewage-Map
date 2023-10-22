import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import React from "react";

import { RainviewerItem } from "./config";
import { Box, Slider, Text } from "@radix-ui/themes";

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
        <Box>
            <Text size={"3"}>{renderTimePath(currentTimePath.time, false)}</Text>
            <label htmlFor={uniqueId}>
                <VisuallyHidden>Rain Radar Time Slider</VisuallyHidden>
            </label>
            <Slider
                name={`radartimeslider-${uniqueId}`}
                id={uniqueId}
                min={0}
                max={timePathList.length - 1}
                value={[
                    timePathList.findIndex((item) => {
                        return item.time === currentTimePath?.time;
                    })
                ]}
                onValueChange={(value) => {
                    handleTimeSliderChange(value?.[0] ?? 0);
                }}
                step={1}
            ></Slider>
        </Box>
    );
}
