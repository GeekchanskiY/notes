import React from "react";

export default class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <header className="main_header">
        <div className='app-title'>Notes</div>
        <div className="user">
            <a href="">{this.props.username}</a>
          </div>
          
          
        </header>
    }
}