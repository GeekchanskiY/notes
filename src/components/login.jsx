import React from "react";

export default class Login extends React.Component{
    constructor(props){
        super(props);
    }
    login(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: document.getElementById('login_form').value,
                password: document.getElementById('password_form').value
            })
          };
          fetch('https://localhost:44366/api/user/', requestOptions)
          .then(response => {
            if (response.ok) {response.json()}
            else {response.json()}
          })
          .then(data => {
      
            console.log(data)
            
        })
            .catch(err => {console.log(err)})
    }
    render(){
        return <div>
            <div className="logregform">
                <h1>Login</h1> <br />
                <span>Username:</span><br />
                <input type="text" placeholder="Enter username" id="username_form"/><br /> <br />
                <span>Password:</span> <br />
                <input type="password" placeholder="Enter password" id="password_form"/> <br /> <br />
                <input type="submit" value="Login" onClick={(e) => this.login()}/>
            </div>
        </div>
    }
}