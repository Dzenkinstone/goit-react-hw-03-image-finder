import { Container } from './Button.styled';
import { LoadMoreButton } from './Button.styled';

export const Button = ({ onChange, isLoading }) => {
  return (
    <Container>
      <LoadMoreButton onClick={() => onChange()}>Load more</LoadMoreButton>
    </Container>
  );
};
