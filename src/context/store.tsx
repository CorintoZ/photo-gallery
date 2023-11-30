import React, { createContext, ReactNode, useContext, useEffect, useReducer } from 'react';
import { TPhoto, usePhotos } from '../hooks/usePhotos';

type GlobalState = {
  photos: TPhoto[];
  selectedLayout: string;
}

type GlobalProviderProps = {
  children: ReactNode;
}

export enum ActionTypes {
  SET_PHOTOS = 'SET_PHOTOS',
  SET_SELECTED_LAYOUT = 'SET_SELECTED_LAYOUT',
}

export type Action =
  | { type: ActionTypes.SET_PHOTOS; payload: TPhoto[] }
  | { type: ActionTypes.SET_SELECTED_LAYOUT; payload: string };

const initialState: GlobalState = {
  photos: [],
  selectedLayout: 'cards',
};

const reducer = (state: GlobalState, action: Action): GlobalState => {
  switch (action.type) {
    case ActionTypes.SET_PHOTOS:
      return { ...state, photos: action.payload };
    case ActionTypes.SET_SELECTED_LAYOUT:
      return { ...state, selectedLayout: action.payload };
    default:
      return state;
  }
};

const GlobalContext = createContext<{ state: GlobalState; dispatch: React.Dispatch<Action> } | undefined>(
  undefined
);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const photos = usePhotos();

  useEffect(() => {
    dispatch({ type: ActionTypes.SET_PHOTOS, payload: photos });
  }, [photos]);

  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};
