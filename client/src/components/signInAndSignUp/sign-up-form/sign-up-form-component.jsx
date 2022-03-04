import React from 'react';
import './sign-up-form.styles.scss'
import { useForm } from "react-hook-form";
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const SignUpForm = () => {
    const { register, handleSubmit, watch } = useForm();
    const onSubmit = data => console.log(data);
    const history = useNavigate();
    // const [isValid, setIsValid] = useState(true);


    // const [data, setData] = useState(null);

    // const handleSubmit = async (e) => {

    //     e.preventDefault()

    //     // const data = { name: username, email: email, password: password, pinNumber: pin, dateOfBirth: dob, phoneNumber: phone };
    //     await axios.post('http://localhost:5000/users', data).then(function (response) {

    //         console.log(response);
    //         console.log(response.status)

    //         if (response.status === 201) {
    //             history("/welcome-sign-in")
    //         } else {
    //             return;
    //         }
    //     }).catch((error) => {
    //         console.log(error.response.status, "400 BAD REQUEST")
    //         if (error.response.status === 400) {
    //             setIsValid(false)
    //             alert("Please read the instructions below and fix your inputs")
    //         }
    //     })





    // }

    return (


        <div className="signUpform__centered">
            <form onSubmit={handleSubmit(onSubmit)} className="signUpForm">
                <span className="signUp">Sign Up</span>
                <TextField required id="outlined-basic" {...register("username")} margin="normal" type="text" label="Username" placeholder='Create a username' varient="outlined" className="forminput signUpForm__input-createUsername" />
                <TextField required id="outlined-basic" {...register("email")} margin="normal" type="text" label="Email" placeholder='Create an email' varient="outlined" className="forminput signUploginForm__input-email" />
                <TextField required id="outlined-basic"  {...register("password")} margin="normal" type="password" label="Password" placeholder='Create a password' varient="outlined" className="forminput signUploginForm__input-password" />
                <TextField required id="outlined-basic"  {...register("password")} margin="normal" type="password" label="Confirm Password" placeholder='Confirm password' varient="outlined" className="forminput signUploginForm__input-password" />
                <TextField required id="outlined-basic"  {...register("pin")} margin="normal" type='text' label="Pin Number" placeholder="1234567" variant="outlined" className="forminput signUpForm__input-pin" />
                <TextField autoComplete="true" required {...register("dob")} id="outlined-basic" type='text' margin="normal" label="Date Of Birth" placeholder="mm/dd/yyyy Format" variant="outlined" className="forminput signUpForm__input-dateOfBirth" />
                <TextField autoComplete='true' required {...register("phoneNumber")} id="outlined-basic" margin="normal" placeholder="Phone Number 1-555-555-5555" label="Phone Number" magin="normal" className="forminput signUpForm__input-phoneNumber" />
                <br />
                {/* {!isValid ? <h4 style={{ color: "red" }}>"READ THE RULES BELOW THEN FIX YOUR ENTRIES AND TRY AGAIN!"</h4> : ""} */}
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