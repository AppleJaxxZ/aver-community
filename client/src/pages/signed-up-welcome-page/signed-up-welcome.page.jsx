import React, { useState, useEffect } from 'react';
import "./signed-up-welcome.styles.scss"
import { Link } from 'react-router-dom';
import PageLayout from '../pages-layout/pages-layout.layout';

const SignedInWelcomePage = () => {
    const [isAUserLoggedIn, setIsAUserLoggedIn] = useState(null)

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
            const foundUser = loggedInUser;
            console.log(foundUser)
            setIsAUserLoggedIn(foundUser);
        } else {
            return;
        }


    }, []);
    return (
        <PageLayout>
            <span>Thank you for using Aver-Community</span>
            <h2>How To Guide: </h2>
            <p>Written By yours truely</p>
            <div>
                {
                    isAUserLoggedIn ? <Link to="/dashboard">CONTINUE TO DASHBOARD PAGE</Link> : <Link to="/">Home</Link>
                }

            </div>

        </PageLayout>
    )
}

export default SignedInWelcomePage