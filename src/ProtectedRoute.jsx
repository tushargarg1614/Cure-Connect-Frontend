import React from 'react'
import {Navigate, Outlet} from 'react-router-dom';


function ProtectedRoute({allowedRole}) {
   let role=localStorage.getItem('activeUserRole')
    let token=localStorage.getItem('token');
    console.log('token= ',token)
    console.log(`role= ${role} and allowed = ${allowedRole}`)
    if(token && role==allowedRole){
        return <Outlet/>
    }else{
        localStorage.clear();
        return <Navigate to='/login'></Navigate>
    }
}

export default ProtectedRoute