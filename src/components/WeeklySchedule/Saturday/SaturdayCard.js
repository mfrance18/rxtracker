import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeSaturdayMedicine } from "../../../modules/SaturdayManager";
import "./Saturday.css"

export const SaturdayMedicineCard = ({ saturday, reload, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeSaturdayMedicine(saturday).then(reload)
    }

    if (user === saturday.userId) {

        return (
            <>
                <Card className="saturdayCard">
                    <CardTitle>{saturday.medication.name}</CardTitle>
                    <Button className="saturdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(saturday.id)}>Delete</Button>
                    <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}