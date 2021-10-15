import React from "react";
import { Route } from "react-router-dom"
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { MedicationList } from "./Medications/MedicationList";
import { Redirect } from "react-router";
import { MedicationForm } from "./Medications/MedicationForm";
import { MedicationEditForm } from "./Medications/MedicationEditForm";
import { MondayList } from "./Monday/MondayList";
import { TuesdayForm } from "./Tuesday/TuesdayForm";
import { TuesdayList } from "./Tuesday/TuesdayList";
import { MondayForm } from "./Monday/MondayForm";


export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
    return (
        <>

            <Route exact path="/">
            {isAuthenticated ? <MondayList /> : <Redirect to="/login" />}
            {isAuthenticated ? <TuesdayList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/monday/create">
                <MondayForm/>
            </Route>

            <Route exact path="/tuesday/create">
                <TuesdayForm/>
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