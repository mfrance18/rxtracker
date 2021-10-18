const remoteURL = "http://localhost:8088"

export const getAllWednesdayMedication = () => {
    return fetch (`${remoteURL}/wednesday?_expand=medication&status=false`)
    .then(response => response.json())
}

export const getWednesdayById = (wednesdayId) => {
    return fetch(`${remoteURL}/wednesday/${wednesdayId}`)
    .then(response => response.json())
}

export const addMedicationToWednesday = (newMedication) => {
    return fetch (`${remoteURL}/wednesday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromWednesday = (id) => {
    return fetch(`${remoteURL}/wednesday/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const completeWednesdayMedicine = (medObj) => {
    medObj.status = true
      return fetch(`${remoteURL}/wednesday/${medObj.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(medObj)
      }).then(data => data.json());
  }