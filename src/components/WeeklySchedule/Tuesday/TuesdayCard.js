import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeTuesdayMedicine } from "../../../modules/TuesdayManager";
import "./Tuesday.css"

export const TuesdayMedicineCard = ({ tuesday, handleDeleteMedication, reload }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeTuesdayMedicine(tuesday).then(reload)
    }

    if (user === tuesday.userId) {

        return (
            <>
                <Card className="tuesdayCardContainer">
                    <div className="tuesdayCard">
                        <CardTitle className="tuesdayMedicineTitle">{tuesday.medication.name}</CardTitle>
                        <Button className="tuesdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(tuesday.id)}>Delete</Button>
                        <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                    </div>
                    <div className="tuesdayInstructions">
                        <p>{tuesday.medication.instructions}</p>
                    </div>
                </Card>
            </>
        )
    } else {
        return null
    }
}