class ProductComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            msg: ''
        }

        this.DatabaseOperations = this.DatabaseOperations.bind(this);

    }
    DatabaseOperations(e){
        switch(e.target.name){
            case 'Insert':
                this.setState({
                    msg: 'data inserted'
                })
                break;
            case "Delete":
                this.setState({
                    msg: 'data Deleted'
                })
                break;
            case "Update":
                this.setState({
                    msg: 'data updated'
                })
                break;
        }
    }
    render(){
        return(
            <>
             <button name="Insert" onClick={this.DatabaseOperations}>Inserted</button>
             <button name="Update" onClick={this.DatabaseOperations}>Update</button>
             <button name="Delete" onClick={this.DatabaseOperations}>Delete</button>
             <h2>{this.state.msg}</h2>
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
)