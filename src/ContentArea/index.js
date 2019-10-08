import React, { useState } from 'react';
import CreationArea from '../CreationArea';

import * as S from './styles';

const ContentArea = () => {
  const [exportedTilesMap, setTileMapStr] = useState('');

  return (
    <S.Container>
      <CreationArea setExportData={setTileMapStr} />
      <S.ResultArea value={exportedTilesMap} readOnly />
    </S.Container>
  );
};

export default ContentArea;
