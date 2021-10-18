import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeThursdayMedicine } from "../../../modules/ThursdayManager";
import "./Thursday.css"

export const ThursdayMedicineCard = ({ thursday, handleDeleteMedication, reload }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeThursdayMedicine(thursday).then(reload)
    }

    if (user === thursday.userId) {

        return (
            <>
                <Card className="thursdayCardContainer">
                    <div className="thursdayCard">
                        <CardTitle className="thursdayMedicineTitle">{thursday.medication.name}</CardTitle>
                        <Button className="thursdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(thursday.id)}>Delete</Button>
                        <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                    </div>
                    <div className="thursdayInstructions">
                        <p>{thursday.medication.instructions}</p>
                    </div>
                </Card>
            </>
        )
    } else {
        return null
    }
}