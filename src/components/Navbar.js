import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import './Navbar.css'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"s
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-2">
                            <a className="nav-Link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link className="nav-Link" to="/about">About</Link> */}
                        </li>
                    </ul>

                    {/* Color Palette */}
                    <div className="d-flex">
                        {props.colors.map((color, index) => (
                            <div
                                key={index}
                                onClick={() => props.changeColor(color)}
                                style={{
                                    backgroundColor: color,
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    margin: '0 5px',
                                    cursor: 'pointer'
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Dark Mode Switch */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-3`}>
                        <input
                            className="form-check-input"
                            onClick={props.toggleMode}
                            type="checkbox"
                            id="flexSwitchCheckDefault"
                        />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
    colors: PropTypes.array.isRequired,
    changeColor: PropTypes.func.isRequired
};

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About',
    colors: ['#ff0000', '#00ff00', '#0000ff']
};
