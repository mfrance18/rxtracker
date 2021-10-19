import React, { useState } from "react";
import { addMedication} from "../../modules/MedicationManager";

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const MedicationForm = ({toggler, render}) => {
    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    

    const [medication, setMedication] = useState({
        name: "",
        userId: user,
        amount: 0,
        instructions: "",
        dosage: ""
    })

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
            .then(toggler)
            .then(render)
    }


    return (
        <>
            <section className="medFormContainer">
                <Form className="medForm">
                    <h1>Add a Medication</h1>
                    <div >
                        <FormGroup>
                            <Label htmlFor="name">Medication Name: </Label>
                            <Input className="form-control" type="text" id="name" onChange={handleControlledInputChange} placeholder="Name of Medication" value={medication.name} />



                            <Label htmlFor="amount">Amount Per Day: </Label>
                            <Input className="form-control" type="select" onChange={handleControlledInputChange} value={medication.amount} id="amount">
                                <option value="0" disabled>Select Amount</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Input>



                            <Label htmlFor="dosage">Dosage: </Label>
                            <Input className="form-control" type="text" id="dosage" onChange={handleControlledInputChange} placeholder="Dosage Amount" value={medication.dosage} />



                            <Label htmlFor="instructions">Instructions: </Label>
                            <Input className="form-control" id="instructions" onChange={handleControlledInputChange} placeholder="Instructions" value={medication.instructions} />
                        </FormGroup>
                    </div>

                    <div >
                        <Button className="medSave"
                            variant="secondary" size="sm"
                            onClick={handleClickSaveMedication}>
                            Save Medication
                        </Button> 
                    </div>

                </Form >
            </section>

        </>
    )
}