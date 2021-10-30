
import React from "react";
import { Route } from "react-router-dom"
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { MedicationList } from "../Medications/MedicationList";
import { Redirect, useLocation } from "react-router"
import { MessageList } from "../messages/MessageList";
import { AllDaysForm } from "../AllDays/AllDaysForm";
import { AllDaysList } from "../AllDays/AllDaysList";
import SlideRoutes from 'react-slide-routes';











export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
    const location = useLocation()


    return (
        <>
            <Route exact path="/login">
                <Login setAuthUser={setAuthUser} />
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser} />
            </Route>

            {isAuthenticated ?
                <SlideRoutes location={location} duration={500} pathList={["/", "/medications", "/publicforum",]}>
                    <Route exact path="/" component={AllDaysList} ></Route>
                    <Route exact path="/medications" component={MedicationList} ></Route>
                    <Route exact path="/publicforum" component={MessageList}></Route>
                    <Route exact path="/create" component={AllDaysForm}></Route>
                </SlideRoutes>

                : <Redirect to="/login" /> }
        </>
    )
}