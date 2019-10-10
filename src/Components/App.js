import React, { useState } from 'react';
import ColorPickerSideBar from './ColorPickerSideBar';
import ContentArea from './ContentArea';
import AppContext, { initialAppState } from '../Contexts/app-context';

import './App.css';

function App() {
  const appState = useState(initialAppState);
  const [{ colors, colorIdx, resolution, tileSize }, setAppState] = appState;

  const handleUpdateColorIdx = idx =>
    setAppState({
      ...appState[0],
      colorIdx: idx,
    });

  return (
    <AppContext.Provider value={appState}>
      <div className="App">
        <ColorPickerSideBar
          colors={colors}
          colorIdx={colorIdx}
          pickColor={handleUpdateColorIdx}
        />
        <ContentArea resolution={resolution} tileSize={tileSize} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
