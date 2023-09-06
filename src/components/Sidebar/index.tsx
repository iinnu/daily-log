import { Box } from '../common/Box';
import { Container } from './Sidebar.style';
import { Today } from './Today';
import { Weather } from './Weather';

export const Sidebar = () => {
  return (
    <Box>
      <Container>
        <Today />
        <Weather />
      </Container>
    </Box>
  );
};
