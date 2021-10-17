import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllMondayMedication, deleteMedicationFromMonday } from "../../../modules/MondayManager";
import { MondayMedicineCard } from "./MondayCard";
import { Button } from "reactstrap";
import "./Monday.css"

export const MondayList = () => {
    const [mondays, setMondays] = useState([])

    const history = useHistory()

    const getMondayMedication = () => {
        return getAllMondayMedication().then(response => {
            setMondays(response)
        })
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
                        onClick={() => { history.push("/monday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {mondays.map(monday => <MondayMedicineCard monday={monday} key={monday.id} handleDeleteMedication={handleDeleteMedication} />)}
                </div>
            </section>
        </>
    )

}