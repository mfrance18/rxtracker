const remoteURL = "http://localhost:8088"

export const getAllMondayMedication = () => {
    return fetch (`${remoteURL}/monday?_expand=medication`)
    .then(response => response.json())
}

export const getMondayById = (mondayId) => {
    return fetch(`${remoteURL}/monday/${mondayId}`)
    .then(response => response.json())
}

export const addMedicationToMonday = (newMedication) => {
    return fetch (`${remoteURL}/monday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromMonday = (id) => {
    return fetch(`${remoteURL}/monday/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}