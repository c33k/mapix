import { useState, useEffect } from 'react';

const useTilesMap = (width, height, tileSize) => {
  const [tilesMap, setTilesMap] = useState([]);

  useEffect(() => {
    setTilesMap(generateNewTilesMap(width, height, tileSize));
  }, [width, height, tileSize]);

  function generateNewTilesMap(width, height, tileSize) {
    const ROWS = (height / tileSize) | 0;
    const COLS = (width / tileSize) | 0;
    const initialStateArray = new Array(ROWS);

    for (let row = 0; row < ROWS; ++row) {
      initialStateArray[row] = Array(COLS).fill(-1);
    }

    return initialStateArray;
  }

  return [tilesMap, setTilesMap];
};

export default useTilesMap;
