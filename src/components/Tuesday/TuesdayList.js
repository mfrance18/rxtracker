import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllTuesdayMedication } from "../../modules/TuesdayManager";
import { TuesdayMedicineCard } from "./TuesdayCard";
import { Button } from "reactstrap";

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
            <section>
                <h1>Tuesday</h1>
                <section className="section-content">
                    <Button type="button"
                        className="btn"
                        onClick={() => { history.push("/tuesday/create") }}>
                        Add Medication
                    </Button>
                </section>
                <div>
                    {tuesdays.map(tuesday => <TuesdayMedicineCard tuesday={tuesday} key={tuesday.id} />)}
                </div>
            </section>
        </>
    )

}