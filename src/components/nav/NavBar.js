import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import MainLogo from "../../images/HomeLogo.png"
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
            {isAuthenticated ?
                <header className="headerContainer">
                    <section className="imageContainer">
                        <div className="navImage">
                            <img className="navLogo" src={MainLogo} alt="Rx Tracker Logo" />
                        </div>
                    </section>

                    <section>
                        <h1 className="mainTitle">Welcome to Rx Tracker</h1>
                    </section>

                    <section className="navContainer">
                        <div>
                            <h2 className="intro">Welcome, {user}!</h2> :
                        </div>
                        <div>
                            <nav className="navbar">

                                <ul className="nav nav-pills nav-fill">

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Weekly Schedule</Link>
                                    </li>


                                    <li className="nav-item">
                                        <Link className="nav-link" to="/medications">Medications</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/publicforum">Public Forum</Link>
                                    </li>

                                    <li className="nav-item" >
                                        <Link className="nav-link" onClick={handleLogout} to="/login">Logout</Link>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </section>
                </header>
                : null}
        </>

    )
}