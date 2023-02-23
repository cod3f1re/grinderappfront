import './Menu.scss';
import React from 'react';
import {Outlet, Link} from "react-router-dom";

export class MenuApp extends React.Component {
    render() {
        return (

            <nav className="navbar container">
                <a href="#" className="brand">Brand</a>
                <div className="burger" id="burger">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className="menu" id="menu">
                    <ul className="menu-inner">
                        <li className="menu-item">
                            <Link className="menu-link" to={`/`}>Home</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to={`contact`}>Your Name</Link>
                        </li>
                        <li className="menu-item"><a href="#" className="menu-link">Pricing</a></li>
                        <li className="menu-item"><a href="#" className="menu-link">Support</a></li>
                    </ul>
                </div>
                <button className="switch" id="switch">
                    <i className="switch-light bx bx-sun"></i>
                    <i className="switch-dark bx bx-moon"></i>
                </button>
            </nav>

        )
    }
}

//Siempre que se vaya a usar el componente, se debe de exportar, ya sea por medio de un componente en particular o estableciendole uno por default
//Para que siempre encuentre un componente explicitamente
export default MenuApp

