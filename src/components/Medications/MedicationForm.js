import React, { useState } from "react";
import { useHistory } from "react-router";
import { addMedication } from "../../modules/MedicationManager";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

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
            <Form>
                <h1>Add a Medication</h1>
                <FormGroup>
                    <Label htmlFor="name">Medication Name: </Label>
                    <Input type="text" id="name" onChange={handleControlledInputChange} placeholder="Name of Medication" value={medication.name} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="amount">Amount Per Day: </Label>
                    <Input type="select" onChange={handleControlledInputChange} value={medication.amount} id="amount">
                        <option value="0" disabled>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="dosage">Dosage: </Label>
                    <Input type="text" id="dosage" onChange={handleControlledInputChange} placeholder="Dosage Amount" value={medication.dosage} />
                </FormGroup>

                <FormGroup>
                    <Label htmlFor="instructions">Instructions: </Label>
                    <Input id="instructions" onChange={handleControlledInputChange} placeholder="Instructions" value={medication.instructions} />
                </FormGroup>

                <Button className=""
                    onClick={handleClickSaveMedication}>
                    Save Medication
                </Button>
                <Button className=""
                    onClick={handleCancelButton}>
                    Cancel
                </Button>
            </Form >
        </>
    )
}