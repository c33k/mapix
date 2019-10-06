import React from 'react';
import CreationArea from '../CreationArea';

import * as S from './styles';

const ContentArea = ({ colors, colorIdx }) => {
  return (
    <S.Container>
      <CreationArea colors={colors} colorIdx={colorIdx} />
      <S.ResultArea />
    </S.Container>
  );
};

export default ContentArea;
