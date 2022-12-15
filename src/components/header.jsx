import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";

export default function Header(){
        const jwt_state = useSelector((state) => state.jwt)
    
        return (<header className="main_header">
        <div className='app-title'> <Link to={'/'}>Notes</Link>  </div>
        <div className="user">
            <Link to={'user/'+jwt_state.userId}>{jwt_state.username == null ? 'Guest' : jwt_state.username}</Link>
          </div>
          
          
        </header>)
}