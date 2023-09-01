import styled from "styled-components";

import GlobalStyles from "../App/GlobalStyles";
import { PopUpBody } from "../DischargePopup/PopUpContent/PopUpBody";
import InformationModal from "../Modal/InformationModal";

const PopupContainermock = styled.div`
    width: 100%;
    padding: 20px;
`;

export function TestHarness() {
    return (
        <>
            <GlobalStyles></GlobalStyles>
            <PopupContainermock>
                <InformationModal></InformationModal>

                <PopUpBody
                    {...{
                        alertStatus: "Discharging",
                        dischargeInterval: {
                            start: 1676268000000,
                            end: null
                        },
                        feeds: "River Hart",
                        locationName: "Crondall"
                    }}
                ></PopUpBody>
            </PopupContainermock>
            <PopupContainermock>
                <PopUpBody
                    {...{
                        alertStatus: "Recent Discharge",
                        dischargeInterval: {
                            start: 1676110500000,
                            end: 1676113200000
                        },
                        feeds: "Basingstoke Canal",
                        locationName: "Elvetham Close"
                    }}
                ></PopUpBody>
            </PopupContainermock>
            <PopupContainermock>
                <PopUpBody
                    {...{
                        alertStatus: "Not Discharging",
                        dischargeInterval: {
                            start: null,
                            end: null
                        },
                        feeds: "Fleet Brook",
                        locationName: "Avondale Rd"
                    }}
                ></PopUpBody>
            </PopupContainermock>
            <PopupContainermock>
                <PopUpBody
                    {...{
                        alertStatus: "Not Discharging",
                        dischargeInterval: {
                            start: 1673876700000,
                            end: 1673914500000
                        },
                        feeds: "River Blackwater",
                        locationName: "Ash Vale"
                    }}
                ></PopUpBody>
            </PopupContainermock>
        </>
    );
}
