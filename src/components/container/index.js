import React from 'react';
import { Switch,Route } from "react-router-dom";
import PrivateRouter from "component/privateRouter";
import User from "src/views/User";
import AddUser from "src/views/User/Add";
function Container() {
    return (

            <Switch>
                <Route  exact path="/index" render={() => <div>控制台</div>} ></Route>
                <PrivateRouter exact path="/index/user/list" component={User} ></PrivateRouter>
                <PrivateRouter exact path="/index/user/add" component={AddUser} ></PrivateRouter>
            </Switch>
 
    );
}

export default Container;
