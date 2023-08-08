import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HeaderComponent from "./headerComponent";
import ProductComponent from "./productComponent";
import FooterComponent from "./footerComponent";
import NavBarComponent from "./navBar";
import HomeComponent from "./homeComponent";
import DetailComponent from "./detailComponent";

const IndexComponent = ()=>{
    return(
        <>
        <div align="center">
            <HeaderComponent/>
        </div>
        <div className="row" style={{height:'400px'}}>
            <BrowserRouter>
            
                <div className="col-3">
                <NavBarComponent/>    
                </div>

                <div className="col-9">
                    <Routes>
                        <Route path="products" element={<ProductComponent/>}></Route>
                    </Routes>
                    <Routes>
                        <Route path="detail/:id/:title/:price/:description/:category/:rate/:count" element={<DetailComponent/>}></Route>
                       
                    </Routes>
                    <Routes>
                        <Route path="home" element={<HomeComponent/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>

        <div align="center">
            <FooterComponent/>
        </div>
        
        </>
    )
}

export default IndexComponent;