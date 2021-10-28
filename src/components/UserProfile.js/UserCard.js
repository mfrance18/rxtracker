import React, { useState } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { UserEditForm } from "./UserEditForm";
import "./User.css"

export const UserCard = ({userInfo, handleUpdateUserInfo, setAuthUser}) => {



   const [userId, setUserId] = useState(sessionStorage.getItem("rxtracker_user"))
   const [userName, setUserName] = useState(sessionStorage.getItem("rxtracker_username"))
   const [userImage, setUserImage] = useState(sessionStorage.getItem("rxtracker_image"))

    const [editModal, setEditModal] = useState(false);

    const toggleEdit = () => {
        setEditModal(!editModal)
        setUserId(sessionStorage.getItem("rxtracker_user"))
        setUserName(sessionStorage.getItem("rxtracker_username"))
        setUserImage(sessionStorage.getItem("rxtracker_image"))
    };


        return (
            <>
                <section className="introContainer">
                    <div className="intro">
                        <h2>Welcome, {userName}!</h2>
                    </div>
                    <div className="img__wrap">
                        <div>
                            <p className="img__description">Click To Edit Profile</p>
                        </div>
                        <div>
                            <img className="profilePic" onClick={() => toggleEdit()} src={userImage} alt="Profile" />
                        </div>
                    </div>
                </section>
                
                <Modal isOpen={editModal} toggle={toggleEdit} className="commentModal">
                    <ModalHeader toggle={toggleEdit}>Edit User Info</ModalHeader>
                    <ModalBody>
                        <UserEditForm userId={userId} key={userId} toggleEdit={toggleEdit} handleUpdateUserInfo={handleUpdateUserInfo} setAuthUser={setAuthUser}/>
                    </ModalBody>
                </Modal>
            </>
        )
}