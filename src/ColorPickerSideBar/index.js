import React, { useState } from 'react';
import * as S from './styles';

const colors = ['#f9d135', '#ddb621', '#2fbfff'];

const ColorPickerSideBar = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const handleSelectColor = e => {
    setSelectedIdx(Number(e.target.dataset.coloridx));
  };

  return (
    <S.SectionContainer>

      <S.ColorPicker>
        {colors.map((color, idx) => (
          <S.Button key={idx} 
            data-coloridx={idx}
            onClick={handleSelectColor}
            style={{border: selectedIdx === idx ? '4px solid black' : 'none', background: color}}
          ></S.Button>
        ))}        
      </S.ColorPicker>
    </S.SectionContainer>
  );
};

export default React.memo(ColorPickerSideBar);