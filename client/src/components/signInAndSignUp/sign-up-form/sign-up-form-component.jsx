import React, { useState, useEffect } from 'react';
import './sign-up-form.styles.scss'
import { useForm } from "react-hook-form";
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required().matches(
        /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
    confirmpassword: yup.string().min(6).required().oneOf([yup.ref('password'), null], "Passwords don't match."),
    pinNumber: yup.string().min(7).max(7).required(),
    dateOfBirth: yup.string().min(10).max(10).required().matches(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/, "Please include the slashes!"),
    phoneNumber: yup.string().min(11).max(11).required()


}).required();

const SignUpForm = () => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [isLoggedInUser, setIsLoggedInUser] = useState(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });
    const history = useNavigate();


    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser)
        console.log(JSON.parse(loggedInUser))
        const foundUser = JSON.parse(loggedInUser);
        setIsLoggedInUser(foundUser);

    }, []);





    const onSubmit = async (data) => {

        try {
            axios.post('http://localhost:5000/users', data).then(function (response) {

                if (response.status === 201) {
                    console.log("Account Creation Success!")
                    setIsLoggedInUser(response.data)
                    console.log("THIS IS THE RESPONSE DATA SAVED", response.data)
                    history("/signIn")
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
            reset();
        } catch (error) {
            console.error(error)
        }

    }

    if (isLoggedInUser) {
        console.log(isLoggedInUser)
        return <div>

            <span>{isLoggedInUser.user.name} is loggged in...Sign out of the current user first to sign up another user.</span>
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">{isLoggedInUser.user.name} 's Dashboard</Link></li>
                <li><button>Sign Me Out</button></li>

            </ul>
        </div>;

    }

    return (
        <div className="signUpform__centered">
            <form onSubmit={handleSubmit(onSubmit)} className="signUpForm">
                <span className="signUp">Sign Up</span>
                <TextField required id="outlined-basic" {...register("name")} margin="normal" type="text" label="Name" placeholder='First or last name' varient="outlined" className="forminput signUpForm__input-createUsername" />
                <p>{errors.username?.message}</p>
                <TextField required id="outlined-basic" {...register("email")} margin="normal" value={email} onChange={({ target }) => setEmail(target.value)} type="email" label="Email" placeholder='Create an email' varient="outlined" className="forminput signUploginForm__input-email" />
                <p>{errors.email?.message}</p>
                <TextField required id="outlined-basic"  {...register("password")} value={password} onChange={({ target }) => setPassword(target.value)} margin="normal" type="password" label="Password" placeholder='Create a password' varient="outlined" className="forminput signUploginForm__input-password" />
                <p>{errors.password?.message}</p>
                <TextField required id="outlined-basic"  {...register("confirmpassword")} margin="normal" type="password" label="Confirm Password" placeholder='Confirm password' varient="outlined" className="forminput signUploginForm__input-password" />
                <p>{errors.confirmpassword?.message}</p>
                <TextField required id="outlined-basic"  {...register("pinNumber")} margin="normal" type='text' label="Pin Number" placeholder="1234567" variant="outlined" className="forminput signUpForm__input-pin" />
                <p>{errors.pin?.message}</p>
                <TextField autoComplete="true" required {...register("dateOfBirth")} id="outlined-basic" type='text' margin="normal" label="Date Of Birth" placeholder="mm/dd/yyyy Format" variant="outlined" className="forminput signUpForm__input-dateOfBirth" />
                <p>{errors.dob?.message}</p>
                <TextField autoComplete='true' required {...register("phoneNumber")} id="outlined-basic" margin="normal" placeholder="Phone Number 1-555-555-5555" label="Phone Number" magin="normal" className="forminput signUpForm__input-phoneNumber" />
                <p>{errors.phoneNumber?.message}</p>
                <br />

                <ol className="signUpForm__Requirements-list" style={{ listStyle: "none" }}>Form Submission Requirements:
                    <li>Username should be your first name</li>
                    <li>Passwords require 6 characters, 1 capital letter, 1 number and one special character. !@#$%^ </li>
                    <li>your email must be valid and able to receive the welcome email</li>
                    <li>Date Of Birth must be in DD/MM/YYYY example: 01/20/1987 MUST INCLUDE "/" the slashes and ZERO's!</li>
                    <li>Phone Number: Must be 11 digits beginning with a 1! Example: 14842175555</li>
                </ol>

                <Button type="submit" variant="contained" className="signUpForm__button-start" >Sign Up</Button>

            </form>
        </div>
    )
}

export default SignUpForm;