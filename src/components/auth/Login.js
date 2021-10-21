import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { Label, Button, Input } from "reactstrap";
import { Form } from "react-bootstrap";
import MainLogo from "../../images/MainLogo.png"
import "./Login.css"


export const Login = ({ setAuthUser }) => {
    const [loginUser, setLoginUser] = useState({ email: "" })

    const history = useHistory()

    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }

    const existingUserCheck = () => {
        // If your json-server URL is different, please change it below!
        return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        existingUserCheck()
            .then(exists => {
                if (exists) {
                    // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
                    setAuthUser(exists)
                    history.push("/")
                } else {
                   alert("This user does not exist")
                }
            })
    }

    return (
        <>
            <section className="mainLogin">
                <main className="container--login">
                    <div className="login-logo"><img className="loginImage" src={MainLogo} alt="Rx Tracker Logo" /></div>
                    <section>
                        <Form className="form--login" onSubmit={handleLogin}>
                            <h2 className="signIn">Please sign in</h2>
                            <Form.Group>
                                <Label htmlFor="inputEmail" className="email"> Email address </Label>
                                <Input type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    required autoFocus
                                    value={loginUser.email}
                                    onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="belowInput">
                                <Button className="sign-in-button" variant="secondary" size="sm" type="submit">
                                    Sign in
                                </Button>
                                <section className="link--register">
                                    <h6>Not Signed Up?</h6>
                                    <div className="register">
                                        <Link to="/register">Register for an account here</Link>
                                    </div>
                                </section>
                            </Form.Group>
                        </Form>
                    </section>
                </main>
            </section>
        </>
    )
}