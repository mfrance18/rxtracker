import React from "react";
import { Card, Button, CardTitle, Input } from "reactstrap";
import "./Monday.css"

export const MondayMedicineCard = ({monday}) => {

    
    return (
        <>
            <Card className="mondayCard">
                <CardTitle>{monday.medication.name}</CardTitle>
                <Button variant="secondary" size="sm">Delete</Button>
                <Input type="checkbox"></Input>
            </Card>
        </>
    )
}