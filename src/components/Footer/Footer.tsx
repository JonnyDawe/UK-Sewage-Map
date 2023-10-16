import styled from "@emotion/styled";
import useSWR from "swr";

import { formatShortDate } from "../DischargePopup/utils";

const FooterWrapper = styled.div`
    display: block;
    opacity: 0.8;
    position: absolute;
    width: fit-content;
    bottom: 16px;
    right: 0;
    padding: 2px 4px;
    background: var(--river-blue);
    font-size: 12px;
    font-weight: 100;
    color: white;
    font-family: "Avenir Next", "Avenir", "Helvetica Neue", sans-serif;
    font-weight: 400;
    @media (max-width: 640px) {
        width: 100%;
    }
`;

const fetchTimeStamp = async (url: string): Promise<Date> => {
    const res = await fetch(url);

    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
        const error = new Error("An error occurred while fetching the Timestamp.");
        throw error;
    }

    const dataString = await res.text();
    return new Date(dataString);
};

function Footer() {
    const { data, isLoading } = useSWR(
        "https://thamessewage.s3.eu-west-2.amazonaws.com/now/timestamp.txt",
        fetchTimeStamp
    );

    if (!isLoading && data) {
        return (
            <FooterWrapper>
                {`Downstream predictions last updated ${formatShortDate(data)}`}
            </FooterWrapper>
        );
    }
}

export default Footer;
