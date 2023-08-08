import{useEffect, useState} from "react";
import './App.css';
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);

  //Using promises

  useEffect(()=>{
   
    axios.get("http://localhost:8008/list")
    .then((res)=> setMyData(res.data));
  },[])

  return (
    <>
    <h1>Axis </h1>
    {
      myData.map((data)=>{
        const {eno,ename} = data;
        return (

            <div class="col col-md-2" key={eno}>
                <table border={2}>
                    <tr>
                        <td>ename</td>
                    </tr>
                    <tr>
                        <td>{ename}...</td>
                    </tr>
                </table>
            </div>
        )
      })
    }
    </>
  );
}

export default App;
