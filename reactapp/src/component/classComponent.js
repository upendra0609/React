import React, { Component } from "react";

class ClassComponent1 extends Component{
    render(){
        return(
            <>
              <h2>ClassComponent1</h2>
            </>
        )
    }
}

class ClassComponent2 extends Component{
    render(){
        return(
            <>
            <ClassComponent1/>
            <h2>ClassComponent1</h2>
            </>
        )
    }
}

export default ClassComponent2;