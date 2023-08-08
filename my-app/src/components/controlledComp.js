import React, { Component } from "react";

export default class FormComponent1 extends Component{
    cssStyle = {
        color : 'blue',
        textAlign:'left'
    }
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            Password: ''
        }

        this.PrintData = this.PrintData.bind(this);
    }

    PrintData(e){
        e.preventDefault();
        this.setState({
            Name: e.target.name.value,
            Password: e.target.pwd.value
        })  
           
    }

    render(){
        return(
            <>
            <div style={{textAlign:'center',color:'red'}}>
                <h2>Uncontrolled Demo</h2>
                <form onSubmit={this.PrintData}>
                    User Name: <input type="text" name="name" /><br></br>
                    Password: <input type="text" name="pwd" /><br></br>
                    <button type="submit">Submit</button>
                </form>

            </div>
            <div style={this.cssStyle}>
                <h1>Entered Data</h1>
                <h3>User Name:  {this.state.Name}</h3>
                <h3>Password:  {this.state.Password}</h3>
            </div>
            </>
        )
    }
}