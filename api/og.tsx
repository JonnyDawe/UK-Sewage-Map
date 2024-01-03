import type { VercelRequest } from "@vercel/node";
import { ImageResponse } from "@vercel/og";

import {
    calculateTotalDischargeLength,
    formatTime,
    getDischargeDataForPermitNumber,
    isDateWithinYear
} from "../src/utils/discharge/discharge.utils";
import { DischargeHistoricalDataJSON } from "../src/utils/discharge/types";

export const config = {
    runtime: "edge"
};

function generateDisplayData(jsonData: DischargeHistoricalDataJSON, permitNumber: string) {
    const { discharges, locationName, receivingWaterCourse } = getDischargeDataForPermitNumber(
        jsonData,
        permitNumber
    );

    const dischargesThisYear = discharges.filter((discharge) =>
        isDateWithinYear(discharge.start, 2024)
    );

    return {
        locationName,
        permitNumber,
        receivingWaterCourse,
        totalDischarge: formatTime(calculateTotalDischargeLength(dischargesThisYear), false)
    };
}

export default async function handler(request: VercelRequest) {
    try {
        const { searchParams } = new URL(request.url ?? "");

        // ?PermitNumber=<PermitNumber>
        const hasPermitNumber = searchParams.has("PermitNumber");

        if (!hasPermitNumber) {
            return new ImageResponse(
                (
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            padding: "24px",
                            backgroundImage:
                                'url("https://www.sewagemap.co.uk/opengraphsocial.png")',
                            backgroundSize: "100% 100%",
                            fontSize: 32,
                            fontWeight: 600
                        }}
                    ></div>
                )
            );
        }

        const permitNumber = searchParams.get("PermitNumber")?.slice(0, 100);

        const dischargesUpToPresent = await fetch(
            "https://thamessewage.s3.eu-west-2.amazonaws.com/discharges_to_date/up_to_now.json"
        );

        // If the status code is not in the range 200-299,
        // we still try to parse and throw it.
        if (!dischargesUpToPresent.ok || permitNumber === undefined) {
            const error = new Error(
                "An error occurred while fetching the historic discharge data."
            );
            throw error;
        }

        const historicDataJSON = await dischargesUpToPresent.json();
        const displayData = generateDisplayData(historicDataJSON, permitNumber);

        return new ImageResponse(
            (
                <div
                    style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        padding: "24px 80px",
                        backgroundImage: 'url("https://www.sewagemap.co.uk/opengraphsocial.png")',
                        backgroundSize: "100% 100%",
                        fontSize: 32,
                        fontWeight: 600
                    }}
                >
                    <div
                        style={{
                            flexGrow: 1,
                            display: "flex",
                            alignItems: "center",
                            alignSelf: "center"
                        }}
                    >
                        <div
                            style={{
                                padding: 40,
                                background: "white",
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                border: "1px #E6E6E6 solid",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                alignItems: "flex-start",
                                display: "flex",
                                width: "800px",
                                height: "400px"
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: 32,
                                    display: "flex"
                                }}
                            >
                                <div
                                    style={{
                                        flex: "1 1 0",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "flex-start",
                                        display: "flex"
                                    }}
                                >
                                    <span
                                        style={{
                                            alignSelf: "stretch",
                                            color: "black",
                                            fontSize: 48,
                                            fontFamily: "Lato",
                                            fontWeight: "400",
                                            wordWrap: "break-word"
                                        }}
                                    >
                                        {displayData.locationName}
                                    </span>

                                    <p style={{ margin: 0 }}>
                                        <span
                                            style={{
                                                color: "#0954A5",
                                                fontSize: 36,
                                                fontFamily: "Lato",
                                                fontWeight: "400",
                                                wordWrap: "break-word",
                                                whiteSpace: "pre"
                                            }}
                                        >
                                            Feeds into:{" "}
                                        </span>
                                        <span
                                            style={{
                                                color: "#0954A5",
                                                fontSize: 36,
                                                fontFamily: "Lato",
                                                fontWeight: "700",
                                                wordWrap: "break-word"
                                            }}
                                        >
                                            {displayData.receivingWaterCourse}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: "flex", width: "100%" }}>
                                <p
                                    style={{
                                        margin: 0,
                                        wordWrap: "break-word",
                                        color: "#3B5262",
                                        fontSize: 48,
                                        fontFamily: "Lato",
                                        fontWeight: 600
                                    }}
                                >
                                    {`Sewage overflow recorded for a total of ${displayData.totalDischarge} this year
                                    to date.`}
                                </p>
                            </div>

                            <svg
                                style={{ position: "absolute", bottom: 0, left: 0 }}
                                width="800"
                                height="280"
                                viewBox="0 0 770 216"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 7.35559L12.85 12.2517C25.7 17.2397 51.4 22.2687 77.1 24.7971C102.8 27.3256 128.5 26.8939 154.2 19.6073C179.9 12.1827 205.6 9.88408 231.3 12.2517C257 14.7112 282.7 22.0668 308.4 30.6406C334.1 39.3065 359.8 41.6051 385.5 41.674C411.2 41.6051 436.9 39.3064 462.6 33.1002C488.3 26.8939 514 17.2397 539.7 19.6073C565.4 22.0668 591.1 36.778 616.8 36.778C642.5 36.778 668.2 22.0668 693.9 13.4929C719.6 4.82711 745.3 2.52849 758.15 1.21827L771 0V263H758.15C745.3 263 719.6 263 693.9 263C668.2 263 642.5 263 616.8 263C591.1 263 565.4 263 539.7 263C514 263 488.3 263 462.6 263C436.9 263 411.2 263 385.5 263C359.8 263 334.1 263 308.4 263C282.7 263 257 263 231.3 263C205.6 263 179.9 263 154.2 263C128.5 263 102.8 263 77.1 263C51.4 263 25.7 263 12.85 263H0L0 7.35559Z"
                                    fill="#0099FF"
                                    fillOpacity="0.1"
                                />
                            </svg>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
                        <svg
                            width="55"
                            height="74"
                            viewBox="0 0 55 74"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_567_1128)">
                                <path
                                    d="M15.5848 52.4813C15.5848 52.4813 20.4596 57.8477 21.0506 58.1458C21.6414 58.4439 27.1072 59.7856 27.9936 59.3383C28.8799 58.8911 38.0387 53.5247 38.0387 53.5247C38.0387 53.5247 44.3908 48.4565 45.7204 47.413C47.0499 46.3696 51.6293 35.6368 52.0725 34.8918C52.5156 34.1465 52.9588 24.4573 52.5156 23.7115C52.0725 22.9662 54.2883 26.3947 51.777 22.2209C49.2657 18.047 38.9249 6.12137 38.9249 6.12137L25.3344 4.18347L13.6643 8.95357L7.31218 15.6616L2.73279 27.8848L7.31218 42.4935L15.5848 52.4813Z"
                                    fill="white"
                                />
                                <path
                                    d="M2.91256 40.6485C1.86454 38.5427 0.908895 35.8002 0.3715 33.3563C-0.122176 31.1109 -0.124166 25.6837 0.367552 23.1321C2.01148 14.6043 7.40683 7.13144 14.7381 3.22887C23.137 -1.2426 32.9303 -1.05663 41.2383 3.73194C44.4361 5.57494 48.244 9.28422 50.4418 12.6972C54.052 18.3029 55.2635 22.8831 54.9535 29.7528C54.8798 31.3871 54.6859 33.3948 54.5228 34.2142C53.9516 37.0833 52.3812 40.764 50.4708 43.7116C45.6614 52.7318 28.896 73.4327 27.2805 73.4032C26.6658 73.4219 8.7271 51.7841 2.91256 40.6485ZM32.4638 49.7316C38.6821 48.0701 43.3483 44.4653 46.4324 38.9402C47.8573 36.3874 48.6612 33.7857 49.0205 30.5646C49.8145 23.4458 47.084 16.3861 41.6957 11.6254C39.3327 9.53784 38.2427 8.83111 35.7781 7.78893C32.3475 6.33818 31.529 6.17707 27.5545 6.17022C24.5079 6.16464 23.7581 6.23149 22.281 6.63858C15.0098 8.64229 9.53462 13.9363 7.07662 21.3406C6.06279 24.3943 5.82465 29.5536 6.54565 32.8435C7.55616 37.4539 9.66066 41.2653 12.9095 44.3688C16.2563 47.5656 19.8622 49.3701 24.4209 50.1292C26.1878 50.4235 30.7136 50.2003 32.4637 49.7326L32.4638 49.7316Z"
                                    fill="#0954A5"
                                />
                                <rect
                                    x="16.2307"
                                    y="15.9136"
                                    width="22.6083"
                                    height="20.0873"
                                    fill="url(#pattern0)"
                                />
                                <path
                                    d="M24.5822 48.0648C22.048 47.7224 17.833 45.8649 15.8406 44.2126C11.9068 40.9501 9.92325 37.8356 8.67159 32.9566C7.736 29.3093 7.79451 27.3491 9.00177 21.8951C9.11186 21.3977 9.75673 19.9368 10.4348 18.6487C12.3355 15.0379 16.0312 11.4725 19.6398 9.76789C22.4933 8.42007 27.0137 7.73987 29.7561 8.24558C33.8358 8.998 35.4579 9.61347 38.0839 11.4053C40.1538 12.8178 40.9537 13.559 42.5273 15.5222C44.2373 17.6557 44.9767 18.9435 45.7589 21.1507C47.6356 26.4459 47.5789 30.453 45.551 35.8614C43.5634 41.1619 38.0296 46.0354 32.2259 47.5978C30.7072 48.0065 26.1914 48.2822 24.5822 48.0648ZM30.9265 43.0534C35.5798 41.9314 39.7344 38.0273 41.3981 33.2117C42.8239 29.0861 42.5896 25.3393 40.6495 21.2394C39.8864 19.6271 39.24 18.7381 37.7014 17.1856C34.2833 13.7363 32.4671 12.0226 27.372 12.0346C23.5288 12.0442 21.6453 12.9594 19.1681 14.7823C16.8897 16.4587 16.4283 17.6671 15.2308 19.5673C12.4167 24.0323 12.1176 30.4584 14.4974 35.3242C16.2831 38.9754 19.8732 42.0081 23.6108 43.0224C25.3332 43.4898 29.0506 43.5053 30.9272 43.0529L30.9265 43.0534Z"
                                    fill="#613D30"
                                />
                                <path
                                    d="M24.2805 46.3199C21.9667 45.9347 18.1538 44.1133 16.3728 42.5425C12.8564 39.4409 11.1239 36.5298 10.1111 32.0211C9.35411 28.651 9.46188 26.8555 10.7192 21.8894C10.8339 21.4365 11.4655 20.1153 12.1227 18.9534C13.9649 15.6965 17.4515 12.5318 20.8074 11.0705C23.4606 9.91511 27.6236 9.41856 30.1237 9.95925C33.8432 10.7637 35.3133 11.3736 37.6711 13.0901C39.5298 14.4433 40.2427 15.1453 41.6311 16.9894C43.1398 18.9934 43.7822 20.1948 44.4384 22.2403C46.0127 27.1476 45.8501 30.8199 43.8416 35.7208C41.873 40.5243 36.6652 44.8367 31.3013 46.1059C29.8977 46.438 25.7499 46.5644 24.2805 46.3199ZM30.2353 41.9038C34.5323 41.0061 38.4486 37.5436 40.1075 33.176C41.5286 29.4339 41.4173 25.9923 39.7518 22.179C39.0968 20.6794 38.5287 19.8463 37.161 18.3797C34.1225 15.1214 32.5049 13.4991 27.8328 13.3669C24.3092 13.2677 22.5571 14.0538 20.2355 15.6553C18.1004 17.1281 17.6441 18.223 16.4936 19.9314C13.7905 23.9457 13.3389 29.8289 15.3862 34.3561C16.9225 37.7536 20.1302 40.6349 23.5285 41.6698C25.0946 42.1468 28.5024 42.2659 30.2353 41.9038Z"
                                    fill="#52A9FF"
                                />
                            </g>
                            <defs>
                                <pattern
                                    id="pattern0"
                                    patternContentUnits="objectBoundingBox"
                                    width="1"
                                    height="1"
                                >
                                    <use
                                        href="#image0_567_1128"
                                        transform="scale(0.00628931 0.00714286)"
                                    />
                                </pattern>
                                <clipPath id="clip0_567_1128">
                                    <rect width="55" height="74" fill="white" />
                                </clipPath>
                                <image
                                    id="image0_567_1128"
                                    width="159"
                                    height="140"
                                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACMCAYAAABiWXvVAAAABHNCSVQICAgIfAhkiAAAHedJREFUeJztnXd4XOWZ6H/nzJkijTSj3pstS7IsG+MiWwbcaI6TUAJLWwW4Gwgk3jgLN+GBxNmEJW0DLHBvErLJsmRzIZDkBoceCKxtTHGjuGAjy02yLMnqdSSNpu0fxzKy0cx8Z+ZMEczvec6D0XznO+/MvPOV93uLRIJweAC4BeifdA2c9f/twPFTVxMwEgtB4xEl1gJ8Ckg/dYnSBewAtgJvAe8CrgjIleBTzgOAL8zLATwHXA2Yoyt+gumMHso3+eoBfgksiOabSDA90Vv5Jl+vAQuj91aijxxrARL45WJgF/AHoCLGskSEhPLFNzJwHbAXuBswxFYcfUko3/TAAvwr6g65Msay6EZC+aYX5wHvAVfEWhA9SCjf9CMF+Atwb4zlCJuE8kWBqrxUqvJSUQySXl1KwA+A/8M0XgcmTjiiQFVuCquqshl3eznUOcwHx/v5sG2Qcbc33K6/CViBr6KaZ6YVCeULD01DmUmRqSmwUVNgY9ztZV/rIJsPdtLWPxaODLcAncB3w+kkFkzbITtOuBR1ExCQqrxUyrKsZ/zNIEsUpFlYVp5JcXoSXUNOBsfcocqxHNWJYUeoHcSCxJovPIRGPilAKwmoKbBx58UVfGlBAWYl5K/kIeDzod4cCxLKFydIEiyvyOLuz1VRkZMSShcy8FsgT1/JIkdC+cJD9zVzWrKR21fOYFVVdii35wD/hca1aKxIKF94JIs106YLsiRx+fx86pcWIweas6dmDXCH1ptiQUL5wkNI+UJdxy0qTeemZSUYZM0KeB/TYPpNKF94pIo0shhD/5jPKbJzY12J1hEwhWlwApJQvvCYI9LIrIRn0TqnyM4Xz9E8kN0KzA3rwREmoXyhkwLMEGkYzsg3waqqbGrLtISKYAB+HPaDI0hC+ULnagQ/vxSzPpviaxYVkWvTFObxRaBcl4dHgITyhUYl8DORhgZZIjPFpMtDFYPE9bWadsAy8HVdHh4BEsonThbqSPIIqk9drshNeXZLKOYSv5RmJrO8IkvLLf+AsEkounwWHQvMQAlQhKpQE3G3aagew8mA/dS/s05dmaf+q5nybGvwRhpZU5PDrqZeRsY9Is0zUF3xf6u7IGHyaVe+QtRD93NRwxFrgAKieAIwt8Cme58Wo4GLqnN4YU+76C1XklC+iCMD5wN/B1wCVMdSmEyrifLskM5pg3LBrEy2HOxiSMwT5iLUkTws3y29+bSs+fKAH6HmQtmK6mQZU8UDuGROTkCPlnAwGmSWzsgQbW4FVkVGktCZ7spXCPwGVek2AMUxlWYS5dlWFmuzy2lmWXmGFuX+QgRFCYnpqnxmVGU7iOpCHlc5TtKTjdRrPxIL4TkmLe5X50dSllCYjspXBWxDnWb130qGSa7NzLrV5aQlGaPyvBrxDc0c4myNP92U70rUlGJxl0jHIEusrMzizksqyLTqY1QWQYPymVF/uHFDXP0SgvA14BfEWdyJLcnI4tI0zivPJCOKSjdBhtVEdoqZrmGnSPP5wP4IiyTMdFG+rwCPEmMP3SSjgQyriTy7hcI0CxU5KRSkJ8XcbbgwPUlU+YS8cKLFdFC+NcC/o4PiKbJEdqqZrBQTqRYjVrMBq1nBaJAxGSQUWV2FmI0yRoOMWZExKTKKLGE1K+EE90SUwnQLu1uEmobkmx8p4l35CoAngZBW70lGA9X5qczKSaE8x0qW1Rwxu1ssybNZRJsKGwajQTwrn4QaDKP5TLUoPYkVlVnML7JjNMTnaKUnqRbhrzEzknJoJZ6V7xrUIzJhUswKl83PZ3Fp+qdyhPOHBuVLjHwCmIGfarmhKD2Jr5xfRlpydOxr8USySfhrTIqkHFqJV+X7MjBTtPGMLCu3r5yB6TMwxU6FzyecI0hoSxwt4vXb+qZow1ybmVsuKPvMKh6AxyusfAmvliAsB84RaajIEjctKyXZFFd256jjTiifblwj2vDSmlzy7cJmhk8tA6PCBYwSyhcACfX8Nii2JCMrKkPybP/U0TM8Ltq0K5JyaCXelG8ugj55q6uyP9PrvMn0OISV72gk5dBKvH17F4g0UmSJxaVpkZZl2tDSK1zIMqF8AQia5RPUTJ9WnQKxpzs+Hxzpcog2TyhfAOaJNKrKE8rP85mgbWBUNIQSEsrnFwnBGmNlmXEZAx0T9p0YFG3aDZyIoCiaiSflK0Ygsl6S0Jqv5FOLzwfvNveJNn+bOCuXEE8LJ6GaYslGg5CnimIyUzx3CWl5JaSk52BNz8brcTPc28HIQC9dTQ20Ne7B5w27FkbIGBQjhdWLyCyaiTUtG2uG6m7n6O3C0d9Fz4mjnDjwLl7P1LG5h7uG6RXf6b6lj9T6EU/KJzTlmgI5dEoSFUsuYvYFX6Bs/nko5sAG6NHBPo6+9wb7Nm2kvXGPJmHDofScZdSsuoKyBcsxJweOPnM6hmja/Rb7tzxH895tZ7z2zuEeLY+NO+WLJ8ejhxHIJZxiVrjvik96gxdUnsvyL99JQdW5IT38+L7tvPH/HqT7+KGQ7hchd2YNy+vvoHjukpDub2vczZtPPExb4256HeP85OWDeMWcCkZQ89EID5PRIJ6UbydQG6yRLEn84PK5p2NiZYPCmq/ew6I1wqdyfvF63PztP+/n3b/+Mey+zkCSWHn911l+zW2Bi3KI4POx9U+/5rvf+z5vHxY+sNgKrAzvwfoTL8q3GFX5hOS5YmEVGdYkrDY76+67n+qFoY0k/njj+Wd48pF/xeMOuSLQaYwmE/9wz73UXbxWB8k+5i8bN3LjTTfhcAjZ+J4nDsukxoM7SAHwAhpcvDOtyRRkpXPXI7+mYp7+IbxlVXPIyivk/Tc3hdWPLMus/8nDLFpxkU6SfUx1dTVLlizh6aefxht801QJXHzqugA1HVwXIGydjgSxVr7LURWvVMtNSSYj9z30c+YuWRYZqYDiWZU4R0c5/GHoG5Eb1t/FsksjlyJl5syZ2O12XnnllWBNJdSchPOAZahZvO4EFgEdqLluok6slK8ceAL4PmpibU384zf/iS/fertw+5aWFg4cOEBXVxeKomC1imXZqF60lIb336WnQzgP3mmWXLiGa9fdKdy+vb2dhoYGWltbkWWZ1FSxU5y6ujoaGhrYv19zLLgMzAZuBpYAu4BerZ2EQ7TXfCbgHuA7qPniNJOZmcmRI4ex2wM7FnR3d/PAAw/wxz/+kebm5jNemz9/PjfffDPr1q3DbA5ssD7WsJ8f3X6jFld1FKOJn/7+WTLz8gO2Gxoa4pFHHuHJJ5+ksbHxjNeqqqqor6/njjvuCKqITU1NzJ49G6czLC/5EeAu4FdEyRgdzZFvKfASaorWkO2LP/7xj1m1anXANhs3buSiiy5i06ZNDAwMfOL1jo4OXn31VZ566ilWrVpFXp7/GhfpWTm0Nx+j9dgRYRkvuebvqb3w0oBttmzZwsqVK3nxxRfp6fmkva6np4fNmzfz+OOPs3jxYsrKyvz2lZaWRl9fH9u2bfPbRgAjahq1cuCvQPi7rSBEY+STgH9GnWLDUnar1UpXVxdJSf6DsB577DFuu+024ZHKarXy+uuvU1dX57dNU8MB7rutXqg/SZJ48M+vkJ6d47fNCy+8wNVXX43LJeaBbDQaeeaZZ7jsssv8tmlra6O4uFhk8yHC26iK+Mlfro5E+mzXAvwe+Bd0GGXXrFkTUPG2bdvGunXrNE2RDoeDq666iq4u/zaz0qpq0rOFks9TNrsmoOI1NjZSX18vrHgALpeL+vp6Dh3ybwAvKCigtjaomVSU84FXUXfFESOSymcHNgM36NXhlVf697D3+Xx861vf0vSlTtDe3s4Pf/hDv69LksSCC1YgSb6g18LlqwI+65577mFoaEizjENDQ9x9990B21xxha6mvKXAs0Qw8Wakpl0L8Ao6W9WPHDnMzJlTF9TZsWNHwKkzGMnJyXR1dZGcPLVjzcG3/8rL//eeoP1ce+/jFFYvmvK1EydOUFJSomlknowkSTQ3N1NcPHWkwc7tb7N0mZAzuBZ+jxpHrTuRGPkU4A+EqXipFoVFpWmsqcnlmsVF3Lq8jJKiIr/tX3rppXAex8jICJs2+TcqW9PFEjxZ0/y3e/nll0NWPFBH90Dvs3JGCXetqeTy+fksKEkjS5/KR/XAN/To6Gwi4dVyLyEe5ZgVNcN6bVn6J/LeWaw2FJP/GSDQekiUQH2kpPtfx01mwi1Ka/+iHD582O9rKek55NstZ4STjro8HO50sO/EAB+2DTLmEvZ6nsyDqJuQD0K52R96K98yVDueJkwGmYvn5HD+rEySjFPvS0xBXI+mMqlopb+/3+9rZmtwo69sUDCa/W+I9JCxr8+/86hiMmMwmvC4PnZeSTIamFdoY16hjTGXhx3Hetnc0M3gmKa1sRm1iEwtoH1R7U9evTpCTc79OzTuaitzU7hmcVHQPMYjg4GN7zk5YiNTIALZ+xwDwX3nvB43Y45BLNap8yRHWkanY+gMxTsbi9HAyspsls7I4NX9nbx5qFvUJQvUlLp3AT/RIm8g9FzzfRNBh1BQdzqfm5vL7StnCiXQdjvHGB/1fw4+b55Q7FFAAvXh6BNzX3L0dYfUvygBZewXk9FiNHDFufnctmKG1nKs3wUCH9toQC/lswPfFm2syBL1dSVcOidX03Z7sNv/GeuVV16JFIavXG5uLsuW+XdUGOo+KdTPUAAZ165di8USenoPi8XC2rX+XbNEZZygMjeF9ReVa0krZwV+oOkhAdBL+e5AMPGgJEH90hIWlmi3Xzbv8X98VF5eznXXXae5zwm+853vYDD4XzE0731HqJ/j+/zLaLPZ+MY3Qt84rl+/Hrvd7vd1URknk51i5h9Xl2sZAb+CTpWe9FA+A2qZAiG+MC+f+cX+P8BAHH1vS8DX77//fnJzxU4iJlNXV8fXv+6/JrLH7aJp99tCfR3ZtSXg6xs2bKCiQnh1cpqKigo2bNgQ+NnvvqG5X1ALFN60TLhikhH4p5AedBZ6KN+FqIX3glJTYOPC2aEnRG9teB9Hv/81VXFxMc8++ywZGeLZX6urq9m4cSMmk/915/G92wOuNyfT39FCV9NBv6+npaXxwgsvUBTAZnk2RUVFPP/88wFHva7mg/SfPC7c59nMyknRUkT6VnTIcqqH8v29SCOzInPVwsKwHuTzetn5l8cCtqmrq2P79u2cd17gzBuSJHHDDTewbds28vMDrKF9PrY/8++a5Nz258Dtq6qq2LlzZ8D12wRr165l586dzJ49O2C77UGeKcLn5uaK5ne2A/69HAQJ97BfAv4TgV/BmppcLaWa/NJ5rIHZ56/FkuJ/FMjMzOSWW26htrYWWZYZHBxkdHQUs9lMeXk5119/PY8++ijr168PugFo3PEaH7z8e00y9rUdo3T+MlIz/U8Iqamp1NfXs3r1aoxGI4ODg4yMjKAoCqWlpVx99dU89NBDbNiwIag/X1vjbt588mFNMk6FIkt4vT4OdQ6LNDehnmSFTLhnu7OBj4I1UmSJH1xWrVtyn7JzL+DKe36OJEXWKWfMMchT91zPQGer5ntzZ9Zw7X2/RTFGNruC2+XkT9//X3QcPaBLf45xDz947oCI/W8YNe4m5HDMcL89oZP8c4rsumaVatr9Fu/84Re69TcVPq+XV37+3ZAUD6Dj6H5e/819Okv1STY//lPdFA/AajIwK0cozCCFMMuohqt8S0UazSsMbXcbiJ3PPc6BrS/o3i8APh9bfnc/xz54M6xuPtr6IruefVwnoT7Jruce58NNf9G931niNXzDilkNd823HpgVrNHl5+b7PbMNh6PvbkFWjBRWLQg/GPsU7nEnr/7qn3X7Uo9/uAPnyBAl8+qQZH2WCV6Ph61P/Bs7Nv6HLv2djdPt5f3j/s+5J9EFPBPqc8LViG8TxMwiSxKXn1sQIcdBHy0f7qCvvZmSuUsDer2IMNBxgmd/9g2a92g31gbi5KF9nDy0l5Jz6jBZwkvv5ujv5qWHv03DWy/rJN0ncXt9vHNEKA+MEwj5FxCu8t1LkNDHZLMSlm1PhJ6Ww+z772cAH7nlc5AN2taXY8MDbP/zr3n1l98LeDwWDgMdJ9j72v9nfNRB3qx5GIzafO1czlHef+kJXnrkLnpbI5vj0ePz8Uajf3vqJNzAI6E+J5wByYCq+QEVONWi8C+XR6/Ma0pmLpV1l1K+eBWFsxf6nerczjGa9rzD0fe2cGjH68JGZD1IsqVTsfRiZtVeSFFNLQZl6rNVj2uclv27OPLuZg7teJ3RQeFcfGHR6xjnRy81iDQdQT3vDYlwlC8TNdtlQCxGAz/5Uk0Yjwkdi9WGLaeQlPRsrBk5eN0uhvu6GO7tZKCjBfd47KtBmZKs2HOKSMnMwZqmnjA4+roZ6ulgoPMErjHhZN+60dY/xoN/awzeUMVEiD5+4dg/hM6wnC4PLrc3JqVHx4YHGRsepDO4KTJmjI846Go6GPBILtp0DWn6UdoATYkCJ4i48vmA7c1u0pITlYKmC3taNSmfnRCVL5zhSHgh1+eIq6pLCYLQ1q8ptFO7i84pwlG+y0UbdgwKnRUmiAPGXG66hjStM0N2MAhV+VajQflO9GoPkk4QGw519GoN77wVCGlHGYryLUG1agvfOzTmpHMwpnkIEwjg9fn4qE3IvjcZM2pioSqtN2rdcNwAPIZAvYyz2dvSwcU1wsXD4wKvz0fP8Cj9I2MMjIwxOOrE4XQx7vHg8XpxebzIkoTRIGNSDJgVBVuSGXuyGXuShezUZExKrPNvinOsqw+HMyQnlWLU/H43oabYEELUzmcAfgZ8S7tcH3Nh9QxKs/R3MtCT4bFxmrr7aR8YpmNgGJcn9KxPkiSRaU0iPy2FogwbeXbNeTCjhg949r0G+kfC2hx6USPcfibSWET50lCdBteEIRQAiiyzZl45ObaQjeIRweP10tTdz6GOXk72D0csM2Kqxcys3HQqcjOwmnVJZaEbTd39bP6oSa/u/gNYR5Acf8GULxv4GxBacYspMCkGLl9QRaol9h++1+fjUEcvu5tPMjKuWyB+UGRJYkZ2OgtKc0m1xEcpr+c/OEjP8KieXb4CXAv43W0GWpDYgDdQI9V1w+eD4gx7zJWv8WQP/33gGEe7+sKaWkPBB/Q5Rmlo72HM5SbHZsWgk7tVKLT0DrK/Vfci5LNQnY2fBqZMEONv5DOg1m74fKhPTjYplGVZybCasZoUUswKtiQjmSlmkk2xq7o1PObixb2tNHYIV2uMOCkWI188p5DK3PBjXEJhzOXh5OAoLreXMZcHx7iboTE3fQ4nx7odON0hJRea4CnUFGufWM34U76HUFPla8JkkFk6M4NFpWkUpyfr5d+pG/taB/nDzhZGQ8vUFFEk4IKKLK44N180fjYqeH0+mrpHeLe5j11NfXi8Ia2If4SaGvkMpnqX1wB/0tKzLEmsqMziwtnZWnN/RI2th7p5fne7lsQ4MWFOvo0bl5VgDlTgMEb0j7h47aNOth/p0bop8wIrUNOsneZs5UtFjUYTDrBNSzZSv7SE8uz42sFO5vk97Ww5qPuaJmIUpSfxtZUzSTbFp42wsWOYp3a0aE2zdhR1/3D6rPVs5fs34H+L9hbvHxLApoYuXtwbnneyIksUZSSRm2ohO9WMPUnBpMiYFQNur5dxt5dhp4fuYSddQ06O947icIZXSWBmtpWvrZiJYoifKXgyg2MufrXlKB2Dmjxg7gdOJ5ae/M5mA/sQPPWYDor3wfF+ntx+PCS7ndVkYGFpOjUFNsqykjFp8Ef0Ae39YxzsGGJXUx8nB0Iz3J5bnMaNdSVxt3aeYGjMzS83H6FT3P9vBJgBdMKZppb7EAyFTDErrL9wVtyu7wC6h8f5zdZjeDSu8fLsFr60oIDraouZU2AjM8WEQdb27Uuo4QMzsqycPyuTOfk2xlxeOoa0KeHJwTGsZgOlmeEFHUUKsyIzp8DGzqY+3GIbkYl4gdfgY+WzAf+FQNp7Cbj5vFIK08POExMxfMDv3mmme1h8Ski1KFy7uIirFxaSn2bRdcdpTzIyv9jOvEI7JwfH6BsRXysd7XawsCSNpDidYZJMBtKtJvaeEE75Ox94FHBOvKOvAv6LXExicVl6xKPRwmXH0V7ePCTunTG/yM5Xl8+gNDOy5qFUi0JtWQZJJgOHO4cRGZQ9Xh+dQ04WlaZHTrAwybdbaO0fFZ1+TUADsGdiISOUVdEgS6yZoz3/XTTx+ny8dqBDuP3yiixuOq9U13QegZAkWFmZxe0rZggH0jecHKKpJ/qBRFpYOzdPyw/3WlB98lIQTHuwqDSNTH1qO0SMPS0DwtPa5+fl8aUFkQpoD8ysnBS+tnKmsD3vjTg3FeXbLcwtEPZYugRIk4HlqENhUBbH8dA/geh0W1uWzsXV4WeHD4fijCS+XFcipPz7Wgc1rRVjQW2ZsH4YgVoZwUpBqRaFmXFsSAZwON009wafntKTjWEnqtSLmgIbS2cGDwT0+nw0tMfPefRUzM5LxSKek2eRDAi5F1fmpsbVmeNUHBJcxK+dlxdXx1dfmJcnZEds7IjvQCzFIImmV4NTylcq0rIwLf7jbg8JfDmpFoUFxRGt5KkZq1mtMxeMw52Rc3TViwK7sAmuVEbwHLcgLX7tehN0O4LHH8zJt2k2GkeDuQI5DB3jnlBrp0WNPLuwc2ymjJpzJSjxfIw2gch5aryeFpRlick1NBbx6vNhoeHUK1NGMMlLLHKtaEXki7GJZVuPOklGg9BnPBznyqeIe2SbhZUvzvcaABgEhEy1CJd6ijoiP4x43/RpEM8hrHyDo/FtYwKYEcQUZDEayI/jjVMw+c2KTGF6/MoPaPHxG1aANiDomVn3sIti8cI+MWFFZQ77Wgdwe6beE66uysHjlYhyvJAwyyty2NMy4DegaWVlDl6fTJiughGl2yGsfH0K6iHvgmAtD5x0Yk2K93VfMqtmz2DrwWbGJwW9SEBNUQ556bk0xvUpVRKrq8t4o6H5jKAdCaguzKYgMy/O5YfmbmG3sQMKIJSVsLVvkNoZBSELFS2KM2z8Xe0cmrv7GRx1YjYqFGfYpk1+wMJ0Vf6mU/KbFAMlmfZpI//RbuGkUB8qwIciLfscYww7x0mJs0j7qTArBirzhCxIcYlpmsrfMzzKsPiab68MbCJIWoMJGrRnMErwGeKjNuE1gRPYKgN9wHaROxrau89YSyVIMIHD6eJIp3C2/C3A0MQO4iWRO1weL7uPayulnuCzwa5jbVpiol+EjxM8Po3g1Lu/tYvWvvh27UkQXY509nKsS3jUG0HVt9PK14yGpH5vH2rB4Yx/o3OCyNPnGGPbYU2VOZ/gVPb6yd4CbcBXRO52ebw0dw9QmmmfVpk3E+hLr2OUV/cd0bIP8KFmL+2GM5WvBbgYKBHpZdzjoaV3kPy0VJJimHUqQWw4OTDMa/uP4XRpOm55kkmFAs8+Bp4HvMfHwb1BMcgSC0rzmVuUE5NAnATRxeP18kHzST5s7dKatX4INStG28Qfzp4zO1ErCwlVEAc12WNb/xCtfYOMuz14vD4kQDHISHHugZEgOF6fD8e4i+6hEY529fPO4RO09Ia04fwe8OrkP0ylHTbUnC1C028gkk1GrGYjFqOCSVEwK4ZTWdsNmIwGTAYDikHGaDBgkCWMBtWnzSDL08J/cLrg8frweL2Muz24vd5T//aeSnLkYdztxun2nPq3B6fbw8i4ixGnS690wZuBSznLouJvaFqImkstpgeKiiwjn3J5NxkMp3zFpNObnIkyBKBO/xOpZY0G+bTf29kbIoMsowRRbEWWkIM4RSqyjEGWcHu8QvlgXG6PUPzFuNtzejpze714T+VAGfd4T/993OMBH/jwMe5WPWC8Ph9uj7rw93h9uL3e0/3FmFZgESAeyZ9sMd6CmtTPl7gSV4jXKHA+fvBrJ3G5vR+gjoyr/LVJkCAATuAqVN+BKQlmpNsC9KPW4EjsHhKIMo6ajyXgsa2IhXgH0I6amT6xC0gQjB7UEe+venZ6CXCC2K8jElf8Xu8BZUSIDNRSWLF+k4krvi4P8AuiZB25CtUDOtZvOnHF/toFLCbKyKiLyn1hCJ64pu/VBtxOjPcBMup68AlggNh/KIkrslcPajmDsPOO6G0+MaImm5yNWlDGBlhRBU2b1ObswrNnZxVMQYNzA+quPVqFy0QzIA4jGJAfAuNAJEu3+/MMfQV4ENX8Fjb/A031t2Akpx+NAAAAAElFTkSuQmCC"
                                />
                            </defs>
                        </svg>
                        <div
                            style={{
                                color: "#3B5262",
                                fontSize: 64,
                                fontFamily: "Lato",
                                fontWeight: "700",
                                wordWrap: "break-word"
                            }}
                        >
                            Sewagemap.co.uk
                        </div>
                    </div>
                </div>
            ),
            {
                width: 1200,
                height: 630
            }
        );
    } catch (e: any) {
        console.log(`${e.message}`);
        return new Response(`Failed to generate the image`, {
            status: 500
        });
    }
}
