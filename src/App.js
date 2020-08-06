import React from 'react';
import { Switch, Route, HashRouter } from "react-router-dom";
import Login from "./views/Login";
import Index from "./views/Index";
import PrivateRouter from "./components/privateRouter";
function App() {
    return (
        <HashRouter>
            <Switch>
                <Route component={Login} exact path="/"></Route>
                <PrivateRouter component={Index} path="/index" />
            </Switch>
        </HashRouter>
    );
}

export default App;
