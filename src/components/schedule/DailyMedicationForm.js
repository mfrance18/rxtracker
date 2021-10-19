import React, { useEffect, useState } from 'react';
import { getMedicationByUserId } from '../../modules/MedicationManager';
import { addMedicationToDay } from '../../modules/DayManager';
import { Button} from "reactstrap";


export const DailyMedicationForm = ({toggle, day, reload}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [days, setDays] = useState({
        userId: user,
        medicationId: 0,
        dayId: day,
        status: false
    })

    const [usermedications, setUsermedications] = useState([])


    const handleControlledInputChange = (event) => {
        const newMedication = { ...days }
        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMedication[event.target.id] = parseInt(selectedVal)
        setDays(newMedication)
    }


    useEffect(() => {
        getMedicationByUserId(user).then(response =>{
            setUsermedications(response)
        })
    },[])

    const handleClickSaveMedication = (event) => {
        event.preventDefault()
        addMedicationToDay(days)
        .then(toggle)
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

                <div className="dayButtons">
                    <Button
                        className="daySave"
                        variant="primary" size="sm"
                        onClick={handleClickSaveMedication}>
                        Save
                    </Button>
                </div>
            </>
        )
}