import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import AboutUs from './components/AboutUs.jsx'

const router = new createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
      path: '',
      element: '<Home/>'
    },
    {
      path: 'aboutUS',
      element: '<AboutUS/>',
    }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
