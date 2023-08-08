import React from "react";
import { useParams } from "react-router-dom";

const DetailComponent = ()=>{
    let{error} = useParams("");
    let{id,title,price,description,category,rate,count} = useParams();

    return(
        <>
        <div align="center">
            {error?<h2>{error}</h2>:
            <div>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <h2>{price}</h2>
            <h2>{description}</h2>
            <h2>{category}</h2>
            <h2>{rate}</h2>
            <h2>{count}</h2>
            </div>
            }
           
        
        </div>
        </>
    )
}

export default DetailComponent;