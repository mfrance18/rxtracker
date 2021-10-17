const remoteURL = "http://localhost:8088"

export const getAllThursdayMedication = () => {
    return fetch (`${remoteURL}/thursday?_expand=medication`)
    .then(response => response.json())
}

export const getThursdayById = (thursdayId) => {
    return fetch(`${remoteURL}/thursday/${thursdayId}`)
    .then(response => response.json())
}

export const addMedicationToThursday = (newMedication) => {
    return fetch (`${remoteURL}/thursday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromThursday = (id) => {
    return fetch(`${remoteURL}/thursday/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}