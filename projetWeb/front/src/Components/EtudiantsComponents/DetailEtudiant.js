import React ,{Component}from 'react'
import Axios from 'axios';
import Notes from '../NotesComponents/Notes';
import { Link } from 'react-router-dom';

class DetailEtudiant extends Component{
    state={
       idet:'',
       idmat:'',
       matieres:[]
       
    }
    onChangeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value},()=>this.fct());
    }
    fct=()=>{
        Axios.get('http://localhost:3001/api/Matiere/ListMatiere').then(res=>this.setState({matieres:res.data}))
    }
  componentDidMount(){
     this.setState({idet:this.props.et._id})
     this.fct()
     


  }
    onDeleteClick=(std)=>{

    console.log(std)
    document.getElementById(std._id).classList.toggle('hidd')
    }
    onSureClick=(std)=>{
    Axios.delete('http://localhost:300/api/DeleteEtudiant',{data:{_id: std._id}}).then(res => console.log(res.data))

    window.location.reload()
    }
    onCancelClick=(std)=>{
    document.getElementById(std._id).classList.toggle('hidd')
    }

    render(){
        return (
            <div>
                    <h2>{this.props.et.nom} {this.props.et.prenom}</h2>
                    <h4>Matiere :</h4>
                    <select class="form-control" name="idmat" onChange={this.onChangeHandler}>
                        <option>...</option>
                        {this.state.matieres.map((mat)=>
                        <option value={mat._id}>{mat.nom}</option>
                        
                        )}
                    </select>
                    <Link to="/Notes/AddNote" onClick={()=>this.props.EditStudentHandler(this.state.idet)}>Ajouter une Note </Link>
                    <Notes filter={{idEtudiant:this.state.idet,idmatiere:this.state.idmat}}/>
            
            </div>
        );
    }
}
export default DetailEtudiant