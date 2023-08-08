import './App.css';
import React, { useEffect,useState} from 'react'

function App() {

  const [state,setState] = useState(1);
  const [data, setData] = useState([]);

  useEffect(()=>{
    async function getData(){
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`);
      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();  //call getData();
    document.title = `(${state}) Employee`;
  },[state]);


  return (
    <div className="App">
      <button style={{margin:20}} onClick={()=>setState(state+1)}>Increment{state}</button>
      <h1 style={{color:'green'}}>Element</h1>
      {
        data.map((element,index)=>{
          return(
            <div key={index}>
              <h2>{element.id}</h2>
              <h3>{element.firstName} {element.lastName}</h3>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
