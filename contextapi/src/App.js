import './App.css';
import React,{useState,createContext} from 'react'
import CompA from './components/CompA';
import Header from './components/Header';
import CompC from './components/CompC';
import UseReducer from './components/UseReducer';

const appStore = createContext();

function App() {
  const [data, setData] = useState("Rahul");
  return (
    <>
    {/* <appStore.Provider value={setData}>
      <div className="App">
        <Header></Header>
        <CompA></CompA>
        <h2>{data}</h2>
      </div>
    </appStore.Provider> */}

    {/* useReducer */}

    <UseReducer></UseReducer>

    </>
  );
}

export default App;
export {appStore}
