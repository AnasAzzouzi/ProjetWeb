import React, { Component } from 'react';
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();


class Login extends Component {
    state={
        email:'',
        pw:'',
        user:{}
    }
    onClickHandler=()=>{
       
        axios.post('http://localhost:3001/api/user/login',this.state).then(res=>this.setState({user:res.data},()=>cookies.set('user',this.state.user))).then(window.location.assign("/Home"))
        

    }
    onchangehandler=(e)=>{
        e.preventDefault();
    this.setState({[e.target.name]:e.target.value})

    }
render(){  
    return (
        <div class="form-group" >
            <div class="card-body"  width="200px">
            <label>Email</label><br/>
            <input type="email " class="form-control"  name="email" onChange={this.onchangehandler}/><br/>
            <label>PassWord</label><br/>
            <input type="password"  class="form-control" name="pw" onChange={this.onchangehandler}/><br/>
            <button onClick={this.onClickHandler} class="btn btn-primary">Log</button>
            </div>
            
        </div>
     );
    }

}

export default Login;
