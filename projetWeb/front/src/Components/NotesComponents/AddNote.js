import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'
class AddNote extends Component{
state={
    idEtudiant:'',
    idmatiere:'',
    note:'',
    matieres:[]
}
onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}
componentDidMount(){
    this.setState({idEtudiant:this.props.et.id})
    axios.get('http://localhost:3001/api/Matiere/ListMatiere').then(res=>this.setState({matieres:res.data}))
}
onSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/api/Note/AddNote', this.state)
    .then(res => console.log(res.data)).then(window.location.assign('/DetailEtudiant'));

}
    render(){
        return (
            <div>
                <h1>Ajouter Une Note</h1>
                <Form method="POST" onSubmit={(e)=>this.onSubmit(e)}>
                    <Form.Group controlId='Fname'>
                        <Form.Label>Note</Form.Label>
                        <br/>
                        <Form.Control type='text'  name="note"  onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId='Matiere'>
                    <Form.Label>Matiere</Form.Label>
                    <Form.Control as="select" name="idmatiere" onChange={this.onChangeHandler}>
                        <option>...</option>
                        {this.state.matieres.map((mat)=>
                        <option value={mat._id}>{mat.nom}</option>
                        )}
                        </Form.Control>
                    </Form.Group>
                    
                    <Button type ="submit" variant="dark"  >Add</Button>                
                    </Form>

            </div>
        );
    }
}
export default AddNote