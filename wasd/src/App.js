import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
<<<<<<< HEAD
import Teste from "./pages/Teste";
=======
import AdminPage from "./pages/Admin";
>>>>>>> 293ee4fd376ede31637f7b8eda011a3102e5c318

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
<<<<<<< HEAD
          <Route path="/teste">
            <Teste />
=======
          <Route path="/admin">
            <AdminPage />
>>>>>>> 293ee4fd376ede31637f7b8eda011a3102e5c318
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;