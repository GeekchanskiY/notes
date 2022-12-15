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

import store from './app/store'
import { Provider } from 'react-redux'

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

  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <BrowserRouter>
            <Header username={this.state.UserName}></Header>
            <Routes>
              <Route path='/' element={<NoteList/>} />
              <Route path='/:id' element={<NoteDetail/>} />
              <Route path='/user/:id' element={<UserPage/>} />
              <Route path='/user/' element={<UserPage/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/register' element={<Register/>} />
              <Route path='/users/' element={<UserList/>} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
  
}

export default App;
