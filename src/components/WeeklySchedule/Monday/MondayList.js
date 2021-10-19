import React, { useEffect, useState } from "react";
import { getAllMondayMedication, deleteMedicationFromMonday } from "../../../modules/MondayManager";
import { MondayMedicineCard } from "./MondayCard";
import { MondayForm } from "./MondayForm";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Monday.css"

export const MondayList = () => {
    const [mondays, setMondays] = useState([])

    const [modal, setModal] = useState(false);

     const getMondayMedication = () => {
        return getAllMondayMedication().then(response => {
            setMondays(response)
        })
    }

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getMondayMedication()
    }

    const handleDeleteMedication = (id) => {
        deleteMedicationFromMonday(id)
            .then(() => getAllMondayMedication().then(setMondays))
    }

    useEffect(() => {
        getMondayMedication()
    }, [])

    return (
        <>
            <section className="mondayMainCard">
                <div className="mondayCardTitle">
                    <h3 >Monday</h3>

                    <Button type="button"
                        className="mondayAdd"
                        variant="primary" size="sm"
                        onClick={toggle}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {mondays.map(monday => <MondayMedicineCard monday={monday} key={monday.id} handleDeleteMedication={handleDeleteMedication} reload={reload} />)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Monday</ModalHeader>
                <ModalBody>
                    <MondayForm toggler={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )

}