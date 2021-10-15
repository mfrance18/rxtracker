import React from "react"

export const DailyMedicine = (medicine) => {
    return (
        <div>
            <h5>{medicine.name}</h5>
            <button>Delete</button>
            <input type="checkbox"></input>
        </div>
    )
}