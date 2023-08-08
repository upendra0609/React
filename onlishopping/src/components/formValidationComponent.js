import React from "react";
import { useFormik } from "formik";

const ValidateFormData = (props)=>{
    const errors = {
        Name:'',
        Price:'',
        Code:''
    }
    if(!props.Name){
        errors.Name = "Product is Required";
    }else if(props.Name.length<4){
        errors.Name = "name is too short";
    }
    if(!props.Price){
        errors.Price = "Price Required";
    }
    if(!props.Code){
        errors.Code="Code Required"
    }else if(!/[A-Z{3}[0-9]{2}/.test(props.Code)){
        errors.Code = "invalid code";
    }

    return errors;
}

const FormValidationComponent = ()=>{
    const formik = useFormik({
        initialValues:{
            Name:'',
            Price:'',
            Code:''
        },
        validate : ValidateFormData,
        onSubmit: values=>{
            alert(JSON.stringify(values));
        }
    });

    return(
        <>
          <div className="container">
            <h2>Register Product</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    </dd>
                    <dd>
                    {(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}
                    </dd>
                    <dt>Price</dt>
                    <dd>
                        <input type="text" name="Price" value={formik.values.Price} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    </dd>
                    <dd>
                        {(formik.touched.Price && formik.errors.Price)?formik.errors.Price:null}
                    </dd>
                    <dt>Code</dt>
                    <dd>
                        <input type="text" name="Code" value={formik.values.Code} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
                    </dd>
                    <dd>
                    {(formik.touched.Code && formik.errors.Code)?formik.errors.Code:null}
                    </dd>
                </dl>
                <input type="submit" value="Submit"></input>
            </form>
          </div>
        </>
    )
}

export default FormValidationComponent;