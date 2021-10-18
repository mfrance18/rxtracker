import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeSundayMedicine } from "../../../modules/SundayManager";
import "./Sunday.css"

export const SundayMedicineCard = ({ sunday, handleDeleteMedication, reload }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeSundayMedicine(sunday).then(reload)
    }

    if (user === sunday.userId) {

        return (
            <>
                <Card className="sundayCardContainer">
                    <div className="sundayCard">
                        <CardTitle className="sundayMedicineTitle">{sunday.medication.name}</CardTitle>
                        <Button className="sundayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(sunday.id)}>Delete</Button>
                        <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                    </div>
                    <div className="sundayInstructions">
                        <p>{sunday.medication.instructions}</p>
                    </div>
                </Card>
            </>
        )
    } else {
        return null
    }
}