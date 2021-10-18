import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeMondayMedicine } from "../../../modules/MondayManager";
import "./Monday.css"

export const MondayMedicineCard = ({ monday, handleDeleteMedication, reload }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeMondayMedicine(monday).then(reload)
    }

    if (user === monday.userId) {

        return (
            <>
                <Card className="mondayCardContainer">
                    <div className="mondayCard">
                        <CardTitle className="mondayMedicineTitle">{monday.medication.name}</CardTitle>
                        <Button className="mondayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(monday.id)}>Delete</Button>
                        <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                    </div>
                    <div className="mondayInstructions">
                        <p>{monday.medication.instructions}</p>
                    </div>
                </Card>
            </>
        )
    } else {
        return null
    }
}