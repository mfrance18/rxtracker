import React, {useState} from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";


export const RxTracker = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("rxtracker_user") !== null)

    const setAuthUser = (user) => {
        sessionStorage.setItem("rxtracker_user", user.id)
        sessionStorage.setItem("rxtracker_username", user.name)
        setIsAuthenticated(sessionStorage.getItem("rxtracker_user") !== null)
        
    }

    const clearUser = () => {
        sessionStorage.clear();
        setIsAuthenticated(sessionStorage.getItem("rxtracker_user") !== null)
    }

    return (
        <>
            <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
            <ApplicationViews setAuthUser={setAuthUser} isAuthenticated={isAuthenticated} />
        </>
    )
}