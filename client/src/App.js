import React from 'react';
import './App.css';
import Layout from './components/signInAndSignUp/layout/layout.jsx'
import { Routes, Route } from 'react-router-dom'
import UserDashboard from './pages/dashboard/user-dashboard.page';
import Homepage from './pages/home/home.page';
import SignUpPage from './pages/sign-up/sign-up.page';
import SignInPage from './pages/sign-in/sign-in-page';
import SignedInWelcomePage from './pages/signed-up-welcome-page/signed-up-welcome.page';

function App() {
  return (
    <div className="App">


      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/welcome-sign-in" element={<SignedInWelcomePage />} />

      </Routes>


    </div>
  );
}

export default App;
