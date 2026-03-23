import { Flex, Heading, Text } from '@radix-ui/themes';

import { Em } from '../common/Text';

type DownstreamImpactPopupHeaderProps = {
  company: string;
};

export function DownstreamImpactPopupHeader({ company }: DownstreamImpactPopupHeaderProps) {
  return (
    <Flex gap="2" align="center">
      <div>
        <Heading size={'4'} as="h3">
          {company} Downstream Impact
        </Heading>
        <Text size={'2'}>
          <Em>Upstream CSO summary</Em>
        </Text>
      </div>
    </Flex>
  );
}
