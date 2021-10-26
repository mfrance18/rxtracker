import React from "react"
import { DailyMedicineList } from "./DailyMedicationList"





export const DailyCard = ({ day }) => {

    
    return (
        <>
            <div className="dailyCard">
                <h3>{day.name}</h3>
                <DailyMedicineList dayId={day.id} day={day} />
            </div>
        </>
    )
}

