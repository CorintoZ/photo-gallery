import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { TPhoto } from '../../hooks/usePhotos';
import Photo from '../Photo/Photo';

type GridProps = {
  photos: TPhoto[];
}

const PhotoGrid: React.FC<GridProps> = ({ photos }) => {
  return (
    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {photos.map(({id, description, url}) => (
        <Grid2 xs={4} sm={4} md={3}>
          <Photo key={id} description={description} imageUrl={url} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default PhotoGrid;

