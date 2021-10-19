import React, { useEffect, useState } from 'react';
import { addMedicationToThursday } from '../../../modules/ThursdayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Thursday.css"

export const ThursdayForm = ({toggler, reload}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [thursday, setThursday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const handleControlledInputChange = (event) => {
        const newThursdayMedication = { ...thursday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newThursdayMedication[event.target.id] = parseInt(selectedVal)
        setThursday(newThursdayMedication)
    }


 
    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveThursdayMedication = (event) => {
        event.preventDefault()
        addMedicationToThursday(thursday)
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

                <div className="thursdayButtons">
                    <Button
                        className="thursdaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveThursdayMedication}>
                        Save
                    </Button>
                </div>
            </>
        )

}