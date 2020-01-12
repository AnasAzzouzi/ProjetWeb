import React,{Component} from 'react'
import {Form,Button} from 'react-bootstrap'
import axios from 'axios'

class UpdateFiliere extends Component{

    state={
        note:'',
        idmatiere:'',
        matieres:[]
    }
    onChangeHandler=(e)=>{ this.setState({[e.target.name]:e.target.value}) }
    

    onSubmit=(e)=>{
        var EtObj={
            _id:this.props.nt._id,
            note:this.state.note,
            idmatiere:this.state.matiere

        }
        e.preventDefault();
        axios.put('http://localhost:4000/api/UpdateNote',EtObj);
        window.location.assign('/Notes')
    }
    componentDidMount(){

        document.getElementById("note").value=this.props.nt.note;
        axios.get('http://localhost:4000/api/ListMatiere').then(res=>this.setState({matieres:res.data}))
       

        this.setState({note:this.props.nt.nom,matiere:this.props.nt.matiere})
    }
    render(){
        return (
            <div>
                <h1>Modifier Une Note</h1>
                <Form method="PUT" onSubmit={(e)=>this.onSubmit(e)}>
                <Form.Group controlId='Fname'>
                        <Form.Label>NOTE</Form.Label>
                        <br/>
                        <Form.Control type='text' id="note" name="note" onChange={this.onChangeHandler} />
                    </Form.Group>
                    <Form.Group>
                    <Form.Control as="select" name="idmatiere" >
                        <option>...</option>
                        {this.state.matieres.map((mat)=>
                        <option value={mat._id} onClick={this.onChangeHandler}>{mat.nom}</option>
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