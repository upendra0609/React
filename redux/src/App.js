import './App.css';
import {useSelector,useDispatch } from 'react-redux'
import { Inc,Dec } from './states/reducer';


function App() {
  const currState = useSelector((state)=>state.number);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{currState}</h1>
      <button onClick={()=>dispatch(Inc())}>Increment</button>
      <button onClick={()=>dispatch(Dec())}>Decrement</button>
    </div>
  );
}

export default App;
