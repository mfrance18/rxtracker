import React, { useEffect, useState } from 'react';
import { addMedicationToMonday } from '../../../modules/MondayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Monday.css"

export const MondayForm = ({toggler, reload}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [monday, setMonday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])


    const handleControlledInputChange = (event) => {
        const newMondayMedication = { ...monday }
        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMondayMedication[event.target.id] = parseInt(selectedVal)
        setMonday(newMondayMedication)
    }


    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveMondayMedication = (event) => {
        event.preventDefault()
        addMedicationToMonday(monday)
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

                <div className="mondayButtons">
                    <Button
                        className="mondaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveMondayMedication}>
                        Save
                    </Button>
                </div>
            </>
        )
}