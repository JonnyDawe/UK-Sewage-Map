import styled from '@emotion/styled';
import { Flex, Text } from '@radix-ui/themes';

import { useTheme } from '@/components/Theme/hooks/useTheme';

const Wrapper = styled(Flex)`
  @media (max-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.img`
  height: 40px;
  min-width: fit-content;
  @media (max-width: 640px) {
    height: 32px;
    margin-left: 0px;
  }
  width: auto;
  margin-left: 4px;
`;

const Link = styled.a`
  pointer-events: all;
`;

const SupporterText = styled(Text)`
  font-size: 10px;
  @media (max-width: 640px) {
    display: none;
  }
`;

export function SupporterImageLink() {
  const { currentTheme } = useTheme();
  return (
    <Wrapper
      direction="column"
      gap="1"
      px={{
        initial: '1',
        md: '2',
      }}
      pr="3"
      style={{ backgroundColor: currentTheme === 'light' ? 'white' : 'black' }}
    >
      <SupporterText weight="bold" color="blue">
        Supported by:
      </SupporterText>
      <Link href="https://riveractionuk.com/" target="_blank" rel="noopener noreferrer">
        <Image
          src={
            currentTheme === 'light'
              ? '/images/riveraction-light.png'
              : '/images/riveraction-dark.png'
          }
          alt="River Action Logo"
        />
      </Link>
    </Wrapper>
  );
}
