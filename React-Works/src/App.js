import React, { useState } from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import TestComp from './components/TestComp';

function aa(){
  console.log('aa');
}

function App() { //re-evaluate on the screen
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => { setShowParagraph(!prevShowParagraph)});
  }

  const bb = () => {
    console.log('bb');
  }

  return ( //re evalutation 된후에 변경된 부분만(p태그) 만 업데이트 된다.
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show1={{aa:'bb'}}/>
      {showParagraph && <TestComp/>}
      <Button onClick={() => {
    console.log('bb');
  }}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;