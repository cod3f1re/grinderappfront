import {Outlet} from "react-router-dom";
import {MenuApp} from "../../modules/Menu/Menu";
import './root.scss'

export default function Root() {
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