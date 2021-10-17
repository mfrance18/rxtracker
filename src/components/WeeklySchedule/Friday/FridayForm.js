import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { addMedicationToFriday } from '../../../modules/FridayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Friday.css"

export const FridayForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [friday, setFriday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newFridayMedication = { ...friday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newFridayMedication[event.target.id] = parseInt(selectedVal)
        setFriday(newFridayMedication)
    }

    const handleCancelButton = () => {
        history.push("/")
    }

    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveFridayMedication = (event) => {
        event.preventDefault()
        addMedicationToFriday(friday)
            .then(() => history.push("/"))
    }

        return (
            <>
                <div>
                    <h2 htmlFor="medication">Add Medication To Friday</h2>
                    
                    <select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
                        <option value="0" >Select</option>
                        {usermedications.map(u => (<option key={u.id} value={u.id}>
                            {u.name}
                        </option>))}
                    </select>
                </div>

                <div className="fridayButtons">
                    <Button
                        className="fridaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveFridayMedication}>
                        Save
                    </Button>
                    <Button className="fridayCancel"
                        variant="primary" size="sm"
                        onClick={handleCancelButton}>
                        Cancel
                    </Button>
                </div>
            </>
        )

}