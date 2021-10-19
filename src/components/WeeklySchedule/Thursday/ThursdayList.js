import React, { useEffect, useState } from "react";
import { getAllThursdayMedication, deleteMedicationFromThursday } from "../../../modules/ThursdayManager";
import { ThursdayMedicineCard } from "./ThursdayCard";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { ThursdayForm } from "./ThursdayForm";
import "./Thursday.css"

export const ThursdayList = () => {
    const [thursdays, setThursdays] = useState([])

    const [modal, setModal] = useState(false);

    const getThursdayMedication = () => {
        return getAllThursdayMedication().then(response => {
            setThursdays(response)
        })
    }

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getThursdayMedication()
    }

    const handleDeleteMedication = (id) => {
        deleteMedicationFromThursday(id)
        .then(() => getAllThursdayMedication().then(setThursdays))
    }

    useEffect(() => {
        getThursdayMedication()
    }, [])

    return (
        <>
            <section className="thursdayMainCard">
            <div className="thursdayCardTitle">
                <h3 >Thursday</h3>
                    <Button type="button"
                        className="thursdayAdd"
                        variant="secondary" size="sm"
                        onClick={toggle}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {thursdays.map(thursday => <ThursdayMedicineCard thursday={thursday} key={thursday.id} handleDeleteMedication={handleDeleteMedication} reload={reload}/>)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Thursday</ModalHeader>
                <ModalBody>
                    <ThursdayForm toggler={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )

}