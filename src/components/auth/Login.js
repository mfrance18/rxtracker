import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Button, Input } from "reactstrap";
import "./Login.css"


export const Login = ({ setAuthUser }) => {
    const [loginUser, setLoginUser] = useState({ email: "" })
    const [existDialog, setExistDialog] = useState(false)

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
                    setExistDialog(true)
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" open={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
            </dialog>
            <section>
                <div>
                    <h1 className="loginTitle">Welcome To Rx Tracker</h1>
                </div>

                <Form className="form--login" onSubmit={handleLogin}>
                    <h2>Please sign in</h2>
                    <FormGroup>
                        <Label htmlFor="inputEmail"></Label>
                        <Input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </FormGroup>
                    <FormGroup>
                        <Button className="sign-in-button" type="submit">
                            Sign in
                        </Button>
                        <section className="link--register">
                            <h6>Not Signed Up?</h6>
                            <div className="register">
                                <Link to="/register">Register for an account here</Link>
                            </div>
                        </section>
                    </FormGroup>
                </Form>

            </section>

        </main>
    )
}