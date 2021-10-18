import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeFridayMedicine } from "../../../modules/FridayManager";
import "./Friday.css"

export const FridayMedicineCard = ({ friday, handleDeleteMedication, reload }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeFridayMedicine(friday).then(reload)
    }

    if (user === friday.userId) {

        return (
            <>
                <Card className="fridayCardContainer">
                    <div className="fridayCard">
                        <CardTitle className="fridayMedicineTitle">{friday.medication.name}</CardTitle>
                        <Button className="fridayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(friday.id)}>Delete</Button>
                        <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                    </div>
                    <div className="fridayInstructions">
                        <p>{friday.medication.instructions}</p>
                    </div>
                </Card>
            </>
        )
    } else {
        return null
    }
}