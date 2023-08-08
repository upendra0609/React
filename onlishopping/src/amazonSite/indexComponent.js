import React, { Component } from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HeaderComponent from './headerComponent';
import FooterComponent from "./footerComponent";
import HomeComponent from "./homeComponent";
import ElectronicsComponent from "./electronicsComponent";
import FootwearComponent from "./footwareComponent";
import FashionComponent from "./fashionComponent";
import NavBarComponent from "./navBarComponent";
import DetailComponent from "./detailComponent"
import CategoryComponent from "./categoryComponent";
import ProductComponent from "./productComponent";


export default class IndexComponent extends Component{
    render(){
        return(
            <>
                <HeaderComponent/>
                 <div className="row" style={{height:'400px'}}>
                <BrowserRouter>
                    <div className="col-3">
                        <NavBarComponent/>
                    {/* <ul className="list-unstyled">
                        <li className="d-grid mt-3">
                            <Link to="/home" className="btn btn-primary">Home</Link>
                        </li>
                        <li className="d-grid mt-3">
                            <Link to="/electronics" className="btn btn-primary">Electronics</Link>
                        </li>
                        <li className="d-grid mt-3">
                            <Link to="/footwear" className="btn btn-primary">Footwear</Link>
                        </li>
                        <li className="d-grid mt-3">
                            <Link to="/fashion" className="btn btn-primary">Fashion</Link>
                        </li>
                    </ul> */}
                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route path="/" element={<HomeComponent/>}></Route>
                            <Route path="/home" element={<HomeComponent/>}></Route>
                            <Route path="/electronics" element={<ElectronicsComponent/>}></Route>
                            <Route path="/footwear" element={<FootwearComponent/>}></Route>
                            <Route path="/fashion" element={<FashionComponent/>}></Route>
                            <Route path="/details/:id/:name/:price" element={<DetailComponent/>}></Route>
                            <Route path="/category" element={<CategoryComponent/>}></Route>
                            <Route path="/products/:id/:name" element={<ProductComponent/>}></Route>
                        </Routes>
                    </div>
                </BrowserRouter>
                 </div>
                <FooterComponent/>
            </>
        )
    }
}