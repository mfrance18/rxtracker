import React from "react";
import "./Tuesday.css"
import { Card, Button, CardTitle, Input } from "reactstrap";

export const TuesdayMedicineCard = ({tuesday, handleDeleteMedication}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))
    
    if (user === tuesday.userId) {
    return (
        <>
        
            <Card className="tuesdayCard">
                <CardTitle>{tuesday.medication.name}</CardTitle>
                <Button className="tuesdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(tuesday.id)}>Delete</Button>
                <Input type="checkbox"></Input>
            </Card>
          
        </>
    )
    } else {
        return null
    }
}