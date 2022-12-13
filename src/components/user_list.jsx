import React from "react";
import { Navigate } from "react-router-dom";


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

export default class UserList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        if (!this.props.user.is_admin || this.props.user.is_admin == undefined){
            return <Navigate to={'/login'} replace={true} />
        }
        return <div></div>
    }
}