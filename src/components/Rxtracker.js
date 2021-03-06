import React, {useState} from "react";
import { ApplicationViews } from "../components/ApplicationViews/ApplicationViews";
import { NavBar } from "./nav/NavBar";
import 'animate.css';
import "./Rxtracker.css"




export const RxTracker = () => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("rxtracker_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("rxtracker_user", user.id)
        sessionStorage.setItem("rxtracker_image", user.image)
        sessionStorage.setItem("rxtracker_username", user.firstName)
        sessionStorage.setItem("rxtracker_fullname", user.firstName + " " + user.lastName)
        setIsAuthenticated(sessionStorage.getItem("rxtracker_user") !== null) 
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("rxtracker_user") !== null)
    }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} setAuthUser={setAuthUser}/>
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
        </>
    )
}