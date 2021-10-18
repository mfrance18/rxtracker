import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeWednesdayMedicine } from "../../../modules/WednesdayManager";
import "./Wednesday.css"

export const WednesdayMedicineCard = ({ wednesday, reload, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeWednesdayMedicine(wednesday).then(reload)
    }

    if (user === wednesday.userId) {

        return (
            <>
                <Card className="wednesdayCard">
                    <CardTitle>{wednesday.medication.name}</CardTitle>
                    <Button className="wednesdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(wednesday.id)}>Delete</Button>
                    <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}