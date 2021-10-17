import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Setor from "./pages/Setor";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/setor">
            <Setor/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
