import React ,{Component}from 'react'

import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Etudiants extends Component{
    state={
        students:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:3001/api/Etudiant/ListEtudiant').then(res=>this.setState({students:res.data}))
  }
onDeleteClick=(std)=>{
    console.log(std)
    document.getElementById(std._id).classList.toggle('hidd')
}
onSureClick=(std)=>{
 Axios.delete('http://localhost:3001/api/Etudiant/DeleteEtudiant',{data:{_id: std._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(std)=>{
    document.getElementById(std._id).classList.toggle('hidd')
}


    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Etudiants/AddEtudiant">Ajouter Etudiant</Link>
            </div>
            <div class ="col-sm-10">
                <table class="table">
                    <thead>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Date de Naissance</th>
                        <th>CIN</th>
                        <th>CNE</th>
                        <th>Filiere</th>
                        <th>Operations</th>
                    </thead>
                
                        {this.state.students.map((std)=>
                            <tr>
                                
                                    
                                        
                                        <td> {std.nom }</td>
                                        <td>{std.prenom}</td>
                                        <td>  {std.dNaiss}</td>
                                        <td>  {std.CIN}</td>
                                        <td> {std.CNE}</td>
                                        <td>  {std.filiere}</td>
                                        <td>
                                        <Link to="/Etudiants/UpdateEtudiant" onClick={()=>this.props.EditStudentHandler(std)}>Edit</Link>
                                        </td>
                                        <td>
                                        <Link to="/Etudiants/DetailEtudiant" onClick={()=>this.props.EditStudentHandler(std)}>Notes</Link>
                                        </td>
                                        <td>
                                        <Button style={{ width: '5rem' }} variant="danger" onClick={()=>this.onDeleteClick(std)}>Delete</Button>
                                        </td>
                                        <td>
                                        <span className="text-muted"  class="hidd" id={std._id}>
                                            
                                            <Button style={{ width: '5rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(std)}>Cancel</Button>
                                            <Button style={{ width: '5rem' }}  variant="danger" onClick={()=>this.onSureClick(std)}>sure</Button>
                                        </span>
                                        </td>
                                    
                                
                            </tr> 
                        )}
                        </table>
            </div>
            </div>
        );
    }
}
export default Etudiants