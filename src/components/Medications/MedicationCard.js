import React from "react";
import { useHistory } from "react-router";
import { Card, CardText, CardTitle, CardBody, ListGroup, Button, ListGroupItem } from "reactstrap";
import "./Medications.css"

export const MedicationCard = ({ medication, handleDeleteMedication }) => {
    const history = useHistory()

    return (
        <>
            <Card className="medCard">

                <CardBody >
                    <CardTitle>{medication.name}</CardTitle>
                    <CardText>Instructions: {medication.instructions}</CardText>
                </CardBody>
                <ListGroup>
                    <ListGroupItem>Dosage: {medication.dosage}</ListGroupItem>
                    <ListGroupItem>Instructions: {medication.amount}</ListGroupItem>
                </ListGroup>
                <CardBody>
                    <Button className="medDelete" type="button" onClick={() => handleDeleteMedication(medication.id)}>Delete</Button>
                    <Button className="medEdit" type="button" onClick={() => history.push(`/medications/${medication.id}/edit`)}>Edit</Button>
                </CardBody>
            </Card>
        </>
    )
}