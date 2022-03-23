import React, { useState, useEffect } from 'react';
import "./signed-up-welcome.styles.scss"
import { Link } from 'react-router-dom';
import PageLayout from '../pages-layout/pages-layout.layout';
import Layout from '../../components/signInAndSignUp/layout/layout';


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
            <Layout>
                <span>Thank you for using Aver-Community</span>
                <h2>How To Guide: </h2>
                <h3>Hello and welcome to Aver-Community, an application that allows you to receive your AverHealth
                    schedule every night via text-message.
                </h3>
                <h4>Lets get started...</h4>

                <ul>

                </ul>

                <div>
                    {
                        isAUserLoggedIn ? <Link to="/dashboard">CONTINUE TO DASHBOARD PAGE</Link> : <Link to="/">Home</Link>
                    }

                </div>
            </Layout>
        </PageLayout>
    )
}

export default SignedInWelcomePage