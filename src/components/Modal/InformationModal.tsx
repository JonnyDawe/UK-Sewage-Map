import styled from '@emotion/styled';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Box, Button, Flex, Heading, Separator, Text } from '@radix-ui/themes';
import React from 'react';
import Wave from 'react-wavify';

import { useOnFirstVisit } from '../../lib/hooks/useOnUserFirstVisit';
import { usePrefersReducedMotion } from '../../lib/hooks/usePrefersReducedMotion';
import MapButton from '../common/Buttons/MapButton';
import Dialog from '../common/Dialog/Dialog';
import { ModalHeader } from '../common/Dialog/DialogTitle';
import SvgIcon from '../common/SvgIcon/SvgIcon';
import { Em, Link } from '../common/Text';
import TextInfoList from '../TextInfoList/TextInfoList';
import { AppTheme } from '../Theme/AppTheme';

const BackgroundWave = styled(Wave)`
  position: absolute;
  width: 600px;
  bottom: -40px;
  right: 0;
`;

const InformationModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpenOnFirstVisit = React.useCallback(() => {
    setOpen(true);
  }, []);
  useOnFirstVisit(handleOpenOnFirstVisit);

  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <MapButton aria-label="Information" tooltipPosition="left">
          <SvgIcon name="icon-info" size={24}></SvgIcon>
        </MapButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <AppTheme>
          <Dialog.Overlay />
          <Dialog.Content>
            <Dialog.Title>
              <VisuallyHidden>Information about this application</VisuallyHidden>
            </Dialog.Title>
            <Dialog.Description>
              <VisuallyHidden>
                Information and a description of the methodology for this map application that
                displays sewage discharge into rivers. It also includes an overview of the model for
                tracing waste downstream.
              </VisuallyHidden>
            </Dialog.Description>

            <Box position={'relative'} p={'5'} style={{ overflow: 'hidden' }}>
              <BackgroundWave
                fill="var(--wave-blue)"
                paused={prefersReducedMotion}
                options={{
                  height: 25,
                  amplitude: 25,
                  speed: 0.175,
                  points: 5,
                }}
              />
              <Box position={'relative'}>
                <ModalHeader title="Information" subTitle="Sewage Map" level={2}></ModalHeader>

                <Flex direction={'column'} gap={'4'} mb="4">
                  <Text>
                    This map shows, in real-time, which river sections are downstream of sewage
                    discharges from storm overflows.
                  </Text>
                  <TextInfoList icon={<SvgIcon name="icon-water-info" size={48}></SvgIcon>}>
                    <Heading as={'h3'} size={'4'}>
                      About the Data
                    </Heading>
                    <Text>
                      The data is collected through Event Duration Monitoring by individual water
                      companies, providing near-real time data on storm overflows. The data is
                      accessed from the{' '}
                      <Link href="https://www.streamwaterdata.co.uk/pages/storm-overflows-data">
                        Storm Overflow Hub
                      </Link>{' '}
                      maintained by Water UK. Storm overflows release untreated, diluted sewage into
                      the environment. Currently, only Thames Water provide an API to historical
                      sewage spill data. We wrote an article about why water companies need to be
                      more transparent with environmental models and data in{' '}
                      <Link href="https://theconversation.com/water-companies-now-have-to-release-live-sewage-spill-data-heres-why-more-transparency-is-the-key-to-cleaner-rivers-239444">
                        The Conversation.
                      </Link>
                    </Text>
                  </TextInfoList>
                  <TextInfoList icon={<SvgIcon name="icon-hydrology-model" size={48}></SvgIcon>}>
                    <Heading as={'h3'} size={'4'}>
                      Hydrology Model{' '}
                    </Heading>
                    <Text>
                      To identify river stretches downstream of an overflow, we track sewage
                      discharges downstream along <Em>non-tidal</Em> river networks using
                      topographic datasets. We highlight areas downstream of active and recent
                      discharges in brown. This simple approach does not consider dilution, river
                      flow, or dispersion effects on pollutant concentration. Since water companies
                      do not provide real-time data on discharge volume or pollutant concentrations,
                      accurately modelling these effects is very difficult. Consequently, on its
                      own, <Em>this map should not be used to assess pollution or health risks</Em>{' '}
                      at a specific location, for example, for bathing water quality. Note that, the
                      simple hydrological model may produce 'unexpected' results in some areas, for
                      instance in lakes or where rivers are tidal very far in-land.
                    </Text>
                  </TextInfoList>
                  <TextInfoList icon={<SvgIcon name="icon-waste-water" size={48}></SvgIcon>}>
                    <Heading as={'h3'} size={'4'}>
                      Waste Water
                    </Heading>
                    <Text>
                      According to the Environment Agency’s{' '}
                      <Link href="https://www.bbc.co.uk/news/science-environment-68665335">
                        data for 2023
                      </Link>
                      , sewage overflows released untreated sewage for total duration of 3.6 million
                      hours. Untreated sewage overflows are responsible for releasing various
                      pollutants, including{' '}
                      <Link href="https://www.nature.com/articles/s41893-021-00718-2">
                        microplastics
                      </Link>
                      ,{' '}
                      <Link href="https://www.sciencedirect.com/science/article/pii/S0048969724029747">
                        illegal drugs
                      </Link>
                      , and{' '}
                      <Link href="https://www.sciencedirect.com/science/article/pii/S0048969723029030">
                        human effluent
                      </Link>
                      , into the environment.
                    </Text>
                  </TextInfoList>
                  <Text mt={'2'}>
                    This site was created by{' '}
                    <Link href="https://alexlipp.github.io/">Alex Lipp (UCL)</Link> &{' '}
                    <Link href="https://bsky.app/profile/did:plc:yxxm76jvxcsuzg6ahfjiek3y">
                      Jonny Dawe.
                    </Link>{' '}
                    Hosting costs are kindly supported by{' '}
                    <Link href={'https://riveractionuk.com/'}>RiverAction</Link>.
                  </Text>
                  <Text weight={'bold'}>
                    For more information and to see the full source code, visit the GitHub
                    repositories:
                  </Text>
                  <Flex gap={'2'} justify={'start'}>
                    <Link href="https://github.com/AlexLipp/sewage-map ">backend</Link>
                    <Separator orientation="vertical"></Separator>
                    <Link href="https://github.com/JonnyDawe/UK-Sewage-Map/ ">frontend</Link>
                  </Flex>

                  <Text mt={'2'}>
                    Whilst every effort has been made to ensure accuracy, this is experimental
                    software and errors may occur. If you see any issues please reach out to us so
                    we can fix them (see GitHub links above).
                  </Text>

                  <Text mt={'2'}>
                    <strong>We welcome suggestions and contributions!</strong>
                  </Text>
                </Flex>
                <Flex justify={'end'} direction={'row'} pt={'2'}>
                  <Dialog.Close asChild>
                    <Button size="3" variant="solid">
                      Lets Go!
                    </Button>
                  </Dialog.Close>
                </Flex>
              </Box>
            </Box>

            <Dialog.CloseCornerButton aria-label="Close">
              <SvgIcon name="icon-x" size={24}></SvgIcon>
            </Dialog.CloseCornerButton>
          </Dialog.Content>
        </AppTheme>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default InformationModal;
