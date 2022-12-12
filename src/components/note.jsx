import React from "react";

export default class NoteDetail extends React.Component{
    constructor(props){
        super(props);
        this.get_fake_notes()
    }
    get_fake_notes(){
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
        this.state = {
            note: notes[num],
            updated_note: notes[num]
            
        }
    }

    update_state_name(e){
        let upd = this.state.updated_note
        upd.name = e.target.value
        this.setState({
            note: this.state.note,
            updated_note: upd
        })
    }

    update_state_text(e){
        let upd = this.state.updated_note
        upd.text = e.target.value
        this.setState({
            note: this.state.note,
            updated_note: upd
        })
    }
    refresh(){
        this.setState({
            note: this.state.note,
            updated_note: this.state.note
        })
    }

    render(){
        console.log('aaa')
        return <div className="NoteDetail">
            <input type="text" id="notename" value={this.state.updated_note.name} onChange={(e) => {this.update_state_name(e)}}/> <span>{this.state.note.creator}</span> <br /> <br />
            <input type="text" id="notetext" value={this.state.updated_note.text} onChange={(e) => {this.update_state_text(e)}}/> <br />
            
        </div>
    }
}