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
            <Route path="/" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <Route path="/cadastro/empresa" component={CadastroEmpresa} />
        </ Router>
    )
}