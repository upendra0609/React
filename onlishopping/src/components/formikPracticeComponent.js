import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';


const ValidationComponent = ()=>{
    return(
        <>
        <Formik
               initialValues={
                {
                    Name:'',
                    Salary:'',
                    Email:'',
                    City:''
                }
               }

               validationSchema={
                    yup.object({
                        Name:   yup.string("must be in string")
                                   .required("Name is required")
                                   .min(4,"minimum 4 characher")
                                   .max(10,"maximum 10 character"),
                        Salary: yup.number("must be in number")
                                   .required("Salary is required"),
                        Email:  yup.string("must be in string")
                                   .email("Invalid Email")
                                   .required("Email is required"),
                        City:   yup.string("must be in string")
                                   .required("City is required")
                    })
               }
               onSubmit={
                values=>{
                    alert(JSON.stringify(values));
                }
               }
        >
            {
                props=>(
                    <div>
                        <Form>
                            <dt>Name:</dt>
                            <dd><Field type="text" name="Name"></Field></dd>
                            <dd><ErrorMessage name="Name"></ErrorMessage></dd>
                            <dt>Salary:</dt>
                            <dd><Field type="text" name="Salary"></Field></dd>
                            <dd><ErrorMessage name="Salary"></ErrorMessage></dd>
                            <dt>Email:</dt>
                            <dd><Field type="text" name="Email"></Field></dd>
                            <dd><ErrorMessage name="Email"></ErrorMessage></dd>
                            <dt>Name:</dt>
                            <dd><Field as="select" name="City">
                                <option></option>
                                <option>Delhi</option>
                                <option>Hyd</option>
                                <option>Pune</option>
                                </Field></dd>
                            <dd><ErrorMessage name="City"></ErrorMessage></dd>
                            <button>Submit</button>
                        </Form>
                    </div>
                )
            }
        </Formik>
        </>
    )
}

export default ValidationComponent;