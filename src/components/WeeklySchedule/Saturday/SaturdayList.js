import React, { useEffect, useState } from "react";
import { getAllSaturdayMedication, deleteMedicationFromSaturday } from "../../../modules/SaturdayManager";
import { SaturdayMedicineCard } from "./SaturdayCard";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { SaturdayForm } from "./SaturdayForm";
import "./Saturday.css"

export const SaturdayList = () => {
    const [saturdays, setSaturdays] = useState([])

    const [modal, setModal] = useState(false);

    const getSaturdayMedication = () => {
        return getAllSaturdayMedication().then(response => {
            setSaturdays(response)
        })
    }

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getSaturdayMedication()
    }

    const handleDeleteMedication = (id) => {
        deleteMedicationFromSaturday(id)
        .then(() => getAllSaturdayMedication().then(setSaturdays))
    }

    useEffect(() => {
        getSaturdayMedication()
    }, [])

    return (
        <>
            <section className="saturdayMainCard">
            <div className="saturdayCardTitle">
                <h3 >Saturday</h3>
                    <Button type="button"
                        className="saturdayAdd"
                        variant="secondary" size="sm"
                        onClick={toggle}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {saturdays.map(saturday => <SaturdayMedicineCard saturday={saturday} key={saturday.id} handleDeleteMedication={handleDeleteMedication} reload={reload} />)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Saturday</ModalHeader>
                <ModalBody>
                    <SaturdayForm toggler={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )

}