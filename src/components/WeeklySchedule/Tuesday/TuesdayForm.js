import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToTuesday } from '../../../modules/TuesdayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Tuesday.css"

export const TuesdayForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [tuesday, setTuesday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

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

    const handleCancelButton = () => {
        history.push("/")
    }

    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveTuesdayMedication = (event) => {
        event.preventDefault()
        addMedicationToTuesday(tuesday)
            .then(() => history.push("/"))
    }

        return (
            <>
                <div>
                    <h2 htmlFor="medication">Add Medication To Tuesday</h2>
                    
                    <select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
                        <option value="0" >Select</option>
                        {usermedications.map(u => (<option key={u.id} value={u.id}>
                            {u.name}
                        </option>))}
                    </select>
                </div>

                <div className="tuesdayButtons">
                    <Button
                        className="tuesdaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveTuesdayMedication}>
                        Save
                    </Button>
                    <Button className="tuesdayCancel"
                        variant="primary" size="sm"
                        onClick={handleCancelButton}>
                        Cancel
                    </Button>
                </div>
            </>
        )
}