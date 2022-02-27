import React, { useState, useEffect } from 'react';
import './login-form.styles.scss'
import { TextField, Button } from '@mui/material';
import axios from 'axios';


const LoginForm = () => {

    const [pin, setPin] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    // const [data, setData] = useState(null);

    useEffect(() => {
        const objed = {
            pin: localStorage.getItem('pin'),
            dob: localStorage.getItem('dob'),
            phone: localStorage.getItem('phone')
        }
        axios.post('/api', objed).then(res => console.log("Schedule Sent."))

        // fetch('/api').then((res) => res.json()).then((data) => setData(data.message))
    }, [pin]);


    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('pin', pin);
        localStorage.setItem('dob', dob);
        localStorage.setItem('phone', phone);
        e.target.reset()

        alert(`Submitting ${pin}, ${dob}, and ${phone}.  Time to sick back, relax, and let your scheduled alerts come to you.  Cheers! `);

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