import React, { useState } from 'react';
import ColorPickerSideBar from './ColorPickerSideBar';
import ContentArea from './ContentArea';
import AppContext, { initialAppState } from './Contexts/app-context';

import './App.css';

function App() {
  const appState = useState(initialAppState);
  const [{ colors, colorIdx }, setAppState] = appState;

  const handleUpdateColorIdx = newIdx =>
    setAppState({
      ...appState[0],
      colorIdx: newIdx,
    });

  return (
    <AppContext.Provider value={appState}>
      <div className="App">
        <ColorPickerSideBar
          colors={colors}
          colorIdx={colorIdx}
          setColorIdx={handleUpdateColorIdx}
        />
        <ContentArea />
      </div>
    </AppContext.Provider>
  );
}

export default App;
