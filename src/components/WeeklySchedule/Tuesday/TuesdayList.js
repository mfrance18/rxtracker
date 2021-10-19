import React, { useEffect, useState } from "react";
import { getAllTuesdayMedication, deleteMedicationFromTuesday } from "../../../modules/TuesdayManager";
import { TuesdayMedicineCard } from "./TuesdayCard";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { TuesdayForm } from "./TuesdayForm";
import "./Tuesday.css"

export const TuesdayList = () => {
    const [tuesdays, setTuesdays] = useState([])

    const [modal, setModal] = useState(false);

    const getTuesdayMedication = () => {
        return getAllTuesdayMedication().then(response => {
            setTuesdays(response)
        })
    }

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getTuesdayMedication()
    }


    const handleDeleteMedication = (id) => {
        deleteMedicationFromTuesday(id)
            .then(() => getAllTuesdayMedication().then(setTuesdays))
    }

    useEffect(() => {
        getTuesdayMedication()
    }, [])

    return (
        <>
            <section className="tuesdayMainCard">
                <div className="tuesdayCardTitle">
                    <h3>Tuesday</h3>

                    <Button type="button"
                        className="tuesdayAdd"
                        variant="primary" size="sm"
                        onClick={toggle}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {tuesdays.map(tuesday => <TuesdayMedicineCard tuesday={tuesday} key={tuesday.id} handleDeleteMedication={handleDeleteMedication} reload={reload} />)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Tuesday</ModalHeader>
                <ModalBody>
                    <TuesdayForm toggler={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )

}