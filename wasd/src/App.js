import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import AdminPage from "./pages/Admin";
import Setor from "./pages/Setor";
import DadosSetor from './pages/DadosSetor'
import CadastroEmpresa from "./pages/CadastroEmpresa";
import Func from "./pages/Func";
import CadastroFunc from "./pages/CadastroFunc";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/cadastro-empresa">
            <CadastroEmpresa />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/admin">
            <AdminPage />
          </Route>
          <Route path="/setor">
            <Setor />
          </Route>
          <Route path="/detail">
            <DadosSetor />
          </Route>
          <Route path="/func">
            <Func />
          </Route>
          <Route path="/cadastro-func">
            <CadastroFunc />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;