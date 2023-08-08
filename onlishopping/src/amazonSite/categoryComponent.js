import React from "react";
import {Link} from 'react-router-dom';

const CategoryComponent = ()=>{
    let categories=[
        {categoryId:1,categoryName:'Electronics'},
        {categoryId:3,categoryName:'Fashion'},
        {categoryId:2,categoryName:'Footwear'}
    ]
    return(
        <>
        <h2>Categories List</h2>
        <ul>
            {
                categories.map(category=>
                    <li key={category.categoryId}><Link to={'/products/'+category.categoryId+'/'+category.categoryName}>{category.categoryName}</Link></li>
                    )
            }
        </ul>
        </>
    )
}

export default CategoryComponent;