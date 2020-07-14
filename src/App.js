import React, { useState } from 'react';
import './App.css';
import AdminManager from './AdminManager'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfileCreate from './User/ProfileCreate'
import Profile from './User/Profile'
import ProfileUpdate from './User/Profile/Update'
import Nav from './Common/Header/Nav'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {

  const [currentUser, setCurrentUser] = useState({})

  return (
    <div>
      <Router className="App">
        <Nav Link={Link}/>
        <Switch>
          <Route path="/admin">
            <AdminManager/>
          </Route>
          <Route path='/login'>
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/register'>
            <Register setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/createprofile'>
            <ProfileCreate/>
          </Route>
          <Route path='/profile/update'>
            <ProfileUpdate currentUser={currentUser}/>
          </Route>
          <Route path='/profile'>
            <Profile currentUser/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
