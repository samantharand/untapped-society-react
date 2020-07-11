import React from 'react';
import './App.css';
import AdminManager from './AdminManager'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {

  return (
    <Router className="App">
      <Switch>
        <Route path="/admin">
          <AdminManager/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
