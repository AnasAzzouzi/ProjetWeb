import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import Axios from 'axios'

class UpdateDepartement extends Component{

    state={
        nom:''
        
    }
    onChangeHandler=(e)=>{ this.setState({nom:e.target.value},()=>console.log(this.state.nom))}

    onSubmit=(e)=>{

        e.preventDefault();
        Axios.put('http://localhost:3001/api/Departement/UpdateDepartement',{_id:this.props.dep._id,nom:this.state.nom}).then(res=>console.log(res.data)).then( window.location.assign('/Departements'))
       
    }
    componentDidMount(){

        document.getElementById("nom").value=this.props.dep.nom;
        


        this.setState({nom:this.props.dep.nom})
    }
    render(){
        return (
            <div>
                <h1>Modifier Un Departement</h1>
                <Form method="PUT" onSubmit={(e)=>this.onSubmit(e)}>
                <Form.Group controlId='Fname'>
                        <Form.Label>Nom</Form.Label>
                        <br/>
                        <Form.Control type='text' id="nom" class="nom" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Button type ="submit" variant="dark" >Update</Button>                  
                    </Form>

            </div>
        );
    }
}
export default UpdateDepartement