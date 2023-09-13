import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarSupportedContent" >
                <a className="navbar-brand ms-3" href="/">{props.title}</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" active>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About</a>
                    </li>
                </ul>

            </div>
            <div className="form-check form-switch me-2 d-flex">
                <input className="form-check-input me-3" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckChecked" />
                <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"} `} for="flexSwitchCheckDefault">{props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}</label>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
}
Navbar.defaultProps = {
    title: "Set Title here"
}