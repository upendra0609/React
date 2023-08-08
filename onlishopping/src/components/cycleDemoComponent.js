import { Component } from "react";

class SuccessComponent extends Component{
    componentWillMount(){
        alert('success component requested');
    }
    componentDidMount(){
        alert('succcess component mounted');
    }
    componentWillUnmount(){
        alert('success component destroyed and unmounted');
    }

    render(){
        return(
            <>
              <h2>Success Component</h2>
            </>
        )
    }
}

class ErrorComponent extends Component{
    
    componentWillMount(){
        alert('error component requested');
    }
    componentDidMount(){
        alert('error component mounted');
    }
    componentWillUnmount(){
        alert('error component destroyed and unmounted');
    }

    render(){
        return(
            <>
              <h2>Error Component</h2>
            </>
        )
    }
}

export default class CycleDemoComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            msg:'',
            Uname:'',
            Upwd:''
        }
        this.SuccessClick = this.SuccessClick.bind(this);
        this.ErrorClick = this.ErrorClick.bind(this);
        this.ChangeName = this.ChangeName.bind(this);
        this.ChangePwd = this.ChangePwd.bind(this);
        this.LoginClick = this.LoginClick.bind(this);
    }

    SuccessClick(){
        this.setState({
            msg: <SuccessComponent/>
        })
    }

    ErrorClick(){
        this.setState({
            msg: <ErrorComponent/>
        })
    }

    ChangeName(e){
        this.setState({
            Uname:e.target.value,
            Upwd:this.state.Upwd
        })
    }

    ChangePwd(e){
        this.setState({
            Uname:this.state.Uname,
            Upwd:e.target.value
        })
    }

    LoginClick(e){
        alert(`${this.state.Uname}\n${this.state.Upwd}`)
        e.preventDefault();
        if(this.state.Uname==='sikku' && this.state.Upwd==='sikku'){
            this.setState({
                msg: <SuccessComponent/>
            })
        }else{
            this.setState({
                msg:<ErrorComponent/>
            })
        }
    }

    render(){
        return(
            <>
            <div>
                <form onSubmit={this.LoginClick}>
                    User Name:<input type="text" name="Uname" onChange={this.ChangeName}></input><br/>
                    Password:<input type="text" name="Upwd" onChange={this.ChangePwd}></input><br></br>
                    <input type="submit" value="Login"></input><br></br>
                </form>
                <div>
                    <p className="container" align="center">
                    {this.state.msg}
                </p>
            </div>
            </div>
            {/* <div className="container" align="center">
                <button onClick={this.SuccessClick}>Success</button>
                <button onClick={this.ErrorClick}>Error</button>
            </div>
            <div>
                <p className="container" align="center">
                {this.state.msg}
                </p>
            </div> */}

            </>
        )
    }
}