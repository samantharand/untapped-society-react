import React, { useState } from 'react';
import './App.css';
import AdminManager from './AdminManager'
import JobBoardManager from './JobBoardManager';
import EmployerDashboard from './EmployerDashboard';
import Login from './Auth/Login'
import Register from './Auth/Register'
import ProfileCreate from './User/ProfileCreate'
import Profile from './User/Profile'
import ProfileUpdate from './User/Profile/Update'
import Nav from './Common/Header/Nav'
import Home from './Common/Home'
import ViewApplications from './JobApplication/ViewApplications'
import JobApplicationContainer from './JobApplication/ViewApplications/JobApplicationContainer'
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
  const footer = (
    <div style={{
      background: "#E0AB9D",
      width: "100%",
      height: "100px",
      marginTop: "20px"
    }}></div>
  )
  return (
    <div>
      <Router className="App" history={ history }>

        <Nav Link={Link} currentUser={currentUser}/>

        <Switch>

          <Route path="/admin">
            <AdminManager/>
          </Route>

          <Route path="/dashboard">
            <EmployerDashboard 
              currentUser={currentUser} 
              history={ history }
            />
          </Route>

          <Route path='/login'>
            <Login 
              setCurrentUser={setCurrentUser} 
              history={ history }
            />
          </Route>

          <Route path='/register'>
            <Register 
              setCurrentUser={setCurrentUser} 
              history={ history }
            />
          </Route>

          <Route path='/createprofile'>
            <ProfileCreate history={ history }
            />
          </Route>

          <Route path='/profile/update'>
            <ProfileUpdate 
              currentUser={currentUserProfile} 
              history={ history }
            />
          </Route>

          <Route path='/profile'>
            <Profile 
              currentUser={currentUser} 
              setCurrentUserProfile={setCurrentUserProfile} 
              Link={Link}
              history={ history }
            />
          </Route>

          <Route path='/viewjobs'>
            <ViewApplications 
              currentUser={currentUser}
              history={ history }
            />
          </Route>

          <Route path='/viewapplications'>
            <JobApplicationContainer 
              currentUser={currentUser}
              history={ history }
            />
          </Route>

          <Route path='/jobs'>
            <JobBoardManager 
              currentUser={currentUser}
              history={ history }
            />
          </Route>

          

          <Route path='/'>
            <Home history={history} />
          </Route>

        </Switch>
      </Router>
      {footer}
    </div>
  );
}

export default App;
