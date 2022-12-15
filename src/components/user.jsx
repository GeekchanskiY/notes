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