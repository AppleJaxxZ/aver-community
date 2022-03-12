import React, { useState, useEffect } from 'react';
import './login-form.styles.scss'
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Layout from '../layout/layout';
import SignOutButton from '../../sign-out-button/sign-out-button.component';




const LoginForm = () => {
    const [loggedInUser, setLoggedInUser] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useNavigate();

    const regex = /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
    const errorMessage = "Password must contain at least 8 characters, one uppercase, one number and one special case character";



    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setLoggedInUser(foundUser);
        }
    }, []);



    const handleSubmit = async (data) => {

        const loggedInUser = { email, password };

        axios.post('http://localhost:5000/users/login', loggedInUser).then(function (response) {

            if (response.status === 201) {
                console.log("Account Login Success!")
                setLoggedInUser(response.data)
                localStorage.setItem('user', response.data)
                console.log(response.data)
                history("/welcome-sign-in")
            } else {
                return;
            }
        }).catch((error) => {
            console.log(error.response.status, "400 BAD REQUEST")
            if (error.response.status === 400) {
                alert("Please read the instructions below and fix your inputs")
            }

        })

        console.log(data);


    }

    if (loggedInUser) {
        return <Layout>
            <div>
                <h1>Sign In Page</h1>
                <span>{loggedInUser.user.name} is logged in, please logout, then sign-in to another users account.</span>
                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/dashboard">{loggedInUser.user.name} 's Dashboard</Link></li>
                    <li><SignOutButton>SIGN ME OUT</SignOutButton></li>
                </ul>

            </div>
        </Layout>
    }

    return (

        <div className="form__centered">
            <form onSubmit={handleSubmit} method='POST' action="/api" className="loginForm">
                <span className="signIn-header" >Login</span>
                <TextField autoComplete='true' margin="normal" value={email} onChange={({ target }) => setEmail(target.value)} required id="outlined-basic" type='text' label="Enter your email" placeholder="ex. yourEmail@gmail.comx" variant="outlined" className="forminput loginForm__input-pin" />

                <TextField autoComplete='true' value={password} onChange={({ target }) => setPassword(target.value)} margin="normal" required id="outlined-basic" type="password" label="Enter your password" placeholder="Willd123Fox!" variant="outlined" className="forminput loginForm__input-dateOfBirth" />

                <br />


                <br /> <Button type="submit" variant="contained" className="loginForm__button-start" >Login Up</Button>

                {/* <p>{!data ? "Loading..." : data}</p> */}

            </form>
        </div >


    )
}

export default LoginForm;