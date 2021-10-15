const remoteURL = "http://localhost:8088"

export const getAllTuesdayMedication = () => {
    return fetch (`${remoteURL}/tuesday?_expand=medication`)
    .then(response => response.json())
}

export const getTuesdayById = (tuesdayId) => {
    return fetch(`${remoteURL}/tuesday/${tuesdayId}`)
    .then(response => response.json())
}

export const addMedicationToTuesday = (newMedication) => {
    return fetch (`${remoteURL}/tuesday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}