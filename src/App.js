
import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ClubDetails from './Components/ClubDetails/ClubDetails';
function App() {
  return (
    <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/clubDetails/:id'>
          <ClubDetails></ClubDetails>
        </Route>
        <Route path="*">
          <PageNotFound></PageNotFound>
        </Route>
      </Switch>
    </Router>
    </div>

  );
}

export default App;
