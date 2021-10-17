import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import "./Monday.css"

export const MondayMedicineCard = ({ monday, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (user === monday.userId) {

        return (
            <>
                <Card className="mondayCard">
                    <CardTitle>{monday.medication.name}</CardTitle>
                    <Button className="mondayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(monday.id)}>Delete</Button>
                    <Input type="checkbox"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}