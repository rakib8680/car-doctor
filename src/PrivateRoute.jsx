import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PulseLoader } from 'react-spinners';
import { AuthContext } from './providers/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return (
            <div className='h-screen flex items-center justify-center'>
                <PulseLoader color="#d64936" size={25} />
            </div>
        )
    }
    if (user?.email) {
        return children
    }
    return <Navigate to='/login' replace ></Navigate>
};

export default PrivateRoute;