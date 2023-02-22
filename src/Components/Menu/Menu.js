import './Menu.scss';
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter,
    Link
} from "react-router-dom";


import Home from '../Home/Home'

class Submenu extends React.Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </BrowserRouter>

                    <ul className="nav__submenu">
                        <li className="nav__submenu-item ">
                            <a href="home">Our Team</a>
                        </li>
                        <li className="nav__submenu-item ">
                            <a>Our Team</a>
                        </li>
                        <li className="nav__submenu-item ">
                            <a>Our Portfolio</a>
                        </li>
                    </ul>
            </div>
        )
    }
}

class MenuApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showAboutMenu: false
        };
    }

    handleHover = (event) => {
        this.setState({showAboutMenu: true});
    };

    handleLeave = (event) => {
        this.setState({showAboutMenu: false});
    };

    render() {
        return (
            <nav className="nav">
                <ul className="nav__menu">
                    <li className="nav__menu-item">
                        <a>Home</a>
                    </li>
                    <li className="nav__menu-item" onMouseLeave={this.handleLeave}>
                        <a onMouseEnter={this.handleHover}>
                            About
                        </a>
                        <div className="submenu-container">
                            {this.state.showAboutMenu && <Submenu/>}
                        </div>
                    </li>

                    <li className="nav__menu-item">
                        <a>Contact</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

//Siempre que se vaya a usar el componente, se debe de exportar, ya sea por medio de un componente en particular o estableciendole uno por default
//Para que siempre encuentre un componente explicitamente
export default MenuApp

