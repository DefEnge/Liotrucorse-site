import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import {createHashRouter, RouterProvider} from "react-router-dom" ;

import { Page_Elettronica, Page_Meccanica, Page_Informatica, Page_Management } from './components';


import './index.css'

const router = createHashRouter([
  {
    path: "/*",
    element: <App/> ,
  },

  {
    path: "*/Divisione_Elettronica",
    element: <Page_Elettronica/>,
  },

  {
    path: "/*/Divisione_Meccanica",
    element: <Page_Meccanica/>,
  },

  {
    path: "/*/Divisione_Informatica",
    element: <Page_Informatica/>,
  },

  {
    path: "/*/Divisione_Management",
    element: <Page_Management/>,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider> 
  </React.StrictMode>
);
