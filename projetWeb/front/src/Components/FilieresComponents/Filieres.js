import React ,{Component}from 'react'

import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Filieres extends Component{
    state={
        filieres:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:3001/api/Filiere/ListFiliere').then(res=>this.setState({filieres:res.data}))
  }
onDeleteClick=(flr)=>{
    console.log(flr)
    document.getElementById(flr._id).classList.toggle('hidd')
}
onSureClick=(flr)=>{
 Axios.delete('http://localhost:3001/api/Filiere/DeleteFiliere',{data:{_id: flr._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(flr)=>{
    document.getElementById(flr._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Filieres/AddFiliere">Ajouter une filiere</Link>
            </div>
            <div class ="col-sm-10">
            <table class="table">
                <thead>
                    <th>Filiere</th>
                </thead>
            {this.state.filieres.map((flr)=>
                <tr>
                    
                     
                            <td> {flr.nom} </td>
                            <td> Departement : {flr.departement}</td>
                            <td><Link to="/Filieres/UpdateFiliere" onClick={()=>this.props.EditFiliereHandler(flr)}>Edit</Link></td>
                            <td><Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(flr)}>Delete</Button></td>
                            
                            <span className="text-muted"  class="hidd" id={flr._id}>
                                
                            <td> <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(flr)}>No,Cancel</Button></td>
                            <td>  <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(flr)}>Yes,sure</Button></td>
                             </span>
                        
                 </tr>  
               
            )}
             </table>
            </div>
            </div>
        );
    }
}
export default Filieres