import React from "react";
import { Route } from "react-router-dom"
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { MedicationList } from "../Medications/MedicationList";
import { Redirect, useHistory } from "react-router";
import { MedicationForm } from "../Medications/MedicationForm";
import { MedicationEditForm } from "../Medications/MedicationEditForm";
import { MondayList } from "../WeeklySchedule/Monday/MondayList";
import { TuesdayForm } from "../WeeklySchedule/Tuesday/TuesdayForm";
import { TuesdayList } from "../WeeklySchedule/Tuesday/TuesdayList";
import { MondayForm } from "../WeeklySchedule/Monday/MondayForm";
import { WednesdayList } from "../WeeklySchedule/Wednesday/WednesdayList";
import { WednesdayForm } from "../WeeklySchedule/Wednesday/WednesdayForm";
import { ThursdayList } from "../WeeklySchedule/Thursday/ThursdayList";
import { ThursdayForm } from "../WeeklySchedule/Thursday/ThursdayForm";
import { FridayList } from "../WeeklySchedule/Friday/FridayList";
import { FridayForm } from "../WeeklySchedule/Friday/FridayForm";
import { SaturdayForm } from "../WeeklySchedule/Saturday/SaturdayForm";
import { SaturdayList } from "../WeeklySchedule/Saturday/SaturdayList";
import { SundayForm } from "../WeeklySchedule/Sunday/SundayForm";
import { SundayList } from "../WeeklySchedule/Sunday/SundayList";
import { AllDaysForm } from "../AllDays/AllDaysForm";
import { Button } from "reactstrap";
import "./ApplicationViews.css"


export const ApplicationViews = ({ isAuthenticated, setAuthUser }) => {
    const history = useHistory()


    return (

        <>
    {isAuthenticated? 
            <div className="dashboard">
                <Route exact path="/">
                    <div className="homeTop">
                        <h1>Weekly Medication Schedule</h1>
                        <Button className="weekAdd" variant="primary" size="sm" onClick={() => { history.push("/allDays/create") }}>
                            Add To All
                        </Button>
                    </div>
                    <section className="listRows">
                        <div className="row1">
                            {isAuthenticated ? <MondayList /> : <Redirect to="/login" />}
                            {isAuthenticated ? <TuesdayList /> : <Redirect to="/login" />}
                            {isAuthenticated ? <WednesdayList /> : <Redirect to="/login" />}
                        </div>
                        <div className="row2">
                            {isAuthenticated ? <ThursdayList /> : <Redirect to="/login" />}
                            {isAuthenticated ? <FridayList /> : <Redirect to="/login" />}
                        </div>
                        <div className="row3">
                            {isAuthenticated ? <SaturdayList /> : <Redirect to="/login" />}
                            {isAuthenticated ? <SundayList /> : <Redirect to="/login" />}
                        </div>
                    </section>
                </Route>
            </div>
            : null}
            <Route exact path="/allDays/create">
                <AllDaysForm />
            </Route>

            <Route exact path="/monday/create">
                <MondayForm />
            </Route>

            <Route exact path="/tuesday/create">
                <TuesdayForm />
            </Route>

            <Route exact path="/wednesday/create">
                <WednesdayForm />
            </Route>

            <Route exact path="/thursday/create">
                <ThursdayForm />
            </Route>

            <Route exact path="/friday/create">
                <FridayForm />
            </Route>

            <Route exact path="/saturday/create">
                <SaturdayForm />
            </Route>

            <Route exact path="/sunday/create">
                <SundayForm />
            </Route>

            <Route exact path="/medications">
                {isAuthenticated ? <MedicationList /> : <Redirect to="/login" />}
            </Route>

            <Route exact path="/medications/create">
                <MedicationForm />
            </Route>

            <Route exact path="/medications/:medicationId(\d+)/edit">
                <MedicationEditForm />
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