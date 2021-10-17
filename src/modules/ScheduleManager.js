const remoteURL = "http://localhost:8088"


export const getAllDailyMedications = () => {
    return fetch (`${remoteURL}/dailyMedications?_expand=medication&_expand=day`)
    .then(response => response.json())
}

export const getMedicationByDay = (dayId) => {
    return fetch(`${remoteURL}/dailyMedications?dayId=${dayId}&_expand=medication`)
    .then(response => response.json())
}

export const getDaysofWeek = () => {
return fetch (`${remoteURL}/days`)
.then(response => response.json())
}