import React from "react";

export const MondayMedicineCard = ({monday}) => {

    console.log(monday)
    return (
        <>
            <div>
                <h5>{monday.medication.name}</h5>
                <button>Delete</button>
                <input type="checkbox"></input>
            </div>
        </>
    )
}