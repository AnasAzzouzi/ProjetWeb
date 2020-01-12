import React ,{Component}from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Axios from 'axios';
class Departements extends Component{
    state={
        departements:[]
    }
  componentDidMount(){

    Axios.get('http://localhost:3001/api/Departement/ListDepartement').then(res=>this.setState({departements:res.data}))
  }
onDeleteClick=(dep)=>{
    console.log(dep)
    document.getElementById(dep._id).classList.toggle('hidd')
}
onSureClick=(dep)=>{
 Axios.delete('http://localhost:3001/api/Departement/DeleteDepartement',{data:{_id: dep._id}}).then(res => console.log(res.data))

    window.location.reload()
}
onCancelClick=(dep)=>{
    document.getElementById(dep._id).classList.toggle('hidd')
}

    render(){
        return (
        <div class="row">
            <div class="col-sm-2">
                <Link to="/Departements/AddDepartement">Ajouter un Departement</Link>
            </div>
            <div class ="col-sm-10">
                    <table class='table'>
                        <thead>
                            <th>Departments</th>
                            <th> </th>
                            
                            <th> </th>
                            <th> </th>
                            <th> </th>
                            
                        </thead>
                            {this.state.departements.map((dep)=>
                                <div>
                                <tr> <td>{dep.nom}</td> 
                                
                                     <td>
                                        <Link to="/Departements/UpdateDepartement" onClick={()=>this.props.EditDepartementHandler(dep)}>Edit</Link>
                                    </td>
                                    <td>
                                        <Button style={{ width: '8rem' }} variant="danger" onClick={()=>this.onDeleteClick(dep)}>Delete</Button>
                                    </td>
                                        
                                <span className="text-muted"  class="hidd" id={dep._id}>
                                    <td>
                                        
                                        <Button style={{ width: '8rem' }}  variant="secondary"  onClick={()=>this.onCancelClick(dep)}>No, Cancel</Button>
                                    </td>
                                    <td>
                                        <Button style={{ width: '8rem' }}  variant="danger" onClick={()=>this.onSureClick(dep)}>Yes Im sure</Button>
                                    </td>
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
export default Departements