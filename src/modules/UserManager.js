const remoteURL = "http://localhost:8088"

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(response =>  response.json())
}

export const getUserById = (userId) => {
    return fetch(`${remoteURL}/users/${userId}`)
    .then(response => response.json())
    }

export const updateUser = (userObj) => {
	return fetch(`${remoteURL}/users/${userObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userObj)
	}).then(data => data.json());
}