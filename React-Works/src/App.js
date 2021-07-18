import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() { //re-evaluate on the screen
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => { setShowParagraph(!prevShowParagraph)});
  }

  return ( //re evalutation 된후에 변경된 부분만(p태그) 만 업데이트 된다.
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show1={{aa:'bb'}}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
