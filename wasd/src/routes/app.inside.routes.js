import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import DadosSetor from '../pages/DadosSetor'
import Func from "../pages/Func";

export const FuncRoutes = () => {
    return (
        <Router>
            <Route path="/" component={Func} />
            <Route path="/detalhes" component={DadosSetor} />
        </ Router>
    )
}