class ProductComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'Category List',
            categories: ['Footwear', 'Fashion', 'Electronics'],
            data:[
                {Name:'Nike Casual', Price:12000},
                {Name:'Shirt', Price:3200}
            ]
        }
    }

    render(){
        return(
            <>
          <h3>{this.state.title}</h3>
          <ul>
            {
                this.state.categories.map(category=>
                    <li>{category}</li>
                    )
            }
          </ul>

          <div>
            {
                this.state.data.map(products=>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{products.Name}</td>
                                <td>{products.Price}</td>
                            </tr>
                        </tbody>

                    </table>
                    )
            }
          </div>
        </>
        )
        
    }
}

ReactDOM.render(
    <ProductComponent/>,
    document.getElementById("container")
);