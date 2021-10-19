import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToMonday, getAllMondayMedication } from "../../modules/MondayManager"
import { addMedicationToTuesday } from "../../modules/TuesdayManager"
import { getMedicationByUserId } from '../../modules/MedicationManager';
import { Button, Modal, } from "reactstrap";
import "./AllDays.css"
import { addMedicationToWednesday } from '../../modules/WednesdayManager';
import { addMedicationToThursday } from '../../modules/ThursdayManager';
import { addMedicationToFriday } from '../../modules/FridayManager';
import { addMedicationToSaturday } from '../../modules/SaturdayManager';
import { addMedicationToSunday } from '../../modules/SundayManager';



export const AllDaysForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const history = useHistory()

    const [modal, setModal] = useState(false);

 
    const [allDays, setAllDays] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const handleControlledInputChange = (event) => {
        const newMedication = { ...allDays }
        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMedication[event.target.id] = parseInt(selectedVal)
        setAllDays(newMedication)

    }

    const handleCancelButton = () => {
        history.push("/")
    }

    useEffect(() => {
        getMedicationByUserId(user).then(response => {
            setUsermedications(response)
        })
    }, [])

    const handleClickSaveMedication = (event) => {
        event.preventDefault()
        addMedicationToMonday(allDays)
            .then(() => addMedicationToTuesday(allDays))
            .then(() => addMedicationToWednesday(allDays))
            .then(() => addMedicationToThursday(allDays))
            .then(() => addMedicationToFriday(allDays))
            .then(() => addMedicationToSaturday(allDays))
            .then(() => addMedicationToSunday(allDays))
            .then(() => getAllMondayMedication())      
            .then(() => history.push("/")) 
    }

    return (
        <>
            <div>
                <h2>Add Medication to Each Day</h2>
                <select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
                    <option value="0">Select</option>
                    {usermedications.map(u => (<option key={u.id} value={u.id}>
                        {u.name}
                    </option>))}
                </select>
            </div>
            <div className="allDaysButtons">
                <Button
                    className="allDaysSave"
                    variant="primary" size="sm"
                    onClick={handleClickSaveMedication}>
                    Save
                </Button>
                <Button
                    className="allDaysCancel"
                    variant="primary" size="sm"
                    onClick={handleCancelButton}>
                    Cancel
                </Button>
            </div>
        </>

    )
}