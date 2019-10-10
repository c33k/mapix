import React from 'react';
import TileCanvas from '../TileCanvas';

import * as S from './styles';

const CreationArea = ({ onExport }) => {
  return (
    <S.Container>
      <TileCanvas></TileCanvas>
      <S.Controllers>
        <S.ExportBtn onClick={onExport}>Export</S.ExportBtn>
      </S.Controllers>
    </S.Container>
  );
};

export default CreationArea;
