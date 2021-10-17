import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import "./Saturday.css"

export const SaturdayMedicineCard = ({ saturday, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (user === saturday.userId) {

        return (
            <>
                <Card className="saturdayCard">
                    <CardTitle>{saturday.medication.name}</CardTitle>
                    <Button className="saturdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(saturday.id)}>Delete</Button>
                    <Input type="checkbox"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}