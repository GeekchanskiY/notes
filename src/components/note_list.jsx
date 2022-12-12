import React from "react";

export default class NoteList extends React.Component{
    constructor(props){
        super(props);
        this.get_fake_notes();
    }

    get_notes(){
        
    }
    get_fake_notes(){
        this.state = {
            notes: [
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
        }
    }

    render(){
        
        return <div>
            {this.state.notes.map((note_json, index) => {
                console.log(note_json)
                console.log(index)
                return <div className="NoteNode" key={index+"note_node"}>
                    <h3>{note_json.name}</h3>
                    <small>{note_json.creator}</small>
                    <p>{note_json.text}</p>
                    <span>{note_json.creation_date.getDate()}.{note_json.creation_date.getMonth()}.{note_json.creation_date.getFullYear()}</span>
                </div>
            })}
        </div>
    }
}