import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { getMedicationById, updateMedication } from "../../modules/MedicationManager"

export const MedicationEditForm = () => {
    const [medication, setMedication] = useState({
        name: "",
        amount: 0,
        dosage: "",
        instructions: ""
    })

    const [isLoading, setIsLoading] = useState(false)
    const { medicationId } = useParams()
    const history = useHistory()

    const handleFieldChange = event => {
        const stateToChange = { ...medication }
        stateToChange[event.target.id] = event.target.value
        setMedication(stateToChange)
    }

    const handleCancelButton = () => {
        history.push("/medications")
    }

    const updateExistingMedication = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedMedication = {
            id: medicationId,
            userId: medication.userId,
            name: medication.name,
            amount: 1,
            dosage: medication.dosage,
            instructions: medication.instructions
        }

        updateMedication(editedMedication)
            .then(() => history.push("/medications"))
    }

    useEffect(() => {
        getMedicationById(medicationId)
            .then(medication => {
                setMedication(medication)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <form>
                <h1>Update Medication</h1>
                <fieldset>
                    <div>
                        <label htmlFor="name">Medication Name: </label>
                        <input type="text" id="name" onChange={handleFieldChange} placeholder="Name of Medication" value={medication.name} />
                    </div>

                    <div>
                        <label htmlFor="amount">Amount Per Day: </label>
                        <select onChange={handleFieldChange} value={medication.amount} id="amount">
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
                        <input type="text" id="dosage" onChange={handleFieldChange} placeholder="Dosage Amount" value={medication.dosage} />
                    </div>

                    <div>
                        <label htmlFor="instructions">Instructions: </label>
                        <input id="instructions" onChange={handleFieldChange} placeholder="Instructions" value={medication.instructions} />
                    </div>
                </fieldset>
                <button className=""
                    disabled={isLoading}
                    onClick={updateExistingMedication}>
                    Update Medication
                </button>
                <button className=""
                    onClick={handleCancelButton}>
                    Cancel
                </button>
            </form>
        </>
    )
}