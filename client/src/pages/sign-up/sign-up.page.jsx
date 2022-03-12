import React from 'react'
import SignUpForm from '../../components/signInAndSignUp/sign-up-form/sign-up-form-component'
import Layout from '../../components/signInAndSignUp/layout/layout'
import './signInAndUp.styles.scss'



const SignUpPage = () => {
    return (

        <div>
            <Layout>
                <h1>Sign Up Page</h1>
                <SignUpForm />
            </Layout>

        </div>




    )
}


export default SignUpPage