import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
class AddMatiere extends Component{
state={
    nom:'',
    filiere:'',
    filieres:[]
}
componentDidMount(){
    axios.get('http://localhost:3001/api/Filiere/ListFiliere').then(res=>this.setState({filieres:res.data}))
}
onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}

onSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/Matiere/AddMatiere', this.state)
    .then(res => console.log(res.data));

    window.location.assign('/Matieres')
}
    render(){
        return (
            <div>
                <h1>Ajouter Une Matiere</h1>
                <Form method="POST" onSubmit={(e)=>this.onSubmit(e)}>
                    <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text'  name="nom" onChange={this.onChangeHandler} />
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
export default AddMatiere