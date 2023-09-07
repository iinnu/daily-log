import { Box } from '../common/Box';
import { Container, Wrapper } from './Sidebar.style';
import { Comment } from './Comment';
import { Today } from './Today';
import { Weather } from './Weather';

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
