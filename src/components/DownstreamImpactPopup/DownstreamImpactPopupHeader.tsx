import { Flex, Heading, Text } from '@radix-ui/themes';

import { Em } from '../common/Text';

type DownstreamImpactPopupHeaderProps = {
  company: string;
  longitude: number;
  latitude: number;
};

export function DownstreamImpactPopupHeader({
  company,
  longitude,
  latitude,
}: DownstreamImpactPopupHeaderProps) {
  const lon = longitude.toFixed(4);
  const lat = latitude.toFixed(4);

  return (
    <Flex gap="2" align="center">
      <div>
        <Heading size={'4'} as="h3">
          {company} Downstream Impact
        </Heading>
        <Text size={'2'}>
          <Em>
            Downstream Impact at ({lat}, {lon})
          </Em>
        </Text>
      </div>
    </Flex>
  );
}
