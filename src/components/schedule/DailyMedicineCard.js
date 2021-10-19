import React from "react"
import { Button, Card, CardTitle, Input } from "reactstrap";
import "./Days.css"


export const DailyMedicineCard = ({ medication, medicine, handleDeleteMedication }) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (user === medicine.userId) {
        return (
            <>
                <Card className="dayCardContainer">
                    <div className="dayCard">
                        <CardTitle className="dayMedicineTitle">{medication.name}</CardTitle>
                        <Button className="dayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(medicine.id)}>Delete</Button>
                        <Input type="checkbox" id="check"></Input>
                    </div>
                    <div className="dayInstructions">
                        <p>{medication.instructions}</p>
                    </div>
                </Card>
            </>
        )
    } else {
        return null
    }
}


