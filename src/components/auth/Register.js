import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import MainLogo from "../../images/MainLogo.png"
import "./Login.css"

export const Register = ({ setAuthUser }) => {

    const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: ""})

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
                            firstName: registerUser.firstName,
                            lastName: registerUser.lastName, 
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
                    alert("Account with that Email already exists")
                }
            })

    }

    return (
        <>
            <section className="mainLogin">
                <main className="container--login">
                    <div className="login-logo"><img className="loginImage" src={MainLogo} alt="Rx Tracker Logo" /></div>
                    <Form className="form--login" onSubmit={handleRegister}>
                        <h2 className="registerTitle">Register Your Account Below</h2>
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
                            <Button className="regSignIn" type="submit" variant="secondary" size="sm"> Sign in </Button>
                            <Button onClick={handleCancel} className="regCancel" variant="secondary" size="sm"> Cancel </Button>
                        </FormGroup>
                    </Form>
                </main >
            </section>
        </>
    )
}