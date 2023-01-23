import styled from '@emotion/styled';

export const Container = styled.div`
position: relative
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;

  &:last-child {
    align-items: center;
  }
`;
