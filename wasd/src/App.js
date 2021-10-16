import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ModalComponent from "./components/Modal";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Login /> */}
            <ModalComponent/>
          </Route>
          <Route path="/cadastro">
            <Cadastro />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
