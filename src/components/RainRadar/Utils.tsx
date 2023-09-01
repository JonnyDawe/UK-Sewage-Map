import styled from "styled-components";

import { rainColorCodes } from "./config";

/**
 * generate tile ID based on date
 * @param date date
 * @returns
 */
export const generateTileID = (date: number): string => `rainfall-radar-base-${date}`;

/**
 * find layer helper
 * @param layers layer collections
 * @param toFind wildcard to find
 * @returns
 */
export const findLayersByIdKeyword = (
    layers: __esri.Collection<__esri.Layer>,
    toFind: string
): __esri.Layer[] => {
    return layers.filter((y: __esri.Layer) => y.id.includes(toFind)).toArray();
};

/**
 * generic round down
 * @param roundTo number to round down to
 * @returns
 */
const roundDownTo = (roundTo: number) => (x: number) => Math.floor(x / roundTo) * roundTo;

/**
 * generic round up
 * @param roundTo number to round up to
 * @returns
 */
const roundUpTo = (roundTo: number) => (x: number) => Math.ceil(x / roundTo) * roundTo;

/**
 * generate round down 10 minutes in unix
 * @returns
 */
export const getRoundDownUnixTs = (): number => {
    const roundDownTo10Minutes = roundDownTo(1000 * 60 * 10);
    const roundDate = roundDownTo10Minutes(new Date().getTime());

    return roundDate / 1000;
};

/**
 * generate round up 10 minutes in unix
 * @returns
 */
export const getRoundUpUnixTs = (): number => {
    const roundUpTo10Minutes = roundUpTo(1000 * 60 * 10);
    const roundDate = roundUpTo10Minutes(new Date().getTime());

    return roundDate / 1000;
};

const LegendWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    gap: 4px;
`;

const ColorGrid = styled.div`
    flex-grow: 1;
    display: grid;
    grid-auto-columns: auto;
`;

/**
 * Generate Colour scheme for Rainviewer
 * @param code colour code
 * @param rain rain data or not
 * @param label need label or not
 * @returns
 */
export const generateColorLegend = (code: string) => {
    const colorList = rainColorCodes[code];

    const tableRender = (
        <ColorGrid>
            {colorList.map((c: string) => {
                return (
                    <div key={`${code}-${c}`} style={{ backgroundColor: c, gridRow: "1" }}></div>
                );
            })}
        </ColorGrid>
    );

    return (
        <LegendWrapper>
            <small>Light</small>
            {tableRender}
            <small>Heavy</small>
        </LegendWrapper>
    );
};
