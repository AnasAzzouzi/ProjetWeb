import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
class AddEtudiant extends Component{
state={
    nom:'',
    prenom:'',
    dNaiss:'',
    CIN:'',
    CNE:'',
    filiere:'',
    filieres:[]
}
componentDidMount(){
    axios.get('http://localhost:3001/api/Filiere/ListFiliere').then(res=>this.setState({filieres:res.data}))
}
onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}
onSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/Etudiant/AddEtudiant', this.state)
    .then(res => console.log(res.data)).then(window.location.assign('/Etudiants'));

    
}
    render(){
        return (
            <div>
                <h1>Ajouter Un Etudiant</h1>
                <Form method="POST" onSubmit={(e)=>this.onSubmit(e)}>
                    <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text'  name="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId='Lname'>
                        <Form.Label>Prenom</Form.Label>
                        <br/>
                        <Form.Control type='text' name="prenom" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='dNass'>
                        <Form.Label>Date de naissance </Form.Label>
                        <br/>
                        <Form.Control type='date' name="dNaiss" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId='CIN'>
                        <Form.Label>CIN</Form.Label>
                        <br/>
                        <Form.Control type='text' name="CIN" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='CNE'>
                        <Form.Label>CNE</Form.Label>
                        <br/>
                        <Form.Control type='text'name="CNE" onChange={this.onChangeHandler}/>
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
                    <Button type ="submit" variant="dark"  >Add</Button>                
                    </Form>

            </div>
        );
    }
}
export default AddEtudiant