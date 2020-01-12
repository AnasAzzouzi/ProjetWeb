import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

class UpdateProf extends Component{

    state={
        nom:'',
        prenom:'',
        CIN:'',
        CP:'',
        departement:'',
        departements:[]
    }
    onChangeHandler=(e)=>{ this.setState({[e.target.name] :e.target.value})}
    onSubmit=(e)=>{
        var EtObj={
            _id:this.props.et._id,
            nom:this.state.nom,
            prenom:this.state.prenom,
            CIN:this.state.CIN,
            CP:this.state.CNE,
            departement:this.state.filiere

        }
        e.preventDefault();
        Axios.put('http://localhost:4000/api/UpdateProf',EtObj);
        window.location.assign('/Professeurs')
    }
    componentDidMount(){

        document.getElementById("nom").value=this.props.pr.nom;
        document.getElementById("prenom").value=this.props.pr.prenom;
        document.getElementById("CIN").value=this.props.pr.CIN;
        document.getElementById("CP").value=this.props.pr.CP;
        
        this.setState({nom:this.props.pr.nom,prenom:this.props.pr.prenom,CIN:this.props.pr.CIN,CP:this.props.pr.CNE,departement:this.props.pr.departement})
        Axios.get('http://localhost:4000/api/ListDepartement').then(res=>this.setState({departements:res.data}))
    }
    render(){
        return (
            <div>
                <h1>Modifier Un Professeur</h1>
                <Form method="PUT" onSubmit={(e)=>this.onSubmit(e)}>
                
                <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text' id="nom" name="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group controlId='Lname'>
                        <Form.Label>Prenom</Form.Label>
                        <br/>
                        <Form.Control type='text' id="prenom" name="prenom" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='CIN'>
                        <Form.Label>CIN</Form.Label>
                        <br/>
                        <Form.Control type='text' id="CIN" name="CIN" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId='CP'>
                        <Form.Label>CP</Form.Label>
                        <br/>
                        <Form.Control type='text' id ="CP"  name ="CP" onChange={this.onChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                    <Form.Label>Departement</Form.Label>
                    <Form.Control as="select" name="departement" onChange={this.onChangeHandler}>
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
export default UpdateProf