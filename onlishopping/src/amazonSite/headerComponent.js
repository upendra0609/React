import React, { Component } from "react";

export default class HeaderComponent extends Component{
    render(){
        return(
            <div className="mt-2 bg-primary text-center text-white">
                <h2><span className="bi- bi-cart4"></span>Amazon Shopping</h2>
            </div>
        )
    }
}