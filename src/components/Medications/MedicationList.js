import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllMedications, deleteMedication } from "../../modules/MedicationManager";
import { MedicationCard } from "./MedicationCard";
import { Button} from 'reactstrap';

export const MedicationList = () => {


    const [medications, setMedications] = useState([])

    const history = useHistory()

    const getMedications = () => {
        return getAllMedications().then(response => {
            setMedications(response)
            console.log(response)
        })
    }

    const handleDeleteMedication = (id) => {
        deleteMedication(id)
        .then(() => getAllMedications().then(setMedications))
    }

    useEffect(() => {
        getMedications()
    }, [])
    
   
    return (
        <>

            <div className="medications">
                <h1>Medications</h1>
                <div>
                    <Button type="button"
                        className="medAdd"
                        onClick={() => { history.push("/medications/create") }}>
                        Add New Medication
                    </Button>
                </div>
            </div>
            <section className="medList">
               
                    {medications.map(medication => <MedicationCard medication={medication} key={medication.id} handleDeleteMedication={handleDeleteMedication}/>)}
                
            </section>
        </>
    )
}