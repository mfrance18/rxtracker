import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToSaturday } from '../../../modules/SaturdayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Saturday.css"

export const SaturdayForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [saturday, setSaturday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newSaturdayMedication = { ...saturday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newSaturdayMedication[event.target.id] = parseInt(selectedVal)
        setSaturday(newSaturdayMedication)
    }

    const handleCancelButton = () => {
        history.push("/")
    }

    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveSaturdayMedication = (event) => {
        event.preventDefault()
        addMedicationToSaturday(saturday)
            .then(() => history.push("/"))
    }

        return (
            <>
                <div>
                    <h2 htmlFor="medication">Add Medication To Saturday</h2>
                    
                    <select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
                        <option value="0" >Select</option>
                        {usermedications.map(u => (<option key={u.id} value={u.id}>
                            {u.name}
                        </option>))}
                    </select>
                </div>

                <div className="saturdayButtons">
                    <Button
                        className="saturdaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveSaturdayMedication}>
                        Save
                    </Button>
                    <Button className="saturdayCancel"
                        variant="primary" size="sm"
                        onClick={handleCancelButton}>
                        Cancel
                    </Button>
                </div>
            </>
        )
}