import React, { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import MainLogo from "../../images/HomeLogo.png"
import { UserCard } from "../UserProfile.js/UserCard"
import HeaderLogo from "../../images/HeaderLogo.png"
import "./NavBar.css"



export const NavBar = ({ clearUser, isAuthenticated, setAuthUser}) => {

    const [userInfo, setUserInfo] = useState({
        userId: sessionStorage.getItem("rxtracker_user"),
        userName: sessionStorage.getItem("rxtracker_username"),
        userImage: sessionStorage.getItem("rxtracker_image")
    })

    const handleUpdateUserInfo = () => {
        setUserInfo({
            userId: sessionStorage.getItem("rxtracker_user"),
            userName: sessionStorage.getItem("rxtracker_username"),
            userImage: sessionStorage.getItem("rxtracker_image")
        })
    }
    

    const history = useHistory()

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
                        <img className="mainTitle" src={HeaderLogo} alt="Rx Tracker Logo" />
                    </section>

                    <section className="navContainer">
                        <div>
                            <UserCard userInfo={userInfo}  setAuthUser={setAuthUser} handleUpdateUserInfo={handleUpdateUserInfo}/>
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