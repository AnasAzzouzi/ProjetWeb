import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
class AddDepartement extends Component{
state={
    nom:''
    
}
onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}

onSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/Departement/AddDepartement', this.state)
    .then(res => console.log(res.data));

    window.location.assign('/Departements')
}
    render(){
        return (
            <div>
                <h1>Ajouter Un Departement</h1>
                <Form method="POST" onSubmit={(e)=>this.onSubmit(e)}>
                    <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text'  name="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Button type ="submit" variant="dark"  >Add</Button>                
                    </Form>

            </div>
        );
    }
}
export default AddDepartement