import React from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Perfil from "./pages/Perfil";
import Caso from "./pages/Caso";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/caso" component={Caso}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;