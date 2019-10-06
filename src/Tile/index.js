import React from 'react';
import * as S from './styles';

const Tile = ({ color, onMouseOver, onClick, row, col }) => (
  <S.Tile
    style={{ backgroundColor: color }}
    onClick={e => onClick(e, row, col)}
    onMouseOver={e => onMouseOver(e, row, col)}
  ></S.Tile>
);

export default React.memo(Tile);
