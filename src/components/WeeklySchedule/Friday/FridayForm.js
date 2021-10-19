import React, { useEffect, useState } from 'react';
import { addMedicationToFriday } from '../../../modules/FridayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Friday.css"

export const FridayForm = ({toggler, reload}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [friday, setFriday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const handleControlledInputChange = (event) => {
        const newFridayMedication = { ...friday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newFridayMedication[event.target.id] = parseInt(selectedVal)
        setFriday(newFridayMedication)
    }

    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveFridayMedication = (event) => {
        event.preventDefault()
        addMedicationToFriday(friday)
            .then(toggler)
            .then(reload)
    }

        return (
            <>
                <div>
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
                </div>
            </>
        )

}