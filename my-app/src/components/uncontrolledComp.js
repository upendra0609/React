import React, { Component } from "react";

export default class FormComponent2 extends Component{
    constructor(props){
        super(props);
       

        this.PrintData = this.PrintData.bind(this);
        this.input = React.createRef();
    }

    PrintData(e){
        e.preventDefault();
        alert();  
           
    }

    render(){
        return(
            <>
            <h2>Uncontrolled Demo</h2>
            <form onSubmit={this.PrintData}>
                User Name: <input type="text" ref={this.input} /><br></br>
                Password: <input type="text" ref={this.input} /><br></br>
                <button type="submit">Submit</button>
            </form>
            
            <h1>Entered Data</h1>
            <h3>User Name:  {this.state.Name}</h3>
            <h3>Password:  {this.state.Password}</h3>
            </>
        )
    }
}