const remoteURL = "http://localhost:8088"

export const getAllFridayMedication = () => {
    return fetch (`${remoteURL}/friday?_expand=medication&status=false`)
    .then(response => response.json())
}

export const getFridayById = (fridayId) => {
    return fetch(`${remoteURL}/friday/${fridayId}`)
    .then(response => response.json())
}

export const addMedicationToFriday = (newMedication) => {
    return fetch (`${remoteURL}/friday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromFriday = (id) => {
    return fetch(`${remoteURL}/friday/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const completeFridayMedicine = (medObj) => {
    medObj.status = true
      return fetch(`${remoteURL}/friday/${medObj.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(medObj)
      }).then(data => data.json());
  }