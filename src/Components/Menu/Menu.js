import './Menu.scss';
import React from 'react';
import {createRoot} from "react-dom/client";
import {CSSTransition} from "react-transition-group";

class Submenu extends React.Component {
    render() {
        return (
            <ul className="nav__submenu">
                <li className="nav__submenu-item ">
                    <a>Our Company</a>
                </li>
                <li className="nav__submenu-item ">
                    <a>Our Team</a>
                </li>
                <li className="nav__submenu-item ">
                    <a>Our Portfolio</a>
                </li>
            </ul>
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

export default function MenuAppFunction() {
    return (
        <div id="menu-container">
            <MenuApp/>
        </div>
    );
}

