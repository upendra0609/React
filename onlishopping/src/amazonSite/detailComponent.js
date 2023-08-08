import React from "react";
import { useParams } from "react-router-dom";

const DetailComponent = ()=>{
    let {id,name,price} = useParams();
    return(
        <>
           <h2>Product Detail</h2>
           <div>
            <h4>Id: {id}</h4>
            <h4>Name: {name}</h4>
            <h4>Price: {price}</h4>
           </div>
        </>
    )
}

export default DetailComponent;