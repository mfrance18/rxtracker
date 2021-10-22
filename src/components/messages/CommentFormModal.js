import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { CommentForm } from "./CommentForm";

export const CommentFormModal = ({message, reload}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {
        setModal(!modal)
    };

    return (

    <Modal isOpen={modal} toggle={toggle} className="commentModal">
        <ModalHeader toggle={toggle}>New Comment</ModalHeader>
        <ModalBody>
            <CommentForm message={message} toggle={toggle} reload={reload} />
        </ModalBody>
    </Modal>

    )
}