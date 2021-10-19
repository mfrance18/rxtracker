import React, { useEffect, useState } from "react";
import { getAllWednesdayMedication, deleteMedicationFromWednesday } from "../../../modules/WednesdayManager";
import { WednesdayMedicineCard } from "./WednesdayCard";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { WednesdayForm } from "./WednesdayForm";
import "./Wednesday.css"

export const WednesdayList = () => {
    const [wednesdays, setWednesdays] = useState([])

    const [modal, setModal] = useState(false);

    const getWednesdayMedication = () => {
        return getAllWednesdayMedication().then(response => {
            setWednesdays(response)
        })
    }

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getWednesdayMedication()
    }

    const handleDeleteMedication = (id) => {
        deleteMedicationFromWednesday(id)
            .then(() => getAllWednesdayMedication().then(setWednesdays))
    }

    useEffect(() => {
        getWednesdayMedication()
    }, [])

    return (
        <>
            <section className="wednesdayMainCard">
                <div className="wednesdayCardTitle">
                    <h3 >Wednesday</h3>
                    <Button type="button"
                        className="wednesdayAdd"
                        variant="secondary" size="sm"
                        onClick={toggle}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {wednesdays.map(wednesday => <WednesdayMedicineCard wednesday={wednesday} key={wednesday.id} handleDeleteMedication={handleDeleteMedication} reload={reload}/>)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Wednesday</ModalHeader>
                <ModalBody>
                    <WednesdayForm toggler={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )

}