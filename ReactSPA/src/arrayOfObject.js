const ProductComponent = props=>(
    <>
       {
        props.map(item=>(
            <div>
                <h3>{item.Name}</h3>
                <h3>{item.Price}</h3>
                <img src={item.Photo} width={'200'} height={'200'}></img>
            </div>
        ))
       }
    </>
);

const MainComponent =() =>(
    <>
    <ProductComponent />
    </>
)