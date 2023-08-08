import React, { Component } from "react";
import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import ValidationComponent from "./validationFormikComponents";

const HomeComponent=()=>(
    <>
      <h2>Amazon Home</h2>
      <p>Online Shopping</p>
    </>
)

const ContactComponent=()=>(
    <>
      <h2>Contact Us</h2>
      <p>help@amazon.in</p>
    </>
)
const NotFoundComponent=()=>(
    <>
      <h2>Not Found <code>{window.location.href}</code></h2>
    </>
)

export default class AppHomeComponent extends Component{
    render(){
        return(
        <BrowserRouter>
                <header><Link to="/login">Login</Link></header>
                <span> | </span>
                <header><Link to="/home">Home</Link></header>
                <span> | </span>
                <header><Link to="/contact">Contact us</Link></header>
                <b><hr></hr></b>
            <Routes>
               <Route path="/contact" element={ <ContactComponent/>} >
                </Route>
                <Route path="/login" element={<ValidationComponent/>}>                   
                </Route>
                <Route path="/" element={<HomeComponent/>}>
                </Route>
                <Route path="/home" element={<HomeComponent/>}>
                </Route>
                <Route path="*" element={<NotFoundComponent/>}>
                </Route>
            </Routes>
        </BrowserRouter>
        );
    }
}