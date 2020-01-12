import React, { Component } from 'react';
import Login from './Components/Login'
import Home from './Components/Home'
import './App.css';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './Components/NavBar'

import Etudiants from './Components/EtudiantsComponents/Etudiants';
import AddEtudiant from './Components/EtudiantsComponents/AddEtudiant';
import UpdateEtudiant from './Components/EtudiantsComponents/UpdateEtudiant';
import DetailEtudiant from './Components/EtudiantsComponents/DetailEtudiant';

import Notes from './Components/NotesComponents/Notes';
import AddNote from './Components/NotesComponents/AddNote';
import UpdateNote from './Components/NotesComponents/UpdateNote';

import Profs from './Components/ProfesseursComponents/Profs';
import AddProf from './Components/ProfesseursComponents/AddProf';
import UpdateProf from './Components/ProfesseursComponents/UpdateProf';

import Filieres from './Components/FilieresComponents/Filieres';
import AddFiliere from './Components/FilieresComponents/AddFiliere';
import UpdateFiliere from './Components/FilieresComponents/UpdateFiliere';

import Matieres from './Components/MatieresComponents/Matieres';
import AddMatiere from './Components/MatieresComponents/AddMatiere';
import UpdateMatiere from './Components/MatieresComponents/UpdateMatiere';

import Departements from './Components/DepartementsComponents/Departements';
import AddDepartement from './Components/DepartementsComponents/AddDepartement';
import UpdateDepartement from './Components/DepartementsComponents/UpdateDepartement';





class App extends Component {
  state={
    EtToEdit:'',
    PrToEdit:'',
    FlrToEdit:'',
    MatToEdit:'',
    NoteToEdit:'',
    DepToEdit:'',
    id:''

}
idehandler=(ide)=>{
  this.setState({id:ide})
}

onEditDepClick=(dep)=>{
  this.setState({DepToEdit:dep})
}
onEditNoteClick=(note)=>{
  this.setState({NoteToEdit:note})
}
onEditStudentClick=(std)=>{
  this.setState({EtToEdit:std})
  console.log(this.state.EtToEdit)
}
onEditProfClick=(prof)=>{
this.setState({PrToEdit:prof})
console.log(this.state.PrToEdit)
}
onEditFlrClick=(flr)=>{
this.setState({FlrToEdit:flr})
console.log(this.state.FlrToEdit)
}
onEditMatClick=(mat)=>{
this.setState({MatToEdit:mat})
console.log(this.state.MatToEdit)
}

render(){ 
  
   return (

  <Router>
    
  <div className="App">
    
    <NavBar/>
    <Switch>
      
      <Route path="/Login" exact component={Login}/>
      <Route path="/Home" exact component={Home}/>
      <Route path="/Etudiants"  exact render={(props)=><Etudiants {...props} EditStudentHandler={this.onEditStudentClick}/>} />
      <Route path="/Etudiants/AddEtudiant" component={AddEtudiant} exact/>
      <Route path="/Etudiants/UpdateEtudiant" exact render ={(props)=><UpdateEtudiant {...props} et={this.state.EtToEdit}/>}/>
      <Route path="/Etudiants/DetailEtudiant" exact render ={(props)=><DetailEtudiant {...props} et={this.state.EtToEdit} EditStudentHandler={this.onEditStudentClick} AddNoteHandler={this.idehandler}  />}/>

      <Route path="/Notes"  exact render={(props)=><Notes {...props} et={this.state.EtToEdit} EditNoteHandler={this.onEditNoteClick} EditStudentHandler={this.onEditStudentClick}/>} />
      <Route path="/Notes/AddNote"  exact render={(props)=><AddNote {...props}  et={this.state.id}/>} />
      <Route path="/Notes/UpdateNote" exact render={(props)=><UpdateNote {...props} nt={this.state.NoteToEdit}/> }/>

            
      <Route path="/Professeurs"  exact render={(props)=><Profs {...props} EditProfHandler={this.onEditProfClick}/>} />
      <Route path="/Professeurs/AddProfesseur" component={AddProf} exact/>
      <Route path="/Professeurs/UpdateProf" exact render ={(props)=><UpdateProf {...props} pr={this.state.PrToEdit}/>}/>

      <Route path="/Filieres"  exact render={(props)=><Filieres {...props} EditFiliereHandler={this.onEditFlrClick}/>} />
      <Route path="/Filieres/AddFiliere" component={AddFiliere} exact/>
      <Route path="/Filieres/UpdateFiliere" exact render ={(props)=><UpdateFiliere {...props} flr={this.state.FlrToEdit}/>}/>

      <Route path="/Matieres"  exact render={(props)=><Matieres {...props} EditMatiereHandler={this.onEditMatClick}/>} />
      <Route path="/Matieres/AddMatiere" component={AddMatiere} exact/>
      <Route path="/Matieres/UpdateMatiere" exact render ={(props)=><UpdateMatiere {...props} mat={this.state.MatToEdit}/>}/>

      <Route path="/Departements"  exact render={(props)=><Departements {...props} EditDepartementHandler={this.onEditDepClick}/>} />
      <Route path="/Departements/AddDepartement" component={AddDepartement} exact/>
      <Route path="/Departements/UpdateDepartement" exact render ={(props)=><UpdateDepartement {...props} dep={this.state.DepToEdit}/>}/>


    </Switch>
    
  </div>
  </Router>
  
);}

}

export default App;
