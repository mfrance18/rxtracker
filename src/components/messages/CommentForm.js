import React, {useState} from "react";
import { addComment} from "../../modules/MessageDataManager";
import { Button, Input, Label } from "reactstrap";
import { Form } from "react-bootstrap";

export const CommentForm = ({toggle,  message, reload}) => {

    let user = parseInt(sessionStorage.getItem("rxtracker_user"))

    const commenter = sessionStorage.getItem("rxtracker_username")

    const [comment, setComment] = useState({
        userId: user,
        messageId: message,
        commenter: commenter,
        comment: "",
    })


    const handleControlledInputChange = (event) => {
        const newComment = { ...comment }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newComment[event.target.id] = selectedVal
        setComment(newComment)
    }

    const handleClickSaveNewComment = (event) => {
        event.preventDefault()
        addComment(comment)
            .then(toggle)
            .then(reload)

    }

    return (
        <section className="commentFormContainer">
        <Form className="commentForm">
        <h1>Add a Post</h1>
            <Form.Group className="commentForm">
                <div>
                    <Label htmlFor="comment"> </Label>
                    <Form.Control className="form-control" as="textarea" id="comment" onChange={handleControlledInputChange} placeholder="Enter comment"  value={comment.comment} />
                </div>
                <div>
                <Button className="message-save-button" 
                    onClick={handleClickSaveNewComment}>
                    Save
                </Button>
                </div>
            </Form.Group>
        </Form>
    </section>

    )

}