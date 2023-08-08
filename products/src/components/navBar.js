import React from "react";
import { Link} from 'react-router-dom';

 const NavBarComponent = ()=>{
    return(
        <>
        <ul className="list-unstyled">
                <li className="d-grid mt-3">
                    <Link to="/home" className="btn btn-primary">Home</Link>
                    </li>
                    <li className="d-grid mt-3">
                    <Link to="/products" className="btn btn-primary">Products</Link>
                </li>
        </ul>
        </>
    )
}

export default NavBarComponent;
