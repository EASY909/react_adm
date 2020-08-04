import React from 'react';
import {Switch,Route,HashRouter} from "react-router-dom";
import Login from "./views/Login"
function App() {
  return (
      <HashRouter>
          <Switch>
              <Route component={Login} exact path="/"></Route>
              {/* <Route component={About} path="/about"></Route> */}
          </Switch>
      </HashRouter>
  );
}

export default App;
