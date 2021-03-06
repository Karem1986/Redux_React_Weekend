import React, { useState } from 'react'
import { signUp } from "../store/user/actions"//Thunk from user/actions.js gets imported here
import { useDispatch } from "react-redux"

export default function SignupPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")

    const dispatch = useDispatch()
    //Handler events:

    function handleSubmit(event) {
        event.preventDefault()
        dispatch(signUp(name, email, password)) //dispatch to redux store the user login information
        // console.log('testing signup inputs', password, email, name);
    }

    return (
        <div>
            <h1>Signup</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name"
                        onChange={(event) => { setName(event.target.value) }} />
                    <label>Email:</label>
                    <input type="email" placeholder="email@email.com" name="email"
                        onChange={(event) => { setEmail(event.target.value) }} />

                    <label>Password:</label>
                    <input type="password" name="password"
                        onChange={(event) => { setPassword(event.target.value) }} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}