import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";

import { Home } from "./pages/Home/Home";
import { Signup } from "./pages/Signup/Signup";

import './global-styles.css';

export function App() {

  const [Costumer, setCostumer] = useState('');

  function handleSubmit(event, costumerName, costumerEmail, costumerPhone) {
    event.preventDefault();

    setCostumer([...Costumer, {
      'name': costumerName,
      'email': costumerEmail,
      'phone': costumerPhone,
    }])
  }

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
            <Signup props={{handleSubmit}} />
          </Route>

          <Route exact  path="/costumers">
            <Home props={{Costumer}} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
