import React, { useEffect, useState } from 'react';
import { getMedicationByUserId } from '../../modules/MedicationManager';
import { addMedicationToDay } from '../../modules/DayManager';
import { Button} from "reactstrap";
import { Form } from 'react-bootstrap';


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


    const getUserMeds = () => {
       return getMedicationByUserId(user).then(response => {
           setUsermedications(response)
       })
    }

    useEffect(() => {
      getUserMeds()
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
                    <Form>
                    <Form.Select value={usermedications.id} name="usermedicationsId" id="medicationId" onChange={handleControlledInputChange}>
                        <option value="0" >Select</option>
                        {usermedications.map(u => (<option key={u.id} value={u.id}>
                            {u.name}, Instructions: {u.instructions}
                        </option>))}
                    </Form.Select>
                    </Form>
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