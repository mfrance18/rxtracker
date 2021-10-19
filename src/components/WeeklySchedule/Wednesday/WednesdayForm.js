import React, { useEffect, useState } from 'react';
import { addMedicationToWednesday } from '../../../modules/WednesdayManager';
import { getMedicationByUserId } from '../../../modules/MedicationManager';
import { Button } from 'reactstrap';
import "./Wednesday.css"

export const WednesdayForm = ({toggler, reload}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [wednesday, setWednesday] = useState({
        userId: user,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])

    const handleControlledInputChange = (event) => {
        const newWednesdayMedication = { ...wednesday }

        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newWednesdayMedication[event.target.id] = parseInt(selectedVal)
        setWednesday(newWednesdayMedication)
    }

    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveWednesdayMedication = (event) => {
        event.preventDefault()
        addMedicationToWednesday(wednesday)
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

                <div className="wednesdayButtons">
                    <Button
                        className="wednesdaySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveWednesdayMedication}>
                        Save
                    </Button>
                </div>
            </>
        )
}