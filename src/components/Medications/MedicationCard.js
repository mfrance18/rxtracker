import React from "react";
import { useHistory } from "react-router";
import { Card, CardTitle, CardBody, ListGroup, Button, ListGroupItem } from "reactstrap";
import "./Medications.css"

export const MedicationCard = ({ medication, handleDeleteMedication }) => {
    const history = useHistory()
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))
    
    if(user === medication.userId) {
    return (
        <>
            <Card className="medCard">

                <CardBody className="cardTop">
                    <CardTitle className="medicationCardTitle">{medication.name}</CardTitle>
                
                <ListGroup>
                    <ListGroupItem>{medication.instructions}</ListGroupItem>
                    <ListGroupItem>Dosage: {medication.dosage}</ListGroupItem>
                    <ListGroupItem>Amount Per Day: {medication.amount}</ListGroupItem>
                </ListGroup>
                
                    <Button className="medDelete"  variant="secondary" size="sm" type="button" onClick={() => handleDeleteMedication(medication.id)}>Delete</Button>
                    <Button className="medEdit"  variant="secondary" size="sm" type="button" onClick={() => history.push(`/medications/${medication.id}/edit`)}>Edit</Button>
                </CardBody>
            </Card>
        </>
    )
    } else {
        return null
    }
}