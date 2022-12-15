import React from "react";
import { Link, Navigate } from "react-router-dom";
import { GetAllNotes, GetUserNotes, AddNote } from "../utils/note_requests";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login }  from "../features/JWTSlice";
import { login_request } from "../utils/user_requests";
import { GetAllNotes_request, AddNote_request, GetUserNotes_request } from "../utils/note_requests";



class UserListItem extends React.Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return <div>
            aaa
        </div>
    }
}

export default function UserList (){
    const jwt_state = useSelector((state) => state.jwt)
    const [users, setUsers] = useState(null)

    useEffect( () => {
        if (users == null){
            get_fake_users()
        }
        
        
    })

    const get_users = async () => {

    }

    const get_fake_users = () => {
        let users = [{
            userId: 1,
            username: "123",
            role: "user",
            email: "dmt@m.r"
        },
        {
            userId: 2,
            username: "1234",
            role: "user",
            email: "dmt@m.r"
        },
        {
            userId: 3,
            username: "12355",
            role: "admin",
            email: "dmt@m.r"
        },
    ]
    setUsers(users)
    }
    
    const navigate = useNavigate()
    
    if (jwt_state.authentificated == false || jwt_state.role != 'admin'){
        navigate('/')
        alert('a')
    }
    return <div>
        {users != null ? users.map((user, index) => {
            return <div key={"user"+index}>
                <Link to={'/user/'+user.userId}>{user.email}</Link>
            </div>
        }): 'no users'}
    </div>
}
