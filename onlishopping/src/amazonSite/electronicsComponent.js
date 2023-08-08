import React, { Component } from "react";
import {  Link } from "react-router-dom";

export default class ElectronicsComponent extends Component{
    render(){
        return(
            <div>
                <h2>Electonics Home</h2>
                <img src="html.jpg" width={100} height={100} alt="JBL"></img>
                <img src="html.jpg" width={100} height={100} alt="JBL"></img>
                
                   <Link to="/fashion">Fashion</Link>
            </div>
        )
    }
}