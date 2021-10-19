import React from "react";
import { Route } from "react-router-dom"
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { MedicationList } from "../Medications/MedicationList";
import { Redirect } from "react-router";
import { DayList } from "../schedule/DayList";
import { AllDaysList } from "../AllDays/AllDaysList";




export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {


    return (

        <>

            <Route exact path="/">
               
              {isAuthenticated ? <AllDaysList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/medications">
                {isAuthenticated ? <MedicationList /> : <Redirect to="/login" />}
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