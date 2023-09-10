import { Box } from '../common/Box';
import { Comment } from './Comment';
import { Today } from './Today';
import { Weather } from './Weather';
import { Container, Wrapper } from './styles';

export const Sidebar = () => {
  return (
    <Container>
      <Box>
        <Wrapper>
          <Today />
          <Weather />
        </Wrapper>
      </Box>
      <Box>
        <Comment />
      </Box>
    </Container>
  );
};
