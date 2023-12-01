import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

type PhotoProps = {
  imageUrl: string;
  description: string;
  hasDescription?: boolean;
}

const PhotoCard: React.FC<PhotoProps> = ({ imageUrl, description, hasDescription }) => {
  return (
    <Card sx={{backgroundColor: '#585b70	', color: '#cdd6f4', height:'100%'}}>
      <CardMedia component="img" image={imageUrl} title={description} />
      {hasDescription && (
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography gutterBottom variant="h5" component="div">
            {description}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};

export default PhotoCard;
