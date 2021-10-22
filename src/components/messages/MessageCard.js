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
                <section className="message">
                    <div className="messenger">{message.messenger}</div>
                    <CardBody className="messageBody">{message.message}</CardBody>
                    <div className="message-update-buttons">
                        <div className="time">
                            {message.timestamp}
                        </div>
                        <div>
                            <Button className="messageDelete" type="button" variant="secondary" size="sm"
                                onClick={() => handleDeleteMessage(message.id)}>
                                Delete
                            </Button>
                            <Button className="messageEdit" type="button" variant="secondary" size="sm"
                                onClick={() => { setSelectedMessage({ message }); toggleEdit() }}>
                                Edit
                            </Button>
                            <Button className="messageComment" type="button" variant="secondary" size="sm">
                                Comment
                            </Button>
                        </div>
                    </div>
                </section>

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

            <section className="message">
                <div className="messenger">{message.messenger} </div>
                <CardBody className="messageBody">{message.message}</CardBody>
                <div className="message-update-buttons">
                    <div className="time">
                        {message.timestamp}
                    </div>
                    <div>
                        <Button className="messageComment" type="button" variant="secondary" size="sm">
                            Comment
                        </Button>
                    </div>
                </div>
            </section>



        )

    }
}


