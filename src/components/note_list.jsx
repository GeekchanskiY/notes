import React from "react";
import { Link, Navigate } from "react-router-dom";
import { GetAllNotes, GetUserNotes, AddNote } from "../utils/note_requests";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login }  from "../features/JWTSlice";
import { login_request } from "../utils/user_requests";
import { GetAllNotes_request, AddNote_request, GetUserNotes_request } from "../utils/note_requests";

export default function NoteList (){
        const [notes, setNotes] = useState([])
        const navigate = useNavigate()
        const jwt_state = useSelector((state) => state.jwt)

        

        const get_my_notes = async () => {
            setNotes([
                {
                    Note: 0,
                    creator: "DMT",
                    name: "My mood today",
                    text: "Kill Me Please",
                    creation_date: new Date()
                }, {
                    Note: 1,
                    creator: "DMT",
                    name: "My mood today",
                    text: "Kill Me Please",
                    creation_date: new Date()
                }, {
                    Note: 2,
                    creator: "DMT",
                    name: "My mood today",
                    text: "Kill Me Please",
                    creation_date: new Date()
                }, {
                    Note: 3,
                    creator: "DMT",
                    name: "My mood today",
                    text: "Kill Me Please",
                    creation_date: new Date()
                }
            ])
        }
        useEffect(() => {
            console.log(notes)
            if (jwt_state.authentificated == false){
                navigate('/login')
                // if to remove deadlock
            } else if (notes.length == 0 || notes == undefined || notes == null){
                get_my_notes()
                console.log('aaa')
            }
            
        })
        
        return (<div>
            {notes.map((note_json, index) => {
                console.log(note_json)
                console.log(index)
                return <div className="NoteNode" key={index+"note_node"}>
                    <h3>{note_json.name}</h3>
                    <small>{note_json.creator}</small>
                    <p>{note_json.text}</p>
                    <Link to={'/'+index}>Edit</Link> <br />
                    <span>{note_json.creation_date.getDate()}.{note_json.creation_date.getMonth()}.{note_json.creation_date.getFullYear()}</span>
                </div>
            })}
        </div>)
}
