import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AdminPage from "../pages/Admin";
import Setor from "../pages/Setor";
import DadosSetor from "../pages/DadosSetor";
import CadastroFunc from "../pages/CadastroFunc";

export const AdminRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AdminPage} />
        <Route exact path="/setor" component={Setor} />
        <Route exact path="/detalhes" component={DadosSetor} />
        <Route exact path="/funcionarios" component={CadastroFunc} />
      </Switch>
    </Router>
  );
};
