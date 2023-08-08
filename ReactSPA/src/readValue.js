class ProductComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product:{
                Name:'',
                Price:''
            }
        }

        this.NameChanged = this.NameChanged.bind(this);
        this.PriceChanged = this.PriceChanged.bind(this);
    }
    

    NameChanged(e){
        this.setState({
            product:{
                Name: e.target.value,
                Price: this.state.product.Price
            }
        })
    }
    PriceChanged(e){
        this.setState({
            product:{
                Price: e.target.value,
                Name: this.state.product.Name
            }
        })
    }

    render(){
        return(
            <>
            Name:
            <input type="text" onChange={this.NameChanged}></input>
            Price:
            <input type="text" onChange={this.PriceChanged}></input>

            <div>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.product.Name}</td>
                            <td>{this.state.product.Price}</td>
                        </tr>
                    </tbody>                   
                </table>
            </div>
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