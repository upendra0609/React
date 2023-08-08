import React from "react";
import { useParams,Link } from "react-router-dom";

const ProductComponent = ()=>{
    let {id} = useParams();

    let products = [
        {name:'Samsung tv',price:12000, CategoryId:1},
        {name:'Earpods',price:4000, CategoryId:1},
        {name:'Nike casual',price:6000, CategoryId:2},
        {name:'Lee Cooper boot',price:5000, CategoryId:2},
        {name:'Shirt',price:3000, CategoryId:3},
        
    ]

    let result = products.filter(category=>category.CategoryId==id);
    return(
        <>
        <h2 style={{alignContent:'center',color:'red'}}>Product Detail</h2>
        <table border={1}>
            <tr>
                <td>Product Name</td>
                <td>Product Price</td>
            </tr>
                {
                    result.map(product=>
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                        )
                }
        </table>
        <Link to="/category">Back to Category</Link>
       
        
        </>
    )
}

export default ProductComponent;