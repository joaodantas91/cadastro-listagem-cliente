import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/costumers">Clientes - Home</Link>
            </li>
            <li>
              <Link to="/">Cadastrar Cliente</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Signup />
          </Route>

          <Route exact  path="/costumers">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
