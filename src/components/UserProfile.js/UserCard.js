import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { UserEditForm } from "./UserEditForm";
import UserPicture from "../../images/blankprofile.png"
import "./User.css"

export const UserCard = () => {

    const userId = sessionStorage.getItem("rxtracker_user")
    const userName = sessionStorage.getItem("rxtracker_username")
    const userImage = sessionStorage.getItem("rxtracker_image")

    const [editModal, setEditModal] = useState(false);

    const toggleEdit = () => setEditModal(!editModal);



    if (userImage) {

        return (
            <>
                <section>
                    <div className="intro">
                        <h2>Welcome, {userName}!</h2>
                    </div>
                    <div className="img__wrap">
                        <div>
                            <p className="img__description">Click To Edit Profile</p>
                        </div>
                        <div>
                            <img className="NoPic" onClick={() => toggleEdit()} src={userImage} alt="User Image" />
                        </div>
                    </div>
                </section>
                
                <Modal isOpen={editModal} toggle={toggleEdit} className="commentModal">
                    <ModalHeader toggle={toggleEdit}>Edit User Info</ModalHeader>
                    <ModalBody>
                        <UserEditForm let userId={userId} key={userId} toggleEdit={toggleEdit} />
                    </ModalBody>
                </Modal>
            </>
        )
    } else {
        return (
            <>
                <section>
                    <div className="intro">
                        <h2>Welcome, {userName}!</h2>
                    </div>
                    <div className="img__wrap">
                        <div>
                            <p className="img__description">Click To Add Image</p>
                        </div>
                        <div>
                            <img className="NoPic" onClick={() => toggleEdit()} src={UserPicture} alt="blankimage" />
                        </div>
                    </div>
                </section>

                <Modal isOpen={editModal} toggle={toggleEdit} className="commentModal">
                    <ModalHeader toggle={toggleEdit}>Edit User Info</ModalHeader>
                    <ModalBody>
                        <UserEditForm let userId={userId} key={userId} toggleEdit={toggleEdit} />
                    </ModalBody>
                </Modal>
            </>
        )

    }
}