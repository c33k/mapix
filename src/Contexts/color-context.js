import { createContext } from 'react';

const ColorContext = createContext([
  {
    colors: [],
    colorIdx: 0,
  },
  obj => obj,
]);

export default ColorContext;
