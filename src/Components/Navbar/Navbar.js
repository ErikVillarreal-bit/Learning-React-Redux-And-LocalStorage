import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = (props)=> {
    return(
        <nav className="navbar-expand-lg navbar navbar-dark bg-dark ">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active ml-5 ">
                        <Link to="/" className="text-white">Home<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item ml-5 ">
                        <Link to="/about" className="text-white">About<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item ml-5 ">
                        <Link to="/" className="text-white">{props.logout}<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;