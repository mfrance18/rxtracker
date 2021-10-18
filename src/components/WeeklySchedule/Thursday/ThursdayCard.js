import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeThursdayMedicine } from "../../../modules/ThursdayManager";
import "./Thursday.css"

export const ThursdayMedicineCard = ({ thursday, reload, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeThursdayMedicine(thursday).then(reload)
    }

    if (user === thursday.userId) {

        return (
            <>
                <Card className="thursdayCard">
                    <CardTitle>{thursday.medication.name}</CardTitle>
                    <Button className="thursdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(thursday.id)}>Delete</Button>
                    <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}