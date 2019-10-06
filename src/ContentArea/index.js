import React from 'react';
import DrawingArea from '../DrawingArea';

import * as S from './styles';

const ContentArea = ({ colors, selectedColorIdx }) => (
  <S.Container>
    <DrawingArea colors={colors} selectedColorIdx={selectedColorIdx} />
    <S.ResultArea />
  </S.Container>
);

export default ContentArea;
