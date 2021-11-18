import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import AdminPage from "../pages/Admin";
import Setor from "../pages/Setor";
import DadosSetor from '../pages/DadosSetor'
import CadastroFunc from "../pages/CadastroFunc";

export const AdminRoutes = () => {
    return (
        <Router>
            <Route path="/" component={AdminPage} />
            <Route path="/setor" component={Setor} />
            <Route path="/detalhes" component={DadosSetor} />
            <Route path="/funcionarios" component={CadastroFunc} />
        </ Router>
    )
}