import React from "react";
import { Route } from "react-router-dom"
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { MedicationList } from "../Medications/MedicationList";
import { Redirect } from "react-router";
import { DayList } from "../schedule/DayList";
import { MessageList } from "../messages/MessageList";







export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {


    return (
        <>

            <Route exact path="/">
                {isAuthenticated ? <DayList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/medications">
                {isAuthenticated ? <MedicationList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/publicforum">
                {isAuthenticated ? <MessageList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>
        </>
    )
}