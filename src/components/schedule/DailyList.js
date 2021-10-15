import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { getMedicationByDay } from "../../modules/ScheduleManager";
import { DailyMedicine } from "./DailyCard";

export const DailyList = (dayId, weekList) => {
    const [dailyMedicines, setDailyMedicines] = useState([])

    const getDailyMedicine = (dayId) =>
        getMedicationByDay(dayId)
            .then(response => setDailyMedicines(response))

    useEffect(() => {
        getDailyMedicine(dayId)
    })

    return (
        <>
            <div>
                <h1>{weekList.name}</h1>
            </div>
            
            <div>
                {dailyMedicines.map(medicine => <DailyMedicine key={medicine.id} medicine={medicine.medication} />)}
            </div>
        </>
    )
}