import React, {Fragment} from 'react';
import Main from "./containers/Main/Main";
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ButtonAppBar from "./components/UI/Toolbar/ButtonAppBar";
import Profile from "./containers/Profile/Profile";


function App() {
    return (
        <Fragment>
            <header>
                <ButtonAppBar/>
            </header>
            <Switch>
                <Route path="/register" exact component={Register}/>
                <Route path="/login" exact component={Login}/>
                <Route path="/" exact component={Main}/>
                <Route path="/profile/:id" exact component={Profile}/>
            </Switch>
        </Fragment>
    );
}

export default App;
