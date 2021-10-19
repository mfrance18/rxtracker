import React, { useEffect, useState } from "react";
import { getAllFridayMedication, deleteMedicationFromFriday } from "../../../modules/FridayManager";
import { FridayMedicineCard } from "./FridayCard";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { FridayForm } from "./FridayForm";
import "./Friday.css"

export const FridayList = () => {
    const [fridays, setFridays] = useState([])

    const [modal, setModal] = useState(false);

    const getFridayMedication = () => {
        return getAllFridayMedication().then(response => {
            setFridays(response)
        })
    }

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getFridayMedication()
    }

    const handleDeleteMedication = (id) => {
        deleteMedicationFromFriday(id)
        .then(() => getAllFridayMedication().then(setFridays))
    }

    useEffect(() => {
        getFridayMedication()
    }, [])

    return (
        <>
            <section className="fridayMainCard">
            <div className="fridayCardTitle">
                <h3 >Friday</h3>
                    <Button type="button"
                        className="fridayAdd"
                        variant="primary" size="sm"
                        onClick={toggle}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {fridays.map(friday => <FridayMedicineCard friday={friday} key={friday.id} handleDeleteMedication={handleDeleteMedication} reload={reload}/>)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add to Friday</ModalHeader>
                <ModalBody>
                    <FridayForm toggler={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )

}