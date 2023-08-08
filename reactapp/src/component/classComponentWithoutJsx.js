import React, { Component } from "react";

class ClassComponent1 extends Component{
    render(){
        return(
            React.createElement("h1",null,"h1 tag",React.createElement("h2",null,"h2 tag"))
        )
    }
}


export default ClassComponent1;