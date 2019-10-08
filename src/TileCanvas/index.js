import React, { useContext, useEffect, useRef, useState } from 'react';
import useTilesMap from './use-tilesmap';
import AppContext from '../Contexts/app-context';
import {
  drawCanvas,
  paintTile,
  normalizeMousePosition,
  getTilePosition,
} from './canvas-manager';

import * as S from './styles';

const TileCanvas = () => {
  const [painting, setPainting] = useState(false);
  const canvasRef = useRef(null);
  const [currentContext, updateContext] = useContext(AppContext);

  const { colors, colorIdx, width, height, tileSize } = currentContext;

  const [tilesMap, setTilesMap] = useTilesMap(width, height, tileSize);

  useEffect(() => {
    drawCanvas(canvasRef.current, width, height, tileSize);
  }, [width, height, tileSize]);

  const handleStartPaintingMouseDown = () => setPainting(true);
  const handleStopPaintingMouseUp = () => setPainting(false);

  const handleClickTile = e => {
    const ctx = canvasRef.current.getContext('2d');
    const rect = normalizeMousePosition(
      canvasRef.current,
      e.clientX,
      e.clientY
    );

    const pos = getTilePosition(rect.x, rect.y, tileSize);
    const newMap = [...tilesMap];
    newMap[pos.y][pos.x] = colorIdx;

    paintTile(ctx, rect.x, rect.y, tileSize, colors[colorIdx]);
    updateContext({ ...currentContext, tilesMap });
    setTilesMap(newMap);
  };

  const handleMouseMove = e => {
    if (!painting) return;
    handleClickTile(e);
  };

  return (
    <S.Canvas
      style={{ width, height }}
      ref={canvasRef}
      width={width}
      height={height}
      onClick={handleClickTile}
      onMouseDown={handleStartPaintingMouseDown}
      onMouseUp={handleStopPaintingMouseUp}
      onMouseMove={handleMouseMove}
    ></S.Canvas>
  );
};

export default TileCanvas;
