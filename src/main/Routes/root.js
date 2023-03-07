import {Outlet} from "react-router-dom";
import {MenuApp} from "../../modules/Menu/Menu";
import './root.scss';
import React from 'react';
import Login from '../../modules/Login/Login';
import useToken from './useToken';


export default function Root() {
    const {token, setToken} = useToken();

    if (!token) {
        return <Login setToken={setToken}/>
    }

    return (
        <>
            <div id="menu">
                <MenuApp/>
            </div>

            <main className="main">
                <Outlet/>
            </main>
        </>

    );
}