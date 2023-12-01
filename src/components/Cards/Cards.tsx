import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { TPhoto } from '../../hooks/usePhotos';
import  PhotoCard  from '../PhotoCard/PhotoCard';

type CardProps = {
  photos: TPhoto[];
}

const Cards: React.FC<CardProps> = ({ photos }) => {
  return (
    <>
    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {photos.map(({id, description, url}) => (
        <Grid2 xs={4} sm={4} md={3}>
          <PhotoCard imageUrl={url} hasDescription description={description} />
        </Grid2>
      ))}
    </Grid2>
    </>
  );
};

export default Cards;
