import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'

import Navigation from './components/Navigation'
import Carta from './pages/Carta'
import Historia from './pages/Historia'
import Localizacao from './pages/Localizacao'
import VinhoPage from './pages/VinhoPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation/>,
    children: [
      {
        path: '/',
        element: <Carta/>,
      },
      {
        path: '/nossahistoria',
        element: <Historia/>,
      },
      {
        path: '/localizacao',
        element: <Localizacao/>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
