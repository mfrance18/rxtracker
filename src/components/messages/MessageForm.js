import React from "react";
import { useState } from "react/cjs/react.development";
import { addMessage} from "../../modules/MessageDataManager";
import { Form, FormGroup, Button, Input, Label } from "reactstrap";
import { formatAMPM } from "./Date";



export const MessageForm = ({toggle, reload}) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const messenger = sessionStorage.getItem("rxtracker_fullname")

    const [message, setMessage] = useState({
        userId: user,
        messenger: messenger,
        message: "",
        timestamp: formatAMPM(new Date)
    })


    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newMessage[event.target.id] = selectedVal
        setMessage(newMessage)
    }

    const handleClickSaveNewMessage = (event) => {
        event.preventDefault()
        addMessage(message)
            .then(toggle)
            .then(reload)

    }

    return (
        <div >
        <Form >
        <h1>Add a Post</h1>
            <FormGroup className="messageForm">
                <div>
                    <Label htmlFor="message"> </Label>
                    <Input type="text" id="message" onChange={handleControlledInputChange} placeholder="Enter Message for the chat" size="50" value={message.message} />
                </div>
                <Button className="message-save-button"
                    onClick={handleClickSaveNewMessage}>
                    Save
                </Button>
            </FormGroup>
        </Form>
    </div>

    )

}