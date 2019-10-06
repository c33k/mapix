import React, { useState, useEffect } from 'react';
import Tile from '../Tile';

import * as S from './styles';

// create map array of [25][20] dimentions
const ROWS = 640 / 32;
const COLS = 800 / 32;

const ContentArea = () => {
  const [painting, setPainting] = useState(false);
  const [squareMap, setSquareMap] = useState([]);

  useEffect(() => {
    const initialStateArray = new Array(ROWS);

    for (let row = 0; row < ROWS; ++row) {
      initialStateArray[row] = Array(COLS).fill(0);
    }

    setSquareMap(initialStateArray);
  }, []);

  const handleStartPaintingMouseDown = e => {
    console.log(e.target.attributes);
    setPainting(true);
  };
  const handleStopPaintingMouseUp = () => setPainting(false);

  const handleTileOver = (e, row, col) => {
    if (!painting) return;

    const newMap = [...squareMap];
    newMap[row][col] = newMap[row][col] ? 0 : 1;
    setSquareMap(newMap);
  };

  const handleTileClick = (e, row, col) => {
    const newMap = [...squareMap];
    newMap[row][col] = newMap[row][col] ? 0 : 1;
    setSquareMap(newMap);
  };

  return (
    <S.Container>
      <S.DrawingArea
        onMouseDown={handleStartPaintingMouseDown}
        onMouseUp={handleStopPaintingMouseUp}
      >
        {squareMap.map((row, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'row' }}>
            {row.map((cellValue, j) => (
              <Tile
                key={i * ROWS + j}
                row={i}
                col={j}
                onMouseOver={handleTileOver}
                onClick={handleTileClick}
                color={cellValue ? 'blue' : 'white'}
              ></Tile>
            ))}
          </div>
        ))}
      </S.DrawingArea>
    </S.Container>
  );
};

export default ContentArea;
