import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllTuesdayMedication, deleteMedicationFromTuesday } from "../../../modules/TuesdayManager";
import { TuesdayMedicineCard } from "./TuesdayCard";
import { Button } from "reactstrap";
import "./Tuesday.css"

export const TuesdayList = () => {
    const [tuesdays, setTuesdays] = useState([])

    const history = useHistory()

    const getTuesdayMedication = () => {
        return getAllTuesdayMedication().then(response => {
            setTuesdays(response)
        })
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
                        onClick={() => { history.push("/tuesday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {tuesdays.map(tuesday => <TuesdayMedicineCard tuesday={tuesday} key={tuesday.id} handleDeleteMedication={handleDeleteMedication} />)}
                </div>
            </section>
        </>
    )

}