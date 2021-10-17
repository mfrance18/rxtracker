import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllSundayMedication, deleteMedicationFromSunday } from "../../../modules/SundayManager";
import { SundayMedicineCard } from "./SundayCard";
import { Button } from "reactstrap";
import "./Sunday.css"

export const SundayList = () => {
    const [sundays, setSundays] = useState([])

    const history = useHistory()

    const getSundayMedication = () => {
        return getAllSundayMedication().then(response => {
            setSundays(response)
        })
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
                        onClick={() => { history.push("/sunday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {sundays.map(sunday => <SundayMedicineCard sunday={sunday} key={sunday.id} handleDeleteMedication={handleDeleteMedication} />)}
                </div>
            </section>
        </>
    )

}