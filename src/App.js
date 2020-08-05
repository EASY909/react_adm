import React from 'react';
import {Switch,Route,HashRouter} from "react-router-dom";
import Login from "./views/Login";
import Index from "./views/Index";
function App() {
  return (
      <HashRouter>
          <Switch>
              <Route component={Login} exact path="/"></Route>
              <Route component={Index} path="/index"></Route>
          </Switch>
      </HashRouter>
  );
}

export default App;
