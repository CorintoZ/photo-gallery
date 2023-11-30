import { Typography } from '@mui/material';
import { styled } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Cards from './components/Cards/Cards';
import PhotoCarousel from './components/Carousel/Carousel';
import PhotoGrid from './components/Grid/Grid';
import LayoutSwitch from './components/LayoutSwitch/LayoutSwitch';
import PhotoList from './components/List/List';
import { useGlobalContext } from './context/store';

const Container = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function App() {
  const { state } = useGlobalContext();
  const { selectedLayout, photos } = state;

  return (
    <>
      <GlobalStyles />
      <Container>
        <Typography variant="h2" sx={{color:'#89b4fa'}}>Flowbox Photo Gallery</Typography>
        <LayoutSwitch />
        {selectedLayout === 'cards' && <Cards photos={photos}/>}
        {selectedLayout === 'grid' && <PhotoGrid photos={photos} />}
        {selectedLayout === 'list' && <PhotoList photos={photos} />}
        {selectedLayout === 'carousel' && <PhotoCarousel photos={photos} />}
      </Container>
    </>
  );
}

export default App;
