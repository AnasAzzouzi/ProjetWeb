import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
class AddFiliere extends Component{
state={
    nom:'',
    departement:'',
    departements:[]
}
onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}
componentDidMount(){
    axios.get('http://localhost:3001/api/Departement/ListDepartement').then(res=>this.setState({departements:res.data}))

}
onSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/Filiere/AddFiliere', this.state)
    .then(res => console.log(res.data)).then(window.location.assign('/Filieres'));

    
}
    render(){
        return (
            <div>
                <h1>Ajouter Une Filiere</h1>
                <Form method="POST" onSubmit={(e)=>this.onSubmit(e)}>
                    <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text'  name="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Departement</Form.Label>
                    <Form.Control as="select" name="departement" onChange={this.onChangeHandler}>
                        <option>...</option>
                        {this.state.departements.map((dep)=>
                        <option value={dep._id}>{dep.nom}</option>
                        )}
                        </Form.Control>
                    </Form.Group>
                    <Button type ="submit" variant="dark"  >Add</Button>                
                    </Form>

            </div>
        );
    }
}
export default AddFiliere