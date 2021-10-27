import React, { useState, useEffect } from "react";
import { getMedicationByDay, deleteMedicationFromDay } from "../../modules/DayManager";
import { DailyMedicineCard } from "./DailyMedicineCard";
import { DailyMedicationForm } from "./DailyMedicationForm";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import "./Days.css"
import 'animate.css';

export const DailyMedicineList = ({ dayId, day }) => {
    const [dailyMedicines, setDailyMedicines] = useState([])
    const [state, setState] = useState({})


    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    const getDailyMedicine = (dayId) => {
        getMedicationByDay(dayId)
            .then(response => setDailyMedicines(response))
    }

    const reload = () => {
        getDailyMedicine(dayId)
    }

    const handleDeleteMedication = (id) => {
        deleteMedicationFromDay(id)
            .then(() => getDailyMedicine(dayId))
    }

    useEffect(() => {
        getDailyMedicine(dayId);
        return () => {
            setState({})
        }
    }, [])

    return (
        <>

            <div>
                <Button className="addButton" onClick={toggle}>Add Medication</Button>
            </div>
            <section className="dailyMedicineCardList">
                {dailyMedicines.map(medicine => <DailyMedicineCard handleDeleteMedication={handleDeleteMedication} key={medicine.id} medicine={medicine} medication={medicine.medication} reload={reload} />)}
            </section>

            <Modal isOpen={modal} toggle={toggle} className="dailyModal">
                <ModalHeader toggle={toggle}>Add Medication to {day.name}</ModalHeader>
                <ModalBody>
                    <DailyMedicationForm day={dayId} toggle={toggle} reload={reload}/>
                </ModalBody>
            </Modal>
        </>
    )
}