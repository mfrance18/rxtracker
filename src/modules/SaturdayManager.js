const remoteURL = "http://localhost:8088"

export const getAllSaturdayMedication = () => {
    return fetch (`${remoteURL}/saturday?_expand=medication&status=false`)
    .then(response => response.json())
}

export const getSaturdayById = (saturdayId) => {
    return fetch(`${remoteURL}/saturday/${saturdayId}`)
    .then(response => response.json())
}

export const addMedicationToSaturday = (newMedication) => {
    return fetch (`${remoteURL}/saturday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromSaturday = (id) => {
    return fetch(`${remoteURL}/saturday/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const completeSaturdayMedicine = (medObj) => {
    medObj.status = true
      return fetch(`${remoteURL}/saturday/${medObj.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(medObj)
      }).then(data => data.json());
  }