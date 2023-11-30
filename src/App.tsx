import { styled } from 'styled-components';
import './App.css';
import { LayoutSwitch } from './components/LayoutSwitch/LayoutSwitch';
import { useGlobalContext } from './context/store';

const Container = styled.div`
  margin: 2rem;
`;

function App() {
  const { state } = useGlobalContext();
  const { selectedLayout, photos } = state;

  return (
    <Container>
      <LayoutSwitch />
      {selectedLayout === 'cards' && <div>cards</div>}
      {selectedLayout === 'grid' && <div>grid</div>}
      {selectedLayout === 'list' && <div>list</div>}
      {selectedLayout === 'carousel' && <div>carousel</div>}
    </Container>
  );
}

export default App;
