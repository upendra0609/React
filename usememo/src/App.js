import './App.css';
import {useEffect, useMemo, useState} from 'react';
import  CalculateFactorial from './components/Fact';

function App() {

  const [count,setCount] = useState(0);
  const [name,setName] = useState("");

  function expensiveCalculation(num){
    for(let i=0; i<1000000;i++){}
    console.log('call')
    return num;
  }

  const memoizedResult = useMemo(()=>
    expensiveCalculation(count),[count])


  return (
    <div className="App">
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <h2>count: {memoizedResult}</h2>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}></input>
      <h2>Name: {name}</h2>

      {/* <CalculateFactorial></CalculateFactorial> */}
    </div>
  );
}

export default App;
