import React, { useState } from 'react';
import './App.css';
import AdminManager from './AdminManager'
import JobBoardManager from './JobBoardManager';
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfileCreate from './User/ProfileCreate'
import Profile from './User/Profile'
import ProfileUpdate from './User/Profile/Update'
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
        <Switch>
          <Route path="/admin">
            <AdminManager/>
          </Route>
          <Route path="/jobs">
            <JobBoardManager/>
          </Route>
          <Route path='/login'>
            <Login setCurrentUser={setCurrentUser}/>
            <ProfileUpdate currentUser={currentUser}/>
          </Route>
          <Route path='/register'>
            <Register setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/createprofile'>
            <ProfileCreate/>
          </Route>
          <Route path='/profile/update'>
          </Route>
          <Route path='/profile'>
            <Profile/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
