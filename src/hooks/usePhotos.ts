import { useEffect, useState } from 'react';
import { getPhotos } from '../api/api';

export type TPhoto = {
  id: number;
  description: string;
  url: string;
};

export const usePhotos = () => {
  const [photos, setPhotos] = useState<TPhoto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { photos } = await getPhotos();
      setPhotos(photos);
    };

    fetchData();
  }, []);

  return photos;
};
