import React from "react";
import { useHistory } from "react-router";
import { Card, CardTitle, CardBody, ListGroup, Button, ListGroupItem } from "reactstrap";
import "./Medications.css"

export const MedicationCard = ({ medication, handleDeleteMedication }) => {
    const history = useHistory()

    return (
        <>
            <Card className="medCard">

                <CardBody className="cardTop">
                    <CardTitle>{medication.name}</CardTitle>
                
                <ListGroup>
                    <ListGroupItem>{medication.instructions}</ListGroupItem>
                    <ListGroupItem>Dosage: {medication.dosage}</ListGroupItem>
                    <ListGroupItem>Amount Per Day: {medication.amount}</ListGroupItem>
                </ListGroup>
                
                    <Button className="medDelete" type="button" onClick={() => handleDeleteMedication(medication.id)}>Delete</Button>
                    <Button className="medEdit" type="button" onClick={() => history.push(`/medications/${medication.id}/edit`)}>Edit</Button>
                </CardBody>
            </Card>
        </>
    )
}