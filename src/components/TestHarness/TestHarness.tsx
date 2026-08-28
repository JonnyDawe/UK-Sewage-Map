import styled from '@emotion/styled';

import { PopUpBody } from '../DischargePopup/PopUpContent/PopUpBody';
import InformationModal from '../Modal/InformationModal';

const PopupContainermock = styled.div`
  width: 100%;
  padding: 20px;
`;

export function TestHarness() {
  return (
    <>
      <PopupContainermock>
        <InformationModal></InformationModal>

        <PopUpBody
          {...{
            company: 'Thames Water',
            alertStatus: 'Discharging',
            dischargeInterval: {
              start: 1676268000000,
              end: null,
            },
            feeds: 'River Hart',
            locationName: 'Crondall',
            permitNumber: 'CSSC.2450',
          }}
        ></PopUpBody>
      </PopupContainermock>
      <PopupContainermock>
        <PopUpBody
          {...{
            company: 'Thames Water',
            alertStatus: 'Recent Discharge',
            dischargeInterval: {
              start: 1676110500000,
              end: 1676113200000,
            },
            feeds: 'Basingstoke Canal',
            locationName: 'Elvetham Close',
            permitNumber: 'TEMP.0917',
          }}
        ></PopUpBody>
      </PopupContainermock>
      <PopupContainermock>
        <PopUpBody
          {...{
            company: 'Thames Water',
            alertStatus: 'Not Discharging',
            dischargeInterval: {
              start: null,
              end: null,
            },
            feeds: 'Fleet Brook',
            locationName: 'Avondale Rd',
            permitNumber: 'TEMP.0376',
          }}
        ></PopUpBody>
      </PopupContainermock>
      <PopupContainermock>
        <PopUpBody
          {...{
            company: 'Thames Water',
            alertStatus: 'Not Discharging',
            dischargeInterval: {
              start: 1673876700000,
              end: 1673914500000,
            },
            feeds: 'River Blackwater',
            locationName: 'Ash Vale',
            permitNumber: 'TEMP.2354',
          }}
        ></PopUpBody>
      </PopupContainermock>
    </>
  );
}
