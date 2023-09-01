import styled from "styled-components";

const HeaderSection = styled.div`
    margin-bottom: 8px;
`;

const Header: React.FC<React.PropsWithChildren<{ as: string }>> = styled.h1`
    font-size: 0.8rem;
    color: var(--river-blue);
`;

const SubTitle = styled.p`
    font-size: 1.2rem;
    font-weight: 700;
`;

export function ModalHeader({
    title,
    subTitle,
    level = 2
}: React.PropsWithChildren<{ title: string; subTitle: string; level: number }>) {
    if (typeof level !== "number" || level < 1 || level > 6) {
        throw new Error(`Unrecognized heading level: ${level}`);
    }

    const HeadingTag = `h${level}`;

    return (
        <HeaderSection>
            <Header as={HeadingTag}>{title}</Header>
            <SubTitle>{subTitle}</SubTitle>
        </HeaderSection>
    );
}
