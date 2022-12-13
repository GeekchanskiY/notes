import React from "react";

export default class Register extends React.Component{
    constructor(props){
        super(props);
    }

    register(){
        let username = document.getElementById('form_username').value
        let pass = document.getElementById('form_password').value
        let pass2 = document.getElementById('form_password2').value
        if (pass != pass2){
            alert("Password does not match!")
        }
    }

    render(){
        return <div>
            <div className="logregform">
                <h1>Register</h1> <br />
                <span>Username:</span><br />
                <input type="text" placeholder="Enter username" id="form_username"/><br /> <br />
                <span>Password:</span> <br />
                <input type="password" placeholder="Enter password" id="form_password"/> <br /> <br />
                <span>Confirm:</span> <br />
                <input type="password" placeholder="Confirm password" id="form_password2"/> <br /> <br />
                <input type="submit" value="Register" onClick={(e) => this.register()}/>
            </div>
        </div>
    }
}