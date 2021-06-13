import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextFiled } from './TextField';
import { Counter } from './Counter';

function App() {
  return (
    <div className="App">
      <Counter>
        {({count, setCount}) => (<div>{count}<button onClick={()=>{setCount(count+1)}}></button></div>)
        }
      </Counter>
    </div>
  );
}

export default App;
