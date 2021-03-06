//Author: Matt, Purpose: to render the messages in a list, also be able to create new message

import React, { useState, useEffect } from "react";
import { MessageCard } from "./MessageCard";
import { getAllMessages, getMessagesByUser } from "../../modules/MessageDataManager"
import { deleteMessage } from "../../modules/MessageDataManager";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import "./Message.css"
import { MessageForm } from "./MessageForm";
import 'animate.css';



export const MessageList = () => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [messages, setMessages] = useState([])

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };


    const getMessages = () => {
        return getAllMessages().then(response => {
            setMessages(response)
        })
    }

    const myMessages = () => {
        getMessagesByUser(user).then(response => {
            setMessages(response)
        })
    }



    const reload = () => {
        getMessages()
    }

    const handleDeleteMessage = id => {
        deleteMessage(id)
            .then(() => getAllMessages().then(setMessages))
    }


    useEffect(() => {
        getMessages()
    }, [])

    return (
        <>

            <section className="messagesIntro">
                <div className="messageMainTitle">
                    <h1>Public Forum</h1>
                </div>

                <div className="messageOrder">
                    <Button type="button"
                        variant="secondary" size="sm"
                        className="messageAdd"
                        onClick={toggle}>
                        Add New Message
                    </Button>
                    <Button onClick={myMessages} className="myMessages" type="button" variant="secondary" size="sm">My Messages</Button>
                    <Button onClick={reload} className="showAll" type="button" variant="secondary" size="sm">Show All</Button>
                </div>
            </section>
            <hr></hr>
            <section className="messageList">
                {messages.map(message => <MessageCard message={message} messageId={message.id} key={message.id} handleDeleteMessage={handleDeleteMessage} reload={reload} />)}
            </section>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Message</ModalHeader>
                <ModalBody>
                    <MessageForm toggle={toggle} reload={reload} />
                </ModalBody>
            </Modal>
        </>
    )
}
