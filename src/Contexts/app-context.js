import { createContext } from 'react';
import availableColors from '../colors';

export const initialAppState = {
  colors: availableColors,
  colorIdx: 0,
  width: 800,
  height: 640,
  tileSize: 32,
  tilesMap: [[]],
};

const AppContext = createContext([initialAppState, obj => obj]);

export default AppContext;
