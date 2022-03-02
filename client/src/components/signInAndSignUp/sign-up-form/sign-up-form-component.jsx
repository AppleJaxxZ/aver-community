import React, { useState } from 'react';
import './sign-up-form.styles.scss'
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const SignUpForm = () => {
    const history = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [dob, setDob] = useState('');
    const [phone, setPhone] = useState('');
    const [isValid, setIsValid] = useState(true);


    // const [data, setData] = useState(null);

    const handleSubmit = async (e) => {

        e.preventDefault()

        const data = { name: username, email: email, password: password, pinNumber: pin, dateOfBirth: dob, phoneNumber: phone };
        // await axios.post('http://localhost:5000/users', data).then(function (response) {
        //     console.log(response);
        //     console.log(response.status)

        //     if (response.status === 201) {
        //         history("/welcome-sign-in")
        //     } else {
        //         setIsValid(false)
        //         return;
        //     }
        // }).catch((error) => {
        //     console.log(error)
        // })


        fetch("http://localhost:5000/users", {

            // Adding method type
            method: "POST",

            // Adding body or contents to send
            body: JSON.stringify(data),

            // Adding headers to the request
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).catch((error) => {
            console.log(error, "DAMNNNNNNN")
        })



    }

    return (


        <div className="signUpform__centered">

            <form onSubmit={handleSubmit} className="signUpForm">
                <span className="signUp">Sign Up</span>
                <TextField required id="outlined-basic" name="username" onChange={e => setUsername(e.target.value)} margin="normal" value={username} type="text" label="Username" placeholder='Create a username' varient="outlined" className="forminput signUpForm__input-createUsername" />
                <TextField required id="outlined-basic" name="email" onChange={e => setEmail(e.target.value)} margin="normal" value={email} type="text" label="Email" placeholder='Create an email' varient="outlined" className="forminput signUploginForm__input-email" />
                <TextField required id="outlined-basic" value={password} name="password" onChange={e => setPassword(e.target.value)} margin="normal" type="password" label="Password" placeholder='Create a password' varient="outlined" className="forminput signUploginForm__input-password" />
                <TextField required id="outlined-basic" value={password} name="password" onChange={e => setPassword(e.target.value)} margin="normal" type="password" label="Confirm Password" placeholder='Confirm password' varient="outlined" className="forminput signUploginForm__input-password" />
                <TextField required id="outlined-basic" value={pin} name="pin" margin="normal" onChange={e => setPin(e.target.value)} type='text' label="Pin Number" placeholder="1234567" variant="outlined" className="forminput signUpForm__input-pin" />
                <TextField autoComplete="true" required name="dob" value={dob} onChange={e => setDob(e.target.value)} id="outlined-basic" type='text' margin="normal" label="Date Of Birth" placeholder="mm/dd/yyyy Format" variant="outlined" className="forminput signUpForm__input-dateOfBirth" />
                <TextField autoComplete='true' required id="outlined-basic" value={phone} onChange={e => setPhone(e.target.value)} name="phoneNumber" margin="normal" placeholder="Phone Number 1-555-555-5555" label="Phone Number" magin="normal" className="forminput signUpForm__input-phoneNumber" />
                <br />
                {!isValid ? <h1>"READ THE RULES BELOW THEN FIX YOUR ENTRIES AND TRY AGAIN!"</h1> : ""}
                <ol>Form Submission Requirements:  </ol>
                <li>Username should be your first name</li>
                <li>Passwords require 6 characters, 1 capital letter, 1 number and one special character. !@#$%^ </li>
                <li>your email must be valid and able to receive the welcome email</li>
                <li>Date Of Birth must be in DD/MM/YYYY example: 01/20/1987 MUST INCLUDE "/" the slashes and ZERO's!</li>
                <li>Phone Number: Must be 11 digits beginning with a 1! Example: 14842175555</li>

                <Button type="submit" variant="contained" className="signUpForm__button-start" >Sign Up</Button>

            </form>
        </div>
    )
}

export default SignUpForm;