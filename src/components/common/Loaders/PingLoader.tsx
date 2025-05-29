import styled from '@emotion/styled';
import { useGSAP } from '@gsap/react';
import { Flex, Heading } from '@radix-ui/themes';
import gsap from 'gsap';
import { useRef } from 'react';

import SvgIcon from '../SvgIcon';

gsap.registerPlugin(useGSAP);

const PinContainer = styled.div`
  position: relative;
  width: 240px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
`;

const MapPin = styled.div`
  position: relative;
  transform-origin: bottom center;
  z-index: 1;
`;

const RingsContainer = styled.div`
  position: absolute;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%) rotateX(60deg);
  transform-style: preserve-3d;
`;

const PulseRing = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: currentColor;
  visibility: hidden; /* Hide rings initially */
`;

const PingLoader = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pinTimeline = gsap.timeline({
        repeat: -1,
      });

      pinTimeline
        .to('.map-pin', {
          y: -40,
          scaleY: 1.05,
          scaleX: 0.95,
          duration: 0.5,
          ease: 'power1.out',
        })
        .to('.map-pin', {
          y: 0,
          scaleY: 0.8,
          scaleX: 1.25,
          duration: 0.2,
          ease: 'power1.in',
        })
        .to('.map-pin', {
          scaleY: 1,
          scaleX: 1,
          duration: 0.25,
          ease: 'power1.out',
        });

      // Simplified pulse rings animation
      gsap.set('.pulse-ring', {
        scale: 0.1,
        opacity: 0,
        visibility: 'visible',
      });

      gsap.to('.pulse-ring', {
        scale: 3,
        opacity: 0,
        duration: 2,
        ease: 'power1.out',
        stagger: {
          each: 1.7 / 3,
          repeat: -1,
        },
        keyframes: [
          { scale: 0.1, opacity: 0, duration: 0 },
          { scale: 0.5, opacity: 0.6, duration: 0.3 },
          { scale: 3, opacity: 0, duration: 1.7 },
        ],
      });
    },
    { scope: containerRef },
  );

  return (
    <Flex direction="column" align="center" justify="center" gap="0">
      <PinContainer ref={containerRef}>
        <RingsContainer>
          {Array.from({ length: 3 }).map((_, index) => (
            <PulseRing key={index} className="pulse-ring" />
          ))}
        </RingsContainer>
        <MapPin className="map-pin" ref={pinRef}>
          <SvgIcon name="icon-logo" style={{ width: '120px', height: '120px' }} />
        </MapPin>
      </PinContainer>
      <Heading size="4" as="h2">
        Loading map data...
      </Heading>
    </Flex>
  );
};

export default PingLoader;
