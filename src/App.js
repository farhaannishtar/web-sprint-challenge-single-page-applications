import React, {useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";


const App = () => {
  return (
    <>
      <header>
          <h2>Lambda Eats</h2>
          <Link to="/">Home</Link>
          <Link to="/about"> About</Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/pizza">
          <PizzaForm />
        </Route>
          <Route exact path="/about">
            <h2>About Page</h2>
          </Route>
        </Switch>
      </main>
    </>
  );
};
export default App;
