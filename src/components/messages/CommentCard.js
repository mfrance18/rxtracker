import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader, Button } from "reactstrap";
import { CommentEditForm } from "./CommentEditForm";

export const CommentCard = ({ comment, handleDeleteComment, reload, message }) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const [selectedComment, setSelectedComment] = useState({ comment: {} })

    const [editModal, setEditModal] = useState(false);

    const toggleEdit = () => setEditModal(!editModal);

    if (user === comment.userId) {
        return (
            <>
                <section className="commentCard">
                    <section>
                        <div className="commentTitle">{comment.commenter}</div>
                    </section>
                    <section className="commentArea">
                        <div className="comment"> {comment.comment}</div>
                        <div className="comButtons">
                            <Button className="commentDelete" type="button" variant="secondary" size="sm"
                                onClick={() => handleDeleteComment(comment.id)}>
                                Delete
                            </Button>
                            <Button className="commentEdit" type="button" variant="secondary" size="sm"
                                onClick={() => { setSelectedComment({ comment }); toggleEdit() }}>
                                Edit
                            </Button>

                        </div>
                    </section>
                </section>
                <div>
                    <hr></hr>
                </div>
                <Modal isOpen={editModal} toggle={toggleEdit}>
                    <ModalHeader toggle={toggleEdit}>New Message</ModalHeader>
                    <ModalBody>
                        <CommentEditForm message={message} reload={reload} comment={comment} key={comment.id} toggleEdit={toggleEdit}  {...selectedComment} />
                    </ModalBody>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <section className="commentCard">
                    <section>
                        <div className="commentTitle">{comment.commenter}</div>
                    </section>
                    <section className="commentArea">
                        <div className="comment"> {comment.comment}</div>
                    </section>
                </section>
                <div>
                    <hr></hr>
                </div>
            </>
        )
    }
}
