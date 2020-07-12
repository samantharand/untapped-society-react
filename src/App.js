import React from 'react';
import './App.css';
import AdminManager from './AdminManager'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import GoogleBtn from './GoogleBtn'

function App() {

  return (
    <div>
      <GoogleBtn />
      <Router className="App">
        <Switch>
          <Route path="/admin">
            <AdminManager/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
