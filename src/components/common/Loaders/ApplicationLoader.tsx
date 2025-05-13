import styled from '@emotion/styled';
import { useTimeout } from '@mantine/hooks';
import { Portal } from '@radix-ui/themes';
import React from 'react';

import PingLoader from './PingLoader';

const LoaderContainer = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-background);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 600ms ease-in-out;
  z-index: 1000;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
`;

const MINIMUM_DISPLAY_TIME = 2000; // 2 seconds in milliseconds

type ApplicationLoaderProps = {
  isLoading: boolean;
};

const ApplicationLoader = ({ isLoading }: ApplicationLoaderProps) => {
  const [showLoader, setShowLoader] = React.useState(true);

  const [allowHideLoader, setAllowHideLoader] = React.useState(false);
  useTimeout(() => setAllowHideLoader(true), MINIMUM_DISPLAY_TIME, {
    autoInvoke: true,
  });

  React.useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    } else {
      if (allowHideLoader) {
        setShowLoader(false);
      }
    }
  }, [isLoading, allowHideLoader]);

  return (
    <Portal>
      <LoaderContainer aria-hidden={!showLoader} visible={showLoader}>
        <PingLoader />
      </LoaderContainer>
    </Portal>
  );
};

export default ApplicationLoader;
