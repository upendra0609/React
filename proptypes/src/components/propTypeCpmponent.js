import React, { Component } from "react";
import PropTypes from 'prop-types';

const Products=(props)=>{
    return(
        <>
           <table>
            <tr>
                <td>Code</td>
                <td>{props.code}</td>
            </tr>
            <tr>
                <td>Name</td>
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>Price</td>
                <td>{props.price}</td>
            </tr>
           </table>
        </>
    )
}

Products.proptype = {
    code:PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    name:PropTypes.string,
    price:PropTypes.number
}

export default class MainComponent extends Component{
    render(){
        return(
            <>
            <Products code={1000} name={`Samsung TV`} price={2345554}/>
            </>
        )
    }
}