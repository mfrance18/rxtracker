import React, { useEffect, useState } from "react";
import { getAllMedications, deleteMedication } from "../../modules/MedicationManager";
import { MedicationCard } from "./MedicationCard";
import { MedicationForm } from "./MedicationForm";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

export const MedicationList = () => {


    const [medications, setMedications] = useState([])

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };


    const getMedications = () => {
        return getAllMedications().then(response => {
            setMedications(response)
        })
    }

    const render = () => {
        getMedications()
    }

    const handleDeleteMedication = (id) => {
        deleteMedication(id)
            .then(() => getAllMedications().then(setMedications))
    }

    useEffect(() => {
        getMedications()
    }, [])


    return (
        <>

            <div className="medications">
                <h1>Medications</h1>
                <div>
                    <Button type="button"
                        variant="secondary" size="sm"
                        className="medAdd"
                        onClick={toggle}>
                        Add New Medication
                    </Button>
                </div>
            </div>
            <section className="medList">

                {medications.map(medication => <MedicationCard render={render} medication={medication} key={medication.id} handleDeleteMedication={handleDeleteMedication} />)}

            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Medication</ModalHeader>
                <ModalBody>
                    <MedicationForm toggler={toggle} render={render} />
                </ModalBody>
            </Modal>
        </>
    )
}