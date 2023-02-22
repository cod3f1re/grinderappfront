import { Outlet } from "react-router-dom";
import '../Menu/listen'
import {MenuApp} from "../Menu/Menu";

export default function Root() {
  return (
    <>
      <div id="sidebar">
          <MenuApp/>
      </div>

    <main className="main">
      <div id="detail">
        <Outlet />
      </div>
    </main>
    </>

  );
}