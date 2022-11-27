import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {

    const phone=localStorage.getItem('phone')
    const isLogged = localStorage.getItem(phone)

    if (isLogged)
        return <Outlet />

    else
        return <Navigate to='/login' />


}

export default ProtectedRoutes