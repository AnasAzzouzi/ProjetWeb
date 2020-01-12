import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

class UpdateFiliere extends Component{

    state={
        nom:'',
        departement:'',
        departements:[]
    }
    onChangeHandler=(e)=>{this.setState({[e.target.name]:e.target.value},()=>console.log(this.state))}

    onSubmit=(e)=>{

        e.preventDefault();
        Axios.put('http://localhost:3001/api/Filiere/UpdateFiliere',{_id:this.props.flr._id,nom:this.state.nom,departement:this.state.departement}).then(res=>console.log(res.data))//then(()=>window.location.assign('/Filieres'));
        
    }
    componentDidMount(){

        document.getElementById("nom").value=this.props.flr.nom;
       
        this.setState({nom:this.props.flr.nom,departement:this.props.flr.departement})
        Axios.get('http://localhost:3001/api/Departement/ListDepartement').then(res=>this.setState({departements:res.data}))

    }
    render(){
        return (
            <div>
                <h1>Modifier Une Filiere</h1>
                <Form method="PUT" onSubmit={(e)=>this.onSubmit(e)}>
                <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text' id="nom" name="nom" onChange={this.onChangeHandler} />
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
                    <Button type ="submit" variant="dark" >Update</Button>                  
                    </Form>

            </div>
        );
    }
}
export default UpdateFiliere