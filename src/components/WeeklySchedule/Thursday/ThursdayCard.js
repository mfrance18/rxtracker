import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import "./Thursday.css"

export const ThursdayMedicineCard = ({ thursday, handleDeleteMedication }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (user === thursday.userId) {

        return (
            <>
                <Card className="thursdayCard">
                    <CardTitle>{thursday.medication.name}</CardTitle>
                    <Button className="thursdayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(thursday.id)}>Delete</Button>
                    <Input type="checkbox"></Input>
                </Card>
            </>
        )
    } else {
        return null
    }
}