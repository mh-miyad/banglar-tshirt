import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Erorr from './Pages/Erorr'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import OrderSummery from './Pages/OrderSummery'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/>,
      },
      {
        path: "/Product",
        element: <Product/>,
      },
      {
        path: "/orderSummry",
        element: <OrderSummery/>,
      },
      {
        path: "*",
        element: <Erorr/>,
      },
    ],
  },
]);





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
