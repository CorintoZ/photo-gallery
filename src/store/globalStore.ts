import { create } from 'zustand';
import { TPhoto } from '../hooks/usePhotos';

type TGlobalStore = {
  selectedLayout: string;
  photos: TPhoto[];
  setPhotos: (photos: TPhoto[]) => void;
  setSelectedLayout: (layout: string) => void;
}

export const useGlobalStore = create<TGlobalStore>((set) => ({
  photos: [],
  selectedLayout: 'grid',
  setPhotos: (photos) => set({ photos }),
  setSelectedLayout: (layout) => set({ selectedLayout: layout }),
}));
