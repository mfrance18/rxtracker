import React, { useState } from "react";
import { useHistory } from "react-router";
import { addMedication } from "../../modules/MedicationManager";

export const MedicationForm = () => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [medication, setMedication] = useState({
        name: "",
        user: user,
        amount: 0,
        instructions: "",
        dosage: ""
    })

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMedication = { ...medication }
        let selectedVal = event.target.value

        if (event.target.value.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMedication[event.target.id] = selectedVal
        setMedication(newMedication)
    }

    const handleClickSaveMedication = (event) => {
        event.preventDefault()
        addMedication(medication)
            .then(() => history.push("/medications"))
    }

    const handleCancelButton = () => {
        history.push("/medications")
    }

    return (
        <>
            <form>
                <h1>Add a Medication</h1>
                <fieldset>
                    <div>
                        <label htmlFor="name">Medication Name: </label>
                        <input type="text" id="name"  onChange={handleControlledInputChange} placeholder="Name of Medication" value={medication.name} />
                    </div>

                    <div>
                        <label htmlFor="amount">Amount Per Day: </label>
                        <select onChange={handleControlledInputChange} value={medication.amount} id="amount">
                            <option value="0" disabled>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="dosage">Dosage: </label>
                        <input type="text" id="dosage" onChange={handleControlledInputChange} placeholder="Dosage Amount" value={medication.dosage} />
                    </div>

                    <div>
                        <label htmlFor="instructions">Instructions: </label>
                        <input id="instructions" onChange={handleControlledInputChange} placeholder="Instructions" value={medication.instructions}/>
                    </div>
                </fieldset>
                <button className=""
                    onClick={handleClickSaveMedication}>
                    Save Medication
                </button>
                <button className=""
                onClick={handleCancelButton}>
                Cancel
            </button>
            </form>
        </>
    )
}