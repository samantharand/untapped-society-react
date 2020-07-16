import React, { useState } from 'react';
import './App.css';
import AdminManager from './AdminManager'
import JobBoardManager from './JobBoardManager';
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfileCreate from './User/ProfileCreate'
import Profile from './User/Profile'
import ProfileUpdate from './User/Profile/Update'
import Nav from './Common/Header/Nav'
import Home from './Common/Home'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { createBrowserHistory } from 'history'
 
let history = createBrowserHistory()

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [currentUserProfile, setCurrentUserProfile] = useState({})

  return (
    <div>
      <Router className="App" history={ history }>

        <Nav Link={Link} currentUser={currentUser}/>

        <Switch>
          <Route path="/admin">
            <AdminManager/>
          </Route>
          <Route path="/jobs">
            <JobBoardManager currentUser={currentUser}/>
          </Route>
          <Route path='/login'>
            <Login setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/register'>
            <Register setCurrentUser={setCurrentUser}/>
          </Route>
          <Route path='/createprofile'>
            <ProfileCreate />
          </Route>
          <Route path='/profile/update'>
            <ProfileUpdate currentUser={currentUserProfile}/>
          </Route>
          <Route path='/profile'>
            <Profile currentUser={currentUser} setCurrentUserProfile={setCurrentUserProfile} Link={Link}/>
          </Route>
          <Route path='/'>
            <Home history={history} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
