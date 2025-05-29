import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  gap: 0.5rem;
  padding-inline-start: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`;

export const ListItemContainer = styled.li<{ $isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  background-color: ${(props) => (props.$isSelected ? 'var(--accent-a3)' : 'transparent')};
`;

export const ListItemGridCell = styled.div`
  width: 100%;
`;
