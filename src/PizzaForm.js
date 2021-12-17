import React from 'react';

const PizzaForm = (props) => {
    const { values, submit, change, disabled, errors } = props;

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    const onChange = evt => {
        console.log(evt.target.checked, evt.target.type);
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

  
    return (
       <form id='pizza-form' onSubmit={onSubmit}>
           <label>Name
               <input
               value={values.name}
               onChange={onChange}
               id='name-input'
               name="name"
               type='text'
               placeholder='Enter your name'
               maxLength='30'
               />
           </label>

           <label>Size
               <select id='size-dropdown' name='size' value={values.size} onChange={onChange}>
                    <option value="">---Select---</option>
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                    <option value="XXX">XXX</option>
               </select>
           </label>

            <div className='toppings'>
                <h4>Toppings</h4>
                <label>Sausage
                    <input 
                        type='checkbox'
                        name='sausage'
                        checked={values.sausage}
                        onChange={onChange}
                    />
                </label>
                
                <label>Pineapple 
                    <input 
                        type='checkbox'
                        name='pineapple'
                        checked={values.pineapple}
                        onChange={onChange}
                    />
                </label>

                <label>Jalapeno
                    <input 
                        type='checkbox'
                        name='jalapeno'
                        checked={values.jalapeno}
                        onChange={onChange}
                    />
                </label>

                <label>Beef
                    <input 
                        type='checkbox'
                        name='beef'
                        checked={values.beef}
                        onChange={onChange}
                    />
                </label>
            </div>
            
                <label>Special Instructions 
                    <input 
                        id="special-text"
                        checked={values.special}
                        onChange={onChange}
                        name="special"
                        type='text'
                        placeholder="Anything else?"
                        maxLength='50'
                    />
                </label>

                <button id='order-button' disabled={disabled}>Add to Order</button>

                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                </div>
       </form>

    )
}


export default PizzaForm;