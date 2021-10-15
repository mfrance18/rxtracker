import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import "./Login.css"

export const Register = ({ setAuthUser }) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" })
    const [conflictDialog, setConflictDialog] = useState(false)

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...registerUser }
        newUser[event.target.id] = event.target.value
        setRegisterUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
            .then(res => res.json())
            .then(user => !!user.length)
    }

    const handleCancel = () => {
        history.push("/login")
    }

    const handleRegister = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then((userExists) => {
                if (!userExists) {
                    // If your json-server URL is different, please change it below!
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: registerUser.email,
                            name: `${registerUser.firstName} ${registerUser.lastName}`
                        })
                    })
                        .then(res => res.json())
                        .then(createdUser => {
                            if (createdUser.hasOwnProperty("id")) {
                                // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                                setAuthUser(createdUser)
                                history.push("/")
                            }
                        })
                }
                else {
                    setConflictDialog(true)
                }
            })

    }

    return (
        <main className="container--login">

            <dialog className="dialog dialog--password" open={conflictDialog}>
                <div>Account with that email address already exists</div>
                <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
            </dialog>

            <Form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Please Register for Application Name</h1>
                <FormGroup>
                    <Label htmlFor="firstName"> First Name </Label>
                    <Input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="lastName"> Last Name </Label>
                    <Input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="inputEmail" className="email"> Email address </Label>
                    <Input type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
                    <Button type="submit"> Sign in </Button>
                    <Button onClick={handleCancel}> Cancel </Button>
                </FormGroup>




            </Form>
        </main >
    )
}