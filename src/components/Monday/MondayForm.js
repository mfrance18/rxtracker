import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToMonday } from '../../modules/MondayManager';
import { getAllMedications } from '../../modules/MedicationManager';

export const MondayForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [monday, setMonday] = useState({
        userId: user,
        status: false
    })

    const [medication, setMedication] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMondayMedication = { ...monday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMondayMedication[event.target.id] = selectedVal
        setMonday(newMondayMedication)
    }

    useEffect(() => {
        getAllMedications().then(response => {
            setMedication(response)
        })
    }, [])

    const handleClickSaveMondayMedication = (event) => {
        event.preventDefault()
        addMedicationToMonday(monday)
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

            <button className
                onClick={handleClickSaveMondayMedication}>
                Save Employee
            </button>
        </>

    )
}