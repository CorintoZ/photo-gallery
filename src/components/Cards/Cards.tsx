import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import React from 'react';
import { TPhoto } from '../../hooks/usePhotos';

type CardProps = {
  photos: TPhoto[];
}

const Cards: React.FC<CardProps> = ({ photos }) => {
  return (
    <>
    <Grid2 container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {photos.map(({id, description, url}) => (
        <Grid2 xs={4} sm={4} md={3}>
        <Card key={id} sx={{backgroundColor: '#585b70	', color: '#cdd6f4', height:'100%'}}>
          <CardMedia component="img" image={url} title={description} />
          <CardContent sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant="h5" component="div">
              {description}
            </Typography>
          </CardContent>
      </Card>
        </Grid2>
      ))}
    </Grid2>
    </>
  );
};

export default Cards;
