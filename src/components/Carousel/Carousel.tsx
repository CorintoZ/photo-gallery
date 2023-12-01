import { Box } from '@mui/system';
import React from 'react';
import { TPhoto } from '../../hooks/usePhotos';
import PhotoCard from '../PhotoCard/PhotoCard';
import { Carousel } from 'react-responsive-carousel'
import { styled } from 'styled-components';

type CarouselProps = {
  photos: TPhoto[];
}

const StyledBox = styled(Box)`
  .carousel-root {
    width: 90vh;
  }
`;

const PhotoCarousel: React.FC<CarouselProps> = ({ photos }) => {
  return (
    <StyledBox sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <Carousel>
        {photos.map((photo, index) => (
           <PhotoCard key={index} description={photo.description} imageUrl={photo.url}/>
        ))}
      </Carousel>
    </StyledBox>
  );
};

export default PhotoCarousel;
