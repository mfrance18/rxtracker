import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllSaturdayMedication, deleteMedicationFromSaturday } from "../../../modules/SaturdayManager";
import { SaturdayMedicineCard } from "./SaturdayCard";
import { Button } from "reactstrap";
import "./Saturday.css"

export const SaturdayList = () => {
    const [saturdays, setSaturdays] = useState([])

    const history = useHistory()

    const getSaturdayMedication = () => {
        return getAllSaturdayMedication().then(response => {
            setSaturdays(response)
        })
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
                        onClick={() => { history.push("/saturday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {saturdays.map(saturday => <SaturdayMedicineCard saturday={saturday} key={saturday.id} handleDeleteMedication={handleDeleteMedication} />)}
                </div>
            </section>
        </>
    )

}