import React, { useContext, useEffect, useRef, useState } from 'react';
import AppContext from '../../Contexts/app-context';
import TilesMapContext from '../../Contexts/tilesmap-context';
import {
  drawCanvas,
  paintTile,
  normalizeMousePosition,
  getTilePosition,
} from './canvas-manager';

import * as S from './styles';

const TileCanvas = () => {
  const [painting, setPainting] = useState(false);
  const [{ colors, colorIdx, resolution, tileSize }] = useContext(AppContext);
  const [tilesMap, setTilesMap] = useContext(TilesMapContext);
  const canvasRef = useRef(null);

  useEffect(() => {
    drawCanvas(canvasRef.current, resolution, tileSize);
  }, [resolution, tileSize]);

  const recalculateTilesMap = (ctx, x, y) => {
    const pos = getTilePosition(x, y, tileSize);

    // copy tilesMap
    const newMap = [...tilesMap];

    newMap[pos.y][pos.x] = colorIdx;

    paintTile(ctx, x, y, tileSize, colors[colorIdx]);
    setTilesMap(newMap);
  };

  const handleStartPaintingMouseDown = () => setPainting(true);
  const handleStopPaintingMouseUp = () => setPainting(false);

  const handleClickTile = e => {
    const ctx = canvasRef.current.getContext('2d');
    const rect = normalizeMousePosition(
      canvasRef.current,
      e.clientX,
      e.clientY
    );

    recalculateTilesMap(ctx, rect.x, rect.y);
  };

  const handleMouseMove = e => {
    if (!painting) return;
    handleClickTile(e);
  };

  return (
    <S.Canvas
      style={{ width: resolution.width, height: resolution.height }}
      ref={canvasRef}
      width={resolution.width}
      height={resolution.height}
      onClick={handleClickTile}
      onMouseDown={handleStartPaintingMouseDown}
      onMouseUp={handleStopPaintingMouseUp}
      onMouseMove={handleMouseMove}
    ></S.Canvas>
  );
};

export default TileCanvas;
