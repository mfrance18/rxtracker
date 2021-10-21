//Author: Matt, Purpose: to render the messages in a list, also be able to create new message

import React, { useState, useEffect } from "react";
import { MessageCard } from "./MessageCard";
import { getAllMessages, getAllMessagesReversed } from "../../modules/MessageDataManager"
import { deleteMessage } from "../../modules/MessageDataManager";
import { Modal, ModalBody, ModalHeader, Button, Form } from "reactstrap";
import "./Message.css"
import { MessageForm } from "./MessageForm";



export const MessageList = () => {


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

    const handleOnChange = (event) => {
        if (event.target.value === "1" ) {
            return getAllMessagesReversed()
            .then(response => {
                setMessages(response)
            })
        } else if (event.target.value === "2") {
            return getAllMessages()
            .then(response => {
                setMessages(response)
            })
    
        }
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
                <h1>Messages</h1>
                <Button type="button"
                    variant="secondary" size="sm"
                    className="messageAdd"
                    onClick={toggle}>
                    Add New Message
                </Button>
            </section>
            <section className="messagesOrderContainer">
                <div className="messageOrder">
                    <select onChange={handleOnChange} type="button" variant="secondary" size="sm">
                        <option >Select Order</option>
                        <option value="1">Oldest</option>
                        <option value="2">Newest</option>
                    </select>
                </div>
            </section>

            <section className="messageList">
                {messages.map(message => <MessageCard message={message} key={message.id} handleDeleteMessage={handleDeleteMessage} reload={reload} />)}
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
