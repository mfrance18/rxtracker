const remoteURL = "http://localhost:8088"

export const getAllTuesdayMedication = () => {
    return fetch (`${remoteURL}/tuesday?_expand=medication&status=false`)
    .then(response => response.json())
}

export const getTuesdayById = (tuesdayId) => {
    return fetch(`${remoteURL}/tuesday/${tuesdayId}`)
    .then(response => response.json())
}

export const addMedicationToTuesday = (newMedication) => {
    return fetch (`${remoteURL}/tuesday`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMedication)
    }).then(result => result.json())
}

export const deleteMedicationFromTuesday = (id) => {
    return fetch(`${remoteURL}/tuesday/${id}`,{
        method: "DELETE"
    })
    .then(response => {
        response.json()
    })
}

export const completeTuesdayMedicine = (tueObj) => {
    tueObj.status = true
      return fetch(`${remoteURL}/tuesday/${tueObj.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(tueObj)
      }).then(data => data.json());
  }