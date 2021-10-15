import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllMondayMedication } from "../../modules/MondayManager";
import { MondayMedicineCard } from "./MondayCard";
import { Button } from "reactstrap";

export const MondayList = () => {
    const [mondays, setMondays] = useState([])

    const history = useHistory()

    const getMondayMedication = () => {
        return getAllMondayMedication().then(response => {
            setMondays(response)
        })
    }

    useEffect(() => {
        getMondayMedication()
    }, [])

    return (
        <>
            <section>
            <h1>Monday</h1>
            <section className="section-content">
                <Button type="button"
                    className="btn"
                    onClick={() => { history.push("/monday/create") }}>
                    Add Medication
                </Button>
            </section>
            <div>
                {mondays.map(monday => <MondayMedicineCard monday={monday} key={monday.id} />)}
            </div>
        </section>
        </>
    )

}