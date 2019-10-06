import React from 'react';
import CreationArea from '../CreationArea';

import * as S from './styles';

const ContentArea = () => {
  return (
    <S.Container>
      <CreationArea />
      <S.ResultArea />
    </S.Container>
  );
};

export default ContentArea;
