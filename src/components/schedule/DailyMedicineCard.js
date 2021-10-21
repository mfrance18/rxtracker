import React from "react"
import { Button, Card, CardTitle, Input } from "reactstrap";
import { completeMedicine } from "../../modules/DayManager";
import "./Days.css"


export const DailyMedicineCard = ({ reload, medication, medicine, handleDeleteMedication }) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeMedicine(medicine).then(reload)
    }

    if (user === medicine.userId) {
        return (
            <>
                <Card className="dayCardContainer">
                    <div className="dayCard">
                        <CardTitle className="dayMedicineTitle">{medication.name}</CardTitle>
                        <Button className="dayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(medicine.id)}>Delete</Button>
                        <Input type="checkbox"  onChange={handleCheckboxChange} id="check"></Input>
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


