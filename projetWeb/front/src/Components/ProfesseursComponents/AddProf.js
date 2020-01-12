import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
class AddProf extends Component{
state={
    nom:'',
    prenom:'',
    CIN:'',
    CP:'',
    departement:'',
    departements:[]
}
onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}
componentDidMount(){
    axios.get('http://localhost:3001/api/Departement/ListDepartement').then(res=>this.setState({departements:res.data}))

}
onSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/Professeur/AddProf', this.state).then(window.location.assign('/Professeurs'))
    .then(res => console.log(res.data));

    
}
    render(){
        return (
            <div>
                <h1>Ajouter Un Prof</h1>
                <Form method="POST" onSubmit={(e)=>this.onSubmit(e)}>
                    <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text'  name="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId='Lname'>
                        <Form.Label>Prenom</Form.Label>
                        <br/>
                        <Form.Control type='text'name="prenom" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='CIN'>
                        <Form.Label>CIN</Form.Label>
                        <br/>
                        <Form.Control type='text'name="CIN" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='CP'>
                        <Form.Label>CP</Form.Label>
                        <br/>
                        <Form.Control type='text'  name ="CP" onChange={this.onChangeHandler}/>
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
export default AddProf