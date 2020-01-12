import React ,{Component}from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

import {Button} from 'react-bootstrap'

class Notes extends Component{
    state={
        notes:[],
        et:{}
    }
  componentDidMount(){
    const filter=this.props.filter;
    console.log(filter);
    Axios.get('http://localhost:3001/api/Note/ListNote',{data:filter}).then(res=>this.setState({notes:res.data}))
 
  }
onDeleteClick=(note)=>{
    console.log(note)
    document.getElementById(note._id).classList.toggle('hidd')
}
onSureClick=(note)=>{
 Axios.delete('http://localhost:3001/api/DeleteNote',{data:{_id: note._id}}).then(res => console.log(res.data))

    
}
onCancelClick=(note)=>{
    document.getElementById(note._id).classList.toggle('hidd')
}

    render(){
        return (
        <div>

            
            <table class="table">
                <thead>
                    <th>Notes</th>
                </thead>
                {this.state.notes.map((note)=>
                <tr>
                        <td>
                            {note.note}
                        </td>
                        <td>
                            {note.idEtudiant}
                        </td>
                        <td>
                            {note.idmatiere}
                        </td>
                        <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(note)}>Delete</Button>
                            
                            <span className="text-muted"  class="hidd" id={note._id}>
                               
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(note)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(note)}>sure</Button>
                            </span>
                </tr>
                )}



            </table>
            <Link to="Notes/AddNote"></Link>
        </div>
        );
    }
}
export default Notes