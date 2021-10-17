import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import "./Sunday.css"

export const SundayMedicineCard = ({ sunday, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (user === sunday.userId) {

        return (
            <>
                <Card className="sundayCard">
                    <CardTitle>{sunday.medication.name}</CardTitle>
                    <Button className="sundayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(sunday.id)}>Delete</Button>
                    <Input type="checkbox"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}