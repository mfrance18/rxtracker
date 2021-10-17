import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import "./Wednesday.css"

export const WednesdayMedicineCard = ({ wednesday, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (user === wednesday.userId) {

        return (
            <>
                <Card className="wednesdayCard">
                    <CardTitle>{wednesday.medication.name}</CardTitle>
                    <Button className="wednesdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(wednesday.id)}>Delete</Button>
                    <Input type="checkbox"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}