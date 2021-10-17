import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllWednesdayMedication, deleteMedicationFromWednesday } from "../../../modules/WednesdayManager";
import { WednesdayMedicineCard } from "./WednesdayCard";
import { Button } from "reactstrap";
import "./Wednesday.css"

export const WednesdayList = () => {
    const [wednesdays, setWednesdays] = useState([])

    const history = useHistory()

    const getWednesdayMedication = () => {
        return getAllWednesdayMedication().then(response => {
            setWednesdays(response)
        })
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
                        onClick={() => { history.push("/wednesday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {wednesdays.map(wednesday => <WednesdayMedicineCard wednesday={wednesday} key={wednesday.id} handleDeleteMedication={handleDeleteMedication} />)}
                </div>
            </section>
        </>
    )

}