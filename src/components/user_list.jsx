import React from "react";
import { redirect } from "react-router-dom";


class UserListItem extends React.Component{
    constructor(props){
        super(props);
        if (!this.props.user.is_admin || this.props.user.is_admin == undefined){
            redirect('/login')
        }
    }

    render(){
        return <div>
            aaa
        </div>
    }
}

export default class UserList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div></div>
    }
}