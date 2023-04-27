import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { useState } from 'react'
import {BrowserRouter,RouterProvider, createBrowserRouter} from "react-router-dom"
import Nav from "./nav"
import MainContent from './main-content'
import Cart from './cart'

const router = createBrowserRouter(
[{
  path:"/main-content",
  element:<MainContent/>,
},


]
)
   
  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
