import styled from '@emotion/styled';
import { Heading, Text } from '@radix-ui/themes';

const HeaderSection = styled.div`
  margin-bottom: 8px;
`;

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;

export function ModalHeader({
  title,
  subTitle,
  level = 2,
}: React.PropsWithChildren<{ title: string; subTitle: string; level: number }>) {
  if (typeof level !== 'number' || level < 1 || level > 6) {
    throw new Error(`Unrecognized heading level: ${level}`);
  }

  const HeadingTag = `h${level}` as HeadingLevel;

  return (
    <HeaderSection>
      <Heading as={HeadingTag} size={'1'} color="blue" trim={'start'}>
        {title}
      </Heading>
      <Text size="4" weight={'bold'}>
        {subTitle}
      </Text>
    </HeaderSection>
  );
}
