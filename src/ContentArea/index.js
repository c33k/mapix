import React, { useState } from 'react';
import CreationArea from '../CreationArea';

import * as S from './styles';

const ContentArea = () => {
  const [mapString, setMapString] = useState('');

  return (
    <S.Container>
      <CreationArea setExportData={setMapString} />
      <S.ResultArea value={mapString} readOnly />
    </S.Container>
  );
};

export default ContentArea;
