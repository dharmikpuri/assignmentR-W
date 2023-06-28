import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { auth, token, role, username } = useSelector((state) => state.UserReducer);
    console.log(role)
    if(!auth){
        return <Navigate to={"/"}/>
      }
    
      return children
}

export default PrivateRoute;