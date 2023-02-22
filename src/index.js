import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './resources/reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./main/Routes/root";
import ErrorPage from "./modules/Error/NotFound/ErrorPage";
import Home from "./modules/Home/Home";
import Contact from "./modules/Contact/Contact";
import Products from "./modules/Products/Products";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products/>,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ]
  },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
