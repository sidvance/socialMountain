import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import {useContext} from 'react'


import Header from './components/Header.js'
import Home from './components/Home.js'
import Auth from './components/Auth.js'
import Form from './components/Form.js'
import Profile from './components/Profile.js'
import AuthContext from './store/authContext.js'

const App = () => {

  const authCtx = useContext(AuthContext)

  return (
    <div className='app'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={authCtx.token ? <Navigate to='/'/> : <Auth/> }/>
        <Route path='/form' element={authCtx.token ? <Form/> : <Navigate to='/auth'/> }/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>
  )
}

export default App
