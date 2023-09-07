import { Box } from '../common/Box';
import { Container } from './Sidebar.style';
import { Comment } from './Comment';
import { Today } from './Today';
import { Weather } from './Weather';

export const Sidebar = () => {
  return (
    <div>
      <Box>
        <Container>
          <Today />
          <Weather />
        </Container>
      </Box>
      <Box>
        <Comment />
      </Box>
    </div>
  );
};
