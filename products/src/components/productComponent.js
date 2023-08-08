import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from './axiosApi';

const ProductComponent = ()=>{
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(()=>{
    axios.get("/products")
    .then((res)=> setMyData(res.data))
    .catch((error)=>setIsError(error.message))
  })

    return(
        <>
        <h2 align="center">
          Products
        </h2>
           <div color="blue" align="center">
            {isError?<h2>{isError}</h2>:
              myData.map((data)=>{
                const {id,title,price,description,category,image,
                  rating:{rate,count}
              } = data;
              return(
                <>
                <table border={1} align="center">
                  <tr>
                    <td>
                      Product Id
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link to={'/detail/'+id+'/'+title+'/'+price+'/'+description+'/'+category+'/'+rate+'/'+count}><img src={image} width={100} height={100}></img></Link>
                      {isError}
                    </td>
                  </tr>
                </table>
                </>
              )
              })
            }
           </div>
        </>
    )
}

export default ProductComponent;