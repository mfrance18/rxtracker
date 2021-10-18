import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import { completeSundayMedicine } from "../../../modules/SundayManager";
import "./Sunday.css"

export const SundayMedicineCard = ({ sunday, reload, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeSundayMedicine(sunday).then(reload)
    }

    if (user === sunday.userId) {

        return (
            <>
                <Card className="sundayCard">
                    <CardTitle>{sunday.medication.name}</CardTitle>
                    <Button className="sundayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(sunday.id)}>Delete</Button>
                    <Input type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}