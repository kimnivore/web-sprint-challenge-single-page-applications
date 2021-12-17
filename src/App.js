import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import PizzaForm from './PizzaForm';
import schema from './Schema';
// import Pizza from './Pizza';

const initialFormValues = {
  name: '',
  size: '',
  sausage: false,
  pineapple: false,
  jalapeno: false,
  beef: false,
  special: ''
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialPizza = [];
const initialDisabled = true;




const App = () => {
  const [pizzas, setPizzas] = useState(initialPizza);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPizza = () => {
    axios.get(`https://reqres.in/api/orders`)
    .then(resp => {
      console.log(resp.data.data);
      setPizzas(resp.data.data);
    }).catch(err => console.error(err))
  }

  const postPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
    .then(resp => {
      setPizzas([resp.data.data, ...pizzas])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      toppings: ['sausage', 'pineapple', 'jalapeno', 'beef'].filter(topping => !!formValues[topping]),
      special: formValues.special.trim(),
    }

    postPizza(newPizza);
  }

  useEffect(() => {
    getPizza()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div>
      <nav id="order-pizza">
      <h1>Lambda Eats</h1>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>

      <Route exact path ='/'>
      </Route>
      
      <Route path='/pizza'>
          <PizzaForm 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}

          />
      </Route>
    </div>
  );
};
export default App;
