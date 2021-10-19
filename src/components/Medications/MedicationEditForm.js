import React, { useState, useEffect } from "react"
import { getMedicationById, updateMedication } from "../../modules/MedicationManager"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Medications.css"

export const MedicationEditForm = ({toggleEdit, medication, render}) => {
    const [medications, setMedications] = useState(medication)

    const [isLoading, setIsLoading] = useState(false)

    const medicationId = medication.id
   
    const handleFieldChange = event => {
        const stateToChange = { ...medications }
        stateToChange[event.target.id] = event.target.value
        setMedications(stateToChange)
    }

    const updateExistingMedication = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedMedication = {
            id: medicationId,
            userId: medications.userId,
            name: medications.name,
            amount: medications.amount,
            dosage: medications.dosage,
            instructions: medications.instructions
        }
        updateMedication(editedMedication)
            .then(toggleEdit)
            .then(render)
    }

    useEffect(() => {
        getMedicationById(medicationId)
            .then(response => {
                setMedications(response)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
        <section className="medFormContainer">
            <Form className="medForm">
                <h1>Update Medication</h1>
                <FormGroup>
                    <Label htmlFor="name">Medication Name: </Label>
                    <Input type="text" id="name" onChange={handleFieldChange} placeholder="Name of Medication" value={medications.name} />



                    <Label htmlFor="amount">Amount Per Day: </Label>
                    <Input type="select" onChange={handleFieldChange} value={medications.amount} id="amount">
                        <option value="0" disabled>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input>



                    <Label htmlFor="dosage">Dosage: </Label>
                    <Input type="text" id="dosage" onChange={handleFieldChange} placeholder="Dosage Amount" value={medications.dosage} />



                    <Label htmlFor="instructions">Instructions: </Label>
                    <Input id="instructions" onChange={handleFieldChange} placeholder="Instructions" value={medications.instructions} />
                </FormGroup>
                <div>
                    <Button className="medSave"
                     variant="secondary" size="sm"
                        disabled={isLoading}
                        onClick={updateExistingMedication}>
                        Update Medication
                    </Button>
                </div>
            </Form >
            </section>
        </>
    )
}