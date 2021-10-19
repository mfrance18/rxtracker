import React,{useState} from "react"
import { DailyMedicineList } from "./DailyMedicationList"
import { Button } from "reactstrap";





export const DailyCard = ({day}) => {
   
    return (
        <div className="dailyCard">
            <h5>{day.name}</h5>
            <DailyMedicineList dayId={day.id} day={day}/>
        </div>
        
    )
}

