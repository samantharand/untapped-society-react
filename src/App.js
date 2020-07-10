import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          admin login
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
