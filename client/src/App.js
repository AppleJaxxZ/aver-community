import React from 'react';
import './App.css';
import Layout from './components/signInAndSignUp/layout/layout.jsx'
import LoginForm from './components/signInAndSignUp/login-form/login-form.component.jsx'
import Header from './components/heading/heading.component.jsx'
import SignUpForm from './components/signInAndSignUp/sign-up-form/sign-up-form-component';

function App() {
  return (
    <div className="App">

      <Layout>
        <Header />
        <SignUpForm />
        <LoginForm />
      </Layout>

    </div>
  );
}

export default App;
