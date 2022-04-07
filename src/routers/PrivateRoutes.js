import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({ children }) => {

    const state = useSelector(state => state.auth)

    const location = useLocation();

    localStorage.setItem('lastPath', location.pathname + location.search)

    return state?.uid 
        ? children
        : <Navigate to={'/auth/login'}/>
}