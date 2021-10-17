import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllThursdayMedication, deleteMedicationFromThursday } from "../../../modules/ThursdayManager";
import { ThursdayMedicineCard } from "./ThursdayCard";
import { Button } from "reactstrap";
import "./Thursday.css"

export const ThursdayList = () => {
    const [thursdays, setThursdays] = useState([])

    const history = useHistory()

    const getThursdayMedication = () => {
        return getAllThursdayMedication().then(response => {
            setThursdays(response)
        })
    }

    const handleDeleteMedication = (id) => {
        deleteMedicationFromThursday(id)
        .then(() => getAllThursdayMedication().then(setThursdays))
    }

    useEffect(() => {
        getThursdayMedication()
    }, [])

    return (
        <>
            <section className="thursdayMainCard">
            <div className="thursdayCardTitle">
                <h3 >Thursday</h3>
                    <Button type="button"
                        className="thursdayAdd"
                        variant="secondary" size="sm"
                        onClick={() => { history.push("/thursday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {thursdays.map(thursday => <ThursdayMedicineCard thursday={thursday} key={thursday.id} handleDeleteMedication={handleDeleteMedication} />)}
                </div>
            </section>
        </>
    )

}