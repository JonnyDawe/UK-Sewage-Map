import styled from '@emotion/styled';
import { Flex, Text } from '@radix-ui/themes';
import useSWR from 'swr';

import { formatDate } from '../../../../utils/discharge/discharge.utils';
import { SupporterImageLink } from './Supporters/SupporterImageLink';

const TimeStampWrapper = styled(Flex)`
  width: fit-content;
  height: fit-content;

  @media (max-width: 640px) {
    container-type: inline-size;
    container-name: timestamp;
    width: auto;
    flex-grow: 1;
    align-self: stretch;
    height: 100%;
    @container timestamp (max-width: 340px) {
      & span {
        display: block;
      }
    }
  }
  background-color: var(--river-blue);
  padding: 2px 4px;
  color: white;
`;

function TimeStamp() {
  const { data, isLoading } = useSWR(
    'https://d1kmd884co9q6x.cloudfront.net/now/timestamp.txt',
    fetchTimeStamp,
  );

  return (
    <TimeStampWrapper align={'center'} justify={'end'}>
      {!isLoading && data && (
        <Text size="2" weight={'medium'} wrap={'pretty'} align={'left'}>
          Downstream predictions last updated: <span>{formatDate(data, 'full')}</span>
        </Text>
      )}
    </TimeStampWrapper>
  );
}

const FooterWrapper = styled(Flex)`
  opacity: 0.8;
  position: absolute;
  bottom: 16px;
  right: 0;
  width: 100%;
  --border-thickness: 1px;

  height: 16px;
  @media (max-width: 640px) {
    height: calc(var(--border-thickness) + 32px);
    border-top: var(--border-thickness) solid var(--river-blue);
  }
`;

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

function Footer() {
  return (
    <FooterWrapper justify={'between'} align={'end'}>
      <SupporterImageLink />
      <TimeStamp />
    </FooterWrapper>
  );
}

export default Footer;
