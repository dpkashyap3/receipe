import React from 'react'
import logo from "../images/logo.png"
import {Link} from "react-router-dom"


function Nav() {


    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
      <span className="navbar-brand ml-5" href="#">
      <img style={{"borderRadius":"50%"}} src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
      <span className="ml-2">Health & Food</span>
       </span>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav align-center ml-auto">
        <Link to="/" className="nav-item nav-link mr-3">Home</Link>
        <Link className="nav-item nav-link mr-3" to="/About">About Us</Link>
        <Link className="nav-item nav-link mr-3" to="/Contact">Contact Us</Link>
        </ul>
        </div>
      </div>
      </nav> 
    )
}

export default Nav
