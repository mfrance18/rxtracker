import React, { useState, useEffect } from "react"
import { getCommentById, updateComment } from "../../modules/MessageDataManager"
import { Label, Button, Input} from "reactstrap"
import { Form } from "react-bootstrap";
import "./Message.css"

export const CommentEditForm = ({ toggleEdit, comment, reload, message}) => {

    const [comments, setComments] = useState(comment)

    const [isLoading, setIsLoading] = useState(false)

    const commentId = comment.id

    const handleFieldChange = event => {
        const stateToChange = { ...comments }
        stateToChange[event.target.id] = event.target.value;
        setComments(stateToChange)
    }

    const updateExistingComment = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedComment = {
            id: commentId,
            messageId: message,
            comment: comments.comment,
            commenter: comments.commenter,
            timestamp: comments.timestamp,
            userId: comments.userId
        }

        updateComment(editedComment)
            .then(toggleEdit)
            .then(reload)
    }

    useEffect(() => {
        getCommentById(commentId)
            .then(comment => {
                setComments(comment)
                setIsLoading(false)
            })
    }, [])

    return (
        <>
            <div>
                <Form className="commentForm">
                    <h1>Edit Comment</h1>
                    <Form.Group>
                        <div>
                            <Label className="update-comment-header" htmlFor="comment">New Comment:</Label>
                            <Input className="form-control"  type="text" id="comment" onChange={handleFieldChange} placeholder="Enter New comment" value={comments.comment} />
                        </div>
                        <Button className="comment-save-button"
                            variant="secondary" size="sm"
                            disabled={isLoading}
                            onClick={updateExistingComment}>
                            Update 
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}