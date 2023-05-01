import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import { fetchDestinations, fetchSingleDestination } from './fetcher/fetcher.js'
import Destinations from './components/home/Destinations.jsx'
import SingleDestination from './components/home/SingleDestination.jsx'
import Login from './components/sign/Login.jsx'
import Register from './components/sign/Register.jsx'

const routes = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        children:[
          {
            path:'/',
            element:<Destinations></Destinations>,
            loader:fetchDestinations,
          },
          {
            path:'/destination/:id',
            element:<SingleDestination></SingleDestination>,
            loader:fetchSingleDestination
          }
        ]
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
