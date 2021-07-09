import React from "react"
import Main from "./Main"
import Search from "./Search";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cancer from "./Cancer";
import NationalHospital from "./NationalHospital"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Main />
        </Route>

        <Route path="/Search"> 
          <Search />
        </Route>

        <Route path="/Cancer"> 
          <Cancer />
        </Route>

        <Route path="/NationalHospital"> 
          <NationalHospital />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;


// npm install react-scripts@2.1.8
