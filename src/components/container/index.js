import React from 'react';
import { Switch, Route } from "react-router-dom";
import PrivateRouter from "component/privateRouter";
// import User from "src/views/User/list";
// import AddUser from "src/views/User/add";
// import DepartmentAdd from "src/views/Department/add";
// import Department from "src/views/Department/list";

import Components from "./components"

function Container() {
    return (

        <Switch>
            <Route exact path="/index" render={() => <div>控制台</div>} ></Route>
            {
                Components.map(item => {
                   return <PrivateRouter key={item.path} path={item.path} component={item.component} ></PrivateRouter>
                })
            }
        </Switch>

    );
}

export default Container;
