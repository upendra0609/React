import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';


const ValidationComponent= ()=>{
    return(
        <>
          <Formik 
            initialValues = {
                {
                    Name:'',
                    Salary:'',
                    Email:'',
                    City:''
                }
            }

            validationSchema ={
                yup.object({
                    Name: yup.string()
                              .required("Name is required")
                              .min(4,"Name is too short")
                              .max(10, "Name is too long"),
                    Salary: yup.number()
                              .required("Salary is required"),
                    Email: yup.string()
                              .required("Email is required")
                              .email("invalid Email"),
                    City: yup.string()
                              .required("City required")
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
                    <div className="container" align="center">
                        <h2>Register User</h2>
                        <Form>
                            <dt>Name</dt>
                            <dd>
                                <Field type="text" name="Name"></Field>                            
                            </dd>
                            <dd>
                                <ErrorMessage name="Name"></ErrorMessage>
                            </dd>
                            <dt>Salary</dt>
                            <dd>
                                <Field type="text" name="Salary"></Field>                            
                            </dd>
                            <dd>
                                <ErrorMessage name="Salary"></ErrorMessage>
                            </dd>
                            <dt>Email</dt>
                            <dd>
                                <Field type="text" name="Email"></Field>                            
                            </dd>
                            <dd>
                                <ErrorMessage name="Email"></ErrorMessage>
                            </dd>
                            <dt>City</dt>
                            <dd>
                                <Field as="select" name="City">
                                    <option></option>
                                   <option>Delhi</option>
                                   <option>Hyd</option>
                                   <option>Pune</option>
                                </Field>                 
                            </dd>
                            <dd>
                                <ErrorMessage name="City"></ErrorMessage>
                            </dd>
                            <button className="btn btn-primary" disabled={props.isValid===false}>Register</button>&ensp;
                            <button className="btn btn-primary" disabled={props.dirty===false}>Save</button>
                        </Form>
                    </div>
                )
            } 
          </Formik>
        </>
    )
}

export default ValidationComponent;