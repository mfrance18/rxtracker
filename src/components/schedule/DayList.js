import React, { useEffect, useState } from "react";
import { getAllDays } from "../../modules/DayManager";
import { Button } from "reactstrap";
import { DailyCard } from "./DailyCard";
import { useHistory } from "react-router";



export const DayList = () => {
    const [days, setDays] = useState([])

    const history = useHistory()

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
            <div className="addAllContainer">
                <h1 className="listTitles"> Weekly Medication Schedule</h1>
                <Button type="button"
                    className="addAllButton"
                    variant="secondary" size="sm"
                    onClick={() => history.push("/create")}>
                    Add Medication to Everyday
                </Button>
            </div>
            <hr></hr>
            <section className="dailyList">
                {days.map(day => <DailyCard day={day} key={day.id} />)}
            </section>
        </>
    )
}