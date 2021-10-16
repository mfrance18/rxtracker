import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllMondayMedication } from "../../modules/MondayManager";
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

    useEffect(() => {
        getMondayMedication()
    }, [])

    return (
        <>
            <section className="mainCard">
            <div className="cardTitle">
                <h1 >Monday</h1>
                    <Button type="button"
                        className="btn"
                        variant="primary" size="sm"
                        onClick={() => { history.push("/monday/create") }}>
                        Add Medication
                    </Button>
                </div>
                <div>
                    {mondays.map(monday => <MondayMedicineCard monday={monday} key={monday.id} />)}
                </div>
            </section>
        </>
    )

}