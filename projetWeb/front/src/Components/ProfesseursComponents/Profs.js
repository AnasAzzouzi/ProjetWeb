import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';

import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Profs extends Component{
    state={
        profs:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:3001/api/Professeur/ListProf').then(res=>this.setState({profs:res.data}))
  }
onDeleteClick=(prof)=>{
    console.log(prof)
    document.getElementById(prof._id).classList.toggle('hidd')
}
onSureClick=(prof)=>{
 Axios.delete('http://localhost:3001/api/Professeur/DeleteProf',{data:{_id: prof._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(prof)=>{
    document.getElementById(prof._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Professeurs/AddProfesseur">Ajouter un Professeur</Link> 
            </div>
            <table class="table">
                <thead>
                    
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CIN</th>
                    <th>CP</th>
                    <th>Departement</th>
                    <th>Operatios</th>
                </thead>
            {this.state.profs.map((prof)=>
                
                    <tr>
                            <td> {prof.nom}</td>
                            <td> {prof.prenom}</td>
                            <td>  {prof.CIN}</td>
                            <td> {prof.CP}</td>
                            <td>{prof.departement}</td>
                            <Link to="/Professeurs/UpdateProf" onClick={()=>this.props.EditProfHandler(prof)}>Edit</Link>&nbsp;&nbsp;
                            <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(prof)}>Delete</Button>
                            
                            <span className="text-muted"  class="hidd" id={prof._id}>
                               
                                 <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(prof)}>Cancel</Button>
                                 <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(prof)}>sure</Button>
                            </span>
                        
                    </tr>
                
            )}
            </table>
            </div>
        );
    }
}
export default Profs