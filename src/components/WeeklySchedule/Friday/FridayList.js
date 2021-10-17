import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllFridayMedication, deleteMedicationFromFriday } from "../../../modules/FridayManager";
import { FridayMedicineCard } from "./FridayCard";
import { Button } from "reactstrap";
import "./Friday.css"

export const FridayList = () => {
    const [fridays, setFridays] = useState([])

    const history = useHistory()

    const getFridayMedication = () => {
        return getAllFridayMedication().then(response => {
            setFridays(response)
        })
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
                        onClick={() => { history.push("/friday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <hr></hr>
                <div className="cardList">
                    {fridays.map(friday => <FridayMedicineCard friday={friday} key={friday.id} handleDeleteMedication={handleDeleteMedication} />)}
                </div>
            </section>
        </>
    )

}