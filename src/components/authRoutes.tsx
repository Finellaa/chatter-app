import React, { useEffect, useState} from 'react';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import  Home  from '../pages/Home';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IAuthRouteProps{}

export const AuthRoute: React.FC<IAuthRouteProps>= (props) => {
    const auth = getAuth()
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
        return () => AuthCheck();
    }, [auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) =>{
        if (user) {
            setLoading(false);
        } else {
            console.log('unauthorised');
            navigate('/login');
        }
    })

        if (loading) return <p>Loading...</p>
    return<div><Home/></div>
}