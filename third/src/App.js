import './App.css';
import React,{useState} from 'react';

function App() {

  const [num,setNum] = useState(1);

  function inc(){
    setNum(num+1);
  }

  function dec(){
    setNum(num-1);
  }

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
    </div>
  );
}

export default App;
