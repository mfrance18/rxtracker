import React, { useState } from "react";
import { Card, CardTitle, CardBody, ListGroup, Button, ListGroupItem, Modal, ModalHeader, ModalBody } from "reactstrap";
import { MedicationEditForm } from "./MedicationEditForm";
import "./Medications.css"
import 'animate.css';

export const MedicationCard = ({ medication, handleDeleteMedication, render }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [selectedMedication, setMedication] = useState({ medication: {} })

    const [editModal, setEditModal] = useState(false);
    const toggleEdit = () => setEditModal(!editModal);

    if (user === medication.userId) {
        return (
            <>
                <Card className="medCard">
                    <CardBody className="cardTop">
                        <CardTitle className="medicationCardTitle">{medication.name}</CardTitle>

                        <ListGroup>
                            <ListGroupItem>Amount: {medication.amount}</ListGroupItem>
                            <ListGroupItem>Dosage: {medication.dosage}</ListGroupItem>
                            <ListGroupItem>Instructions: {medication.instructions}</ListGroupItem>
                        </ListGroup>

                        <Button className="medDelete"
                            variant="secondary" size="sm" type="button"
                            onClick={() => handleDeleteMedication(medication.id)}>Delete</Button>
                        <Button className="medEdit" variant="secondary" size="sm" type="button"
                            onClick={() => { setMedication({ medication }); toggleEdit() }}>Edit</Button>
                    </CardBody>
                </Card>

                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>New Medication</ModalHeader>
                    <ModalBody>
                        <MedicationEditForm render={render} medication={medication} key={medication.id} toggleEdit={toggleEdit}  {...selectedMedication} />
                    </ModalBody>
                </Modal>
            </>
        )
    } else {
        return null
    }
}