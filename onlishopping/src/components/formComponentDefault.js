import React from "react";

export default function FormComponent(){
    const [getName, setName] = React.useState("");
    const [getPrice, setPrice] = React.useState("");
    const [getCity, setCity] = React.useState("");
    const [getStock, setStock] = React.useState("");
    
    const SubmitClick = () =>{
        document.write(`Name=${getName}<br/>Price=${getPrice}<br/>ShippedTo=${getCity}<br/>Stock=${getStock}`);
    }

    return(
        <>
        <form onSubmit={SubmitClick}>
            Product Name:<input type="text" onChange={e=>setName(e.target.value)} name="Name" value={getName}></input><br></br>
            Product Price:<input type="text" onChange={e=>setPrice(e.target.value)} name="Price" value={getPrice}></input><br></br>
            Shipped To:
            <select name="City" onChange={e=>setCity(e.target.value)} value={getCity}>
                <option>Delhi</option>
                <option>Hyd</option>
                <option>Chennai</option>
            </select><br></br>
            In Stock:
            <input type="checkbox" onChange={e=>setStock(e.target.value)} value={getStock}></input><br></br>
            <button className="btn btn-primary">Register</button>
        </form>
        </>
    )
    
}
