const remoteURL = "http://localhost:8088"

export const getAllMessages = () => {
   return fetch(`http://localhost:8088/messages?_sort=timestamp&_order=desc&_expand=user`)
    .then(response => response.json())
}

export const getMessagesByUser = (userId) => {
    return fetch(`http://localhost:8088/messages?userId=${userId}&_expand=user`)
     .then(response => response.json())
 }

export const getAllMessagesReversed = () => {
    return fetch(`http://localhost:8088/messages?_sort=timestamp&_order=asc&_expand=user`)
     .then(response => response.json())
 }

export const getMessageById = (messageId) => {
return fetch(`${remoteURL}/messages/${messageId}`)
.then(response => response.json())
}

export const addMessage = (newMessage) => {
    return fetch(`${remoteURL}/messages`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newMessage)
    }).then(response => response.json())
}

export const deleteMessage = (id) => {
    return fetch(`${remoteURL}/messages/${id}`, {
        method: "DELETE"
    }).then(result => result.json())

}

export const updateMessage = (messageObj) => {
	return fetch(`${remoteURL}/messages/${messageObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(messageObj)
	}).then(data => data.json());
}


export const getAllComments = () => {
    return fetch(`http://localhost:8088/comments?_expand=user`)
     .then(response => response.json())
 }

 export const getCommentById = (commentId) => {
    return fetch(`${remoteURL}/comments/${commentId}?_expand=user`)
    .then(response => response.json())
    }

export const getCommentByMessage = (messageId) => {
    return fetch(`${remoteURL}/comments?messageId=${messageId}&_expand=message&_expand=user`)
    .then(response => response.json())
}

export const addComment = (newComment) => {
    return fetch(`${remoteURL}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newComment)
    }).then(response => response.json())
}

export const updateComment = (commentObj) => {
	return fetch(`${remoteURL}/comments/${commentObj.id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(commentObj)
	}).then(data => data.json());
}

export const deleteComment = (id) => {
    return fetch(`${remoteURL}/comments/${id}`, {
        method: "DELETE"
    }).then(result => result.json())

}
