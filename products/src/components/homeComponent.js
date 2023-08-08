import React, { useEffect } from "react";
import axios from './axiosApi';

const HomeComponent = ()=>{

    useEffect(()=>{
        axios.get("/products")
        .then((res)=>{
            console.log(res.data)
        })
    },[]);

    return(
        <>
        <div align="center">          
            Hello! welcome to react js
        </div>
        </>
    )
}

export default HomeComponent;