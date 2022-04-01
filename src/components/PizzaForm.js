import React, {useState} from "react";


const PizzaForm = (props) => {
  const {
    values,
    submit,
    change,
    errors
  } = props;

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    console.log("HERE?");
    const { name, value, checked, type } = evt.target
    const valueToUse = type === "checkbox" ? checked : value
    change(name, valueToUse)
  }

  return (
    <>
      <h3>Pizza Form Page</h3>

      <form id="pizza-form" onSubmit={onSubmit}>
        <button id="order-button">Add to Order</button>

        <div className='errors'>
          <div>{errors.firstName}</div>
        </div>

        <label>
          Name:
          <input 
            id="name-input" 
            type="text" 
            name="firstName" 
            value={values.firstName}
            onChange={onChange}
          />
        </label>
        <label>
          Pizza Size
          <select id="size-dropdown" name="size">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
        <h4>Toppings</h4>
        <label>
          Olives
          <input 
            id="topping1"
            type="checkbox"
            name="olives"
            onChange={onChange}
            checked={values.olives}
          />
        </label>
        <label>
          Tomatoes
          <input
            id="topping2"
            type="checkbox"
            name="tomatoes"
            onChange={onChange}
            checked={values.tomatoes}
          />
        </label>
        <label>
          Mushrooms
          <input
            id="topping3"
            type="checkbox"
            name="mushrooms"
            onChange={onChange}
            checked={values.mushrooms}
          />
        </label>
        <label>
          Onions
          <input
            id="topping4"
            type="checkbox"
            name="onions"
            onChange={onChange}
            checked={values.onions}
          />
        </label>
        <label>
          Special Instructions
          <input 
            id="special-text"
            type="text"
            name="special"
            value={values.special}
            onChange={onChange}
          />
        </label>
      </form>
    </>
  );
};
export default PizzaForm;
