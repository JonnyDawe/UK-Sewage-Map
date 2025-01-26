import styled from '@emotion/styled';
import { Blockquote, Flex, Heading, Link, Text } from '@radix-ui/themes';
import React from 'react';
import { Chart } from 'react-google-charts';
import useSWR from 'swr';

import {
  calculateTotalDischargeLength,
  formatDate,
  formatTime,
  getDatenMonthsAgo,
  getDischargeDataForLocation,
  getDischargeDateObject,
  getFormattedTimeInterval,
} from '../../../utils/discharge/discharge.utils';
import {
  DischargeHistoricalData,
  DischargeHistoricalDataJSON,
  DischargeHistoryPeriod,
} from '../../../utils/discharge/types';
import { InLineSelect } from '../../common/Select/InlineSelect';

const CustomChart = styled(Chart)`
  svg {
    // Background Color
    g:nth-child(2) {
      rect {
        fill: var(--gray-a2);
      }
      path {
        stroke: var(--gray-4);
      }
    }

    // Text
    g:nth-child(3) {
      text {
        fill: var(--gray-12);
      }
    }

    // Fill
    g:nth-child(5) {
      rect {
        fill: var(--brown-10);
      }
    }
  }
`;

function getFilteredDischarges(
  dischargeData: DischargeHistoricalData,
  period: DischargeHistoryPeriod,
) {
  const startDate = getStartDateOfInterest(period);
  const endDate = getEndDateOfInterest(period);
  if (!startDate || !endDate) return [];

  return dischargeData.discharges
    .map((discharge) => {
      // If discharge spans the period boundaries, adjust it
      if (discharge.start < startDate && discharge.end > startDate) {
        return { ...discharge, start: startDate };
      }
      if (discharge.start < endDate && discharge.end > endDate) {
        return { ...discharge, end: endDate };
      }
      return discharge;
    })
    .filter(
      (discharge) =>
        discharge.start <= discharge.end &&
        discharge.start <= endDate &&
        discharge.end >= startDate,
    );
}

function getStartDateOfInterest(period: DischargeHistoryPeriod) {
  switch (period) {
    case DischargeHistoryPeriod.Last12Months:
      return getDatenMonthsAgo(new Date(), 12);
    case DischargeHistoryPeriod.Last6Months:
      return getDatenMonthsAgo(new Date(), 6);
    case DischargeHistoryPeriod.Last3Months:
      return getDatenMonthsAgo(new Date(), 3);
    case DischargeHistoryPeriod.StartOf2023:
      return new Date(2023, 0, 1);
    case DischargeHistoryPeriod.StartOf2024:
      return new Date(2024, 0, 1);
    case DischargeHistoryPeriod.StartOf2025:
      return new Date(2025, 0, 1);
    default:
      return undefined;
  }
}

function getEndDateOfInterest(period: DischargeHistoryPeriod) {
  switch (period) {
    case DischargeHistoryPeriod.StartOf2023:
      return new Date(2023, 11, 31, 23, 59, 59);
    case DischargeHistoryPeriod.StartOf2024:
      return new Date(2024, 11, 31, 23, 59, 59);
    case DischargeHistoryPeriod.StartOf2025:
      return new Date();
    default:
      return new Date();
  }
}

function processDataForLocation(
  jsonData: DischargeHistoricalDataJSON,
  locationName: string,
  selectedPeriod: DischargeHistoryPeriod,
) {
  const columns = [
    { type: 'string', id: 'Location' },
    { type: 'string', id: 'Start Date String' },
    { type: 'string', role: 'tooltip' },
    { type: 'date', id: 'Start' },
    { type: 'date', id: 'End' },
  ];

  if (!jsonData)
    return {
      dischargeChartData: [columns],
      totalDischarge: 0,
    };

  const dischargeData = getDischargeDataForLocation(jsonData, locationName);

  const dischargesForSelectedPeriod = getFilteredDischarges(dischargeData, selectedPeriod);

  const rows = dischargesForSelectedPeriod.map((discharge) => {
    return [
      'Discharge Date',
      '',
      getHTMLContentForTooltip(discharge),
      discharge.start,
      discharge.end,
    ];
  });

  return {
    dischargeChartData: [columns, ...rows],
    totalDischarge: calculateTotalDischargeLength(dischargesForSelectedPeriod),
  };
}

async function fetchHistoricDischargeData(url: string) {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the historic discharge data.');
    throw error;
  }

  return res.json();
}

// Fetch the last updated date of the historic discharge data
// - This is stored in a .txt file
const fetchTimeStamp = async (url: string): Promise<Date> => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the Timestamp.');
    throw error;
  }

  const dataString = await res.text();
  return new Date(dataString);
};

function getHTMLContentForTooltip(discharge: { start: Date; end: Date }) {
  const startFormatted = getDischargeDateObject(discharge.start);
  return `<div
            style="
            min-width:160px;
            background-color: var(--color-panel-solid);
            color: var(--gray-12);
            padding: 5px;
        >
            <h2 style="font-size:1.1rem; margin-bottom:4px">${startFormatted.day} ${
              startFormatted.month
            } ${startFormatted.year}</h2>
            <p>Duration: ${getFormattedTimeInterval(
              discharge.start.getTime(),
              discharge.end.getTime(),
            )}</p>
        </div>`;
}

