const remoteURL = "http://localhost:8088"

export const getAllDays = () => {
    return fetch(`${remoteURL}/days`)
    .then(response =>  response.json())
}

export const getAllDailyMedications = () => {
    return fetch (`${remoteURL}/dailyMedications?_expand=medication&_expand=day`)
    .then(response => response.json())
}

export const getMedicationByDay = (dayId) => {
    return fetch(`${remoteURL}/dailyMedications?dayId=${dayId}&_expand=medication`)
    .then(response => response.json())
}

export const getMedicationForMonday = ()  => {
    return fetch(`${remoteURL}/dailyMedications?dayId=1`)
    .then(response => response.json())
}

export const addMedicationToDay = (newMedication) => {
    return fetch (`${remoteURL}/dailyMedications`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromDay = (id) => {
    return fetch(`${remoteURL}/dailyMedications/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}