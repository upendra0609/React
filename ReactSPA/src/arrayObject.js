var data = [
    {Name:"JBL Speaker", Price:4539.9,Photo:"../assets/shoe.jpeg"},
    {Name:"Nike casuals", Price:12038,Photo:"../assets/shoe.jpeg"}
];

const elements = (
    <>
      <h2 align="center">Product Table</h2>

      <table className="table table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Preview</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map(product=>
                    <tr>
                        <td>{product.Name}</td>
                        <td>{product.Price}</td>
                        <td><img src={product.Photo} width="60" height="60"/></td>
                    </tr>
                    )
            }
        </tbody>
        
      </table>
    </>
)

ReactDOM.render(elements,document.getElementById("container"));