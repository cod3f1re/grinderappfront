
import React from 'react';
import {Link} from "react-router-dom";
import './Menu.scss';

function holds(){
    console.log("click");
}

export class MenuApp extends React.Component {
    render() {
        return (
            <nav className="navbar container">
                 <Link className="brand" to={`home`}>Nike</Link>
                <div className="burger" id="burger" onClick={holds}>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </div>
                <div className="menu" id="menu">
                    <ul className="menu-inner">
                        <li className="menu-item">
                            <Link className="menu-link" to={`home`}>Inicio</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to={`products`}>Productos</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to={`contact`}>Contacto</Link>
                        </li>
                        <li className="menu-item">
                            <a href="#" className="menu-link">Support</a>
                        </li>
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

