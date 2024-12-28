import React from 'react'
import { Navigate } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoutes({children}) {
    let token=localStorage.getItem('token')
    try{
        const decoded = jwtDecode(token);
        if(decoded.role !='user'){
            localStorage.clear()
            return <Navigate to='/Signin'/>
        }
    }catch(Error){
        localStorage.clear()
        return <Navigate to='/Signin'/>
    }
    if(token) return children
return <Navigate to='/Signin'/>
}
