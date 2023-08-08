import React from "react";
import {useFormik} from "formik";
import * as yup from 'yup';

const YupValidationComponent = ()=>{
    const formik = useFormik({
        initialValues:{
            Name:'',
            Salary:'',
            Email:''
        },
        validationSchema :yup.object({
            Name : yup.string()
                       .required("User Name required")
                       .min(4,"Name is too short")
                       .max(12,"Name is too long"),

            Salary : yup.number()
                        .required("Salary is required"),
            Email  : yup.string()
                        .email("Invalid Email")
                        .required("Email is required")
        }),
        onSubmit:values=>{
            alert(JSON.stringify(values));
        }
    })

    return(
        <>
           <div>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name:</dt>
                    <dd><input type="text" name="Name" {...formik.getFieldProps("Name")}></input></dd>
                    <dd>{(formik.touched.Name && formik.errors.Name)?formik.errors.Name:null}</dd>
                    <dt>Salary:</dt>
                    <dd><input type="text" {...formik.getFieldProps("Salary")}></input></dd>
                    <dd>{(formik.touched.Salary && formik.errors.Salary)?formik.errors.Salary:null}</dd>
                    <dt>Email:</dt>
                    <dd><input type="text" {...formik.getFieldProps("Email")}></input></dd>
                    <dd>{(formik.touched.Email && formik.errors.Email)?formik.errors.Email:null}</dd>
                </dl>
                <input type="submit"></input>
            </form>
           </div>
        </>
    )
}

export default YupValidationComponent;