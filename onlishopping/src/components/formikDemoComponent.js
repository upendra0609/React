import { useFormik } from "formik";
import React from "react";

const FormikDemoComponent = ()=>{
    const formik = useFormik({
        initialValues:{
            Name:'Tv',
            Price:0,
            ShippedTo:'',
            InStock:false
        },

        onSubmit: values=>{
            document.write(`
              <h2>${values.Name}</h2>
              <h2>${values.Price}</h2>
              <h2>${values.ShippedTo}</h2>
              <h2>${values.InStock===true?"Available":"Out Of Stock"}</h2>
            `);
            // document.write(JSON.stringify(values));
        }
    })
    return(
        <>
           <form onSubmit={formik.handleSubmit}>
            Name:
                <input type="text" name="Name" onChange={formik.handleChange} value={formik.values.Name}></input><br/><br/>
                Price:
                <input type="text" name="Price" onChange={formik.handleChange} value={formik.values.Price}></input><br/><br/>
                Shipped To:
                <select name="ShippedTo" onChange={formik.handleChange} value={formik.values.ShippedTo}>
                    <option>Delhi</option>
                    <option>Hyd</option>
                    <option>Pune</option>
                </select><br/><br/>
                InStock:
                <input type="checkbox" name="InStock" onChange={formik.handleChange} checked={formik.values.InStock}></input><br/><br/>
                <input type="Submit" value="Register"></input>

           </form>
        </>
    );
}

export default FormikDemoComponent;