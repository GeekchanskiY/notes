import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import NoteList from './components/note_list';
import React from 'react';
import NoteDetail from './components/note';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      UserId: 0,
      UserName: "Guest",

    }

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
            <Route path='/note/:id' element={<NoteDetail/>} />
          </Routes>
          <Link to='/'> aaa</Link>
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
