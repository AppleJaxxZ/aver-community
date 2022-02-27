import React, { useState } from 'react';
import './sign-up-form.styles.scss'
import { TextField, Button } from '@mui/material';
import axios from 'axios';


const SignUpForm = () => {

    const [pin, setPin] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    // const [data, setData] = useState(null);

    const handleSubmit = (e) => {
    }

    return (
        <div className="signUpform__centered">

            <form onSubmit={handleSubmit} method='POST' action="/api" className="signUpForm">
                <span className="signUp">Sign Up</span>
                <TextField required id="outlined-basic" margin="normal" type="text" label="Username" placeholder='Create a username' varient="outlined" className="forminput signUpForm__input-createUsername" />
                <TextField required id="outlined-basic" margin="normal" type="text" label="Password" placeholder='Create a password' varient="outlined" className="forminput signUploginForm__input-password" />
                <TextField required id="outlined-basic" margin="normal" type='text' onChange={e => setPin(e.target.value)} label="Pin Number" placeholder="1234567" variant="outlined" className="forminput signUpForm__input-pin" />
                <TextField autoComplete="true" required id="outlined-basic" type='text' margin="normal" onChange={e => setDob(e.target.value)} label="Date Of Birth" placeholder="mm/dd/yyyy Format" variant="outlined" className="forminput signUpForm__input-dateOfBirth" />
                <TextField autoComplete='true' required id="outlined-basic" margin="normal" placeholder="Phone Number 1-555-555-5555" onChange={e => setPhone(e.target.value)} label="Phone Number" magin="normal" className="forminput signUpForm__input-phoneNumber" />
                <br />
                <Button type="submit" variant="contained" className="signUpForm__button-start" >Sign Up</Button>

                {/* <p>{!data ? "Loading..." : data}</p> */}

            </form>
        </div>
    )
}

export default SignUpForm;