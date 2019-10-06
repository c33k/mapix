import React from 'react';

import * as S from './styles';

const ColorPickerSideBar = ({ colors, colorIdx, setColorIdx }) => {
  const handleClick = e => setColorIdx(+e.target.dataset.coloridx);

  return (
    <S.SectionContainer>
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

export default React.memo(ColorPickerSideBar);
