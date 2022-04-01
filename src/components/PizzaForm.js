import React, {useState} from "react";

const PizzaForm = () => {
  return (
    <>
      <h3>Pizza Form Page</h3>
      <form id="pizza-form">
        <label>
          Name:
          <input id="name-input" type="text" />
        </label>
        <label>
          Pizza Size
          <select id="size-dropdown">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <h4>Toppings</h4>
        <label>Olives
          <input 
            id="topping1"
            type="checkbox"
            name="olives"
          />
        </label>
        <label>
          Tomatoes
          <input
            id="topping2"
            type="checkbox"
            name="tomatoes"
          />
        </label>
        <label>
          Mushrooms
          <input
            id="topping3"
            type="checkbox"
            name="mushrooms"
          />
        </label>
        <label>
          Onions
          <input
            id="topping4"
            type="checkbox"
            name="onions"
          />
        </label>
        <label>
          Special Instructions
          <input 
            id="special-text"
            type="text"
            name="instructions"
          />
        </label>
      </form>
    </>
  );
};
export default PizzaForm;
