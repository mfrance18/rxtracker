const remoteURL = "http://localhost:8088"

export const getAllMedications = () => {
    return fetch(`${remoteURL}/medications`)
    .then(response => response.json())
}

export const getMedicationById = (medicationId) => {
    return fetch(`${remoteURL}/medications/${medicationId}`)
    .then(response => response.json())
}

export const getMedicationByUserId = (userId) => {
    return fetch(`${remoteURL}/medications?userId=${userId}`)
    .then(response => response.json())
}


export const addMedication = (newMedication) => {
    return fetch (`${remoteURL}/medications`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedication = id => {
    return fetch(`${remoteURL}/medications/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const updateMedication = (medicationObj) => {
    return fetch(`${remoteURL}/medications/${medicationObj.id}` , {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(medicationObj)
    }).then(data => data.json())
}