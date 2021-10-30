import React from "react";
import { Route } from "react-router-dom"
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { MedicationList } from "../Medications/MedicationList";
import { Redirect } from "react-router";
import { MessageList } from "../messages/MessageList";
import { AllDaysList } from "../AllDays/AllDaysList";
import {AllDaysForm } from "../AllDays/AllDaysForm"






export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {


    return (
        <>

            <Route exact path="/">
                {isAuthenticated ? <AllDaysList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/medications">
                {isAuthenticated ? <MedicationList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/publicforum">
                {isAuthenticated ? <MessageList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/create">
                {isAuthenticated ? < AllDaysForm/> : <Redirect to="/login" />}
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