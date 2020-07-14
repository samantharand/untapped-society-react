import React from 'react';
import './App.css';
import AdminManager from './AdminManager'
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfileCreate from './User/ProfileCreate'
import Profile from './User/Profile'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {

  return (
    <div>
      <Router className="App">
        <Switch>
          <Route path="/admin">
            <AdminManager/>
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/createprofile'>
            <ProfileCreate/>
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
