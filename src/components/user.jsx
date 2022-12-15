import React from "react";
import { redirect } from "react-router-dom";

export default function UserPage (){
    

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

    
    return <div>
        <div className="logregform" style={{padding: "20px"}}>
            </div>
    </div>
    
}