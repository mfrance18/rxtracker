import React, { useState, useEffect } from "react";
import { getCommentByMessage, deleteComment } from "../../modules/MessageDataManager";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
import "./Message.css"



export const CommentList = ({ messageId }) => {
    const [comments, setComments] = useState([])

    const getComment = (messageId) => {
        getCommentByMessage(messageId)
            .then(response => {
                setComments(response)
            })
    }

    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    const reload = () => {
        getComment(messageId)
    }

    const handleDeleteComment = (id) => {
        deleteComment(id)
            .then(() => getComment(messageId))
    }

    useEffect(() => {
        getComment(messageId);
    }, [])

    return (
        <>
            <section className="commentButtonContainer">
                <h5 style={{ fontWeight: "bold", marginLeft: 5, marginTop: 10 }}>Comments</h5>
                <div className="commentButton">
                    <Button onClick={toggle} className="messageComment" type="button" variant="secondary" size="sm">
                        Add Comment
                    </Button>
                </div>
            </section>

            <section className="commentList">
                <div>
                    {comments.map(comment => <CommentCard message={messageId} comment={comment} key={comment.id} handleDeleteComment={handleDeleteComment} reload={reload} />)}
                </div>
            </section>

            <Modal isOpen={modal} toggle={toggle} className="commentModal">
                <ModalHeader toggle={toggle}>New Comment</ModalHeader>
                <ModalBody>
                    <CommentForm message={messageId} toggle={toggle} reload={reload} />
                </ModalBody>
            </Modal>

        </>
    )
}