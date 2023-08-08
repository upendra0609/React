function ProductComponent1(){
    return(
        <>
          <h2>Welcome to Reactjs</h2>
        </>
    )
}

function ProductComponent2(props){
    return(
        <>
          <h2>{props.Name}</h2>
          <h2>{props.Price}</h2>
        </>
    )
}

const ProductComponent3 = (props)=>(
    <>
       <h2>{props.Name}</h2>
    </>
)

function MainComponent(){
    return(
        <>
        <ProductComponent1/>
        <ProductComponent2 Name="Shoe" Price={12000}/>
        <ProductComponent3 Name="Infotech"/>
        </>
    )
}

ReactDOM.render(
    <MainComponent/>,
    document.getElementById("container")
)
