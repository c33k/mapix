import React, { useState } from 'react';
import Tile from '../Tile';

import * as S from './styles';

const TileCanvas = ({ colors, colorIdx, tilesMap, updateTilesMap }) => {
  const [painting, setPainting] = useState(false);

  const handleStartPaintingMouseDown = () => setPainting(true);
  const handleStopPaintingMouseUp = () => setPainting(false);

  const handleTileOver = (e, row, col) => {
    if (!painting) return;

    const newMap = [...tilesMap];
    newMap[row][col] = colorIdx;
    updateTilesMap(newMap);
  };

  const handleTileClick = (e, row, col) => {
    const newMap = [...tilesMap];
    newMap[row][col] = colorIdx;
    updateTilesMap(newMap);
  };

  const rowCount = tilesMap.length;

  return (
    <S.TileCanvas
      onMouseDown={handleStartPaintingMouseDown}
      onMouseUp={handleStopPaintingMouseUp}
    >
      {tilesMap.map((row, i) => (
        <S.Row key={i}>
          {row.map((cellValue, j) => (
            <Tile
              key={i * rowCount + j}
              row={i}
              col={j}
              onMouseOver={handleTileOver}
              onClick={handleTileClick}
              color={cellValue === -1 ? 'white' : colors[cellValue]}
            />
          ))}
        </S.Row>
      ))}
    </S.TileCanvas>
  );
};

export default React.memo(TileCanvas);
