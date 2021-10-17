import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import "./NavBar.css"



export const NavBar = ({ clearUser, isAuthenticated }) => {

    const history = useHistory()
    let user = sessionStorage.getItem("rxtracker_username")

    const handleLogout = () => {
        history.push('/login');
        clearUser();
    }

    return (
        <>
            <section className="header">
                <section className="introTitle">
                    <div>
                        {isAuthenticated ? <h5 className="intro">Welcome, {user }!</h5> : null}
                    </div>
                    <div className="mainTitle">
                        {isAuthenticated ? <h1 >Rx Tracker</h1> : null}
                    </div>
                </section>
                {isAuthenticated ? <nav className="navbar">
                    <ul className="nav nav-pills nav-fill">
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
                                <Link className="nav-link" to="/messages">Public Forum</Link>
                            </li>
                            : null}
                        {isAuthenticated ?
                            <li className="nav-item" >
                                <Link className="nav-link" onClick={handleLogout} to="/login">Logout</Link>
                            </li>
                            : null}
                    </ul>
                </nav>
                    : null}
            </section>
        </>
    )
}