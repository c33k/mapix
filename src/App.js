import React, { useState } from 'react';
import ColorPickerSideBar from './ColorPickerSideBar';
import ContentArea from './ContentArea';
import ColorContext from './Contexts/color-context';
import availableColors from './colors';

import './App.css';

function App() {
  const colorState = useState({
    colors: availableColors,
    colorIdx: 0,
  });

  const [{ colors, colorIdx }, setColorState] = colorState;

  const handleUpdateColorIdx = newIdx =>
    setColorState({
      colors,
      colorIdx: newIdx,
    });

  return (
    <ColorContext.Provider value={colorState}>
      <div className="App">
        <ColorPickerSideBar
          colors={colors}
          colorIdx={colorIdx}
          setColorIdx={handleUpdateColorIdx}
        />
        <ContentArea />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
