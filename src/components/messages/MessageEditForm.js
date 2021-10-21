import React, { useState, useEffect } from "react"
import { getMessageById, updateMessage } from "../../modules/MessageDataManager"
import { Label, Button, Input, Form  } from "reactstrap"
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
            <section className="messageContainer">
                <Form className="message">

                    <Label className="update-message-header" htmlFor="message">Update Message:</Label>
                    <Input type="text" id="message" onChange={handleFieldChange} placeholder="Enter New Message" value={messages.message} />

                    <div>
                        <Button className="messageSave"
                            variant="secondary" size="sm"
                            disabled={isLoading}
                            onClick={updateExistingMessage}>
                            Update Medication
                        </Button>
                    </div>
                </Form>
            </section>
        </>
    )
}