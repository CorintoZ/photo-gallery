import React from 'react';

type PhotoProps = {
  imageUrl: string;
  description: string;
  hasDescription?: boolean;
}

const Photo: React.FC<PhotoProps> = ({ imageUrl, description, hasDescription }) => {
  return (
    <div>
      <img src={imageUrl} alt={description} />
      { hasDescription ? <p>{description}</p> : null }
    </div>
  );
};

export default Photo;
