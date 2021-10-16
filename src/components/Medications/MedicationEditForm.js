import React, { useState, useEffect } from "react"
import { useParams, useHistory } from "react-router"
import { getMedicationById, updateMedication } from "../../modules/MedicationManager"
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import "./Medications.css"

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
            amount: medication.amount,
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
            <Form className="medForm">
                <h1>Update Medication</h1>
                <FormGroup>
                    <Label htmlFor="name">Medication Name: </Label>
                    <Input type="text" id="name" onChange={handleFieldChange} placeholder="Name of Medication" value={medication.name} />
             

                
                    <Label htmlFor="amount">Amount Per Day: </Label>
                    <Input type="select" onChange={handleFieldChange} value={medication.amount} id="amount">
                        <option value="0" disabled>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input>
                

             
                    <Label htmlFor="dosage">Dosage: </Label>
                    <Input type="text" id="dosage" onChange={handleFieldChange} placeholder="Dosage Amount" value={medication.dosage} />
               

                
                    <Label htmlFor="instructions">Instructions: </Label>
                    <Input id="instructions" onChange={handleFieldChange} placeholder="Instructions" value={medication.instructions} />
                    </FormGroup>
               <div>
                    <Button className="medSave"
                        onClick={updateExistingMedication}>
                        Update Medication
                    </Button>
                    <Button className="medCancel"
                        onClick={handleCancelButton}>
                        Cancel
                    </Button>
              </div>
            </Form >
        </>
    )
}