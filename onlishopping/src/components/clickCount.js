import React, { useState } from "react";

const ClickCount=()=>{
    const[count, setCount] = useState(0);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    return(
        <>
        <div style={{alignContent:'center'}}>

            X:<input type="text" value={x} onChange={e=>setX(e.target.value)}></input><br></br>
            Y:<input type="text" value={y} onChange={e=>setY(e.target.value)}></input><br></br>
            <h3>{(x>=y)?((x===y)?'X equal to Y':'X is greater'):'y is greater'}</h3>
            
            <h2>No of Count: {count}</h2>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
        </>
    )
}
export default ClickCount;