const SubText = styled.span`
  font-size: 0.7rem;
  b {
    display: inline-block;
  }
  @container (min-width: 400px) {
    b {
      display: inline;
    }
  }
`;

const TimeLineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
function DischargeTimeline({ locationName }: { locationName: string }) {
  const [selectedPeriod, setSelectedPeriod] = React.useState<DischargeHistoryPeriod>(
    DischargeHistoryPeriod.Last6Months,
  );

  const {
    data: historicDataJSON,
    isLoading,
    error,
  } = useSWR(
    'https://d1kmd884co9q6x.cloudfront.net/discharges_to_date/up_to_now.json',
    fetchHistoricDischargeData,
  );

  const { data: lastUpdatedDate, isLoading: lastUpdatedLoading } = useSWR(
    'https://d1kmd884co9q6x.cloudfront.net/discharges_to_date/timestamp.txt',
    fetchTimeStamp,
  );

  if (isLoading || lastUpdatedLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Failed to load historic discharge data.</p>;
  }

  const locationData = processDataForLocation(historicDataJSON, locationName, selectedPeriod);

  const dischargeStartDate = getDischargeDateObject(
    getStartDateOfInterest(selectedPeriod) ?? new Date(),
  );

  return (
    <TimeLineWrapper>
      <Text size={'2'}>
        Discharge events from the:{' '}
        <InLineSelect
          options={[
            { value: DischargeHistoryPeriod.Last3Months, label: 'Last 3 months' },
            { value: DischargeHistoryPeriod.Last6Months, label: 'Last 6 months' },
            { value: DischargeHistoryPeriod.Last12Months, label: 'Last 12 months' },
            { value: DischargeHistoryPeriod.StartOf2023, label: 'Entirety of 2023' },
            { value: DischargeHistoryPeriod.StartOf2024, label: 'Entirety of 2024' },
            { value: DischargeHistoryPeriod.StartOf2025, label: 'Start of the Year' },
          ]}
          value={selectedPeriod}
          onChange={(selectedPeriod) => {
            setSelectedPeriod(selectedPeriod as DischargeHistoryPeriod);
          }}
        />
      </Text>
      {locationData.dischargeChartData.length === 1 ? (
        <Text size={'2'}>
          No Recorded Discharge since {dischargeStartDate.day} {dischargeStartDate.month}{' '}
          {dischargeStartDate.year}
        </Text>
      ) : (
        <CustomChart
          chartType="Timeline"
          data={locationData.dischargeChartData}
          width="100%"
          height="120px"
          options={{
            timeline: {
              showRowLabels: false,
              singleColor: '#733f2e',
              barLabelStyle: {
                fontSize: 20,
              },
            },
            hAxis: {
              minValue: getStartDateOfInterest(selectedPeriod),
              maxValue: getEndDateOfInterest(selectedPeriod),
            },
            tooltip: { html: true },
            avoidOverlappingGridLines: false,
          }}
        ></CustomChart>
      )}
      <Flex
        direction={'row'}
        justify={'between'}
        style={{
          containerType: 'inline-size',
        }}
        mt={'-4'}
      >
        {lastUpdatedDate && (
          <SubText>
            Last Updated <b>{formatDate(lastUpdatedDate, 'full')}</b>
          </SubText>
        )}
        <SubText>
          Total Duration <b>{formatTime(locationData.totalDischarge, false)}</b>
        </SubText>
      </Flex>
    </TimeLineWrapper>
  );
}

const BulletPoint = styled.li`
  font-size: 14px;
`;

function HistoricDischarges({ company, locationName }: { company: string; locationName: string }) {
  if (company === 'Thames Water') {
    return <DischargeTimeline locationName={locationName} />;
  }

  const message =
    company === 'Southern Water'
      ? `${company} provides live historical sewage spill data on their <a href="https://www.southernwater.co.uk/our-region/clean-rivers-and-seas-task-force/rivers-and-seas-watch/" target="_blank" rel="noopener noreferrer">website</a> but does not make it available via an API for third-party applications. 🔒`
      : `${company} has chosen not to share live historical sewage spill data with the public. 🙄`;

  return (
    <>
      <Blockquote mb={'2'} size={'2'}>
        <span dangerouslySetInnerHTML={{ __html: message }} />
        <br />
        Find information from last year at:{' '}
        <Link href="https://top-of-the-poops.org">top-of-the-poops.org</Link>
      </Blockquote>

      <Text size={'2'} mb={'2'}></Text>
      <Heading as="h4" size="2">
        Want to help? You can:
      </Heading>
      <ul>
        <BulletPoint>
          <Text size={'2'}>Contact {company} to request data transparency</Text>
        </BulletPoint>
        <BulletPoint>
          <Link href="https://writetothem.com" size={'2'}>
            Tell your local MP why this data matters to you
          </Link>
        </BulletPoint>
        <BulletPoint>
          <Link href="https://theconversation.com/water-companies-now-have-to-release-live-sewage-spill-data-heres-why-more-transparency-is-the-key-to-cleaner-rivers-239444">
            Learn more about the importance of open environmental data
          </Link>
        </BulletPoint>
      </ul>
    </>
  );
}

export default HistoricDischarges;
