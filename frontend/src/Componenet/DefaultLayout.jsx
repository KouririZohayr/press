import React from 'react'
import { Outlet } from 'react-router-dom'
import { useStateContext } from '../Context/ContextProvider';
import { Navigate } from 'react-router-dom';
function DefaultLayout() {
    const {user, token, setUser, setToken, notification} = useStateContext();

  if (!token) {
    return <Navigate to="/login"/>
  }
  return (
    
    <div>DefaultLayout


        <Outlet />
    </div>
  )
}

export default DefaultLayout