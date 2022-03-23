import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";




const SignOutSpan = () => {
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        const signOutToken = JSON.parse(localStorage.getItem("user"));
        const token = signOutToken.token;
        var config = {
            method: 'post',
            url: 'http://localhost:5000/users/logout',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios(config)
            .then(function (response) {
                if (response.status === 200) {
                    console.log("You have successfully logged off!")
                    setTimeout(() => {
                        localStorage.clear();
                        navigate("/")
                    }, 1000)
                }

            })
            .catch(function (error) {
                console.log(error);
            });



    };
    return (
        <div><span onClick={handleLogout}>SIGN OUT</span></div>
    )
}

export default SignOutSpan;