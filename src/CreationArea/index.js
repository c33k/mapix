import React, { useState, useEffect } from 'react';
import TileCanvas from '../TileCanvas';

import * as S from './styles';

// create map array of [25][20] dimentions
const ROWS = 640 / 32;
const COLS = 800 / 32;

const CreationArea = ({ setExportData }) => {
  const [tilesMap, setTilesMap] = useState([]);

  // do it only on the creation of the component
  // (equivalent to componentDidMount() )
  useEffect(() => {
    setTilesMap(generateNewTilesMap());
  }, []);

  const handleExport = () => {
    const exportStr = tilesMap.reduce(
      (str, row, i) =>
        str +
        '{' +
        row.toString() +
        `}${i === tilesMap.length - 1 ? '}\n' : ',\n'}`,
      '{'
    );

    setExportData(exportStr);
  };

  return (
    <S.Container>
      <TileCanvas tilesMap={tilesMap} updateTilesMap={setTilesMap} />
      <S.Controllers>
        <S.ExportBtn onClick={handleExport}>Export</S.ExportBtn>
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
