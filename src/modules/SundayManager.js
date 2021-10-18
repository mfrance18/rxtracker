const remoteURL = "http://localhost:8088"

export const getAllSundayMedication = () => {
    return fetch (`${remoteURL}/sunday?_expand=medication&status=false`)
    .then(response => response.json())
}

export const getSundayById = (sundayId) => {
    return fetch(`${remoteURL}/Sunday/${sundayId}`)
    .then(response => response.json())
}

export const addMedicationToSunday = (newMedication) => {
    return fetch (`${remoteURL}/sunday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromSunday = (id) => {
    return fetch(`${remoteURL}/sunday/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const completeSundayMedicine = (medObj) => {
    medObj.status = true
      return fetch(`${remoteURL}/sunday/${medObj.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(medObj)
      }).then(data => data.json());
  }