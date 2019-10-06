import React, { useState } from 'react';
import ColorPickerSideBar from './ColorPickerSideBar';
import ContentArea from './ContentArea';

import './App.css';

function App() {
  const colors = ['#2fbfff', '#f9d135', '#ddb621'];
  const [colorIdx, setColorIdx] = useState(0);

  return (
    <div className="App">
      <ColorPickerSideBar
        colors={colors}
        colorIdx={colorIdx}
        onSelectColor={setColorIdx}
      />
      <ContentArea colors={colors} colorIdx={colorIdx} />
    </div>
  );
}

export default App;
