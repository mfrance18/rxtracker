import React, { useEffect, useState } from "react";
import { getAllSundayMedication, deleteMedicationFromSunday } from "../../../modules/SundayManager";
import { SundayMedicineCard } from "./SundayCard";
import { Button, Modal, ModalHeader, ModalBody  } from "reactstrap";
import { SundayForm } from "./SundayForm";
import "./Sunday.css"

export const SundayList = () => {
    const [sundays, setSundays] = useState([])

    const [modal, setModal] = useState(false);

    const getSundayMedication = () => {
        return getAllSundayMedication().then(response => {
            setSundays(response)
        })
    }

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getSundayMedication()
    }


    const handleDeleteMedication = (id) => {
        deleteMedicationFromSunday(id)
        .then(() => getAllSundayMedication().then(setSundays))
    }

    useEffect(() => {
        getSundayMedication()
    }, [])

    return (
        <>
            <section className="sundayMainCard">
            <div className="sundayCardTitle">
                <h3 >Sunday</h3>
                    <Button type="button"
                        className="sundayAdd"
                        variant="primary" size="sm"
                        onClick={toggle}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {sundays.map(sunday => <SundayMedicineCard sunday={sunday} key={sunday.id} handleDeleteMedication={handleDeleteMedication} reload={reload} />)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Monday</ModalHeader>
                <ModalBody>
                    <SundayForm toggler={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )

}