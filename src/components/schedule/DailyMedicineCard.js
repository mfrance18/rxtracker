import React from "react"
import { Button, Card, CardTitle, Input, ListGroup, ListGroupItem } from "reactstrap";
import { completeMedicine } from "../../modules/DayManager";
import "./Days.css"


export const DailyMedicineCard = ({ reload, medication, medicine, handleDeleteMedication }) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const handleCheckboxChange = (event) => {
        completeMedicine(medicine).then(reload)
    }

    if (user === medicine.userId) {
        return (
            <>
                <section className="dayCardContainer">
                    <div className="dayCard">
                        <div className="dayMedicineTitle">
                            {medication.name}
                        </div>

                        <div className="dayCardButtons">
                            <Button className="dayDelete" variant="secondary" size="sm" onClick={() => handleDeleteMedication(medicine.id)}>Delete</Button>
                            <Input className="dayCheck" type="checkbox" onChange={handleCheckboxChange} id="check"></Input>
                        </div>
                    </div>
                </section>
                <hr></hr>
            </>
        )
    } else {
        return null
    }
}


