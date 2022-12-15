import React from "react";
import { Link, Navigate } from "react-router-dom";
import { GetAllNotes, GetUserNotes, AddNote } from "../utils/note_requests";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { login }  from "../features/JWTSlice";
import { login_request } from "../utils/user_requests";
import { GetAllNotes_request, AddNote_request, GetUserNotes_request } from "../utils/note_requests";

export default function NoteDetail(){


    const [name, setName] = useState("")
    const [text, setText] = useState("")
    const [creator, setCreator] = useState()
    const [noteId, setNoteId] = useState(1)
    const [creationDate, setCreationDate] = useState(new Date())

    const navigate = useNavigate()
    const jwt_state = useSelector((state) => state.jwt)


    useEffect(() => {
        if (jwt_state.authentificated == false){
            navigate('/login')
        } else if (creator == undefined) {
            get_fake_notes()
        }
        
    })
        
    
    const get_fake_notes = () => {
        let notes= [
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
        ]
        let num = window.location.pathname.split('/').reverse()[0]

        setName(notes[num].name)
        setText(notes[num].text)
        setCreationDate(notes[num].creation_date)
        setNoteId(notes[num].Note)
        setCreator(notes[num].creator)
    }


   return (<div className="NoteDetail">
            <input type="text" id="notename" value={name} onChange={(e) => {setName(e.target.value)}}/> <span>{creator}</span> <br /> <br />
            <textarea id="notetext" value={text} onChange={(e) => {setText(e.target.value)}} > </textarea> <br />
            <div className="buttons">
                <input type="button"  value="Update"/>
                <input type="button" value="Delete" />
                <input type="button" value="Home" onClick={(e) => {navigate('/')}}/>
            </div>
        </div>)
    
}