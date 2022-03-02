import React, { useState, useEffect } from 'react';
import './login-form.styles.scss'
import { TextField, Button } from '@mui/material';
import axios from 'axios';


const LoginForm = () => {

    const [pin, setPin] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    // const [data, setData] = useState(null);


    const handleSubmit = (e) => {

    }
    return (

        <div className="form__centered">
            <form onSubmit={handleSubmit} method='POST' action="/api" className="loginForm">
                <span className="signIn-header" >Login</span>
                <TextField autoComplete='true' margin="normal" required id="outlined-basic" type='text' onChange={e => setPin(e.target.value)} label="Enter your username" placeholder="ex. CaptainCrunch22" variant="outlined" className="forminput loginForm__input-pin" />
                <TextField autoComplete='true' margin="normal" required id="outlined-basic" type="password" onChange={e => setDob(e.target.value)} label="Enter your password" placeholder="Willd123Fox!" variant="outlined" className="forminput loginForm__input-dateOfBirth" />
                <br />


                <br /> <Button type="submit" variant="contained" className="loginForm__button-start" >Login Up</Button>

                {/* <p>{!data ? "Loading..." : data}</p> */}

            </form>
        </div >


    )
}

export default LoginForm;