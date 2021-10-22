import React, { useState } from "react";
import { MessageEditForm } from "./MessageEditForm";
import { CommentList } from "./CommentList"
import "./Message.css"
import { CardBody, Button, ModalHeader, Modal, ModalBody, } from "reactstrap";

export const MessageCard = ({ message, handleDeleteMessage, reload, messageId }) => {


    const [selectedMessage, setSelectedMessage] = useState({ message: {} })

    const [editModal, setEditModal] = useState(false);

    const toggleEdit = () => setEditModal(!editModal);


    let loggedinuserId = parseInt(sessionStorage.getItem("rxtracker_user"))

    if (message.userId === loggedinuserId) {
        return (
            <>
                <section className="messageCardContainer">
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
                            </div>
                        </div>
                    </section>

                    <div >
                        <CommentList messageId={messageId} />
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
            <>
                <section className="messageCardContainer">
                    <section className="message">
                        <div className="messenger">{message.messenger} </div>
                        <CardBody className="messageBody">{message.message}</CardBody>
                        <div className="message-update-buttons">
                            <div className="time">
                                {message.timestamp}
                            </div>
                        </div>
                    </section>

                    <section>
                        <CommentList messageId={messageId} />
                    </section>
                </section>
            </>


        )

    }
}


