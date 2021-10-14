import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"



export const NavBar = ({ clearUser, isAuthenticated }) => {

    const history = useHistory()

    const handleLogout = () => {
        history.push('/login');
        clearUser();
    }

    return (
        <>


            <nav className="navbar">
                <h1 className="beatles-nutshell-title">Rx Tracker</h1>
                <ul className="nav">
                    {isAuthenticated ?
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        : null}
                    {isAuthenticated ?
                        <li className="nav-item">
                            <Link className="nav-link" to="/medications">Medications</Link>
                        </li>
                        : null}
                    {isAuthenticated ?
                        <li className="nav-item">
                            <Link className="nav-link" to="/messages">Messages</Link>
                        </li>
                        : null}
                    {isAuthenticated ?
                        <li className="nav-item" >
                            <a className="nav-link" href="/login" onClick={handleLogout} >Logout</a>
                        </li>
                        : null}
                </ul>
            </nav>
        </>
    )
}