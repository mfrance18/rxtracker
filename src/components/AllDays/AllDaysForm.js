import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import {addMedicationToMonday} from "../../modules/MondayManager"
import {addMedicationToTuesday} from "../../modules/TuesdayManager"
import { getAllMedications } from '../../modules/MedicationManager';
import { Button, Label } from "reactstrap";


export const AllDaysForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [allDays, setAllDays] = useState({
        userId: user,
        status: false
    })


    const [medication, setMedication] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMedication = { ...allDays }
        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMedication[event.target.id] = selectedVal
        setAllDays(newMedication)
    
    }

    useEffect(() => {
        getAllMedications().then(response => {
            setMedication(response)
        })
    }, [])

    

    const handleClickSaveMedication = (event) => {
        event.preventDefault()
        addMedicationToMonday(allDays)
            .then(data => addMedicationToTuesday(allDays))
            .then(() => history.push("/"))
    }

    return (
        <>
            <div>
                <h2 htmlFor="medication">Add Medication To Everyday</h2>
                <select value={medication.id} name="medicationId" id="medicationId" onChange={handleControlledInputChange}>
                    <option value="0">Select</option>
                    {medication.map(m => (<option key={m.id} value={m.id}>
                        {m.name}
                    </option>))}
                </select>
            </div>

            <Button 
                onClick={handleClickSaveMedication}>
                Save 
            </Button>
        </>

    )
}