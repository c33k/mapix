import React, { useState, useEffect } from 'react';
import ColorPickerSideBar from './ColorPickerSideBar';
import ContentArea from './ContentArea';

import './App.css';

function App() {

  const [t, sett] = useState(1);

  useEffect(() => {
    let timer = setTimeout(() => sett(t+1), 1000);
    return () => clearTimeout(timer);
  })

  return (
    <div className="App">
      <ColorPickerSideBar />
      <ContentArea />
    </div>
  );
}

export default App;
