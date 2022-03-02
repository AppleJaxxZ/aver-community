import React from 'react'
import './sign-in-page.styles.scss'
import PageLayout from '../pages-layout/pages-layout.layout';
import LoginForm from '../../components/signInAndSignUp/login-form/login-form.component';

const SignInPage = () => {
    return (
        <PageLayout>
            <LoginForm />
        </PageLayout>
    )
}

export default SignInPage