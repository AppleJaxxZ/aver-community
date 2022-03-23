import React, { useState, useEffect } from 'react'
import "./home.styles.scss"
import Header from '../../components/heading/heading.component'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import PageLayout from '../pages-layout/pages-layout.layout';
import Layout from '../../components/signInAndSignUp/layout/layout'
import SignOutButton from '../../components/sign-out-button/sign-out-button.component';

const Homepage = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const signedInUser = localStorage.getItem("user")
        console.log(signedInUser);
        if (signedInUser) {
            const foundUser = JSON.parse(signedInUser);
            console.log(foundUser)
            setLoggedInUser(foundUser);
        }
    }, []);

    return (
        <PageLayout>
            <Layout>
                <Header />

                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }}>
                    <li><Link to="/signUp">Sign Up</Link> </li>
                    {loggedInUser ? <li><SignOutButton /></li> : <li><Link to="/signIn">Sign In</Link> </li>}
                    {loggedInUser ? <li><Link to="/dashboard">Dashboard</Link></li> : null}

                </ul>
            </Layout>
        </PageLayout>


    )
}


export default Homepage