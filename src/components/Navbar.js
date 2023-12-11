//wtite rfc for react function base syntax
// write impt for importing proptypes and note keep p as small case in proptypes

import React from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link " to="/textform" id="navbarDropdown" role="button" aria-expanded="false">
                  TextForm
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link " to="/about" id="navbarDropdown" role="button" aria-expanded="false">
                  {props.about}
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch to {props.mode === 'light' ? 'dark' : 'light'}</label>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}
Navbar.defaultProps = {
  title: "TextUtils", about: "About"
}

//write pts in objets to set proptype to string
Navbar.prototypes = { title: PropTypes.string.isRequired, about: PropTypes.string.isRequired }