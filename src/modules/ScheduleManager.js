const remoteURL = "http://localhost:8088"


export const getMedicationSchedule = () => {
    fetch(`${remoteURL}/dailyMedications?_expand=medication&_expand=day`)
    .then(response => response.json())
}


