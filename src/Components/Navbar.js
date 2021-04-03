import React from 'react';
import '../stylesheets/common/custom.scss';
import '../stylesheets/common/navbar.scss';

import logo from '../images/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
            <img src={logo} alt="logo"/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-link active" href="/">Home<span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="/">Contact</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar;