import React from "react";
import { useHistory } from "react-router";

export const MedicationCard = ({ medication, handleDeleteMedication }) => {
    const history = useHistory()

    return (
        <>
            <div>
                <section className="medication-card">
                    <div className="medTitle">
                    <h5>{medication.name}</h5>
                    </div>
                    <div className="medInfo">
                    <p>Amount per Day: {medication.amount}</p>
                    <p>Dosage: {medication.dosage}</p>
                    <p>Instructions: {medication.instructions}</p>
                    <button type="button" onClick={() => handleDeleteMedication(medication.id)}>Delete</button>
                    <button type="button" onClick={() => history.push(`/medications/${medication.id}/edit`)}>Edit</button>
                    </div>
                    
                </section>
            </div>
        </>
    )
}