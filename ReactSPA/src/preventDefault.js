class ProductComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg:''
        }

        this.RegisterClick = this.RegisterClick.bind(this);
    }

    RegisterClick(SyntheticEvent){
        SyntheticEvent.preventDefault();
        this.setState({
            msg : 'Form submitted'
        })
    }

    render(){
        return(
            <>
              <form onSubmit={this.RegisterClick}>
                User Name:
                <input type="text" name="uname"/>
                <button>Submit</button>
                <h2>{this.state.msg}</h2>

              </form>
            </>
        )
    }
}

class MainComponent extends React.Component{
    render(){
        return(
            <>
              <ProductComponent/>
            </>
        )
    }
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
);