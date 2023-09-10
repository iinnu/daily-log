import { Box } from '../common/Box';
import { Memo } from './Memo';
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
        <Memo />
      </Box>
    </Container>
  );
};
