import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import NoteList from './components/note_list';
import React from 'react';
import NoteDetail from './components/note';
import UserPage from './components/user';
import UserList from './components/user_list';
import Login from './components/login';
import Register from './components/register';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      UserId: 0,
      UserName: "Guest",
      Password: "000",
      is_admin: false,
      token: undefined,
      expires: undefined,
    }

  }

  update_token(){
    if (this.state.expires !== undefined){
      if (Date.now() >= this.state.expires){
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ UserName: this.state.UserName, Password: this.state.Password })
      };
        fetch('https://localhost:44366/api/user/login/', requestOptions)
            .then(response => {
              if (response.ok) {response.json()}
              else {response.json()}
            })
            .then(data => this.setState({ 
              UserId: this.state.UserId,
              UserName: this.state.UserName,
              Password: this.state.Password,
              is_admin: this.state.is_admin,
              token: data.token,
              expires: new Date(data.expires_in)
            }));
      }
    }
  }

  get_token(username, password){

    
    let status = 0
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ UserName: username, Password: password })
    };
    fetch('https://localhost:44366/api/user/login/', requestOptions)
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

  get_user_info(id){
    
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      //body: JSON.stringify({ title: 'React POST Request Example' })
  };
    fetch('https://localhost:44366/api/UpdateNote/'+id, requestOptions)
        .then(response => {
          if (response.ok) {response.json()}
          else {response.json()}
        })
        .then(data => this.setState({ 
          UserId: data.id 
        }));
  }

  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <Header username={this.state.UserName}></Header>
          <Routes>
            <Route path='/' element={<NoteList/>} />
            <Route path='/:id' element={<NoteDetail/>} />
            <Route path='/user/:id' element={<UserPage/>} />
            <Route path='/user/' element={<UserPage name={"AAA"} is_admin={undefined} />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
