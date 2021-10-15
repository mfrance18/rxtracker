import React from "react"
import { useEffect, useState } from "react/cjs/react.development"
import { getAllDailyMedications } from "../../modules/ScheduleManager"
import { DailyList } from "./DailyList"


export const WeeklyList = () => {
    const [weekLists, setWeekLists] = useState([])

    const getWeeklyList = () => {
        return getAllDailyMedications()
        .then(response => setWeekLists(response))
    }

    useEffect(() => {
        getWeeklyList()
    }, [])
    

    return (
        <div>
            {weekLists.map(weekList => <DailyList key={weekList.id} weekList={weekList.day}/>)}
        </div>
    )
}