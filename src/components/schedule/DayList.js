import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getAllDays } from "../../modules/DayManager";
import { DailyCard } from "./DailyCard";

export const DayList = () => {
    const [days, setDays] = useState([])


    const getDays = () => {
        return getAllDays().then(response => {
            setDays(response)
        })
    }

    useEffect(() => {
        getDays()
    }, [])

    return (
        <>
            <h1 style={{ textAlign: "center" }}> Weekly Medication Schedule</h1>
            <section className="dailyList">
                {days.map(day => <DailyCard day={day} key={day.id} />)}
            </section>
        </>
    )
}