import React, { useState, useEffect } from 'react';
import Tile from '../Tile';

import * as S from './styles';

// create map array of [25][20] dimentions
const ROWS = 640 / 32;
const COLS = 800 / 32;

const DrawingArea = ({ colors, selectedColorIdx }) => {
  const [painting, setPainting] = useState(false);
  const [squareMap, setSquareMap] = useState([]);

  useEffect(() => {
    const initialStateArray = new Array(ROWS);

    for (let row = 0; row < ROWS; ++row) {
      initialStateArray[row] = Array(COLS).fill(-1);
    }

    setSquareMap(initialStateArray);
  }, []);

  const handleStartPaintingMouseDown = () => setPainting(true);
  const handleStopPaintingMouseUp = () => setPainting(false);

  const handleTileOver = (e, row, col) => {
    if (!painting) return;

    const newMap = [...squareMap];
    newMap[row][col] = selectedColorIdx;
    setSquareMap(newMap);
  };

  const handleTileClick = (e, row, col) => {
    const newMap = [...squareMap];
    newMap[row][col] = selectedColorIdx;
    setSquareMap(newMap);
  };

  return (
    <S.Container>
      <S.DrawingArea
        onMouseDown={handleStartPaintingMouseDown}
        onMouseUp={handleStopPaintingMouseUp}
      >
        {squareMap.map((row, i) => (
          <S.Row key={i} style={{ display: 'flex', flexDirection: 'row' }}>
            {row.map((cellValue, j) => (
              <Tile
                key={i * ROWS + j}
                row={i}
                col={j}
                onMouseOver={handleTileOver}
                onClick={handleTileClick}
                color={cellValue === -1 ? 'white' : colors[cellValue]}
              />
            ))}
          </S.Row>
        ))}
      </S.DrawingArea>
      <S.ControllersArea></S.ControllersArea>
    </S.Container>
  );
};

export default DrawingArea;
