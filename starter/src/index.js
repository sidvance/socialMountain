import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'
import {AuthContextProvider} from './store/authContext.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App/>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
