import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import LOGOESTE from'./img/LOGOESTE.png'

 class NavBar extends Component{
     render(){

        return(
            <div class="navbar navbar-expand-sm bg-dark navbar-dark">
            <img class="navbar-brand" src={LOGOESTE}height="30" width="100" />
           <Link class="navbar-brand" to="/Etudiants" >Etudiants</Link>
           <Link class="navbar-brand" to="/Professeurs" >Professeurs</Link>
           <Link class="navbar-brand" to="/Departements" >Departements</Link>
           <Link class="navbar-brand" to="/Filieres" >Filieres</Link>
           <Link class="navbar-brand" to="/Matieres" >Matieres</Link>
           </div>
        );
     }
 }
 export default NavBar