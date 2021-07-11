import React from "react"
import Main from "./Main"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Cancer from "./Cancer";
import NationalHospital from "./NationalHospital"
import ArabicHospital from "./ArabicHospital"
import RamHospital from "./RamHospital"
import Reserve from "./Reserve"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Main />
        </Route>

        <Route path="/Cancer"> 
          <Cancer />
        </Route>

        <Route path="/NationalHospital"> 
          <NationalHospital />
        </Route>

        <Route path="/ArabicHospital">
          <ArabicHospital />
        </Route>

        <Route path="/Reserve">
          <Reserve />
        </Route>

        <Route path="/RamHospital">
          <RamHospital />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;


// npm install react-scripts@2.1.8
