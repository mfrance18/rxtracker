import React from "react";
import "./Tuesday.css"
import { completeTuesdayMedicine } from "../../../modules/TuesdayManager";
import { Card, Button, CardTitle, Input } from "reactstrap";

export const TuesdayMedicineCard = ({tuesday, reload, handleDeleteMedication}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeTuesdayMedicine(tuesday).then(reload)
    }
    
    if (user === tuesday.userId) {
    return (
        <>
        
            <Card className="tuesdayCard">
                <CardTitle>{tuesday.medication.name}</CardTitle>
                <Button className="tuesdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(tuesday.id)}>Delete</Button>
                <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
            </Card>
          
        </>
    )
    } else {
        return null
    }
}