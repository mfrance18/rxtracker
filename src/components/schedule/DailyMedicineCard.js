import React from "react"
import { Button,  Input,  } from "reactstrap";
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
                           <div style={{fontSize: 15, fontWeight: 20}}>{medication.instructions}</div>
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


