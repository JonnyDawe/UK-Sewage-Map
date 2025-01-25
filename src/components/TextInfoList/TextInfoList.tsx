import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

const IconContainer = styled.div`
  flex-shrink: 0;
  margin-right: 1rem;
  width: 40px;
`;

const TextInfoList = ({ icon, children }: React.PropsWithChildren<{ icon: React.ReactNode }>) => {
  return (
    <Container>
      <IconContainer>{icon}</IconContainer>
      <div>{children}</div>
    </Container>
  );
};

export default TextInfoList;
