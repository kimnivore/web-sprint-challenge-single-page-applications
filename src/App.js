import React, { useState, useEffect } from "react";
import { Link, Route } from 'react-router-dom';
import PizzaForm from './PizzaForm';
import Pizza from './Pizza';

const initialFormValues = {

}

const App = () => {
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
          <PizzaForm />
      </Route>
    </div>
  );
};
export default App;
