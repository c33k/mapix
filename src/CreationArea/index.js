import React, { useContext } from 'react';
import AppContext from '../Contexts/app-context';
import TileCanvas from '../TileCanvas';

import * as S from './styles';

const CreationArea = ({ setExportData }) => {
  const [{ tilesMap }] = useContext(AppContext);

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
      <TileCanvas></TileCanvas>
      <S.Controllers>
        <S.ExportBtn onClick={handleExport}>Export</S.ExportBtn>
      </S.Controllers>
    </S.Container>
  );
};

export default CreationArea;
