import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import CadastroEmpresa from "../pages/CadastroEmpresa";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

export const SignRoutes = () => {
    return (
        <Router>
            <Route exact path="/" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/cadastro/empresa" component={CadastroEmpresa} />
        </ Router>
    )
}