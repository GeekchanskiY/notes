import React from "react";

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }
    login(){
        alert('aaa')
    }
    render(){
        return <div>
            <div className="logregform">
                <h1>Login</h1> <br />
                <span>Username:</span><br />
                <input type="text" placeholder="Enter username"/><br /> <br />
                <span>Password:</span> <br />
                <input type="password" placeholder="Enter password"/> <br /> <br />
                <input type="submit" value="Login" onClick={(e) => this.login()}/>
            </div>
        </div>
    }
}