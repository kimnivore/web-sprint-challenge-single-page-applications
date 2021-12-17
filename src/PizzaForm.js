import React from 'react';

const PizzaForm = (props) => {

    // const onChange = evt => {
    //     const name = evt.target.name;
    //     const {value} = evt.target;
    //     update(name, value);
    // }

    // const onSubmit = evt => {
    //     evt.preventDefault();
    //     submit();
    // }
    return (
       <form id='pizza-form'>
           <label>Name
               <input
               id='name-input'
               name="name"
               type='text'
               placeholder='Enter your name'
               maxLength='30'
               />
           </label>

           <label>Pizza Size
               <input 
               id='size-dropdown'
               
               
               />
           </label>

       </form>

    )
}


export default PizzaForm;