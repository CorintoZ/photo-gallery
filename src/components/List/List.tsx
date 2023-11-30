import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { TPhoto } from '../../hooks/usePhotos';

type ListProps = {
  photos: TPhoto[];
}

const PhotoList: React.FC<ListProps> = ({ photos }) => {
  return (
    <Stack spacing={2}>
      {photos.map(({ id, url, description }) => (
        <Card key={id} sx={{ display: 'flex', backgroundColor: '#585b70	', color: '#cdd6f4' }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={url}
            alt={description}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component='div'>{description}</Typography>
            </CardContent>
          </Box>
        </Card>
      ))}
    </Stack>
  );
};

export default PhotoList;
