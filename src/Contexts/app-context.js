import { createContext } from 'react';
import availableColors from '../colors';

export const initialAppState = {
  colors: availableColors,
  colorIdx: 0,
  resolution: {
    width: 800,
    height: 640,
  },
  tileSize: 32,
};

export default createContext([initialAppState, obj => obj]);
