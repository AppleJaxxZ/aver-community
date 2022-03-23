import React from 'react'

const AuthWrapper = ({ children }) => {
    const [authorized, setAuthorized] = React.useState();

    React.useEffect(() => {
        const loggedIn = localStorage.getItem('user');
        if (loggedIn) {
            setAuthorized(loggedIn)
        }
    }, []);


    return <div>
        {children}
    </div>
}