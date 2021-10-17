import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToTuesday } from '../../modules/TuesdayManager';
import { getAllMedications } from '../../modules/MedicationManager';
import "./Tuesday.css"

export const TuesdayForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [tuesday, setTuesday] = useState({
        userId: user,
        status: false
    })

    const [medication, setMedication] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newTuesdayMedication = { ...tuesday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newTuesdayMedication[event.target.id] = parseInt(selectedVal)
        setTuesday(newTuesdayMedication)
    }

    useEffect(() => {
        getAllMedications().then(response => {
            setMedication(response)
        })
    }, [])

    const handleClickSaveTuesdayMedication = (event) => {
        event.preventDefault()
        addMedicationToTuesday(tuesday)
            .then(() => history.push("/"))
    }

    return (
        <>
            <div>
                <label htmlFor="medication">Choose Medication</label>
                <select value={medication.id} name="medicationId" id="medicationId" onChange={handleControlledInputChange}>
                    <option value="0">Select</option>
                    {medication.map(m => (<option key={m.id} value={m.id}>
                        {m.name}
                    </option>))}
                </select>
            </div>

            <button 
            
                onClick={handleClickSaveTuesdayMedication}>
                Save 
            </button>
        </>

    )
}