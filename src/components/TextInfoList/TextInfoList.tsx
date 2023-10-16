import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
`;

const IconContainer = styled.div`
    flex-shrink: 0;
    margin-right: 1rem;
    width: 40px;
`;

// No need for a separate styled component for children, as it's a regular div.

const TextInfoList = ({ icon, children }: React.PropsWithChildren<{ icon: React.ReactNode }>) => {
    return (
        <Container>
            <IconContainer>{icon}</IconContainer>
            <div>{children}</div>
        </Container>
    );
};

export default TextInfoList;
