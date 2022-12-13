import React from "react";
import { redirect } from "react-router-dom";

export default class UserPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "UserName",
            is_admin: undefined
        }
    }

    change_user(){

    }

    update_user(){

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                UId: user_id,
                UserName: username,
                Password: password,
                RoleName: role
            })
          };
          fetch('https://localhost:44366/api/user/', requestOptions)
          .then(response => {
            if (response.ok) {response.json()}
            else {response.json()}
          })
          .then(data => {
      
            // Хз как ошибки выдаются при неправильных кредах.
      
            if (data.message != undefined){
              this.setState({ 
                UserId: this.state.UserId,
                UserName: this.state.UserName,
                Password: this.state.Password,
                is_admin: this.state.is_admin,
                token: data.token,
                expires: new Date(data.expires_in)
              });
              status = 1;
            } else {
              status = data.message;
            }
            return status;
        });
    }

    render(){
        return <div>
            <div className="logregform" style={{padding: "20px"}}>
                <input value={this.state.name} /> <br />
                
                <input value={this.state.is_admin == undefined ? 'Guest' : this.state.is_admin == true ? 'Admin' : 'User'} />
                <br />
                <input type="radio" value={"Admin"} name="status" id="adminuserradio" /> <label htmlFor="adminuserradio">Admin</label> <br />
                <input type="radio" value={"User"} name="status" id="defaultuserradio"/> <label htmlFor="defaultuserradio">User</label>
            </div>
        </div>
    }
}