import React from "react";
import { redirect } from "react-router-dom";

export default class UserPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <div className="logregform">
                <h3>Guest</h3>
                <span>user</span>
            </div>
        </div>
    }
}