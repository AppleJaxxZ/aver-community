import React, { useState, useEffect } from 'react';
import "./user-dashboard.styles.scss"
import axios from 'axios'
import PageLayout from '../pages-layout/pages-layout.layout';
import { Link, useNavigate } from 'react-router-dom'
import SignOutButton from '../../components/sign-out-button/sign-out-button.component'
import Layout from '../../components/signInAndSignUp/layout/layout';
import { Divider, Paper } from '@mui/material';
import EditModal from '../../components/edit-modal/edit-modal.component';



const UserDashboard = () => {
    const navigate = useNavigate();
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [showNameModal, setShowNameModal] = useState(false)
    const [showEmailModal, setShowEmailModal] = useState(false)
    const [showDobModal, setShowDobModal] = useState(false)
    const [showPhoneModal, setShowPhoneModal] = useState(false)
    const [showPinModal, setShowPinModal] = useState(false)
    const [realUser, setRealUser] = useState({});
    const [token, setToken] = useState("");

    useEffect(() => {

        const authorized = localStorage.getItem("user");
        const parsedAuth = JSON.parse(authorized);
        console.log(parsedAuth.user)
        if (parsedAuth) {
            setLoggedInUser(parsedAuth);
            setToken(parsedAuth.token)


            var config = {
                method: 'get',
                url: 'http://localhost:5000/users/me',
                headers: {
                    'Authorization': `Bearer ${parsedAuth.token}`
                },
            };

            axios(config)
                .then(function (response) {
                    console.log(response.data);
                    setRealUser({ name: response.data.name, email: response.data.email, dateOfBirth: response.data.dateOfBirth, pinNumber: response.data.pinNumber, phoneNumber: response.data.phoneNumber })

                })
                .catch(function (error) {
                    console.log(error);
                });

        } else {
            navigate("/signIn")
        }
    }, [navigate]);

    const openNameModal = () => {
        setShowNameModal(true)
    }

    const hideNameModal = () => {
        setShowNameModal(false)
    }

    //Email modal
    const openEmailModal = () => {
        setShowEmailModal(true)
    }

    const hideEmailModal = () => {
        setShowEmailModal(false)
    }

    //Date of birth modal
    const openDobModal = () => {
        setShowDobModal(true)
    }

    const hideDobModal = () => {
        setShowDobModal(false)
    }


    //Phone Modal
    const openPhoneModal = () => {
        setShowPhoneModal(true)
    }

    const hidePhoneModal = () => {
        setShowPhoneModal(false)
    }

    //Pin Number Modal
    const openPinModal = () => {
        setShowPinModal(true)
    }

    const hidePinModal = () => {
        setShowPinModal(false)
    }





    return (
        <PageLayout>
            <Layout >
                <h1 style={{}}>USER DASHBOARD PAGE</h1>

                <div className="navigation">
                    <ul style={{ listStyle: "none" }}>
                        <li> {loggedInUser ? <SignOutButton /> : <Link to="/signIn">Sign In</Link>} </li>
                        <li><Link to="/welcome-sign-in" >Back to Welcome Page</Link></li>
                    </ul>
                </div>


                <Paper style={{ width: "100%" }} elevation={20}>
                    <h2>Name</h2>
                    <h1>{realUser.name}</h1>  <p className='editButton' onClick={openNameModal}>Edit</p>
                    <Divider />
                    <h2>Email</h2>
                    <span>{realUser.email}</span><p className='editButton' onClick={openEmailModal}>Edit</p>
                    <Divider />
                    <h2>Date Of Birth</h2>
                    <span>{realUser.dateOfBirth}</span><p className='editButton' onClick={openDobModal}>Edit</p>
                    <Divider />
                    <h2>Phone Number</h2>
                    <span>Phone:{realUser.phoneNumber}</span><p className='editButton' onClick={openPhoneModal}>Edit</p>
                    <Divider />
                    <h2>AverHealth Number</h2>
                    <span>{realUser.pinNumber}</span><p className='editButton' onClick={openPinModal}>Edit</p>

                </Paper>


            </Layout>
            <EditModal show={showNameModal} token={token} type="name" name="Name" placeholder="Enter a name" handleClose={hideNameModal} message="Please use your first name">
            </EditModal>
            <EditModal show={showEmailModal} token={token} handleClose={hideEmailModal} type="email" name="email" placeholder='Enter a new working email' message="Please enter a working Email address" >
            </EditModal>
            <EditModal show={showDobModal} token={token} handleClose={hideDobModal} type="dateOfBirth" name="dateOfBirth" message='This must be the same Date Of Birth used with AverHealth' placeholder="09/15/1990">
            </EditModal>
            <EditModal show={showPhoneModal} handleClose={hidePhoneModal} type="phoneNumber" name="phoneNumber" placeholder="16105456576" message="Make this your personal number" >
            </EditModal>
            <EditModal show={showPinModal} handleClose={hidePinModal} type="pinNumber" name="pinNumber" placeholder='2520299' message="Please enter your AverHealth 7 digit pin">

            </EditModal>
        </PageLayout >
    )
}


export default UserDashboard