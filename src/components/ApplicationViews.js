import React from "react";
import { Route } from "react-router-dom"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { MedicationList } from "./Medications/MedicationList";
import { Redirect } from "react-router";
import { MedicationForm } from "./Medications/MedicationForm";
import { MedicationEditForm } from "./Medications/MedicationEditForm";

export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
    return (
        <>

            <Route exact path="/">
            {isAuthenticated ? <MedicationList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/medications">
            {isAuthenticated ? <MedicationList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/medications/create">
                <MedicationForm/>
            </Route>

            <Route  exact path= "/medications/:medicationId(\d+)/edit">
                <MedicationEditForm/>
            </Route>

            <Route path="/messages">
                {/* Render the component for the messages */}
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