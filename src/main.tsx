import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { Pictures } from './Pages/Pictures'
import { Profile } from './Pages/Profile'
import { GlobalStyle } from './Styles/globalStyle'
import { ResetCSS } from './Styles/resetCSS'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ResetCSS/>
    <GlobalStyle/>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/perfil' element={<Profile/>}/>
        <Route path='/fotos' element={<Pictures/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
