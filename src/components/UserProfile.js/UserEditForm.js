import React, { useEffect, useState } from "react";
import { Label, Button, Input } from "reactstrap"
import { getUserById, updateUser } from "../../modules/UserManager";
import { Form } from "react-bootstrap";


export const UserEditForm = ({ toggleEdit, userId, handleUpdateUserInfo, setAuthUser }) => {

    const [users, setUsers] = useState({
        firstName: "",
        lastName: "",
        email: "",
        image: ""
    })
    const [image, setImage] = useState("")

    const [isLoading, setIsLoading] = useState(false)

    const usersId = userId

    const handleFieldChange = event => {
        const stateToChange = { ...users }
        stateToChange[event.target.id] = event.target.value;
        setUsers(stateToChange)
    }

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "fcfo8agr");
        setIsLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/mfrance18/image/upload",
            {
                method: "POST",
                body: data,
            }
        );
        const file = await res.json();
        setImage(file.secure_url);
        setIsLoading(false);
    };



    const updateExistingUser = event => {

        setIsLoading(true)

        const editedUser = {
            id: usersId,
            firstName: users.firstName,
            lastName: users.lastName,
            email: users.email,
            image: image ? image : users.image
        }

        updateUser(editedUser)
            .then(() => {
                setAuthUser(editedUser)
                toggleEdit()
            })

    }

    useEffect(() => {
        getUserById(userId)
            .then(user => {
                setUsers(user)
                setIsLoading(false)
            })
    }, [])

    const handleUserUpdate = (event) => {
        event.preventDefault()
        updateExistingUser(event)
        handleUpdateUserInfo()
    }

    return (
        <>
            <div>
                <Form className="commentForm">
                    <h1>Edit User</h1>
                    <Form.Group>
                        <div>
                            <Label className="update-user-header" htmlFor="first name">First Name:</Label>
                            <Input className="form-control" type="text" id="firstName" onChange={handleFieldChange} placeholder="First Name" value={users.firstName} />
                        </div>
                        <div>
                            <Label className="update-user-header" htmlFor="last name">Last Name:</Label>
                            <Input className="form-control" type="text" id="lastName" onChange={handleFieldChange} placeholder="Last Name" value={users.lastName} />
                        </div>
                        <div>
                            <Label className="update-user-header" htmlFor="email">Email:</Label>
                            <Input className="form-control" type="text" id="email" onChange={handleFieldChange} placeholder="Email" value={users.email} />
                        </div>
                        <div>
                            <Label className="update-user-header" htmlFor="image">Add Image:</Label>{" "}
                            <Input className="form-control" type="file" id="image" onChange={uploadImage} placeholder="Email" />
                        </div>
                        <div className="profileImageEdit">
                            {isLoading ? (
                                <h4>Loading...</h4>
                            ) : (
                                <>
                                    <img className="mainImage" src={image}   />

                                    <Button className="comment-save-button"
                                        variant="secondary" size="sm"
                                        disabled={isLoading}
                                        onClick={handleUserUpdate}>
                                        Update
                                    </Button>

                                </>)}
                        </div>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}

