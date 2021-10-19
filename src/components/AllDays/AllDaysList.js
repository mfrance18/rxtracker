import React from "react";
import { useHistory } from "react-router";
import { Button } from "reactstrap";
import { MondayList } from "../WeeklySchedule/Monday/MondayList";
import { TuesdayList } from "../WeeklySchedule/Tuesday/TuesdayList";
import { WednesdayList } from "../WeeklySchedule/Wednesday/WednesdayList";
import { ThursdayList } from "../WeeklySchedule/Thursday/ThursdayList";
import { FridayList } from "../WeeklySchedule/Friday/FridayList";
import { SaturdayList } from "../WeeklySchedule/Saturday/SaturdayList";
import { SundayList } from "../WeeklySchedule/Sunday/SundayList";



export const AllDaysList = () => {

    const history = useHistory()

    return (
        <>
            <div className="homeTop">
                <h1>Weekly Medication Schedule</h1>
                <Button className="weekAdd" variant="primary" size="sm" onClick={() => history.push("/allDays/create")}>
                    Add To All
                </Button>
            </div>

            <section className="listRows">
                <div className="row1">
                    <MondayList />
                    <TuesdayList />
                    <WednesdayList />
                </div>
                <div className="row2">
                    <ThursdayList />
                    <FridayList />
                </div>
                <div className="row3">
                    <SaturdayList />
                    <SundayList />
                </div>
            </section>
        </>
    )
}