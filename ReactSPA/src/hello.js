var product = {
    brand:"Nike",
    photo:"../assets/shoe.jpeg"
}

const element =(
    <>
           <h2>{product.brand}</h2>
           <img src={product.photo} width="100" height="100"></img>
     
    </>
)

ReactDOM.render(
    element,
    document.getElementById("container")
)