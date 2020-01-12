import React, { Component } from 'react';


import Cookies from 'universal-cookie'

const cookies = new Cookies();

class Home extends Component {
    state={
       user:{}
    }
        componentDidMount(){
               
           this.setState({user:cookies.get('user')},()=>console.log(this.state.user))
        }
        render(){
            return (
        <div className="App">
        <h1>Hello {this.state.user.username}</h1>
            <h1 className={this.state.user.profil!=='admin'?'hidd':null}>Title</h1>
        </div>
        );}

        }

export default Home;