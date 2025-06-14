import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if (loading) {
        return <span className='loading loading-ring loading-xl'></span>
    }
    if (!user) {
        return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }

    return children;
};

export default PrivateRoutes;