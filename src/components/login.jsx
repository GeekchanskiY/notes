import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login }  from "../features/JWTSlice";
import { login_request } from "../utils/user_requests";

export default function Login (){
    const jwt_state = useSelector((state) => state.jwt)
    const dispatch = useDispatch()

    const [log, setLogin] = useState('login')
    const [password, setPassword] = useState('password')
    const [error, setError] = useState()

    const navigate = useNavigate()

    const login_user = async () => {
        let data = await login_request(log, password)
        if (data.error != undefined){
            dispatch(login(data))
            navigate('/')
        } else {
            setError('invalid credentials')
        }
    }
    const fake_login = async () => {
        dispatch(login({
            authentificated: true,
            token: '1000-1000-abcd-abcd',
            username: 'DMT',
            role: 'admin',
            email: 'dmt@mail.ru'
        }))
        navigate('/')
    }
    return(
        <div>
            <div className="logregform">
                <h1>Login</h1> <br />
                <span style={{color: 'red'}}>{error}</span><br />
                <span>Username:</span><br />
                <input type="text" placeholder="Enter username" id="username_form" onChange={(e) => {setLogin(e.target.value)}}/><br /> <br />
                <span>Password:</span> <br />
                <input type="password" placeholder="Enter password" id="password_form" onChange={(e) => {setPassword(e.target.value)}}/> <br /> <br />
                <input type="submit" value="Login" onClick={(e) => fake_login()}/>
            </div>
        </div>
    )
}