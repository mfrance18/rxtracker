import React from "react";
import "./Tuesday.css"
import { Card, Button, CardTitle, Input } from "reactstrap";

export const TuesdayMedicineCard = ({tuesday}) => {
    return (
        <>
        
            <Card className="tuesdayCard">
                <CardTitle>{tuesday.medication.name}</CardTitle>
                <Button variant="secondary" size="sm">Delete</Button>
                <Input type="checkbox"></Input>
            </Card>
          
        </>
    )
}