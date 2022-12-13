import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <header className="main_header">
        <div className='app-title'> <Link to={'/'}>Notes</Link>  </div>
        <div className="user">
            <Link to={'user/'+this.props.userId}>{this.props.username}</Link>
          </div>
          
          
        </header>
    }
}