import React from 'react'
import "./home.styles.scss"
import Header from '../../components/heading/heading.component'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import PageLayout from '../pages-layout/pages-layout.layout';
import Layout from '../../components/signInAndSignUp/layout/layout'

const Homepage = () => {
    return (
        <PageLayout>
            <Layout>
                <Header />

                <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around" }}>
                    <li><Link to="/dashboard"><Button>DashBoard</Button></Link></li>
                    <li><Link to="/signUp">Sign Up</Link> </li>
                    <li><Link to="/signIn">Sign In</Link> </li>
                </ul>
            </Layout>
        </PageLayout>


    )
}


export default Homepage