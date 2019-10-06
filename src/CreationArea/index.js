import React, { useState, useEffect } from 'react';
import TileCanvas from '../TileCanvas';

import * as S from './styles';

// create map array of [25][20] dimentions
const ROWS = 640 / 32;
const COLS = 800 / 32;

const CreationArea = ({ colors, colorIdx }) => {
  const [tilesMap, setTilesMap] = useState([]);

  // do it only on the creation of the component
  // (equivalent to componentDidMount() )
  useEffect(() => {
    setTilesMap(generateNewTilesMap());
  }, []);

  return (
    <S.Container>
      <TileCanvas
        colors={colors}
        colorIdx={colorIdx}
        tilesMap={tilesMap}
        updateTilesMap={setTilesMap}
      />
      <S.Controllers>
        <S.ExportBtn tabindex="0">Export</S.ExportBtn>
      </S.Controllers>
    </S.Container>
  );
};

function generateNewTilesMap() {
  const initialStateArray = new Array(ROWS);

  for (let row = 0; row < ROWS; ++row) {
    initialStateArray[row] = Array(COLS).fill(-1);
  }

  return initialStateArray;
}

export default CreationArea;
