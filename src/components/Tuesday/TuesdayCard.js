import React from "react";

export const TuesdayMedicineCard = ({tuesday}) => {
    console.log(tuesday)
    return (
        <>
        <section>
            <div>
                <h5>{tuesday.medication.name}</h5>
                <button>Delete</button>
                <input type="checkbox"></input>
            </div>
            </section>
        </>
    )
}