import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllMedications, deleteMedication } from "../../modules/MedicationManager";
import { MedicationCard } from "./MedicationCard";

export const MedicationList = () => {
    const [medications, setMedications] = useState([])

    const history = useHistory()

    const getMedications = () => {
        return getAllMedications().then(response => {
            setMedications(response)
        })
    }

    const handleDeleteMedication = (id) => {
        deleteMedication(id)
        .then(() => getAllMedications().then(setMedications))
    }

    useEffect(() => {
        getMedications()
    }, [])

    return (
        <>

            <div >
                <h1>Medications</h1>
                <div>
                    <button type="button"
                        onClick={() => { history.push("/medications/create") }}>
                        Add New Medication
                    </button>
                </div>
            </div>
            <section>
                <div>
                    {medications.map(medication => <MedicationCard medication={medication} key={medication.id} handleDeleteMedication={handleDeleteMedication}/>)}
                </div>
            </section>
        </>
    )
}