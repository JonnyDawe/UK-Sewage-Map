import styled from '@emotion/styled';
import { Box, Container, Flex, Heading, Text } from '@radix-ui/themes';

const IconFrame = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
`;

const AnimatedIcon = styled.div<{ index: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.3s ease;

  @media (prefers-reduced-motion: no-preference) {
    animation: iconCycle 9s infinite;
    animation-delay: ${(props) => props.index * 3}s;
  }

  @keyframes iconCycle {
    0%,
    100% {
      opacity: 0;
      transform: scale(0.8);
    }
    3%,
    30% {
      opacity: 1;
      transform: scale(1.1);
    }
    33% {
      opacity: 0;
      transform: scale(0.8);
    }
  }
`;

const IconImage = styled.img`
  width: 48px;
  height: 48px;
  object-fit: contain;
`;

const AnimatedTextWrapper = styled.div<{ index: number }>`
  position: absolute;
  width: 200px;
  text-align: center;
  opacity: 0;
  bottom: -24px;
  left: 50%;
  transform: translateX(-50%);

  @media (prefers-reduced-motion: no-preference) {
    animation: textCycle 9s infinite;
    animation-delay: ${(props) => props.index * 3}s;
  }

  @keyframes textCycle {
    0%,
    100% {
      opacity: 0;
      transform: translate(-50%, 5px);
    }
    3%,
    30% {
      opacity: 1;
      transform: translate(-50%, 0);
    }
    33% {
      opacity: 0;
      transform: translate(-50%, -5px);
    }
  }
`;

const MapSymbolsLoader = () => {
  const icons = [
    { image: 'images/poo.png', text: 'Sewage discharge reported' },
    { image: 'images/error-warning-fill.png', text: 'Pollution alert area' },
    { image: 'images/shield-check-fill.png', text: 'No active discharges' },
  ];

  return (
    <Container>
      <Flex width="100%" direction="column" align="center" justify="center" gap="4">
        <Box>
          <Heading align="center" size="6">
            Loading...
          </Heading>
          <Text align="center" size="3">
            Get familiar with the map symbols!
          </Text>
        </Box>
        <Flex justify="center" align="center">
          <IconFrame>
            {icons.map((icon, index) => (
              <>
                <AnimatedIcon key={`icon-${index}`} index={index}>
                  <IconImage src={icon.image} alt={icon.text} />
                </AnimatedIcon>
                <AnimatedTextWrapper key={`text-${index}`} index={index}>
                  <Text size="3" color="gray">
                    {icon.text}
                  </Text>
                </AnimatedTextWrapper>
              </>
            ))}
          </IconFrame>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MapSymbolsLoader;
