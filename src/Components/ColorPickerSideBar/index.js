import React from 'react';
import logo from '../../assets/logo.jpg';

import * as S from './styles';

const ColorPickerSideBar = ({ colors, colorIdx, pickColor }) => {
  const handleClick = e => pickColor(parseInt(e.target.dataset.coloridx));

  return (
    <S.SectionContainer>
      <img src={logo} alt="MAPIX LOGO" title="MAPIX LOGO" />
      <S.ColorPicker>
        {colors.map((color, idx) => (
          <S.Button
            key={idx}
            data-coloridx={idx}
            onClick={handleClick}
            style={{
              border: idx === colorIdx ? `4px solid black` : 'none',
              background: colors[idx],
            }}
          ></S.Button>
        ))}
      </S.ColorPicker>
    </S.SectionContainer>
  );
};

export default ColorPickerSideBar;
