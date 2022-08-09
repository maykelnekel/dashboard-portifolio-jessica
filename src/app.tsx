import { Route, Routes } from "react-router-dom"
import { NavBar } from "./Components/NavBar"
import { Home } from "./Pages/Home"
import { Login } from "./Pages/Login"
import { Pictures } from "./Pages/Pictures"
import { Profile } from "./Pages/Profile"

export const App = (): JSX.Element =>{
    return(
       <main>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/perfil' element={<Profile/>}/>
                <Route path='/fotos' element={<Pictures/>}/>
            </Routes>
       </main>
    )
}