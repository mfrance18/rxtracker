import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllTuesdayMedication } from "../../modules/TuesdayManager";
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

    useEffect(() => {
        getTuesdayMedication()
    }, [])

    return (
        <>
            <section className="mainCard">
                <div className="cardTitle">
                <h1>Tuesday</h1>
                
                    <Button type="button"
                        className="btn"
                        variant="primary" size="sm"
                        onClick={() => { history.push("/tuesday/create") }}>
                        Add Medication
                    </Button>
              </div>
                <div>
                    {tuesdays.map(tuesday => <TuesdayMedicineCard tuesday={tuesday} key={tuesday.id} />)}
                </div>
            </section>
        </>
    )

}