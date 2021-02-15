import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = (props) => {
  const url = window.location.pathname;
  const isLoged = () => {
    window.location.href = "/";
  };
  return (
    <nav className="navbar-expand-lg navbar navbar-dark bg-dark ">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          {url === "/home" ? (
            <></>
          ) : (
            <li className="nav-item active ml-5 ">
              <Link to="/" className="text-white">
                Home<span className="sr-only">(current)</span>
              </Link>
            </li>
          )}
          {
            url === "/" ? (<></>) : (
              <li className="nav-item ml-5 ">
                <Link to="/about" className="text-white">
                  About<span className="sr-only">(current)</span>
                </Link>
              </li>
            )
          }
          <li className="nav-item ml-5 ">
            {url === "/" || url === "/about" ? (
              <></>
            ) : (
              <Link to="###" className="text-white">
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={isLoged}
                >
                  {props.logout}
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
