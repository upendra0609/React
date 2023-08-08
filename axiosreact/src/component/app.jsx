import { useEffect, useState } from 'react'
import axios from './api';

function App(){
    const [myData, setData] = useState([]);
    const [isError, setIsError] = useState("");

    // useEffect(()=>{
    //    axios.get("https://fakestoreapi.com/products")
    //    .then((res)=> setData(res.data))
    //    .catch((error)=>setIsError(error.message));

    // },[]);

    //USING Async Await
    const getApiData = async()=>{
        try {
            const res = await axios.get("/products");
            setData(res.data);
        } catch (error) {
            setIsError(error.message);
        }
    }

    useEffect(()=>{
        getApiData();
     },[]);


    return(
        <>
           <h1 align="center">Axios Tutorial</h1>
           <h2 align="center">
           {isError?isError:null}
           </h2>
           {
              myData.map((data)=>{
                const {id,title,price,description,category,image,
                    rating:{rate,count}
                } = data;
                return (

                    <div class="col col-md-2" key={id}>
                        <table border={2}>
                            <tr>
                                <td>Title</td>
                                <td>Price</td>
                                <td>Description</td>
                                <td>Category</td>
                                <td>Image</td>
                                <td>Rating/count</td>
                            </tr>
                            <tr>
                                <td>{title.slice(0,20)}...</td>
                                <td>{price}</td>
                                <td>{category.slice(0,10)}...</td>
                                <td>{description.slice(0,70)}...</td>
                                <td><img src={image} width={100} height={100}></img></td>
                                <td>{rate}/{count}</td>
                            </tr>
                        </table>
                    </div>
                )
              })
           }
        </>
    )
}

export default App;