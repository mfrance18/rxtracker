import React, { useState } from "react";
import { useHistory } from "react-router";
import { MessageEditForm } from "./MessageEditForm";
import "./Message.css"
import { Card, CardTitle, CardBody, Button, ListGroup, ListGroupItem, ModalHeader, Modal, ModalBody, CardFooter } from "reactstrap";

export const MessageCard = ({ message, handleDeleteMessage, reload }) => {
    const history = useHistory()

    const [selectedMessage, setSelectedMessage] = useState({ message: {} })

    const [editModal, setEditModal] = useState(false);
    const toggleEdit = () => setEditModal(!editModal);


    let loggedinuserId = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (message.userId === loggedinuserId) {
        return (
            <>
                <Card className="message">
                    <CardTitle className="messenger">{message.messenger}</CardTitle>
                    <CardBody className="messageBody">{message.message}</CardBody>
                    <CardFooter className="message-update-buttons">
                        <div>
                            {message.timestamp}
                        </div>
                        <div>
                            <Button className="messageDelete" type="button"
                                onClick={() => handleDeleteMessage(message.id)}>
                                Delete
                            </Button>
                            <Button className="messageEdit" type="button"
                                onClick={() => { setSelectedMessage({ message }); toggleEdit() }}>
                                Edit
                            </Button>
                        </div>
                    </CardFooter>
                </Card>

                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>New Message</ModalHeader>
                    <ModalBody>
                        <MessageEditForm reload={reload} message={message} key={message.id} toggleEdit={toggleEdit}  {...selectedMessage} />
                    </ModalBody>
                </Modal>

            </>
        )
    } else {
        return (

            <Card className="message">
                <CardTitle className="messenger">{message.messenger} </CardTitle>
                <CardBody className="messageBody">{message.message}</CardBody>
                <CardFooter className="message-update-buttons">
                    <div>
                        {message.timestamp}
                    </div>
                    <div>
                        <Button className="messageComment" type="button">
                            Comment
                        </Button>
                    </div>
                </CardFooter>
            </Card>



        )

    }
}


