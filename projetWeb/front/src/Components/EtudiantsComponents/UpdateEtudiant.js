import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

class UpdateEtudiant extends Component{

    state={
        nom:'',
        prenom:'',
        dNaiss:'',
        CIN:'',
        CNE:'',
        filiere:'',
        filieres:[]
    }
    onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}
    onSubmit=(e)=>{
        var EtObj={
            _id:this.props.et._id,
            nom:this.state.nom,
            prenom:this.state.prenom,
            dNaiss:this.state.dNaiss,
            CIN:this.state.CIN,
            CNE:this.state.CNE,
            filiere:this.state.filiere

        }
        e.preventDefault();
        Axios.put('http://localhost:3001/api/Etudiant/UpdateEtudiant',EtObj);
        window.location.assign('/Etudiants')
    }
    componentDidMount(){
        Axios.get('http://localhost:3001/api/Etudiant/ListFiliere').then(res=>this.setState({filieres:res.data}))
        document.getElementById("nom").value=this.props.et.nom;
        document.getElementById("prenom").value=this.props.et.prenom;
        document.getElementById("dNaiss").value=this.props.et.dNaiss;
        document.getElementById("CIN").value=this.props.et.CIN;
        document.getElementById("CNE").value=this.props.et.CNE;
   
        this.setState({nom:this.props.et.nom,prenom:this.props.et.prenom,dNaiss:this.props.et.dNaiss,CIN:this.props.et.CIN,CNE:this.props.et.CNE,filiere:this.props.et.filiere})
    }
    render(){
        return (
            <div>
                <h1>Modifier Un Etudiant</h1>
                <Form method="PUT" onSubmit={(e)=>this.onSubmit(e)}>
                <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text'name="nom" id="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId='Lname'>
                        <Form.Label>Prenom</Form.Label>
                        <br/>
                        <Form.Control type='text' name="prenom" id="prenom" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='dNass'>
                        <Form.Label>Date de naissance </Form.Label>
                        <br/>
                        <Form.Control type='date'name="dNaiss" id="dNaiss"  onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId='CIN'>
                        <Form.Label>CIN</Form.Label>
                        <br/>
                        <Form.Control type='text'  name="CIN" id="CIN" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='CNE'>
                        <Form.Label>CNE</Form.Label>
                        <br/>
                        <Form.Control type='text' name="CNE" id="CNE" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Filiere</Form.Label>
                    <Form.Control as="select" name="filiere" onChange={this.onChangeHandler}>
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
export default UpdateEtudiant