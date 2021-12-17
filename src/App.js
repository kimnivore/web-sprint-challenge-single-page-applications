import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';
import Home from './Home';
import PizzaForm from './PizzaForm';
import schema from './Schema';


const initialPizzas = [];
const initialDisabled = true;
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

const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzas);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const postPizza = newPizza => {
    axios.post(`https://reqres.in/api/orders`, newPizza)
    .then(resp => {
      console.log(resp);
      setPizzas([resp.data, ...pizzas])
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
      size: formValues.size,
    }

    postPizza(newPizza);
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div >
      <nav>
      <h1>Lambda Eats</h1>
    
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza' >Pizza</Link>
      
      </nav>

      <Route exact path ='/'>
        <Home />
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
