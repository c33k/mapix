import React, { useState } from 'react';
import TilesMapContext from '../../Contexts/tilesmap-context';
import useTilesMap from '../../CustomHooks/use-tilesmap';
import CreationArea from '../CreationArea';

import * as S from './styles';

const ContentArea = ({ resolution, tileSize }) => {
  const tilesMapState = useTilesMap(resolution, tileSize);
  const [exportedTilesMap, setExportedTilesMap] = useState('');

  const handleExport = () => {
    const exportStr = tilesMapState[0].reduce(
      (str, row, i) =>
        str +
        '{' +
        row.toString() +
        `}${i === tilesMapState[0].length - 1 ? '}\n' : ',\n'}`,
      '{'
    );

    setExportedTilesMap(exportStr);
  };

  return (
    <S.Container>
      <TilesMapContext.Provider value={tilesMapState}>
        <CreationArea onExport={handleExport} />
        <S.ResultArea value={exportedTilesMap} readOnly />
      </TilesMapContext.Provider>
    </S.Container>
  );
};

export default ContentArea;
