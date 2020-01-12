import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

class UpdateMatiere extends Component{

    state={
        nom:'',
        filiere:'',
        filieres:[]
    }
    onChangeHandler=(e)=>{ this.setState({[e.target.name]:e.target.value})}

    onSubmit=(e)=>{
        var EtObj={
            _id:this.props.mat._id,
            nom:this.state.nom,
            filiere:this.state.filiere

        }
        e.preventDefault();
        Axios.put('http://localhost:3001/api/Matiere/UpdateMatiere',EtObj).then(window.location.assign('/Matieres'));
        
    }
    componentDidMount(){
        
        document.getElementById("nom").value=this.props.mat.nom;
        document.getElementById("filiere").value=this.props.mat.filiere;
       

        this.setState({nom:this.props.mat.nom,filiere:this.props.mat.filiere})
        Axios.get('http://localhost:3001/api/Filiere/ListFiliere').then(res=>this.setState({filieres:res.data}))
    }
    render(){
        return (
            <div>
                <h1>Modifier Une Matiere</h1>
                <Form method="PUT" onSubmit={(e)=>this.onSubmit(e)}>
                <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text' id="nom" name ="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    
                    <Form.Group>
                    <Form.Label>Filiere</Form.Label>
                    <Form.Control as="select"  id="filiere" name="filiere" onChange={this.onChangeHandler}>
                        <option>...</option>
                        {this.state.filieres.map((fil)=>
                        <option value={fil._id}>{fil.nom}</option>
                        )}
                        </Form.Control>
                    </Form.Group>
                    <Button type ="submit" variant="dark" >Update</Button>                  
                    </Form>

            </div>
        );
    }
}
export default UpdateMatiere