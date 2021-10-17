import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToSunday } from '../../../modules/SundayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Sunday.css"

export const SundayForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [sunday, setSunday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newSundayMedication = { ...sunday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newSundayMedication[event.target.id] = parseInt(selectedVal)
        setSunday(newSundayMedication)
    }

    const handleCancelButton = () => {
        history.push("/")
    }

    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveSundayMedication = (event) => {
        event.preventDefault()
        addMedicationToSunday(sunday)
            .then(() => history.push("/"))
    }

        return (
            <>
                <div>
                    <h2 htmlFor="medication">Add Medication To Sunday</h2>
                    
                    <select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
                        <option value="0" >Select</option>
                        {usermedications.map(u => (<option key={u.id} value={u.id}>
                            {u.name}
                        </option>))}
                    </select>
                </div>

                <div className="sundayButtons">
                    <Button
                        className="sundaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveSundayMedication}>
                        Save
                    </Button>
                    <Button className="sundayCancel"
                        variant="primary" size="sm"
                        onClick={handleCancelButton}>
                        Cancel
                    </Button>
                </div>
            </>
        )
}