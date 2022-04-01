import React, {useState} from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css"
import Home from "./components/Home";
import PizzaForm from "./components/PizzaForm";
import axios from "axios";
import * as yup from "yup";
import schema from "./validation/formSchema";


const initialFormValues = {
  ///// TEXT INPUT /////
  firstName: '',
  ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  olives: false,
  tomatoes: false,
  mushrooms: false,
  onions: false,
  ///// TEXT INPUT /////
  special: ""
}

const initialFormErrors = {
  ///// TEXT INPUT /////
  firstName: '',
  ///// DROPDOWN /////
  size: '',
  ///// CHECKBOXES /////
  olives: false,
  tomatoes: false,
  mushrooms: false,
  onions: false,
  ///// TEXT INPUT /////
  special: ""
}

const initialPizzaOrders = []

const App = () => {
  const [pizzaOrders, setPizzaOrders] = useState(initialPizzaOrders)
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object



  const getOrders = () => {
    axios.get("https://reqres.in/api/orders")
      .then(res => {
        setPizzaOrders(res.data);
      }).catch(err => console.error(err))
  }

  const postNewOrder = newOrder => {
    axios.post("https://reqres.in/api/orders", newOrder)
      .then(res => {
        setPizzaOrders([res.data, ...pizzaOrders]);
      }).catch(err => console.error(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]: "" }))
        .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value})
  }

  const formSubmit = () => {
    const newOrder = {
      firstName: formValues.firstName.trim(),
      size: formValues.size.trim(),
      olives: formValues.olives.trim(),
      tomatoes: formValues.tomatoes.trim(),
      mushrooms: formValues.mushrooms.trim(),
      onions: formValues.onions.trim(),
      special: formValues.special.trim(),
    }
    postNewOrder(newOrder);
  }

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
            <PizzaForm 
              values={formValues}
              change={inputChange}
              submit={formSubmit}
              errors={formErrors}
            />
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
