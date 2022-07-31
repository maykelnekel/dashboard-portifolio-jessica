import { Link, Outlet } from "react-router-dom"

export const NavBar = ():JSX.Element => {
    return(
        <aside>
            <nav>
                <ul>
                    <li>
                        <Link to="/perfil">perfil</Link>
                    </li>
                    <li>Fotos
                        <ul>
                            <li>
                                <Link to="/fotos">tipo1</Link>
                            </li>
                            <li>
                                <Link to="/fotos">tipo2</Link>
                            </li>
                            <li>
                                <Link to="/fotos">tipo3</Link>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </aside>
    )
}