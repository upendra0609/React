const ProductComponent = props=>(
    (
        <>
           <h2>{props.Name}</h2>
           <img src={props.Photo} height={'200'} width={'200'}/>
           <h2>{props.Price}</h2>
        </>
    )
)

const MainComponent = ()=>(
    <>
      <ProductComponent Name={'Nike'} Price={1200.5} Photo={'../assets/shoe.jpeg'}/>
      <ProductComponent Name={'Pume'} Price={5000.5} Photo={'../assets/shoe.jpeg'}/>
    </>
)

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
);