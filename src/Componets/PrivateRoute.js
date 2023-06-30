import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children,component }) => {
    const navigate = useNavigate();
    const isuser = !!sessionStorage.getItem("isLogin") || false;
    //  if(isuser){
    //     return (navigate('/login'))
    //  } else{
    //     return(<>{children}</>)
    //  }

    useEffect(() => {
        if (!isuser) {
            navigate("/login")

        }
    }, [isuser, navigate])

    return <>{component}</>

}

export default PrivateRoute
