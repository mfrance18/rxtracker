import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToThursday } from '../../../modules/ThursdayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Thursday.css"

export const ThursdayForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [thursday, setThursday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newThursdayMedication = { ...thursday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newThursdayMedication[event.target.id] = parseInt(selectedVal)
        setThursday(newThursdayMedication)
    }

    const handleCancelButton = () => {
        history.push("/")
    }
 
    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveThursdayMedication = (event) => {
        event.preventDefault()
        addMedicationToThursday(thursday)
            .then(() => history.push("/"))
    }

        return (
            <>
                <div>
                    <h2 htmlFor="medication">Add Medication To Thursday</h2>
                    
                    <select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
                        <option value="0" >Select</option>
                        {usermedications.map(u => (<option key={u.id} value={u.id}>
                            {u.name}
                        </option>))}
                    </select>
                </div>

                <div className="thursdayButtons">
                    <Button
                        className="thursdaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveThursdayMedication}>
                        Save
                    </Button>
                    <Button className="thursdayCancel"
                        variant="primary" size="sm"
                        onClick={handleCancelButton}>
                        Cancel
                    </Button>
                </div>
            </>
        )

}