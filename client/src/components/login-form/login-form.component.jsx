import React, {useState, useEffect} from 'react';
import './login-form.styles.scss'
import { TextField} from '@mui/material';
import axios from 'axios';


const LoginForm = () => {

    const [pin, setPin] = useState('');
    const [dob, setDob ] = useState('');
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
        localStorage.setItem('pin', pin );
        localStorage.setItem('dob', dob);
        localStorage.setItem('phone', phone);
        e.target.reset()
    
        alert(`Submitting ${pin}, ${dob}, and ${phone}.  Time to sick back, relax, and let your scheduled alerts come to you.  Cheers! `);
        
    }
    return (
    
        <div className="form__centered">
            <form onSubmit={handleSubmit} method='POST' action="/api"   className="loginForm">
            <TextField autoComplete='true' required id="outlined-basic" type='text'  onChange={ e=> setPin(e.target.value)} label="Pin Number" placeholder="1234567" variant="outlined" className="forminput loginForm__input-pin" />
            <TextField autoComplete='true' required id="outlined-basic" type='text'  margin="normal" onChange={e=> setDob(e.target.value)} label="Date Of Birth"  placeholder="mm/dd/yyyy" variant="outlined" className="forminput loginForm__input-dateOfBirth" />
            <br/>
            
            <TextField autoComplete='true' required id="outlined-basic" placeholder="Phone Number 555-555-5555" onChange={ e=> setPhone(e.target.value)} label="Phone Number" magin="normal" className="forminput loginForm__input-phoneNumber" />
           <br/> <button type="submit"   className="loginForm__button-start" >Start</button>

           {/* <p>{!data ? "Loading..." : data}</p> */}

            </form>
        </div>

    
    )}

export default LoginForm;