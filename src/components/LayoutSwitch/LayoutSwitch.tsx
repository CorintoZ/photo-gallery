import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { ActionTypes, useGlobalContext } from '../../context/store';

const LayoutSwitch = () => {
  const {state, dispatch} = useGlobalContext();
  const {selectedLayout} = state;

  const handleLayoutChange = (event: SelectChangeEvent<string>) => {
    dispatch({ type: ActionTypes.SET_SELECTED_LAYOUT, payload: event.target.value });
  };

  return (
    <>
      <Select
        labelId="layout-select-label"
        id="layout-select"
        value={selectedLayout}
        label="Select Layout"
        onChange={handleLayoutChange}
        sx={{color: '#b4befe' }}
      >
        <MenuItem value={'grid'}>Grid</MenuItem>
        <MenuItem value={'list'}>List</MenuItem>
        <MenuItem value={'cards'}>Cards</MenuItem>
        <MenuItem value={'carousel'}>Carousel</MenuItem>
      </Select>
    </>
  )
}

export default LayoutSwitch;
