import React, { useState, useEffect } from "react"
import { getMessageById, updateMessage } from "../../modules/MessageDataManager"
import { Label, Button} from "reactstrap"
import { Form } from "react-bootstrap";
import "./Message.css"

export const MessageEditForm = ({ toggleEdit, message, reload }) => {

    const [messages, setMessages] = useState(message)

    const [isLoading, setIsLoading] = useState(false)

    const messageId = message.id

    const handleFieldChange = event => {
        const stateToChange = { ...messages }
        stateToChange[event.target.id] = event.target.value;
        setMessages(stateToChange)
    }

    const updateExistingMessage = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedMessage = {
            id: messageId,
            message: messages.message,
            messenger: messages.messenger,
            timestamp: messages.timestamp,
            userId: messages.userId
        }

        updateMessage(editedMessage)
            .then(toggleEdit)
            .then(reload)
    }

    useEffect(() => {
        getMessageById(messageId)
            .then(message => {
                setMessages(message)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <div>
                <Form className="messageForm">
                    <h1>Edit Post</h1>
                    <Form.Group>
                        <div>
                            <Label className="update-message-header" htmlFor="message">New Message:</Label>
                            <Form.Control className="form-control" as="textarea" id="message" onChange={handleFieldChange} placeholder="Enter Message" value={messages.message} />
                        </div>
                        <Button className="message-save-button"
                            variant="secondary" size="sm"
                            disabled={isLoading}
                            onClick={updateExistingMessage}>
                            Update
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}