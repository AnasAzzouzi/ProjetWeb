import React ,{Component}from 'react'
import { Card } from 'react-bootstrap';

import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';

class Matieres extends Component{
    state={
        matieres:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:3001/api/Matiere/ListMatiere').then(res=>this.setState({matieres:res.data}))
  }
onDeleteClick=(mat)=>{
    console.log(mat)
    document.getElementById(mat._id).classList.toggle('hidd')
}
onSureClick=(mat)=>{
 Axios.delete('http://localhost:3001/api/Matiere/DeleteMatiere',{data:{_id: mat._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(mat)=>{
    document.getElementById(mat._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
               <Link to="/Matieres/AddMatiere">Ajouter Matiere</Link> 
            </div>
            <div class ="col-sm-10">
                <table class="table">
                    <thead>
                        <th>
                            Matiere
                        </th>
                    </thead>
                {this.state.matieres.map((mat)=>
                    <div class="cards">
                        <tr>
                            
                                
                                <td>{mat.nom}</td> 
                                <td> Filiere : {mat.filiere}</td>
                                <td><Link to="/Matieres/UpdateMatiere" onClick={()=>this.props.EditMatiereHandler(mat)}>Edit</Link></td>

                                <td><Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(mat)}>Delete</Button></td>
                                
                                <span className="text-muted"  class="hidd" id={mat._id}>
                                     
                                    <td><Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(mat)}>No , Cancel</Button></td>
                                    <td><Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(mat)}>Yes, sure</Button></td>
                                </span>
                            
                         </tr>
                    </div> 
            )}
            </table>
            </div>
            </div>
        );
    }
}
export default Matieres