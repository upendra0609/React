import React, { Component } from "react";
import { Link} from 'react-router-dom';

export default class NavBarComponent extends Component{
    render(){
        return(
                    <ul className="list-unstyled">
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
                        <li className="d-grid mt-3">
                            <Link to="/category" className="btn btn-primary">Category</Link>
                        </li>
                    </ul>
        )
    }
}