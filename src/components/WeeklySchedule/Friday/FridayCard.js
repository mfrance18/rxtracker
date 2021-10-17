import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import "./Friday.css"

export const FridayMedicineCard = ({ friday, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (user === friday.userId) {

        return (
            <>
                <Card className="fridayCard">
                    <CardTitle>{friday.medication.name}</CardTitle>
                    <Button className="fridayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(friday.id)}>Delete</Button>
                    <Input type="checkbox"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}